import { addTodo } from "./todo.js";
import { drawGlobalTodoControls } from "./todo-controls-global.js";
import { toggleStateOfAllTodos } from "./toggle-state-of-all-todos.js";

// this runs when user has the text input field highlighted and presses ENTER
const form = document.getElementById("form");
form.addEventListener("submit", (e) => {
  e.preventDefault();

  let term = document.getElementById("todo-textbox");
  if (term.value !== "") { // to prevent empty todos in the list 
    addTodo(term.value);
    term.value = "";

    // show toggle state of all button if list has values
    document.getElementById("select-all").classList.remove("hidden");
  }

  // add todo controls 
  drawGlobalTodoControls();
});

// code for the toggle button next to the todo input text field
const toggleAllTodosButton = document.getElementById("select-all");
toggleAllTodosButton.onchange = () => {
  toggleStateOfAllTodos();
}
