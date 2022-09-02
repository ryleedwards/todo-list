export default class UI {
  static load;
}
const content = document.getElementById("content");

const sidebar = document.querySelector(".sidebar");

const btnMenu = document.getElementById("menu");

btnMenu.addEventListener("click", () => {
  openMenu();
});

function openMenu() {
  sidebar.classList.toggle("hidden");
}
