const userInput = document.getElementById('userInput')
const submitBtn = document.getElementById('submitBtn')
const outputContainer = document.getElementById('outputContainer')


submitBtn.addEventListener('click', interact)


function createTask(text) {
    const taskBox = document.createElement('div')
    const taskEl = document.createElement('div')
    const closeEl = document.createElement('div')

    taskEl.innerText = text
    taskBox.classList.add('task-box')
    closeEl.innerHTML = 'x'

    taskBox.appendChild(taskEl)
    taskBox.append(closeEl)
    outputContainer.appendChild(taskBox)

    taskBox.onclick = completeTask
    closeEl.addEventListener('click', deleteTask)
}

function interact() {
    let task = userInput.value
    createTask(task)
}

function completeTask() {
    this.classList.toggle('completed')
}

function deleteTask() {
    this.parentElement.remove()

}

// LOCAL STORAGE