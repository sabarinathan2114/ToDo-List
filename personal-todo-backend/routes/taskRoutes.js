import express from "express";
import {
  createTask,
  getMyTasks,
  completeTask,
  deleteTask,
} from "../controllers/taskController.js";
import authMiddleware from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/", authMiddleware, createTask);
router.get("/", authMiddleware, getMyTasks);
router.put("/:id/complete", authMiddleware, completeTask);
router.delete("/:id", authMiddleware, deleteTask);

export default router;
