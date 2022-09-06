/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/modules/Project.js":
/*!********************************!*\
  !*** ./src/modules/Project.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Project)
/* harmony export */ });
/* harmony import */ var _Task__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Task */ "./src/modules/Task.js");


class Project {
  constructor(title, tasks) {
    this.title = title;

    /* this is a spot where I would like to have typing so that I could 
    check if tasks is an array. If it's a string, the below works, but 
    it's not my intended use. Possible better use of TypeScript in future...*/
    if (tasks != undefined && tasks.length > 0) {
      console.log(`Log from project constructor if statement
       & I was passed ${tasks}`);
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
    this.tasks.push(new _Task__WEBPACK_IMPORTED_MODULE_0__["default"](title, dueDate));
  }

  getTask(index) {
    return this.tasks[index];
  }
}


/***/ }),

/***/ "./src/modules/Task.js":
/*!*****************************!*\
  !*** ./src/modules/Task.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Task)
/* harmony export */ });
class Task {
  constructor(title, dueDate) {
    this.title = title;
    this.dueDate = dueDate;
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

  getDueDate() {
    return this.dueDate;
  }

  setDueDate(newDueDate) {
    if (newDueDate === undefined) {
      //handle for empty date
    }
    this.dueDate = newDueDate;
  }
}


/***/ }),

/***/ "./src/modules/ToDoList.js":
/*!*********************************!*\
  !*** ./src/modules/ToDoList.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ToDoList)
/* harmony export */ });
/* harmony import */ var _Project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Project */ "./src/modules/Project.js");


class ToDoList {
  constructor() {
    this.projects = [];
  }

  addProject(title, tasks) {
    this.projects.push(new _Project__WEBPACK_IMPORTED_MODULE_0__["default"](title, tasks));
  }

  getProjects() {
    return this.projects;
  }
}


/***/ }),

/***/ "./src/modules/UI.js":
/*!***************************!*\
  !*** ./src/modules/UI.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ UI)
/* harmony export */ });
/* harmony import */ var _ToDoList__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ToDoList */ "./src/modules/ToDoList.js");
/* harmony import */ var _Project__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Project */ "./src/modules/Project.js");
/* harmony import */ var _Task__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Task */ "./src/modules/Task.js");





const DEFAULT_PROJECT_TITLE = "Default";
const DEFAULT_TASK_TITLE = "Default task";
const DEFAULT_TASK_DESC = "Create my first task";

class UI {
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
    let toDoList = new _ToDoList__WEBPACK_IMPORTED_MODULE_0__["default"]();
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
  static addTask(task) {
    const projectTasksDiv = document.getElementById("project-view");
    projectTasksDiv.innerHTML += "abc";
  }
}


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_UI__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/UI */ "./src/modules/UI.js");


