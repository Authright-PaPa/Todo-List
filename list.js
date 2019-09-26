var newTask = document.getElementById("todo");
var toDoUl = document.getElementById("ul-list");
var completeUl = document.getElementById("complete-ul-list");


function createNewTask(task){
  if (newTask.value.length > 0){
  console.log("Creating a new task...");
  
  var li = document.createElement("li");
  var checkBox = document.createElement("input");
  var label = document.createElement("label"); 
//   var button = document.createElement("button");
  
  label.innerText = task;
  checkBox.type = "checkbox";
  checkBox.setAttribute('class', 'status')
//   button.setAttribute("class","delete papa-button");
//   button.innerText = "Delete";

  li.setAttribute('class', 'li-list');
  li.appendChild(checkBox);
  li.appendChild(label);
  //li.appendChild(button);
  return li; 
  } 
};

function addTask(){
  console.log("Adding task to todo list...");
  var li = createNewTask(newTask.value);
  toDoUl.appendChild(li); 
  newTask.value="";

  bindIncompleteItems(li, completeTask);
  //bindCompleteItems(li, deleteTask);
};

function completeTask(){
  var li = this.parentNode;
  
  var deleteBtn = document.createElement("button"); 
  deleteBtn.innerText ="Delete";
  deleteBtn.className = "delete papa-button";
  li.appendChild(deleteBtn);
  
  var checkBox = li.querySelector("input[type=checkbox]");
  checkBox.remove();
  
  completeUl.appendChild(li); 
  bindCompleteItems(li, deleteTask);
};

function deleteTask(){
  console.log("Deleting the task...");
  var li = this.parentNode;
  var ul = li.parentNode;
  
  ul.removeChild(li);
};

function bindIncompleteItems(taskItem, checkBoxClick){  
  console.log("Binding the todo list...");
  var checkBox = taskItem.querySelector("input[type=checkbox]");
  checkBox.onchange = checkBoxClick;  
}; 

function bindCompleteItems(taskItem, deleteButtonPress){
  console.log("Binding the complete list...");
  var deleteButton = taskItem.querySelector(".delete");
  deleteButton.onclick = deleteButtonPress;
};

for(var i=0; i < toDoUl.children.length; i++) {
  bindIncompleteItems(toDoUl.children[i], completeTask);
}

for(var i=0; i < completeUl.children.length; i++) {
  bindCompleteItems(completeUl.children[i], deleteTask);
}

window.onload = function() {
    document.getElementById('todo').onkeypress = function searchKeyPress(event) {
       if (event.keyCode == 13) {
           document.getElementById('addBtn').click();
       }
   };

   document.getElementById('addBtn').addEventListener("click", addTask);
};

function hideList() {
    var list = document.getElementById("complete-ul-list");
    var title = document.getElementById("list-title")

    if (list.style.display == "none"){
        title.innerText = "Hide Completed Tasks";
        list.style.display = "block";

    }else{
        title.innerText = "Show Completed Tasks";
        list.style.display = "none";
    }
}

(function() {
  const days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];

  const months = ['January','February','March','April','May','June','July','August','September','October','November','December'];

  Date.prototype.getMonthName = function() {
      return months[ this.getMonth() ];
  };
  Date.prototype.getDayName = function() {
      return days[ this.getDay() ];
  };
})();

const today = new Date();
const day = today.getDate();
if (day > 3 && day < 21) sufix = 'th';
switch (day % 10) {
  case 1:
    sufix = "st";
  case 2:
    sufix = "nd";
  case 3:
    sufix = "rd";
  default:
    sufix = "th";
}
const weekday = today.getDayName();
const month = today.getMonthName();
const hours = ('0' + today.getHours()).slice(-2);
const minutes = ('0' + today.getMinutes()).slice(-2);

const now = month + ' ' + day;

