let todoList=[];
function addTodo(){
    let newTodo=document.querySelector(".add-Task").value;
    if(newTodo!=''){
        todoList.push(newTodo);
        document.querySelector(".add-Task").value='';
        displayTodo();
    }
    
}
function displayTodo(){
    let box=document.querySelector('.today-tasks-list');
    let newHtml='';
    for(i=0;i<todoList.length;i++){
        newHtml+= ` <div class="task-box">
        <input type="checkbox" class="task-status"> <span class="today-task">${todoList[i]} </span>
        <button class="button-with-icon" ><img src="images/trash.png" class="icon but-inside-icon"></button>
    </div>`;     
    }
    box.innerHTML=newHtml;
}
