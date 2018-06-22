var request = require('request');

var serverKey =
  "key=" + "AAAAummcSko:APA91bHppIKcGEMQnLT8RvZC_q1eVrVz2T2IJMIczC4Vh2k-nJquUs0u5_5_UVfiYPVLEJZGUp2jWJsDav8S4ZYifvphaVH0FAJzufKX6-unlvQhKzBM6Ia94BLpSz7_aZGkT7fsqEJg";
var deviceKey =
  "cKC9L-KSd7k:APA91bHOJW5NfJCaVJhljS7p4xU9NhY-Pae6-EAx8Hz2pYjEtQKPP3ZfkyPdTLfIJprvkGDNiK5nYg0wZ1KO-qSHyAe8E1B7anwqPzr30Y6g5yd69-1qdHeuCxwWv3Di0wIh1D99bzUk";
sendMessageToUser(serverKey, deviceKey);

function sendMessageToUser(serverKey, deviceKey, message) {
  request({
    url: 'https://fcm.googleapis.com/fcm/send',
    method: 'POST',
    headers: {
      'Content-Type' :' application/json',
      'Authorization': serverKey,
    },
    body: JSON.stringify(
      {
        "registration_ids": [
          deviceKey
        ]
      }
    )
  }, function(error, response, body) {
    console.log("Result Log - ", body);
    if (error) {
      console.error(error, response, body);
    } else if (response.statusCode >= 400) {
      console.error('HTTP Error: '+response.statusCode+' - '+response.statusMessage+'\n'+body);
    } else {
      console.log('Done!');
    }
  });
};
