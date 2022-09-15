export default class UI {
  openMenu() {
    document.querySelector(".sidebar").classList.toggle("hidden");
  }
  goHome() {
    console.log("goHome called");
  }
  addTask() {
    console.log("addTask called");
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
}
