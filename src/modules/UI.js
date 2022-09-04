import ToDoList from "./ToDoList";
import { compareAsc, format } from "date-fns";

const DEFAULT_PROJECT_TITLE = "Default";
const DEFAULT_TASK_TITLE = "Default task";
const DEFAULT_TASK_DESC = "Create my first task";

export default class UI {
  static load() {
    const contentDiv = document.getElementById("content");
    this.loadInitial();
  }

  static loadInitial() {
    this.initListeners();
    this.loadToDoList();
  }

  static loadToDoList() {
    let toDoList = this.createDefaultProject();
  }

  static createDefaultProject() {
    let toDoList = new ToDoList();
    toDoList.addProject(DEFAULT_PROJECT_TITLE);
    toDoList.getProjects()[0].addTask(DEFAULT_TASK_TITLE);
    return toDoList;
  }

  static loadProjects() {
    //future intake from local storage
  }

  static initListeners() {
    // CONSTANT ELEMENTS DECLARATIONS
    const btnMenu = document.getElementById("menu");
    const sidebar = document.querySelector(".sidebar");

    // TOP NAV LISTENERS
    btnMenu.addEventListener("click", () => {
      sidebar.classList.toggle("hidden");
    });
  }
}
