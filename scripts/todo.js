export function addTodo(todo) {
    const main = document.getElementById("main");
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
    main.append(todoContainer);
}
