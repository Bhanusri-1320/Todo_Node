import { v4 } from "uuid";
import {
  gettodo,
  deleteTaskId,
  createTask,
  getTaskById,
} from "../services/todo.services.js";

async function gettodoCtr(request, response) {
  try {
    const Todo = await gettodo();
    response.status(200).send(Todo.data);
  } catch {
    console.log(err);
    response.status(500).send({ msg: " Couldn't get what you wanted " });
  }
}
async function deleteTaskCtr(request, response) {
  const { id } = request.params; // Destructure the id from request.params
  console.log(id);
  try {
    const task = await getTaskById(id);
    if (task.data) {
      console.log(task.data);
      await deleteTaskId(id);
      response.send({ msg: "task deleted 🎊" });
    } else {
      console.log("no such task");
      response.send({ msg: "no sunch task" });
    }
  } catch (err) {
    console.log(err);
    response.status(500).send({ msg: "Failed to perform delete" });
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
    response.status(201).send(task);
  } catch (err) {
    console.log(err);
    response.send({ msg: "unable to create" });
  }
}

export { gettodoCtr, deleteTaskCtr, createTaskCtr };
