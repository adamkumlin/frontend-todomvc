export function addTodo(todo) {
    // this function adds a div holding everything related to 
    // one "todo" post in the application 
    const todoContainer = document.createElement("div");
    
    const todoLabel = document.createElement("label");
    todoLabel.textContent = todo;
    
    const todoInput = document.createElement("input");
    todoInput.type = "checkbox";
    todoInput.checked = false;
    todoInput.classList.add("unchecked");
    
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
    
    todoContainer.append(todoInput, todoLabel);

    const main = document.getElementById("main");
    main.append(todoContainer);
}
