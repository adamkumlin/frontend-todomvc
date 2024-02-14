const form = document.getElementById("form");
const main = document.getElementById("main");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  let term = document.getElementById("search");
  addTodo(term.value);
  term.value = "";
});

function addTodo(todo) {
  const todos = document.getElementById("todos");
  const todoContainer = document.createElement("div");

  const todoInput = document.createElement("input");
  todoInput.type = "checkbox";
  todoInput.checked = false;

  const todoLabel = document.createElement("label");
  todoLabel.textContent = todo;

  todoInput.onchange = () => {
    if (todoInput.checked) {
        todoInput.classList.add("checked");
    } else {
        todoInput.classList.remove("checked")
    }
  }
  todoContainer.append(todoInput, todoLabel);
  todos.append(todoContainer);
}
