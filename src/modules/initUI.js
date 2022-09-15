import ToDoList from "./ToDoList";
import Project from "./Project";
import Task from "./Task";
import UI from "./UI";
import { compareAsc, format } from "date-fns";

const DEFAULT_PROJECT_TITLE = "Default";
const DEFAULT_TASK_TITLE = "Default task";
const DEFAULT_TASK_DESC = "Create my first task";

export const initUI = () => {
  const ui = new UI();
  initListeners(ui);
};

const initListeners = (ui) => {
  // menu button
  document.getElementById("menu").addEventListener("click", (e) => {
    ui.openMenu();
  });
  // home button
  document.getElementById("home").addEventListener("click", (e) => {
    ui.goHome();
  });
  // add task
  document.querySelector(".addTask").addEventListener("click", (e) => {
    ui.addTask();
  });
  // edit task title
  document.querySelector(".task-title").addEventListener("click", (e) => {
    ui.editTaskTitle();
  });
  //edit task due date
  document.querySelector(".task-dueDate").addEventListener("click", (e) => {
    ui.editTaskDueDate();
  });
};
