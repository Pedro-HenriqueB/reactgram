import Photo from "../models/Photo.js";
import mongoose from "mongoose";
import User from "../models/User.js";

// Insert a photo, with an user related to it
const insertPhoto = async (req, res) => {
  const { title } = req.body;
  const image = req.file.filename;
  const reqUser = req.user;
  const user = await User.findById(reqUser._id);
  // Create a photo
  const newPhoto = await Photo.create({
    image,
    title,
    userId: user._id,
    userName: user.name,
  });
  // Check if photo was successfully created
  if (!newPhoto) {
    res.status(422).json({
      errors: ["Houve um problema, por favor tente novamente mais tarde!"],
    });
    return;
  }

  res.status(201).json(newPhoto);
};

const deletePhoto = async (req, res) => {
  try {
    const { id } = req.params;
    const reqUser = req.user;
    const photo = await Photo.findById(new mongoose.Types.ObjectId(id));
    // Check if photo belongs to user
    if (!photo.userId.equals(reqUser._id)) {
      res.status(422).json({
        errors: ["Ocorreu um erro, por favor tente novamente mais tarde."],
      });
    }
    // Delete photo
    await Photo.findByIdAndDelete(photo._id);
    res
      .status(200)
      .json({ id: photo._id, message: "Foto excluida com sucesso." });
    return;
  } catch (error) {
    res.status(404).json({ errors: ["Foto nao encontrada!"] });
    return;
  }
};

const getAllPhotos = async (req, res) => {
  const photos = await Photo.find({})
    .sort([["createAt", -1]])
    .exec();
  res.status(200).json(photos);
};

const getUserPhotos = async (req, res) => {
  const { id } = req.params;
  const photos = await Photo.find({ userId: id })
    .sort([["createdAt", -1]])
    .exec();
  return res.status(200).json(photos);
};

const getPhotoById = async (req, res) => {
  try {
    const { id } = req.params;
    const photo = await Photo.findById(id);
    res.status(200).json(photo);
  } catch (error) {
    res.status(404).json({ errors: ["Foto nao encontrada!"] });
  }
};

const updatePhoto = async (req, res) => {
  try {
    const { id } = req.params;
    const { title } = req.body;
    const reqUser = req.user;
    const photo = await Photo.findById(id);
    if (!photo.userId.equals(reqUser._id)) {
      res.status(422).json({
        errors: ["Ocorreu um erro, por favor tente novamente mais tarde."],
      });
      return;
    }
    if (title) {
      photo.title = title;
    }
    await photo.save();

    res.status(200).json({ photo, message: "Foto atualizada com sucesso." });
    return;
  } catch (error) {
    console.log(error);
    res.status(404).json({ errors: ["Foto nao encontrada!"] });
    return;
  }
};

export {
  insertPhoto,
  deletePhoto,
  getAllPhotos,
  getUserPhotos,
  getPhotoById,
  updatePhoto,
};
