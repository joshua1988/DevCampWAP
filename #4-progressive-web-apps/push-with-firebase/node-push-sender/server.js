var request = require('request');

var serverKey = "key=" + "AAAAmE286d4:APA91bEKBqdSsK2Or30NqkjuvGM41eOFqhF6OaEA3eddS3PsJBZo52IKTPw2F7Sj0M3LztISu7Aq2OcEKC--rz_jPGfC4zae562vMM40TYqcBbSvKznjdTSPqzKgNB1GDLnN-yr3Rk2A";
var deviceKey = "eORL9kYdGDs:APA91bG9sJDli8ez7ZFlJ-r9mFk0vBgO9pcYmhcFIoGGqGNprHPrMCdtr-P7pm7nIDCr5mOocVm9SDaLgQNPuv8s544lRqkvig0AawyTL81qY8Zgb0zGUBWBPHA9umSYqsfVhRlaQwVM";
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
