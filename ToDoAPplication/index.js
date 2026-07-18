let ToDoList = [];
const AddTodoButton = document.getElementById("AddTodo");
AddTodoButton.addEventListener("click", (e) => {
    let input = document.getElementById("activity");
    const fieldValue = input.value.trim();

    if (!fieldValue) return;

    ToDoList.push(fieldValue);
    input.value = "";

    DisplayToDo();

})

function DisplayToDo() {
    const ulList = document.getElementById("TodoList");
    ulList.innerHTML = "";

    ToDoList.forEach((value, index) => {
        const li = document.createElement("li");

        const span=document.createElement("span");
        span.textContent=value;

        const deleteButton=document.createElement("button");
        deleteButton.textContent="Delete";

        li.appendChild(span);
        li.appendChild(deleteButton);

        ulList.appendChild(li);

        deleteButton.addEventListener("click",(e)=>{
            console.log(e)
            ToDoList.splice(index,1);
            DisplayToDo();
        })
    })
}

