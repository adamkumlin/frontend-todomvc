export function addTodo(todo) {
    // this function adds a div holding everything related to 
    // one "todo" post in the application 
    const todoContainer = document.createElement("div");
    
    const todoInput = document.createElement("input");
    todoInput.type = "checkbox";
    todoInput.checked = false;
    todoInput.classList.add("unchecked");

    const todoLabel = document.createElement("label");
    todoLabel.textContent = todo;
    
    // toggle a task as complete/incomplete
    todoInput.onchange = () => {
        if (todoInput.checked) {
            todoInput.classList.remove("unchecked");
            todoInput.classList.add("checked");
        } else {
            todoInput.classList.remove("checked");
            todoInput.classList.add("unchecked");
        }
    }
    
    // delete button for an individual todo
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "❌";

    todoContainer.append(todoInput, todoLabel, deleteButton);

    const main = document.getElementById("main");
    main.append(todoContainer);
}
