const userInput = document.getElementById('userInput')
const submitBtn = document.getElementById('submitBtn')
const outputContainer = document.getElementById('outputContainer')

let taskEl

submitBtn.addEventListener('click', createTask)

function createTask() {
    let task = userInput.value
    const taskBox = document.createElement('div')
    const taskEl = document.createElement('div')
    const closeEl = document.createElement('div')

    taskBox.classList.add('task-box')
    taskEl.innerText = task
    closeEl.innerText = 'x'

    taskBox.appendChild(taskEl)
    taskBox.append(closeEl)
    outputContainer.appendChild(taskBox)

    taskEl.onclick = completeTask
}

function completeTask(taskEl) {
    taskEl.style.color = 'green'
}