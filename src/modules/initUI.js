import ToDoList from "./ToDoList";
import Project from "./Project";
import Task from "./Task";
import UI from "./UI";
import { compareAsc, format } from "date-fns";

const DEFAULT_PROJECT_TITLE = "Default";
const DEFAULT_TASK_TITLE = "Default task";
const DEFAULT_TASK_DESC = "Create my first task";

class UI {
  addTask() {}
}

export const initUI = () => {
  const ui = new UI();
  ui.menuBtn = document.getElementById("menu");
  ui.homeBtn = document.getElementById("home");
  console.log(ui.homeBtn);
};
