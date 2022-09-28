const form = document.querySelector("form")
const taskInput = document.querySelector("#task")
const taskHeading = document.querySelector("#task-title")

// submit
form.addEventListener("submit", runEvent)

// taskInput.addEventListener("keydown", runEvent)
//taskInput.addEventListener("keypress", runEvent)

/*
taskInput.addEventListener("focus", runEvent)
taskInput.addEventListener("blur", runEvent)
*/

taskInput.addEventListener("cut", runEvent)
taskInput.addEventListener("paste", runEvent)
taskInput.addEventListener("input", runEvent)
function runEvent(event) {
    console.log(`Event type: ${event.type}`)
    taskHeading.innerText = event.target.value
//    event.preventDefault()
}