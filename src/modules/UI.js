import ToDoList from "./ToDoList";
import Project from "./Project";
import Task from "./Task";
import { compareAsc, format } from "date-fns";

const DEFAULT_PROJECT_TITLE = "Default";
const DEFAULT_TASK_TITLE = "Default task";
//const DEFAULT_TASK_DESC = "Create my first task";
const DEFAULT_TASK_DUE_DATE = format(new Date(), "MM/dd/yyyy");

class UI {
  constructor(activeTDL, activeProject) {
    this.activeTDL = activeTDL;
    this.activeProject = activeProject;
  }

  openMenu() {
    document.querySelector(".sidebar").classList.toggle("hidden");
  }

  goHome() {
    console.log("goHome called");
  }

  addTaskBtnHandler(currentTDL) {
    const content = document.getElementById("content");
    const projectView = document.getElementById("project-view");
    projectView.classList.toggle("form-entry");

    // create form
    const form = document.createElement("form");
    form.setAttribute("method", "get");
    form.setAttribute("action", "#");
    form.classList.add("add-task-form");

    // task title entry
    const divTitle = document.createElement("div");
    divTitle.classList.add("form-input");
    const labelTitle = document.createElement("label");
    labelTitle.setAttribute("for", "input-title");
    labelTitle.textContent = "Title:";
    const inputTitle = document.createElement("input");
    inputTitle.setAttribute("type", "text");
    inputTitle.setAttribute("name", "input-title");
    inputTitle.setAttribute("required", "true");
    divTitle.appendChild(labelTitle);
    divTitle.appendChild(inputTitle);
    form.appendChild(divTitle);

    // due date entry
    const divDueDate = document.createElement("div");
    divDueDate.classList.add("form-input");
    const labelDueDate = document.createElement("label");
    labelDueDate.setAttribute("for", "input-dueDate");
    labelDueDate.textContent = "Due Date:";
    const inputDueDate = document.createElement("input");
    inputDueDate.setAttribute("type", "date");
    inputDueDate.setAttribute("name", "input-dueDate");
    divDueDate.appendChild(labelDueDate);
    divDueDate.appendChild(inputDueDate);
    form.appendChild(divDueDate);

    // submit button
    const divBtnSubmit = document.createElement("div");
    divBtnSubmit.classList.add("form-input");
    const inputBtnSubmit = document.createElement("input");
    inputBtnSubmit.setAttribute("type", "submit");
    inputBtnSubmit.setAttribute("value", "Submit");
    inputBtnSubmit.classList.add("btn", "submit-task");
    divBtnSubmit.appendChild(inputBtnSubmit);
    form.appendChild(divBtnSubmit);

    //submit button listener
    inputBtnSubmit.addEventListener("click", () => {});

    // form exit button
    const btnExitForm = document.createElement("i");
    btnExitForm.classList.add("fa-solid", "fa-circle-xmark", "exit-form");
    form.appendChild(btnExitForm);
    content.appendChild(form);

    // exit form listener
    btnExitForm.addEventListener("click", () => {
      projectView.classList.toggle("form-entry");
      content.removeChild(form);
    });
  }

  addTask(title, dueDate) {
    this.activeProject.addTask(title, dueDate);
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
  ui.activeTDL = initToDoList();
  ui.activeProject = ui.activeTDL.getProjects()[0];
  ui.populateTasks(ui.activeProject);
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
