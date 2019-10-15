import datetime from '../date.js';

document.getElementById("time").innerHTML = datetime();

const newTask = document.getElementById("todo");
const toDoUl = document.getElementById("ul-list");
const completeUl = document.getElementById("complete-ul-list");
let tasks = ["Buy Starbucks at 9am",
"Feed bunnies",
"Purchase 2 bottles of milk",
"Contact Chuck for extra keys",
"Car Inspectiion Check",
"Go to gym",
"Reorder BW's food & hay"];

const createNewTask = (task) => {
  if (newTask.value.length > 0){
  console.log("Creating a new task...");
  
  const li = document.createElement("li");
  const checkBox = document.createElement("input");
  const label = document.createElement("label"); 
  
  label.innerText = task;
  checkBox.type = "checkbox";
  checkBox.setAttribute('class', 'status')

  const deleteBtn = document.createElement("button"); 
  deleteBtn.className = "delete papa-button";
  deleteBtn.innerHTML = "<i class='material-icons'>delete_outline</i>"

  li.setAttribute('class', 'li-list');
  li.appendChild(checkBox);
  li.appendChild(label);
  li.appendChild(deleteBtn);
  
  return li; 
  } 
};

const addTask = () => {
  console.log("Adding task to todo list...");
  const li = createNewTask(newTask.value);
  toDoUl.insertBefore(li,toDoUl.childNodes[0]); 
  tasks.push(newTask.value);
  // console.log(tasks);
  newTask.value="";

  bindIncompleteItems(li, completeTask);
  // bindUndoItems(li, completeTask);
};

function completeTask(){
  const li = this.parentNode;
  
  const redoBtn = document.createElement("button"); 
  redoBtn.className = "redo papa-button";
  redoBtn.innerHTML = "<i class='material-icons'>redo</i>"
  
  const checkBox = li.querySelector("input[type=checkbox]");

  li.appendChild(redoBtn);
  checkBox.remove();
  
  completeUl.appendChild(li); 
  bindCompleteItems(li, redoTask);
};

function redoTask(){
  const li = this.parentNode;

  const checkBox = document.createElement("input");
  checkBox.type = "checkbox";
  checkBox.setAttribute('class', 'status')
  li.appendChild(checkBox);
  
  const redoBtn = li.querySelector(".redo");
  redoBtn.remove()
  
  toDoUl.insertBefore(li,toDoUl.childNodes[0]); 
  bindIncompleteItems(li, completeTask);
};

function deleteTask(){
  console.log("Deleting the task...");
  const li = this.parentNode;
  const ul = li.parentNode;
  
  ul.removeChild(li);
};

const bindIncompleteItems = (taskItem, checkBoxClick) => {  
  console.log("Binding the todo list...");
  const checkBox = taskItem.querySelector("input[type=checkbox]");
  const deleteButton = taskItem.querySelector(".delete");
  checkBox.onchange = checkBoxClick;  
  deleteButton.onclick = deleteTask;
}; 

const bindCompleteItems = (taskItem, redoButtonPress) => {
  console.log("Binding the complete list...");
  const redoButton = taskItem.querySelector(".redo");
  const deleteButton = taskItem.querySelector(".delete");
  redoButton.onclick = redoButtonPress;
  deleteButton.onclick = deleteTask;
};

for(let i=0; i < toDoUl.children.length; i++) {
  bindIncompleteItems(toDoUl.children[i], completeTask);
}

for(let i=0; i < completeUl.children.length; i++) {
  bindCompleteItems(completeUl.children[i], redoTask);
}

window.onload = function() {
    document.getElementById('todo').onkeypress = function searchKeyPress(event) {
       if (event.keyCode == 13) {
           document.getElementById('addBtn').click();
       }
   };

   document.getElementById('addBtn').addEventListener("click", addTask);
};

const hideList = () => {
    const list = document.getElementById("complete-ul-list");
    const title = document.getElementById("list-title")

    if (list.style.display == "none"){
        title.innerText = "Hide Completed Tasks";
        list.style.display = "block";

    }else{
        title.innerText = "Show Completed Tasks";
        list.style.display = "none";
    }
}

// (function() {
//   const days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];

//   const months = ['January','February','March','April','May','June','July','August','September','October','November','December'];

//   Date.prototype.getMonthName = function() {
//       return months[ this.getMonth() ];
//   };
//   Date.prototype.getDayName = function() {
//       return days[ this.getDay() ];
//   };
// })();

// const today = new Date();
// const day = today.getDate();
// let sufix;
// if (day > 3 && day < 21) sufix = 'th';
// switch (day % 10) {
//   case 1:
//     sufix = "st";
//   case 2:
//     sufix = "nd";
//   case 3:
//     sufix = "rd";
//   default:
//     sufix = "th";
// }
// const weekday = today.getDayName();
// const month = today.getMonthName();
// const hours = ('0' + today.getHours()).slice(-2);
// const minutes = ('0' + today.getMinutes()).slice(-2);

// const now = month + ' ' + day;

// document.getElementById("time").innerHTML = "It's <span class='hour'>" + hours + ":" + minutes + "</span><br/><span class='date'>" + month + ' ' + day + sufix + ', ' + weekday + '.';

function ac(value) { 
  console.log("Enable autocomplete...")
  document.getElementById('datalist').innerHTML = ''; 
  // console.log(tasks)
  // console.log(tasks.length)
  l=value.length; 
  for (var i = 0; i<tasks.length; i++) { 
    if(((tasks[i].toLowerCase()).indexOf(value.toLowerCase()))>-1) { 
        var node = document.createElement("option"); 
        var val = document.createTextNode(tasks[i]); 
        node.appendChild(val); 
        document.getElementById("datalist").appendChild(node); 
        } 
    } 
} 
