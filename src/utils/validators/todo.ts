import Joi from "joi";
import { Todo } from "../../types/todo";

export const todoSchema = Joi.object<Todo>({
  title: Joi.string().required(),
  description: Joi.string().optional(),
  isDone: Joi.boolean().required(),
});
