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
  const btnMenu = document.getElementById("menu");
  document.addEventListener("click", (e) => {
    console.log(e.target);
    if (e.target.matches("#menu")) ui.openMenu();
    if (e.target.matches("#home")) ui.goHome();
    if (e.target.matches(".addTask")) ui.addTask();
    if (e.target.matches(".task-title")) ui.editTaskTitle();
    if (e.target.matches(".task-dueDate")) ui.editTaskDueDate();
  });
};
