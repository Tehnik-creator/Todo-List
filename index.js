const addBtnSubmit = document.querySelector('.task_add_btn')
const addInput = document.querySelector('.add_task_input')

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
    console.log(allTasks)
}

addBtnSubmit.addEventListener('click', addTask)
