console.info("%cSCRIPT CARGADA", "color:lightgreen; font-weight: 700");

const fatherDiv = document.querySelector("#div-flex");
const inputText = document.querySelector("#input-text");
const addButton = document.querySelector("#add-button");

addButton.addEventListener('click', crearTarea);

//Metodo del oy
function crearTarea(event) {
    if(inputText.value != "") {
        return crearFlexItem();
    } 

    return alert("Tienes que ingresar una tarea.");
}

// Metodo para crear flex items
const crearFlexItem = () => {
    // Contenedor del flex item
    const divItemContainer = document.createElement("DIV");
    divItemContainer.classList.add("container__f-item");

    // Contenedor del checkbox y la tarea
    const divItemContainerTitleInput = document.createElement("DIV");
    divItemContainerTitleInput.classList.add("container__f-item-task-input");

    // Checkbox
    const inputCheckBox = document.createElement("INPUT");
    inputCheckBox.setAttribute("type", "checkbox");
    inputCheckBox.name = "#";
    inputCheckBox.value = "true";
    inputCheckBox.classList.add("container__input", "container__input--flex-item");

    // Tarea
    const taskText = document.createElement("P");
    taskText.innerHTML = inputText.value;
    taskText.classList.add("container__p");

    // Boton eliminar
    const deleteButton = document.createElement("BUTTON");
    deleteButton.innerHTML = '<i class="fa-solid fa-trash"></i>';
    deleteButton.classList.add("container__button", "container__button--delete");

    divItemContainerTitleInput.append(inputCheckBox, taskText);

    divItemContainer.append(divItemContainerTitleInput, deleteButton);

    inputText.value = "";
    fatherDiv.appendChild(divItemContainer);
}