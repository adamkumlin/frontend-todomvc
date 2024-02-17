import { addTodo } from "./todo.js";
import { drawGlobalTodoControls } from "./todo-global-controls.js";

const form = document.getElementById("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  let term = document.getElementById("search");
  addTodo(term.value);
  term.value = "";

  // add todo controls 
  drawGlobalTodoControls();
});
