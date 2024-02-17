export function drawGlobalTodoControls(nrOfItemsLeft) {
    // if todo controls exist when this method is called, remove them
    const existingTodoControls = document.querySelector("body #todo-controls");
    if (existingTodoControls) {
        existingTodoControls.remove();
    }

    // only draw controls if there are any existing todos in main
    const existingTodos = document.querySelectorAll("main div");
    if (existingTodos) {
        // if nrOfItemsLeft is not null/undefined use nrOfItemsLeft instead
        let itemsLeft;
        if (nrOfItemsLeft) {
            itemsLeft = nrOfItemsLeft;
        }
        else {
            itemsLeft = existingTodos.length;
        }

        const todoControlsContainer = document.createElement("div");
        todoControlsContainer.id = "todo-controls";

        const todoItemsLeft = document.createElement("li");
        todoItemsLeft.textContent = itemsLeft + " items left";

        const todoControlsList = document.createElement("ul");

        const todoAll = document.createElement("li");
        const todoAllButton = document.createElement("button");
        todoAllButton.textContent = "All";
        todoAll.append(todoAllButton);
        todoControlsList.append(todoAll);

        const todoActive = document.createElement("li");
        const todoActiveButton = document.createElement("button");
        todoActiveButton.textContent = "Active";
        todoActive.append(todoActiveButton);
        todoControlsList.append(todoActive);

        const todoCompleted = document.createElement("li");
        const todoCompletedButton = document.createElement("button");
        todoCompletedButton.textContent = "Completed";
        todoCompleted.append(todoCompletedButton);
        todoControlsList.append(todoCompleted);

        todoControlsContainer.append(todoItemsLeft, todoControlsList);

        const main = document.querySelector("body main");
        main.insertAdjacentElement("afterend", todoControlsContainer);
    }
}
