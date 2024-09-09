import { Todo } from "../entities/todo.entity.js";

async function gettodo() {
  return await Todo.scan.go();
}
async function deleteTaskId(id) {
  console.log(id);
  // Ensure you are using the correct primary key format
  await Todo.delete({ todoId: id }).go();
}

async function createTask(task) {
  await Todo.create(task).go();
}
async function getTaskById(id) {
  console.log(id);
  return await Todo.get({ todoId: id }).go();
}
export { gettodo, deleteTaskId, createTask, getTaskById };
