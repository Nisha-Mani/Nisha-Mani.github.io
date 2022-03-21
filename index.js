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
    let allDone = true;
  todosInfo.textContent = ""
   newTodoText.value = ""
   while(todosListUl.hasChildNodes()){
       todosListUl.removeChild(todosListUl.firstChild)
   }
   todos.forEach((todo) => {
    let todoItem = document.createElement("li");
    let todoTitle = document.createElement("span");
    let todoDoneCheckBox = document.createElement("input")
    todoDoneCheckBox.type = "checkbox"
    todoDoneCheckBox.checked = todo.isDone
    todoDoneCheckBox.onchange = () => {
        todo.isDone = !todo.isDone
        updateTodosUI();
    }
    todoTitle.textContent = todo.title
    todoTitle.classList.add("todo-title")

    if(todo.isDone){
        todoTitle.style.textDecoration = "line-through"
    }
    if(!todo.isDone) {
        allDone = false
    }
    todoItem.appendChild(todoTitle)
    todoItem.appendChild(todoDoneCheckBox)
    todosListUl.appendChild(todoItem)
   })
   if(allDone){
    todosInfo.textContent = "All todos done, good job!"
    todosInfo.style.color = "#00EAD3";
   }

}
newTodoBtn.onclick = () => {
    if(!newTodoText.value || newTodoText.value.length === 0){
        todosInfo.textContent = "TODO CANNOT BE EMPTY"
        todosInfo.style.color = "red";
        return;
    }
    let todo = {
        title: newTodoText.value,
        isDone: false
    }
    todos.push(todo)
    updateTodosUI()
}


updateTodosUI();

