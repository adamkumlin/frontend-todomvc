import { filterTodos } from "./todo-controls-filter.js";
import { clearCompletedTodosFromList } from "./todo-controls-clear-completed.js";

export function drawGlobalTodoControls() {
    // if todo controls exist when this method is called, remove them
    // (this is done so that we can call this method easier from
    // nested flows of control, delete-button being one example)
    const existingTodoControls = document.querySelector("body #todo-controls");
    if (existingTodoControls) {
        existingTodoControls.remove();
    }

    // only draw controls if there are any existing todos in main
    const existingTodos = document.querySelectorAll("main div");
    if (existingTodos.length > 0) {
        const todoControlsContainer = document.createElement("div");
        todoControlsContainer.id = "todo-controls";
        
        // nr of incomplete items left 
        const todoItemsLeft = document.createElement("span");
        const nrOfIncompleteTodosLeft = document.querySelectorAll("main div .unchecked").length;
        todoItemsLeft.textContent = nrOfIncompleteTodosLeft + " items left";

        // list for all the buttons below
        const todoControlsList = document.createElement("ul");

        // show all button/filter
        const todoAll = document.createElement("li");
        const todoAllButton = document.createElement("button");
        todoAllButton.textContent = "All";
        todoAllButton.addEventListener("click", () => {
            filterTodos(); // undefined shows all todos
        });
        todoAll.append(todoAllButton);
        todoControlsList.append(todoAll);
        
        // show active/not done todos button/filter
        const todoActive = document.createElement("li");
        const todoActiveButton = document.createElement("button");
        todoActiveButton.textContent = "Active";
        todoActiveButton.addEventListener("click", () => {
            filterTodos(true); // true shows all active todos
        });
        todoActive.append(todoActiveButton);
        todoControlsList.append(todoActive);
        
        // show completed/done button/filter
        const todoCompleted = document.createElement("li");
        const todoCompletedButton = document.createElement("button");
        todoCompletedButton.textContent = "Completed";
        todoCompletedButton.addEventListener("click", () => {
            filterTodos(false); // false shows all completed todos
        });
        todoCompleted.append(todoCompletedButton);
        todoControlsList.append(todoCompleted);

        // add "Clear completed" button, if there are any todos marked as complete
        const completedTodos = document.querySelectorAll("body main .checked-container");
        if (completedTodos.length > 0) {
            const clearCompletedTodos = document.createElement("li");
            const clearCompletedTodosButton = document.createElement("button");
            clearCompletedTodosButton.textContent = "Clear completed";
            clearCompletedTodosButton.addEventListener("click", () => {
                clearCompletedTodosFromList();
            });
            clearCompletedTodos.append(clearCompletedTodosButton);
            todoControlsList.append(clearCompletedTodos);
        }

        todoControlsContainer.append(todoItemsLeft, todoControlsList);

        const main = document.querySelector("body main");
        main.insertAdjacentElement("afterend", todoControlsContainer);
    }
    else { // this else statement is a cheap solution to hide the toggle state of all todos button
        document.getElementById("select-all").classList.add("hidden");
    }
}
