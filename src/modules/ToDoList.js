import Task from "./Task";

export default function generateToDoList() {
  let task1 = new Task("task1", "09/02/2022");
  console.log(task1);
  let task2 = new Task("task2");
  console.log(task2);
}
