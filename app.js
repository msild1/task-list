const form = document.querySelector("#task-form")
const taskInput = document.querySelector("#task")
const taskList = document.querySelector("ul")

form.addEventListener("submit",addTask)
taskList.addEventListener("click",deleteTask)

function addTask(event){
    // create task list
    const li = document.createElement("li")
    li.appendChild(document.createTextNode(taskInput.value))
    li.className = "collection-item"


    const a = document.createElement("a")
    a.appendChild(document.createTextNode("X"))
    a.className = "blue-text text-darken-2 secondary-content"
    a.setAttribute("href","#")
    li.appendChild(a)

    // add to task list
    const ul = document.querySelector("ul")
    ul.appendChild(li)
    event.preventDefault()
    taskInput.value = ""
}

function deleteTask(event){
   // delete task
    if (event.target.textContent == "X"){
        if (confirm("Are you sure?")) {
            event.target.parentElement.remove()
        } else {
        }

    }
}