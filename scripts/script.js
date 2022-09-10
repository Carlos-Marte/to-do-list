console.info("%cSCRIPT CARGADA", "color:lightgreen; font-weight: 700");

const fatherDiv = document.querySelector("#div-flex");
const inputText = document.querySelector("#input-text");
const addButton = document.querySelector("#add-button");

const pendingTasks = document.querySelector("#p-pending-tasks");
const completeTasks = document.querySelector("#p-complete-tasks");

let pTasks = 0, cTasks = 0;

addButton.addEventListener('click', createTask);


function createTask(event) {
    if (inputText.value != "") {
        return createFlexItem();
    }

    return alert("Tienes que ingresar una tarea.");
}

const createFlexItem = () => {
    const divItemContainer = document.createElement("DIV");
    divItemContainer.classList.add("container__f-item");

    const divItemContainerTitleInput = document.createElement("DIV");
    divItemContainerTitleInput.classList.add("container__f-item-task-input");

    const inputCheckBox = document.createElement("INPUT");
    inputCheckBox.setAttribute("type", "checkbox");
    inputCheckBox.name = "#";
    inputCheckBox.value = "true";
    inputCheckBox.classList.add("container__input", "container__input--flex-item");

    inputCheckBox.addEventListener('click', controlTasks);

    const taskText = document.createElement("P");
    taskText.innerHTML = inputText.value;
    taskText.classList.add("container__p");

    const deleteButton = document.createElement("BUTTON");
    deleteButton.innerHTML = '<i class="fa-solid fa-trash"></i>';
    deleteButton.classList.add("container__button", "container__button--delete");

    deleteButton.addEventListener('click', removeTask);

    divItemContainerTitleInput.append(inputCheckBox, taskText);

    divItemContainer.append(divItemContainerTitleInput, deleteButton);

    inputText.value = "";
    addPendingTasks();
    fatherDiv.appendChild(divItemContainer);
}

// Control of complete and pending tasks
const controlTasks = (event) => {
    if (event.target.checked) {
        return addCompleteTasks();
    }

    return removeCompleteTasks();
}

// Remove Task
const removeTask = (event) => {
    event.target.parentElement.parentElement.remove();
    removeCompleteTasks();
    removePendingTasks();

}

// Add and Remove pending tasks
const addPendingTasks = () => {
    pTasks++;
    pendingTasks.innerHTML = `Tareas pendientes ${pTasks}`
}
const removePendingTasks = () => {
    if (pTasks != 0) {
        pTasks--;
        pendingTasks.innerHTML = `Tareas pendientes ${pTasks}`
    }
}

// Add and Remove complete tasks
const addCompleteTasks = () => {
    cTasks++;
    completeTasks.innerHTML = `Completadas ${cTasks}`
}

const removeCompleteTasks = () => {
    if (cTasks != 0) {
        console.log("me ejecuto")
        cTasks--;
        completeTasks.innerHTML = `Completadas ${cTasks}`
    }

}
