export function filterTodos(showActiveTodos) {
    // parameter is a boolean
    // if true only display todos marked as not done
    // if false only display todos marked as done
    // if undefined show all

    const main = document.getElementById("main");
    const activeTodos = main.getElementsByClassName("unchecked");
    const completeTodos = main.getElementsByClassName("checked");

    if (showActiveTodos === true) {
        for (let i = 0; i < activeTodos.length; i++) {
            activeTodos[i].classList.remove("hidden-todo");
        }
        for (let i = 0; i < completeTodos.length; i++) {
            completeTodos[i].classList.add("hidden-todo");
        }
    }
    else if (showActiveTodos === false) {
        for (let i = 0; i < completeTodos.length; i++) {
            completeTodos[i].classList.remove("hidden-todo");
        }
        for (let i = 0; i < activeTodos.length; i++) {
            activeTodos[i].classList.add("hidden-todo");
        }
    }
    else {
        for (let i = 0; i < activeTodos.length; i++) {
            activeTodos[i].classList.remove("hidden-todo");
        }
        for (let i = 0; i < completeTodos.length; i++) {
            completeTodos[i].classList.remove("hidden-todo");
        }
    }
}
