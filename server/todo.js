const toDoForm = document.getElementById("todo-form");
const toDoList = document.getElementById("todo-list");
const toDoInput = document.querySelector("#todo-form input");

const ToDo = "todos";
let toDos = []; 

function saveToDos(){
    localStorage.setItem(ToDo, JSON.stringify(toDos)); //localstorage에 toDos를 string으로 변환시켜서 배열로 저장
}

function paintToDo(newTodo){
    const li = document.createElement("li");
    li.id = newTodo.id;
    const span = document.createElement("span");
    span.innerText = newTodo.text;
    const button = document.createElement("button");
    button.addEventListener("click", deleteTodo);
    button.innerText = "❌";
    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);
}
function deleteTodo(event){
     const li = event.target.parentElement; //삭제할 리스트 찾기
     toDos = toDos.filter(toDo => toDo.id !== parseInt(li.id));
     li.remove();
     saveToDos();
}

function handleToDoSubmit(event){
    event.preventDefault();
    //console.log(toDoInput.value);
    const newTodo = toDoInput.value;
    toDoInput.value = "";
    const newTodoObj = {
        text : newTodo,
        id : Date.now(),
    };
    toDos.push(newTodoObj);
    paintToDo(newTodoObj);
    saveToDos(); 
}
toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos =  localStorage.getItem(ToDo);
if(savedToDos!== null){
    const parsedToDos = JSON.parse(savedToDos);
    //parsedToDos.forEach((item)=> console.log("this is turn off" +item));
    toDos = parsedToDos; 
    parsedToDos.forEach(paintToDo); //localstorage에 있는 만큼 복구하기
}