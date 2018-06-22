// firebase real-time db
var db = firebase.database();

function sendDeviceKeytoFirebase(key) {
  return db.ref('users/browserKey-' + getID()).set({
    key: key,
    time: getCurrentTime()
  }).then(function () {
    console.log("The key has been sent to Firebase DB");
  }).catch(function () {
    console.error('Sending a key to server has been failed');
  });
}

function removeDeviceKeyInFirebase(key) {
  // Firebase 의 DB data 삭제 API 를 이용하여
  // Disable 한 기기의 키 값을 제거해보세요.

}

function getID() {
  var date = new Date();
  return date.getHours() + "-" + date.getMinutes() + "-" + date.getSeconds();
}

function getCurrentTime() {
  return new Date().toLocaleString();
}
