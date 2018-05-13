var request = require('request');

//파이어베이스 프로젝트 설정의 server key
var serverKey = "key=" + "AAAAcLuAJZc:APA91bFohe4IrOwbHlxhxAT9Gx29BQ0_AJ5ojp5C3P9-uRCDp095z9YMRF-9yoWgeMRXiJ6BoZueSXatCZWUyq9Cd9ws_pLoxuDPHViN45741O8a8PRfzWBOxOohKCzCqGD62-RTiftY";
//브라우저 & 단말 키값
var deviceKey = "ceZVUOYnALM:APA91bEvkvstII-3M_zNJMkLFYQtxfNotJnKmp9D4zzrgj2W_vlbInLbaBST8TnwUo5VpoSlCNaD1KCtKprmm0WECZ7L1GZKOnuMZtk4ANdcWFeuIBeMY4ourOusoE6NSM-6sY-hvFoN";
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
