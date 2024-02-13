const form = document.getElementById("form");
const main = document.getElementById("main");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  let term = document.getElementById("search");
  addTodo(term.value);
  term.value = "";
});

function addTodo(todo) {
  const todoLabel = document.createElement("label");
  todoLabel.textContent = todo;

  const todoInput = document.createElement("input");
  todoInput.type = "checkbox";
  todoInput.checked = false;
  todoInput.id = "nam";

  todoInput.onchange = () => {
    if (todoInput.checked) {
        todoInput.classList.add("checked");
    } else {
        todoInput.classList.remove("checked")
    }
  }
  todoLabel.append(todoInput);
  main.append(todoLabel);
}
