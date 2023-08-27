var form = document.getElementById('todo-form');// Get the HTML element with the id 'todo-form' and store it in the 'form' variable.
var input = document.getElementById('todo-input'); // Get the HTML element with the id 'todo-input' and store it in the 'input' variable.
var list = document.getElementById('todo-list'); // Get the HTML element with the id 'todo-list' and store it in the 'list' variable.
window.addEventListener('load', function() {// Added a event listener to the 'window' object that listens for load to be executed. this call back function will execute when 'load' event occurs. 
    console.log('Page has Loaded!'); 
    for (var i = 0; i < localStorage.length; i++) { //Created a for loop to repeat until condition is met, condition being varible 'i'  is less than the local strorage length thenm it will increase in incriments of 1. 
        addTaskToList(localStorage.key(i)); //Used to fetch 'i'
    }}); 