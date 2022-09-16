import ToDoList from "./ToDoList";
import Project from "./Project";
import Task from "./Task";
import { compareAsc, format } from "date-fns";

const DEFAULT_PROJECT_TITLE = "Default";
const DEFAULT_TASK_TITLE = "Default task";
//const DEFAULT_TASK_DESC = "Create my first task";
const DEFAULT_TASK_DUE_DATE = format(new Date(), "MM/dd/yyyy");

class UI {
  openMenu() {
    document.querySelector(".sidebar").classList.toggle("hidden");
  }

  goHome() {
    console.log("goHome called");
  }

  addTaskBtnHandler(currentTDL) {
    console.log("addTask called");
    let createNewTaskForm = () => {
      const content = document.getElementById("content");
      let taskForm = document.createElement("form");
      document.getElementById("content").classList.toggle("formEntry");
    };
    createNewTaskForm();
  }

  editTaskTitle() {
    console.log("editTaskTitle called");
  }

  editTaskDueDate() {
    console.log("editTaskDueDate called");
  }

  addProject() {
    console.log("addProject called");
  }

  createNewTaskForm = () => {
    const content = document.getElementById("content");
    console.log(content);
  };

  createTaskContainer = (title, dueDate) => {
    let taskContainer = document.createElement("div");
    taskContainer.classList.add("task-container");
    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.classList.add("task-complete");
    let titleSpan = document.createElement("span");
    titleSpan.classList.add("task-title");
    titleSpan.textContent = title;
    let dueDateSpan = document.createElement("span");
    dueDateSpan.classList.add("task-dueDate");
    dueDateSpan.textContent = dueDate;
    taskContainer.appendChild(checkbox);
    taskContainer.appendChild(titleSpan);
    taskContainer.appendChild(dueDateSpan);
    let editTask = document.createElement("button");
    editTask.classList.add("edit-task", "fa-solid", "fa-pen-to-square");
    let deleteTask = document.createElement("button");
    deleteTask.classList.add("delete-task", "fa-solid", "fa-trash-can");
    taskContainer.appendChild(editTask);
    taskContainer.appendChild(deleteTask);
    return taskContainer;
  };

  populateTasks = (project) => {
    const projectView = document.getElementById("project-view");
    const btnAddTask = document.querySelector(".addTask");
    console.log(btnAddTask);
    project.getTasks().forEach((task) => {
      let title = task.getTitle();
      let dueDate = task.getDueDate();
      let taskContainer = this.createTaskContainer(title, dueDate);
      projectView.insertBefore(taskContainer, btnAddTask);
    });
  };
}

export const initUI = () => {
  const ui = new UI();
  let currentTDL = initToDoList();
  let currentProject = currentTDL.getProjects()[0];
  ui.populateTasks(currentProject);
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
    ui.addTaskBtnHandler();
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

const initToDoList = () => {
  let toDoList = new ToDoList();
  toDoList.addProject(DEFAULT_PROJECT_TITLE, [
    new Task(DEFAULT_TASK_TITLE, DEFAULT_TASK_DUE_DATE),
  ]);
  console.log(toDoList.getProjects()[0].getTasks()[0].getDueDate());
  return toDoList;
};
