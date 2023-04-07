const addBtn = document.querySelector('.task_add_btn')
const addInput = document.querySelector('.add_task_input')

const allTasks = [1, 2];

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
console.log(addInput.value)
if (addInput.value === '') {
    addInput.classList.add("is-invalid");
} else {
    addInput.classList.remove("is-invalid");
}


function addTask(event) {
    event.preventDefault();
    const label = addInput.value;

    if (addInput.value === '') {
        addInput.classList.add("is-invalid");
    } else {
        addInput.classList.remove("is-invalid");
    }

    if (!label) return;

    const task = {
        id: crypto.randomUUID(),
        label:  label,
        createdAt: new Date(),
        status: STATUSES.TODO,
        state: STATES.ACTIVE
    }
    allTasks.push(task);
    console.log(allTasks)
}

addBtn.addEventListener('click', addTask)

