import { CompletedTask } from "../entities/completedtask.entity.js";
async function deleteTaskById(id) {
  await CompletedTask.delete({ todoId: id }).go();
}
async function getAllTasks() {
  return await CompletedTask.scan.go();
}
async function createTask(task) {
  await CompletedTask.create(task).go();
}
async function getTaskById(id) {
  return await CompletedTask.get({ todoId: id }).go();
}
export { deleteTaskById, getAllTasks, createTask, getTaskById };
