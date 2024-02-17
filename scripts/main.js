import { addTodo } from "./todo.js";

const form = document.getElementById("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  let term = document.getElementById("search");
  if (term.value !== "") { // to prevent empty todos in the list 
    addTodo(term.value);
    term.value = "";
  }
});
