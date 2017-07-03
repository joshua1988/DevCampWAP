var input = document.querySelectorAll('input');
var button = document.querySelectorAll('button');
var log = document.querySelector('p');

var firebaseSignIn = function () {

};

var firebaseSignInWithGoogle = function () {
};

var firebaseSignUp = function () {

};

var firebaseSignOut = function () {
  // 할일 : Sign Out API 찾아서 기능 구현

};

var getEmail = function () {
  return input[0].value;
};

var getPassword = function () {
  return input[1].value;
};

var exceptionHandler = function () {
  if ( getEmail() === "" || getPassword() === "") {
    alert("enter the email and password");
    return true;
  }
  return false;
};

var clearForm = function () {
  input[0].value = "";
  input[1].value = "";
};

window.onload = function () {
  button[0].addEventListener('click', firebaseSignIn);
  button[1].addEventListener('click', firebaseSignInWithGoogle);
  button[2].addEventListener('click', firebaseSignUp);
};
