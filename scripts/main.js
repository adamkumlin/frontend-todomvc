import { addTodo } from "./todo.js";
import { drawGlobalTodoControls } from "./todo-controls-global.js";

const form = document.getElementById("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  let term = document.getElementById("search");
  if (term.value !== "") { // to prevent empty todos in the list 
    addTodo(term.value);
    term.value = "";
  }

  // add todo controls 
  drawGlobalTodoControls();
});
