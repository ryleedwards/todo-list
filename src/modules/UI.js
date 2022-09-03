import ToDoList from "./ToDoList";

const DEFAULT_PROJECT_TITLE = "Default";
const DEFAULT_TASK_TITLE = "Default task";
const DEFAULT_TASK_DESC = "Create my first task";

export default class UI {
  static load() {
    this.loadInitial();
  }

  static loadInitial() {
    this.initListeners();
    this.loadToDoList();
  }

  static loadToDoList() {
    const contentDiv = document.getElementById("content");
    let toDoList = new ToDoList();
    toDoList.addProject(DEFAULT_PROJECT_TITLE);

    toDoList.getProjects()[0].addTask(DEFAULT_TASK_TITLE);

    // toDoList.getProjects().forEach((project) => {
    //   console.log(project.getTitle());
    //   project.getTasks().forEach((task) => {
    //     console.log(task.getTitle());
    //   });
    // });
  }

  static createDefaultProject() {
    let toDoList = new ToDoList();
    toDoList.addProject(DEFAULT_PROJECT_TITLE);
    toDoList.getProjects()[0].getTitle();
  }

  static loadProjects() {
    //future intake from local storage
  }

  static initListeners() {
    console.log("initializing listeners");
    // CONSTANT ELEMENTS DECLARATIONS
    const btnMenu = document.getElementById("menu");
    const sidebar = document.querySelector(".sidebar");

    // TOP NAV LISTENERS
    btnMenu.addEventListener("click", () => {
      sidebar.classList.toggle("hidden");
    });
  }
}
