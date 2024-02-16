import { addTodo } from "./todo.js";

const form = document.getElementById("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  let term = document.getElementById("search");
  addTodo(term.value);
  term.value = "";
});
