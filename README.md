# Backend API

![Node.js](https://img.shields.io/badge/Node.js-20.11.1-green)
![Express](https://img.shields.io/badge/Express-4.21.2-blue)
![MongoDB](https://img.shields.io/badge/MongoDB-Mongoose%208.10.0-green)
![JWT](https://img.shields.io/badge/JSONWebToken-9.0.2-red)
![Multer](https://img.shields.io/badge/Multer-1.4.5--lts.1-purple)

## Description

This is a Node.js backend API built with Express and MongoDB, providing user authentication, profile management, and photo handling.

## Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/your-repo/backend-api.git
   ```
2. Navigate into the project directory:
   ```sh
   cd backend-api
   ```
3. Install dependencies:
   ```sh
   npm install
   ```
4. Create a `.env` file and configure environment variables:
   ```sh
   touch .env
   ```
   Add the necessary environment variables (example):
   ```env
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_secret_key
   ```

## Usage

### Start the server

```sh
npm run server
```

## API Endpoints

### User Routes

- **POST** `/register` - Register a new user
- **POST** `/login` - Authenticate and retrieve a token
- **GET** `/profile` - Get current logged-in user details (Requires authentication)
- **PUT** `/` - Update user profile (Requires authentication, supports image upload)
- **GET** `/:id` - Get user details by ID

### Photo Routes

- **POST** `/` - Upload a new photo (Requires authentication, supports image upload)
- **DELETE** `/:id` - Delete a photo (Requires authentication)
- **GET** `/` - Get all photos (Requires authentication)
- **GET** `/user/:id` - Get photos by user (Requires authentication)
- **GET** `/search` - Search photos (Requires authentication)
- **GET** `/:id` - Get photo details by ID (Requires authentication)
- **PUT** `/:id` - Update a photo (Requires authentication)
- **PUT** `/like/:id` - Like a photo (Requires authentication)
- **PUT** `/comments/:id` - Comment on a photo (Requires authentication)

## Technologies Used

- **Node.js** (20.11.1)
- **Express.js** (4.21.2)
- **Mongoose** (8.10.0) for MongoDB interactions
- **JWT (jsonwebtoken)** (9.0.2) for authentication
- **bcryptjs** (2.4.3) for password hashing
- **Multer** (1.4.5-lts.1) for image uploads
- **cors** (2.8.5) for handling Cross-Origin Resource Sharing
- **express-validator** (7.2.1) for request validation
