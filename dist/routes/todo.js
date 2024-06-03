"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const todo_1 = require("../controllers/todo");
const validate_1 = require("../middlewares/validate");
const todo_2 = require("../utils/validators/todo");
const router = express_1.default.Router();
router.get("/todos", todo_1.getTodos);
router.get("/todos/:id", todo_1.getTodoById);
router.post("/todos", (0, validate_1.validateRequest)(todo_2.todoSchema), todo_1.createTodo);
router.put("/todos/:id", (0, validate_1.validateRequest)(todo_2.todoSchema), todo_1.updateTodo);
router.delete("/todos/:id", todo_1.deleteTodo);
exports.default = router;
