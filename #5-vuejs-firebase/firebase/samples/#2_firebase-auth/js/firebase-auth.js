var input = document.querySelectorAll('input');
var button = document.querySelectorAll('button');
var log = document.querySelector('p');
// SNS Auth
var provider = new firebase.auth.GoogleAuthProvider();
// var provider = new firebase.auth.FacebookAuthProvider();

var firebaseSignIn = function () {
  if (exceptionHandler()) return true;
  firebase.auth().signInWithEmailAndPassword(getEmail(), getPassword()).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    if (errorCode === 'auth/wrong-password') {
      alert('Wrong password.');
    } else {
      alert(errorMessage);
    }
    console.log(error);
  }).then(function (user) {
    console.log(user);
    log.innerText = user.email + " has been logged in";
    clearForm();
  });
};

var firebaseSignInWithGoogle = function () {
  firebase.auth().signInWithPopup(provider).then(function(result) {
    // This gives you a Google Access Token. You can use it to access the Google API.
    var token = result.credential.accessToken;
    var user = result.user;
    console.log(result);
    console.log("token : ", token);
    console.log("user : ", user);
  }).catch(function(error) {
    var errorCode = error.code;
    var errorMessage = error.message;
    // The email of the user's account used.
    var email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    var credential = error.credential;
    console.log("errorCode: " + errorCode + ". errorMessage : " + errorMessage + ". email : " + email);
  });
};

var firebaseSignUp = function () {
  if (exceptionHandler()) return true;
  firebase.auth().createUserWithEmailAndPassword(getEmail(), getPassword()).catch(function(error) {
    var errorCode = error.code;
    var errorMessage = error.message;
  }).then(function (user) {
    console.log(user);
    log.innerText = "The account " + user.email + " has been registered in Authentication";
    clearForm();
  });
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