_modules_UI__WEBPACK_IMPORTED_MODULE_0__["default"].load();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBMEI7O0FBRVg7QUFDZjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsTUFBTTtBQUM5QjtBQUNBLE1BQU07QUFDTjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHdCQUF3Qiw2Q0FBSTtBQUM1Qjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDekNlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUM5QmdDOztBQUVqQjtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDJCQUEyQixnREFBTztBQUNsQzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZGtDO0FBQ0Y7QUFDTjtBQUNvQjs7QUFFOUM7QUFDQTtBQUNBOztBQUVlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsdUJBQXVCLGlEQUFRO0FBQy9CO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O1VDakRBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7QUNOOEI7O0FBRTlCLHdEQUFPIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL21vZHVsZXMvUHJvamVjdC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbW9kdWxlcy9UYXNrLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9tb2R1bGVzL1RvRG9MaXN0LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9tb2R1bGVzL1VJLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVGFzayBmcm9tIFwiLi9UYXNrXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFByb2plY3Qge1xuICBjb25zdHJ1Y3Rvcih0aXRsZSwgdGFza3MpIHtcbiAgICB0aGlzLnRpdGxlID0gdGl0bGU7XG5cbiAgICAvKiB0aGlzIGlzIGEgc3BvdCB3aGVyZSBJIHdvdWxkIGxpa2UgdG8gaGF2ZSB0eXBpbmcgc28gdGhhdCBJIGNvdWxkIFxuICAgIGNoZWNrIGlmIHRhc2tzIGlzIGFuIGFycmF5LiBJZiBpdCdzIGEgc3RyaW5nLCB0aGUgYmVsb3cgd29ya3MsIGJ1dCBcbiAgICBpdCdzIG5vdCBteSBpbnRlbmRlZCB1c2UuIFBvc3NpYmxlIGJldHRlciB1c2Ugb2YgVHlwZVNjcmlwdCBpbiBmdXR1cmUuLi4qL1xuICAgIGlmICh0YXNrcyAhPSB1bmRlZmluZWQgJiYgdGFza3MubGVuZ3RoID4gMCkge1xuICAgICAgY29uc29sZS5sb2coYExvZyBmcm9tIHByb2plY3QgY29uc3RydWN0b3IgaWYgc3RhdGVtZW50XG4gICAgICAgJiBJIHdhcyBwYXNzZWQgJHt0YXNrc31gKTtcbiAgICAgIHRoaXMudGFza3MgPSB0YXNrcztcbiAgICB9IGVsc2UgdGhpcy50YXNrcyA9IFtdO1xuICB9XG5cbiAgZ2V0VGl0bGUoKSB7XG4gICAgcmV0dXJuIHRoaXMudGl0bGU7XG4gIH1cblxuICBzZXRUaXRsZShuZXdUaXRsZSkge1xuICAgIG5ld1RpdGxlID0gbmV3VGl0bGUudHJpbSgpO1xuICAgIGlmIChuZXdUaXRsZSA9PT0gXCJcIikge1xuICAgICAgLy9yZWplY3QgZW1wdHkgdGl0bGVcbiAgICAgIC8vICoqKiBDUkVBVEUgTE9HSUMgKioqXG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMudGl0bGUgPSBuZXdUaXRsZTtcbiAgfVxuXG4gIGdldFRhc2tzKCkge1xuICAgIHJldHVybiB0aGlzLnRhc2tzO1xuICB9XG5cbiAgYWRkVGFzayh0aXRsZSwgZHVlRGF0ZSkge1xuICAgIHRoaXMudGFza3MucHVzaChuZXcgVGFzayh0aXRsZSwgZHVlRGF0ZSkpO1xuICB9XG5cbiAgZ2V0VGFzayhpbmRleCkge1xuICAgIHJldHVybiB0aGlzLnRhc2tzW2luZGV4XTtcbiAgfVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGFzayB7XG4gIGNvbnN0cnVjdG9yKHRpdGxlLCBkdWVEYXRlKSB7XG4gICAgdGhpcy50aXRsZSA9IHRpdGxlO1xuICAgIHRoaXMuZHVlRGF0ZSA9IGR1ZURhdGU7XG4gIH1cblxuICBnZXRUaXRsZSgpIHtcbiAgICByZXR1cm4gdGhpcy50aXRsZTtcbiAgfVxuXG4gIHNldFRpdGxlKG5ld1RpdGxlKSB7XG4gICAgbmV3VGl0bGUgPSBuZXdUaXRsZS50cmltKCk7XG4gICAgaWYgKG5ld1RpdGxlID09PSBcIlwiKSB7XG4gICAgICAvL3JlamVjdCBlbXB0eSB0aXRsZVxuICAgICAgLy8gKioqIENSRUFURSBMT0dJQyAqKipcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy50aXRsZSA9IG5ld1RpdGxlO1xuICB9XG5cbiAgZ2V0RHVlRGF0ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5kdWVEYXRlO1xuICB9XG5cbiAgc2V0RHVlRGF0ZShuZXdEdWVEYXRlKSB7XG4gICAgaWYgKG5ld0R1ZURhdGUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgLy9oYW5kbGUgZm9yIGVtcHR5IGRhdGVcbiAgICB9XG4gICAgdGhpcy5kdWVEYXRlID0gbmV3RHVlRGF0ZTtcbiAgfVxufVxuIiwiaW1wb3J0IFByb2plY3QgZnJvbSBcIi4vUHJvamVjdFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUb0RvTGlzdCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMucHJvamVjdHMgPSBbXTtcbiAgfVxuXG4gIGFkZFByb2plY3QodGl0bGUsIHRhc2tzKSB7XG4gICAgdGhpcy5wcm9qZWN0cy5wdXNoKG5ldyBQcm9qZWN0KHRpdGxlLCB0YXNrcykpO1xuICB9XG5cbiAgZ2V0UHJvamVjdHMoKSB7XG4gICAgcmV0dXJuIHRoaXMucHJvamVjdHM7XG4gIH1cbn1cbiIsImltcG9ydCBUb0RvTGlzdCBmcm9tIFwiLi9Ub0RvTGlzdFwiO1xuaW1wb3J0IFByb2plY3QgZnJvbSBcIi4vUHJvamVjdFwiO1xuaW1wb3J0IFRhc2sgZnJvbSBcIi4vVGFza1wiO1xuaW1wb3J0IHsgY29tcGFyZUFzYywgZm9ybWF0IH0gZnJvbSBcImRhdGUtZm5zXCI7XG5cbmNvbnN0IERFRkFVTFRfUFJPSkVDVF9USVRMRSA9IFwiRGVmYXVsdFwiO1xuY29uc3QgREVGQVVMVF9UQVNLX1RJVExFID0gXCJEZWZhdWx0IHRhc2tcIjtcbmNvbnN0IERFRkFVTFRfVEFTS19ERVNDID0gXCJDcmVhdGUgbXkgZmlyc3QgdGFza1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBVSSB7XG4gIHN0YXRpYyBsb2FkKCkge1xuICAgIGNvbnN0IGNvbnRlbnREaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRlbnRcIik7XG4gICAgdGhpcy5sb2FkSW5pdGlhbCgpO1xuICB9XG5cbiAgc3RhdGljIGxvYWRJbml0aWFsKCkge1xuICAgIHRoaXMuaW5pdExpc3RlbmVycygpO1xuICAgIHRoaXMubG9hZFRvRG9MaXN0KCk7XG4gIH1cblxuICBzdGF0aWMgbG9hZFRvRG9MaXN0KCkge1xuICAgIGxldCB0b0RvTGlzdCA9IHRoaXMuY3JlYXRlRGVmYXVsdFByb2plY3QoKTtcbiAgfVxuXG4gIHN0YXRpYyBjcmVhdGVEZWZhdWx0UHJvamVjdCgpIHtcbiAgICBsZXQgdG9Eb0xpc3QgPSBuZXcgVG9Eb0xpc3QoKTtcbiAgICB0b0RvTGlzdC5hZGRQcm9qZWN0KERFRkFVTFRfUFJPSkVDVF9USVRMRSk7XG4gICAgdG9Eb0xpc3QuZ2V0UHJvamVjdHMoKVswXS5hZGRUYXNrKERFRkFVTFRfVEFTS19USVRMRSk7XG4gICAgcmV0dXJuIHRvRG9MaXN0O1xuICB9XG5cbiAgc3RhdGljIGxvYWRQcm9qZWN0cygpIHtcbiAgICAvL2Z1dHVyZSBpbnRha2UgZnJvbSBsb2NhbCBzdG9yYWdlXG4gIH1cblxuICBzdGF0aWMgaW5pdExpc3RlbmVycygpIHtcbiAgICAvLyBDT05TVEFOVCBFTEVNRU5UUyBERUNMQVJBVElPTlNcbiAgICBjb25zdCBidG5NZW51ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtZW51XCIpO1xuICAgIGNvbnN0IHNpZGViYXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNpZGViYXJcIik7XG5cbiAgICAvLyBUT1AgTkFWIExJU1RFTkVSU1xuICAgIGJ0bk1lbnUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgIHNpZGViYXIuY2xhc3NMaXN0LnRvZ2dsZShcImhpZGRlblwiKTtcbiAgICB9KTtcbiAgfVxuICBzdGF0aWMgYWRkVGFzayh0YXNrKSB7XG4gICAgY29uc3QgcHJvamVjdFRhc2tzRGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9qZWN0LXZpZXdcIik7XG4gICAgcHJvamVjdFRhc2tzRGl2LmlubmVySFRNTCArPSBcImFiY1wiO1xuICB9XG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBVSSBmcm9tIFwiLi9tb2R1bGVzL1VJXCI7XG5cblVJLmxvYWQoKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==