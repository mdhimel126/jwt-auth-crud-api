# JWT Auth CRUD API

A simple REST API built with Express.js, MongoDB, Mongoose, JWT, and bcrypt.

## Features

- User Registration
- User Login
- JWT Authentication
- Protected Route
- Get All Users
- Get Single User
- Update User
- Delete User

## Technologies Used

- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- JWT
- bcrypt,
- dotenv

## Installation

1. Clone the repository

```bash
git clone https://github.com/mdhimel126/jwt-auth-crud-api.git
```

2. Install dependencies

```bash
npm install
```

3. Create a `.env` file

```env
PORT=5000
MONGO_URI="your_mongodb_connection"
JWT_SECRET="your_secret_key"
```

4. Run the project

```bash
npm run dev
```

## API Endpoints

- POST `/api/register`
- POST `/api/login`
- GET `/api/profile`
- GET `/api/users`
- GET `/api/users/:id`
- PUT `/api/users/:id`
- DELETE `/api/users/:id`





