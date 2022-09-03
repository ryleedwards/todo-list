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
    console.log(`addProject(${title}, ${tasks})`);
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


const DEFAULT_PROJECT_TITLE = "Default";
const DEFAULT_TASK_TITLE = "Default task";
const DEFAULT_TASK_DESC = "Create my first task";

class UI {
  static load() {
    this.loadInitial();
  }

  static loadInitial() {
    this.initListeners();
    this.loadToDoList();
  }

  static loadToDoList() {
    const contentDiv = document.getElementById("content");
    let toDoList = new _ToDoList__WEBPACK_IMPORTED_MODULE_0__["default"]();
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
    let toDoList = new _ToDoList__WEBPACK_IMPORTED_MODULE_0__["default"]();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBMEI7O0FBRVg7QUFDZjtBQUNBO0FBQ0EscURBQXFELE9BQU8sTUFBTSxNQUFNO0FBQ3hFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpRUFBaUUsTUFBTTtBQUN2RTtBQUNBLE1BQU07QUFDTjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHdCQUF3Qiw2Q0FBSTtBQUM1Qjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDM0NlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUM5QmdDOztBQUVqQjtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhCQUE4QixNQUFNLElBQUksTUFBTTtBQUM5QywyQkFBMkIsZ0RBQU87QUFDbEM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUNma0M7O0FBRWxDO0FBQ0E7QUFDQTs7QUFFZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUJBQXVCLGlEQUFRO0FBQy9COztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLFFBQVE7QUFDUjs7QUFFQTtBQUNBLHVCQUF1QixpREFBUTtBQUMvQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7Ozs7Ozs7VUNwREE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7OztBQ044Qjs7QUFFOUIsd0RBQU8iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbW9kdWxlcy9Qcm9qZWN0LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9tb2R1bGVzL1Rhc2suanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL21vZHVsZXMvVG9Eb0xpc3QuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL21vZHVsZXMvVUkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBUYXNrIGZyb20gXCIuL1Rhc2tcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJvamVjdCB7XG4gIGNvbnN0cnVjdG9yKHRpdGxlLCB0YXNrcykge1xuICAgIGNvbnNvbGUubG9nKFxuICAgICAgYHByb2plY3QgY29uc3RydWN0b3IgY2FsbGVkIGFuZCBJIHdhcyBwYXNzZWQgJHt0aXRsZX0gYW5kICR7dGFza3N9YFxuICAgICk7XG4gICAgdGhpcy50aXRsZSA9IHRpdGxlO1xuXG4gICAgLyogdGhpcyBpcyBhIHNwb3Qgd2hlcmUgSSB3b3VsZCBsaWtlIHRvIGhhdmUgdHlwaW5nIHNvIHRoYXQgSSBjb3VsZCBcbiAgICBjaGVjayBpZiB0YXNrcyBpcyBhbiBhcnJheS4gSWYgaXQncyBhIHN0cmluZywgdGhlIGJlbG93IHdvcmtzLCBidXQgXG4gICAgaXQncyBub3QgbXkgaW50ZW5kZWQgdXNlLiBQb3NzaWJsZSBiZXR0ZXIgdXNlIG9mIFR5cGVTY3JpcHQgaW4gZnV0dXJlLi4uKi9cbiAgICBpZiAodGFza3MgIT0gdW5kZWZpbmVkICYmIHRhc2tzLmxlbmd0aCA+IDApIHtcbiAgICAgIGNvbnNvbGUubG9nKGBMb2cgZnJvbSBwcm9qZWN0IGNvbnN0cnVjdG9yICYgSSB3YXMgcGFzc2VkICR7dGFza3N9YCk7XG4gICAgICB0aGlzLnRhc2tzID0gdGFza3M7XG4gICAgfSBlbHNlIHRoaXMudGFza3MgPSBbXTtcbiAgfVxuXG4gIGdldFRpdGxlKCkge1xuICAgIHJldHVybiB0aGlzLnRpdGxlO1xuICB9XG5cbiAgc2V0VGl0bGUobmV3VGl0bGUpIHtcbiAgICBuZXdUaXRsZSA9IG5ld1RpdGxlLnRyaW0oKTtcbiAgICBpZiAobmV3VGl0bGUgPT09IFwiXCIpIHtcbiAgICAgIC8vcmVqZWN0IGVtcHR5IHRpdGxlXG4gICAgICAvLyAqKiogQ1JFQVRFIExPR0lDICoqKlxuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLnRpdGxlID0gbmV3VGl0bGU7XG4gIH1cblxuICBnZXRUYXNrcygpIHtcbiAgICByZXR1cm4gdGhpcy50YXNrcztcbiAgfVxuXG4gIGFkZFRhc2sodGl0bGUsIGR1ZURhdGUpIHtcbiAgICB0aGlzLnRhc2tzLnB1c2gobmV3IFRhc2sodGl0bGUsIGR1ZURhdGUpKTtcbiAgfVxuXG4gIGdldFRhc2soaW5kZXgpIHtcbiAgICByZXR1cm4gdGhpcy50YXNrc1tpbmRleF07XG4gIH1cbn1cbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFRhc2sge1xuICBjb25zdHJ1Y3Rvcih0aXRsZSwgZHVlRGF0ZSkge1xuICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgICB0aGlzLmR1ZURhdGUgPSBkdWVEYXRlO1xuICB9XG5cbiAgZ2V0VGl0bGUoKSB7XG4gICAgcmV0dXJuIHRoaXMudGl0bGU7XG4gIH1cblxuICBzZXRUaXRsZShuZXdUaXRsZSkge1xuICAgIG5ld1RpdGxlID0gbmV3VGl0bGUudHJpbSgpO1xuICAgIGlmIChuZXdUaXRsZSA9PT0gXCJcIikge1xuICAgICAgLy9yZWplY3QgZW1wdHkgdGl0bGVcbiAgICAgIC8vICoqKiBDUkVBVEUgTE9HSUMgKioqXG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMudGl0bGUgPSBuZXdUaXRsZTtcbiAgfVxuXG4gIGdldER1ZURhdGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZHVlRGF0ZTtcbiAgfVxuXG4gIHNldER1ZURhdGUobmV3RHVlRGF0ZSkge1xuICAgIGlmIChuZXdEdWVEYXRlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIC8vaGFuZGxlIGZvciBlbXB0eSBkYXRlXG4gICAgfVxuICAgIHRoaXMuZHVlRGF0ZSA9IG5ld0R1ZURhdGU7XG4gIH1cbn1cbiIsImltcG9ydCBQcm9qZWN0IGZyb20gXCIuL1Byb2plY3RcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVG9Eb0xpc3Qge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLnByb2plY3RzID0gW107XG4gIH1cblxuICBhZGRQcm9qZWN0KHRpdGxlLCB0YXNrcykge1xuICAgIGNvbnNvbGUubG9nKGBhZGRQcm9qZWN0KCR7dGl0bGV9LCAke3Rhc2tzfSlgKTtcbiAgICB0aGlzLnByb2plY3RzLnB1c2gobmV3IFByb2plY3QodGl0bGUsIHRhc2tzKSk7XG4gIH1cblxuICBnZXRQcm9qZWN0cygpIHtcbiAgICByZXR1cm4gdGhpcy5wcm9qZWN0cztcbiAgfVxufVxuIiwiaW1wb3J0IFRvRG9MaXN0IGZyb20gXCIuL1RvRG9MaXN0XCI7XG5cbmNvbnN0IERFRkFVTFRfUFJPSkVDVF9USVRMRSA9IFwiRGVmYXVsdFwiO1xuY29uc3QgREVGQVVMVF9UQVNLX1RJVExFID0gXCJEZWZhdWx0IHRhc2tcIjtcbmNvbnN0IERFRkFVTFRfVEFTS19ERVNDID0gXCJDcmVhdGUgbXkgZmlyc3QgdGFza1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBVSSB7XG4gIHN0YXRpYyBsb2FkKCkge1xuICAgIHRoaXMubG9hZEluaXRpYWwoKTtcbiAgfVxuXG4gIHN0YXRpYyBsb2FkSW5pdGlhbCgpIHtcbiAgICB0aGlzLmluaXRMaXN0ZW5lcnMoKTtcbiAgICB0aGlzLmxvYWRUb0RvTGlzdCgpO1xuICB9XG5cbiAgc3RhdGljIGxvYWRUb0RvTGlzdCgpIHtcbiAgICBjb25zdCBjb250ZW50RGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250ZW50XCIpO1xuICAgIGxldCB0b0RvTGlzdCA9IG5ldyBUb0RvTGlzdCgpO1xuICAgIHRvRG9MaXN0LmFkZFByb2plY3QoREVGQVVMVF9QUk9KRUNUX1RJVExFKTtcblxuICAgIHRvRG9MaXN0LmdldFByb2plY3RzKClbMF0uYWRkVGFzayhERUZBVUxUX1RBU0tfVElUTEUpO1xuXG4gICAgLy8gdG9Eb0xpc3QuZ2V0UHJvamVjdHMoKS5mb3JFYWNoKChwcm9qZWN0KSA9PiB7XG4gICAgLy8gICBjb25zb2xlLmxvZyhwcm9qZWN0LmdldFRpdGxlKCkpO1xuICAgIC8vICAgcHJvamVjdC5nZXRUYXNrcygpLmZvckVhY2goKHRhc2spID0+IHtcbiAgICAvLyAgICAgY29uc29sZS5sb2codGFzay5nZXRUaXRsZSgpKTtcbiAgICAvLyAgIH0pO1xuICAgIC8vIH0pO1xuICB9XG5cbiAgc3RhdGljIGNyZWF0ZURlZmF1bHRQcm9qZWN0KCkge1xuICAgIGxldCB0b0RvTGlzdCA9IG5ldyBUb0RvTGlzdCgpO1xuICAgIHRvRG9MaXN0LmFkZFByb2plY3QoREVGQVVMVF9QUk9KRUNUX1RJVExFKTtcbiAgICB0b0RvTGlzdC5nZXRQcm9qZWN0cygpWzBdLmdldFRpdGxlKCk7XG4gIH1cblxuICBzdGF0aWMgbG9hZFByb2plY3RzKCkge1xuICAgIC8vZnV0dXJlIGludGFrZSBmcm9tIGxvY2FsIHN0b3JhZ2VcbiAgfVxuXG4gIHN0YXRpYyBpbml0TGlzdGVuZXJzKCkge1xuICAgIGNvbnNvbGUubG9nKFwiaW5pdGlhbGl6aW5nIGxpc3RlbmVyc1wiKTtcbiAgICAvLyBDT05TVEFOVCBFTEVNRU5UUyBERUNMQVJBVElPTlNcbiAgICBjb25zdCBidG5NZW51ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtZW51XCIpO1xuICAgIGNvbnN0IHNpZGViYXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNpZGViYXJcIik7XG5cbiAgICAvLyBUT1AgTkFWIExJU1RFTkVSU1xuICAgIGJ0bk1lbnUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgIHNpZGViYXIuY2xhc3NMaXN0LnRvZ2dsZShcImhpZGRlblwiKTtcbiAgICB9KTtcbiAgfVxufVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgVUkgZnJvbSBcIi4vbW9kdWxlcy9VSVwiO1xuXG5VSS5sb2FkKCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=