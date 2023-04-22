const addBtnSubmit = document.querySelector('.task_add_btn')
const addInput = document.querySelector('.add_task_input')
const taskList = document.querySelector('.task_list')

const allTasks = [];

const STATUSES = {
    TODO: 'TODO',
    IN_PROGRESS: 'IN_PROGRESS',
    DONE: 'DONE',
};

const STATES = {
    ACTIVE: 'ACTIVE',
    ARCHIVE: 'ARCHIVE',
    DELETED: 'DELETED'
};

// false true
// Boolean(), String(), Number()

function addTask(event) {
    event.preventDefault();
    const taskLabel = addInput.value;

    if (!taskLabel) {
        addInput.classList.add('is-invalid')
        return;
    } else {
        addInput.classList.remove('is-invalid')
    }

    const task = {
        id: crypto.randomUUID(),
        label:  taskLabel,
        createdAt: new Date(),
        status: STATUSES.TODO,
        state: STATES.ACTIVE
    }

    allTasks.push(task);
    console.log(allTasks);

    addInput.value = "";

    renderTasks(allTasks)
}

function renderTasks(tasks) {
    const card = document.createElement("div")
    const cardBody = document.createElement("div")
    const cardActions = document.createElement("div")
    const actionCheckbox = document.createElement("input")
    const iconEdit = document.createElement("i")
    const iconDelete = document.createElement("i")
    const actionEdit = document.createElement("button")
    const actionDelete = document.createElement("button")
    const label = document.createElement("strong")

    cardBody.classList.add("card-body");
    cardBody.classList.add("d-flex", "flex-row", "justify-content-between", "align-items-center");
    cardActions.classList.add("card-actions", "d-flex", "flex-row", "gap-3");
    actionEdit.classList.add("btn", "btn-light");
    actionDelete.classList.add("btn", "btn-light");
    actionCheckbox.type = "checkbox";
    actionCheckbox.classList.add("form-check-input");
    iconEdit.classList.add("bi", "bi-pencil-square", "d-flex", "icons");
    iconDelete.classList.add("bi", "bi-trash", "d-flex", "icons");
    card.classList.add("card", "mb-4",);

    actionEdit.appendChild(iconEdit);
    actionDelete.appendChild(iconDelete);
    card.appendChild(cardBody);
    cardActions.appendChild(actionCheckbox);
    cardActions.appendChild(actionEdit);
    cardActions.appendChild(actionDelete);
    cardBody.appendChild(label);
    cardBody.appendChild(cardActions);

    tasks.forEach((task) => {
        label.innerText = task.label
        taskList.appendChild(card)
    })

}

addBtnSubmit.addEventListener('click', addTask)
