import { v4 } from "uuid";
import {
  deleteTaskById,
  getAllTasks,
  createTask,
  getTaskById,
} from "../services/completedTask.services.js";

async function getAllTasksCtr(request, response) {
  try {
    const task = await getAllTasks();
    response.status(201).send(task.data);
  } catch (err) {
    console.log(err);
    response.send({ msg: "can't get" });
  }
}
async function deleteTaskByIdCtr(request, response) {
  const { id } = request.params;
  try {
    const task = await getTaskById(id);
    if (task) {
      await deleteTaskById(id);
      response.status(201).send({ msg: "Task deleted 🎊" });
    }
  } catch (err) {
    console.log(err);
    response.send("cannot delete");
  }
}
async function createTaskCtr(request, response) {
  const data = request.body;
  const task = {
    ...data,
    todoId: v4(),
  };
  try {
    await createTask(task);
    response.send(task);
  } catch (err) {
    console.log(err);
    response.send({ msg: "unable to create" });
  }
}
export { getAllTasksCtr, deleteTaskByIdCtr, createTaskCtr };
