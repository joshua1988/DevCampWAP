export function updateSubscriptionOnServer(userEmail, subscription, uid, isSubscribed) {
  var deviceKey = subscription.endpoint.split('send/')[1];

  if (isSubscribed) {
    sendDeviceKeytoFirebase(userEmail, deviceKey, uid);
  } else {
    removeDeviceKeyInFirebase(userEmail, deviceKey, uid);
  }

  return console.log(subscription);
};

var db = firebase.database();

function sendDeviceKeytoFirebase(userEmail, deviceKey, uid) {
  var newPostData = {
    userEmail: userEmail,
    deviceKey: deviceKey,
    time: getCurrentTime()
  };
  var update = {};
  update['/registeredUsers/' + uid] = newPostData;

  return db.ref().update(update).then(function () {
    console.log("The key has been sent to Firebase DB");
  }).catch(function () {
    console.error('Sending a key to server has been failed');
  });
}

function removeDeviceKeyInFirebase(userEmail, deviceKey, uid) {
  return db.ref('registeredUsers/' + uid).remove().then(function (result) {
    console.log("The key has been deleted in Firebase DB");
  }).catch(function () {
    console.error('Deleting the key has been failed');
  });
}

function getCurrentTime() {
  return new Date().toLocaleString();
}