document.getElementById("time").innerHTML = "It's <span class='hour'>" + hours + ":" + minutes + "</span><br/><span class='date'>" + month + ' ' + day + sufix + ', ' + weekday + '.';
// document.getElementById("weekday").innerHTML = weekday;
// document.getElementById("date").innerHTML = now;


// li.onclick = function() {this.parentNode.removeChild(this);}
// const newTask = document.getElementById("todo");
// const addTaskBtn = document.getElementById("addBtn");
// const incompleteTask = document.getElementById("ul-list");
// const completeTask = document.querySelector(".complete-list ul");

// document.getElementById("addBtn").addEventListener("click", addTask);

// function createNewTask(task) {
//     if (newTask.value.length > 0){
//         var li = document.createElement("li"); //<li>
//         var checkBox = document.createElement("input"); //checkbox
//         var label = document.createElement("label"); // <label>
//         label.innerText = task;
//         checkBox.type = "checkbox";

//         li.setAttribute('class', 'li-list');
//         li.appendChild(checkBox);
//         li.appendChild(label);

//         return li;
//     }
// }

// function addItem() {
//     if (newTask.value.length > 0){
//         const todoItem = createNewTask(newTask.value);
//         incompleteTask.appendChild(todoItem);
//         //completeTask.appendChild(todoItem);
//         newTask.value="";

//         bindIncompleteItems(todoItem, createCompleteTask());
//     };
// };

// // var completeTask = function() {
// //     var listItem = this.parentNode;
// //     var deleteBtn = document.createElement("button"); 
// //     deleteBtn.innerText = "Delete";
// //     deleteBtn.className = "delete";
// //     listItem.appendChild(deleteBtn);
  
// //     var checkBox = listItem.querySelector("input[type=checkbox]");
// //     checkBox.remove();
  
// //     completeUl.appendChild(listItem);
  
// //     bindCompleteItems(listItem, deleteTask);
// // };

// function createCompleteTask() {
//     let listItem = this.parentNode;
//     //const listItem = document.getElementById("complete-ul-list");
//     const deleteBtn = document.createElement("button");
//     deleteBtn.innerText ="Delete"; 
//     deleteBtn.className = "delete-button";
//     listItem.appendChild(deleteBtn);
    
//     //SELECT THE CHECKBOX FROM THE COMPLETED CHECKBOX AND REMOVE IT
//     var checkBox = listItem.querySelector("input[type=checkbox]");
//     checkBox.remove();
    
//     //PLACE IT INSIDE THE COMPLETED LIST
//     completeTask.appendChild(listItem); 
    
//     //BIND THE NEW COMPLETED LIST
//     bindCompleteItems(listItem, removeItem());
    
// };

// function removeItem() {
//     const item = this.parentNode;
//     const ul = item.parentNode;
    
//     ul.removeChild(item);
// };

// function bindIncompleteItems(taskItem, checkBoxClick) {  
//     const checkBox = taskItem.getElementsByClassName("status");
//     checkBox.onchange = checkBoxClick;  
// }; 

// function bindCompleteItems(taskItem, deleteButtonPress){
//     const deleteButton = taskItem.getElementsByClassName("delete-button");
//     deleteButton.onclick = deleteButtonPress;  
// };

// for(var i=0; i < incompleteTask.children.length; i++) {
//   bindIncompleteItems(incompleteTask.children[i], createCompleteTask());
// }

// for(var i=0; i < completeTask.children.length; i++) {
//   bindCompleteItems(completeTask.children[i], removeItem());
// }


// ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Add highlight effect to checkbox
// function myFunction(x, _this) {
//     x.style.color = _this.checked ? '#00BFFF' : '#000000';
//     x.style.textDecoration =  _this.checked ? 'line-through' : 'none';
//     x.style.display =  _this.checked ? 'none' : 'block';
//     x.classList.toggle('blue');
// }

// function highlight(){
//     document.getElementsByClassName('li-list').style.background = "#e6e6e6";
// }

// Show current date and time at the top of the page
