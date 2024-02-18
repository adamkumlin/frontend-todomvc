export function toggleStateOfAllTodos() {
    let allActiveTodos = document.getElementsByClassName("unchecked");
    let allCompletedTodos = document.getElementsByClassName("checked");

    // if any todos are marked as incomplete they will all be marked as complete
    // if all todos are marked complete they will all be marked as incomplete 
    // (we iterate backwards since this is a live list)
    if (allActiveTodos.length > 0) {
        for (let i = allCompletedTodos.length - 1; i > -1; i--) {
            // .click() so that we do the correct handling in addTodo()
            allCompletedTodos[i].click();
        }
        for (let i = allActiveTodos.length - 1; i > -1; i--) {
            allActiveTodos[i].click();
        }
    }
    else {
        for (let i = allCompletedTodos.length - 1; i > -1; i--) {
            allCompletedTodos[i].click();
        }
    }
}
