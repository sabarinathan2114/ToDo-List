# ToDo List Application

A full-stack personal ToDo list application designed to help you organize your tasks efficiently. Built with a modern tech stack featuring a React frontend with a glassmorphic dark UI and a robust Node.js/Express backend.

**Live Demo:** [https://sabarinathan-todo-list.onrender.com/](https://sabarinathan-todo-list.onrender.com/)

## Project Structure

The repository is organized into two main directories:

- **`personal-todo-frontend`**: The React-based user interface.
- **`personal-todo-backend`**: The Node.js and Express server handling API requests and database interactions.

## Tech Stack

### Frontend

- **React**: Library for building user interfaces.
- **Tailwind CSS**: Utility-first CSS framework for custom designs.
- **React Router**: For client-side routing.
- **Axios**: For making HTTP requests to the backend.
- **React Icons**: For UI icons.
- **Glassmorphism**: Unique design aesthetic.

### Backend

- **Node.js**: JavaScript runtime environment.
- **Express**: Web framework for Node.js.
- **MongoDB**: NoSQL database for storing tasks and user data.
- **Mongoose**: Object Data Modeling (ODM) library for MongoDB.
- **JWT (JSON Web Token)**: For secure user authentication.
- **Bcrypt.js**: For password hashing.
- **Dotenv**: For environment variable management.

## Getting Started

### Prerequisites

Ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v14 or higher)
- [MongoDB](https://www.mongodb.com/) (Local instance or Atlas cluster)

### Installation & Running

#### 1. Backend Setup

Navigate to the backend directory, install dependencies, and start the server.

```bash
cd personal-todo-backend
npm install
```

Create a `.env` file in the `personal-todo-backend` directory with the following variables:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
```

Start the server:

```bash
npm run dev
```

The backend runs on `http://localhost:5000` by default.

#### 2. Frontend Setup

Open a new terminal, navigate to the frontend directory, and install dependencies.

```bash
cd personal-todo-frontend
npm install
```

Start the React development server:

```bash
npm start
```

The frontend will run on `http://localhost:3000`.

## Features

- **User Authentication**: Secure Sign Up and Login functionality.
- **Task Management**: Create, Read, Update, and Delete (CRUD) tasks.
- **Responsive Design**: Works on Desktop and Mobile.
- **Dark Mode**: Sleek, glassmorphic dark theme.

## Contributing

1. Fork the repository.
2. Create your feature branch (`git checkout -b feature/AmazingFeature`).
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`).
4. Push to the branch (`git push origin feature/AmazingFeature`).
5. Open a Pull Request.

## License

Distributed under the MIT License. See `LICENSE` for more information.
