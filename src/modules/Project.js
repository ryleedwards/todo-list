import Task from "./Task";

export default class Project {
  constructor(title, tasks) {
    console.log(
      `project constructor called and I was passed ${title} and ${tasks}`
    );
    this.title = title;

    /* this is a spot where I would like to have typing so that I could 
    check if tasks is an array. If it's a string, the below works, but 
    it's not my intended use. Possible better use of TypeScript in future...*/
    if (tasks != undefined && tasks.length > 0) {
      console.log(`Log from project constructor & I was passed ${tasks}`);
      this.tasks = tasks;
    } else this.tasks = [];
  }

  getTitle() {
    return this.title;
  }

  setTitle(newTitle) {
    newTitle = newTitle.trim();
    if (newTitle === "") {
      //reject empty title
      // *** CREATE LOGIC ***
      return;
    }
    this.title = newTitle;
  }

  getTasks() {
    return this.tasks;
  }

  addTask(title, dueDate) {
    this.tasks.push(new Task(title, dueDate));
  }

  getTask(index) {
    return this.tasks[index];
  }
}
