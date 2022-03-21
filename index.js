let todosContainerDiv = document.getElementById("todosContainer")
let todosInfo = document.getElementById("todosInfo")
let todosListUl = document.getElementById("todosList")
let newTodoText = document.getElementById("newTodoText")
let newTodoBtn = document.getElementById("newTodoBtn")
let todos = [{
    title:"Do some coding",
    isDone: true
}]

function updateTodosUI(){
   while(todosListUl.hasChildNodes()){
       todosListUl.removeChild(todosListUl.firstChild)
   }
   todos.forEach((todo) => {
    let todoItem = document.createElement("li");
    let todoTitle = document.createElement("span");
    let todoDoneCheckBox = document.createElement("input")
    todoDoneCheckBox.type = "checkbox"
    todoDoneCheckBox.checked = todo.isDone
    todoTitle.textContent = todo.title
    if(todo.isDone){
        todoTitle.style.textDecoration = "line-through"
    }
    todoItem.appendChild(todoTitle)
    todoItem.appendChild(todoDoneCheckBox)
    todosListUl.appendChild(todoItem)
   })
}

updateTodosUI();

