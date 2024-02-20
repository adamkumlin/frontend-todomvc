export function clearCompletedTodosFromList() {
    const todosMarkedAsComplete = document.getElementsByClassName("checked-container");
    if (todosMarkedAsComplete.length > 0) {
        // reverse iteration since this is a live list, 
        // iterating from the beginning would cause program to "miss" the indices that shift around
        for (let i = todosMarkedAsComplete.length - 1; i > -1; i--) {
            todosMarkedAsComplete[i].remove();
        }
    }

    const todosLeftInList = document.querySelectorAll("body main div");
    if (todosLeftInList.length === 0) {
        const todoControlsInDOM = document.getElementById("todo-controls");
        todoControlsInDOM.remove();

        // hide toggle state of all button if list has values
        document.getElementById("select-all").classList.add("hidden");
    }
}