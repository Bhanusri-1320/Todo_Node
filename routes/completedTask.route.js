import expres from "express";
import { v4 } from "uuid";
import {
  getAllTasksCtr,
  createTaskCtr,
  deleteTaskByIdCtr,
} from "../controllers/completedTask.controller.js";
const router = expres.Router();
router.get("/", getAllTasksCtr);
router.delete("/:id", deleteTaskByIdCtr);
router.post("/", createTaskCtr);
export default router;
