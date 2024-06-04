let todoList=[];

const TodayDate = new Date();
let date=TodayDate.getDate();
let month=TodayDate.toLocaleString('default', { month: 'long' });
let timeBox=document.querySelector(".today-date");
timeBox.innerHTML=`<h1>${month} ${date}</h1>`;

let addTodoButton=document.querySelector("#add-todo-button");
let inputBox=document.querySelector(".add-Task");

inputBox.addEventListener('keydown',(event)=> {
    if(event.key==='Enter'){
        addTodoButton.click();
    }
});

function addTodo(){
    let newTodo=inputBox.value;
    if(newTodo!=''){
        todoList.push(newTodo);
        
        document.querySelector(".add-Task").value='';
        displayTodo();
    }
    else{
        alert("Enter some task first");
        document.querySelector(".add-Task").focus();
    }
    
}
function displayTodo(){
    let box=document.querySelector('.today-tasks-list');
    let newHtml='';
    if(todoList.length==0){
        newHtml+=`<div>No task added</div>`;
    }
    else{
        for(i=0;i<todoList.length;i++){
            newHtml+= ` <div class="task-box">
            <input type="checkbox" class="task-status" id="task-done-check" onclick="taskDone(this)"> <span class="today-task">${todoList[i]} </span>
            <button class="button-with-icon" onclick="deleteTodo(${i})"><img src="images/trash.png" class="icon but-inside-icon"></button>
        </div>`;     
        }
    }  
    box.innerHTML=newHtml;
}

function deleteTodo(i){
        todoList.splice(i,1);
        displayTodo();
}

function taskDone(e){
  console.log(e.parentElement.querySelector("span").style.textDecoration);
    if(e.parentElement.querySelector("span").style.textDecoration="none"){
        e.parentElement.querySelector("span").style.textDecoration="line-through"; 
        e.parentElement.style.backgroundColor="rgb(217, 214, 214)";
        e.parentElement.querySelector("span").style.color="gray"; 
    }
    else{
        e.parentElement.querySelector("span").style.textDecoration="none";
    }
}
function editTodo(){
    let oldtask=document.querySelector(".today-task");
    oldtask.addEventListener(click,(e)=>{
        inputBox.value=oldtask.value();
    });
}

