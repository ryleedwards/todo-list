import Project from "./Project";

export default class ToDoList {
  constructor() {
    this.projects = [];
  }

  addProject(title, tasks) {
    this.projects.push(new Project(title, tasks));
  }

  getProjects() {
    return this.projects;
  }
}
