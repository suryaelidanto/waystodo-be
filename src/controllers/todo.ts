import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";

const prisma = new PrismaClient();

export const getTodos = async (req: Request, res: Response) => {
  try {
    const todos = await prisma.todo.findMany();
    res.json(todos);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const getTodoById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const todo = await prisma.todo.findUnique({
      where: { id: parseInt(id) },
    });
    if (!todo) {
      return res.status(404).json({ error: "Todo not found" });
    }
    res.json(todo);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const createTodo = async (req: Request, res: Response) => {
  try {
    const { title, description, isDone } = req.body;
    const newTodo = await prisma.todo.create({
      data: { title, description, isDone },
    });
    res.status(201).json(newTodo);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const updateTodo = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { title, description, isDone } = req.body;

    const updatedTodo = await prisma.todo.update({
      where: { id: parseInt(id) },
      data: { title, description, isDone },
    });

    res.json(updatedTodo);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const deleteTodo = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    await prisma.todo.delete({
      where: { id: parseInt(id) },
    });
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};
