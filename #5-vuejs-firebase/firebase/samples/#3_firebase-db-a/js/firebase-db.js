// App Logic
var input = document.querySelector('input');
var list = document.querySelector('p');
var addBtn = document.querySelector('button');
addBtn.addEventListener('click', addToDB);

// Firebase Monitor the data change

// Event Methods
function addToDB() {

}

function appendItemsToList(obj) {
  
}

// input operation
function getInput() {
  return input.value;
}

function getId() {
  var date = new Date();
  return date.getHours() + "-" + date.getMinutes() + "-" + date.getSeconds();
}

function clearInput() {
  return input.value = '';
}
