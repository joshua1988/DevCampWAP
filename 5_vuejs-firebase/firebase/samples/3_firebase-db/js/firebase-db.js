// App Logic
var input = document.querySelector('input');
var list = document.querySelector('p');
var addBtn = document.querySelector('button');
addBtn.addEventListener('click', addToDB);

// Firebase Monitor the data change
var dbRef = firebase.database().ref('inputs/');
dbRef.on('value', function(snapshot) {
  // console.log(snapshot.val());
  appendItemsToList(snapshot.val());
});

// Event Methods
function addToDB() {
  firebase.database().ref('inputs/' + getId()).set({
    input : getInput()
  });
  clearInput();
}

function appendItemsToList(obj) {
  var arr = [];
  for (key in obj) {
    arr.push(obj[key].input);
  }
  return list.innerText = arr;
}

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
