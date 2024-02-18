export function clearCompletedTodosFromList() {
    const todosMarkedAsComplete = document.getElementsByClassName("checked");
    if (todosMarkedAsComplete.length > 0) {
        for (let i = 0; i < todosMarkedAsComplete.length; i++) {
            todosMarkedAsComplete[i].remove();
        }
    }
}