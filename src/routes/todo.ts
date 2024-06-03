import express from "express";
import {
  getTodos,
  getTodoById,
  createTodo,
  updateTodo,
  deleteTodo,
} from "../controllers/todo";
import { validateRequest } from "../middlewares/validate";
import { todoSchema } from "../utils/validators/todo";

const router = express.Router();

router.get("/todos", getTodos);
router.get("/todos/:id", getTodoById);
router.post("/todos", validateRequest(todoSchema), createTodo);
router.put("/todos/:id", validateRequest(todoSchema), updateTodo);
router.delete("/todos/:id", deleteTodo);

export default router;
