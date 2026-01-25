import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoute.js";
import taskRoutes from "./routes/taskRoutes.js";

import path from "path";
import { fileURLToPath } from "url";

dotenv.config();

connectDB();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/tasks", taskRoutes);

// app.get("/", (req, res) => {
//   res.send("Personal Todo API running");
// });

app.use(express.static(path.join(__dirname, "../personal-todo-frontend/build")));
app.get(/.*/, (req, res) => {
  res.sendFile(
    path.join(__dirname, "../personal-todo-frontend/build/index.html"),
  );
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
