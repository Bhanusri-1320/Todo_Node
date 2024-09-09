import { Todo } from "../entities/todo.entity.js";
import {
  gettodoCtr,
  deleteTaskCtr,
  createTaskCtr,
} from "../controllers/todo.controller.js";
import express, { response } from "express";

const router = express.Router();
router.get("/", gettodoCtr);
router.delete("/:id", deleteTaskCtr);
router.post("/", createTaskCtr);
// router.get("/:id")

export default router;
