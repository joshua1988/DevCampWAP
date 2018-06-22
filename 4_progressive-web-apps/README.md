# Service Worker
A simple code project to understand how Service Worker works.

## Tutorial - Getting Started
1. Install the necessary libraries

```
npm init -y
npm i express ejs --save
```

2. Create index.html & add an image in `app/assets/` to load on this web page

```html
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Service Worker Tutorial</title>
</head>
<body>
  <header>
    <h3>Service Worker</h3>
  </header>
  <section>
    <img src="app/assets/thank-you.png" width="400px" height="300px">
  </section>
  <section>
    <div>
      service worker is <span>not loaded yet.</span>
    </div>
  </section>
</body>
</html>
```

3. Create js files

```js
// main.js
function updateDOM(text) {
  var ele = document.querySelector('span');
  ele.innerText = text;
}

// sw.js
console.log("serviceWorker loaded");
```

4. Add these scripts in index.html

```html
<script src="app/js/main.js" async></script>
<script>
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
      navigator.serviceWorker.register('app/js/sw.js').then(function(registration) {
        console.log('ServiceWorker registration successful with scope: ', registration.scope);
      }).catch(function(err) {
        console.log('ServiceWorker registration failed: ', err);
      });
    });
  }
</script>
```

5. Add `install event` below in `sw.js` to install a Service Worker

```js
// sw.js
self.addEventListener('install', function(event) {
  console.log('Service Worker installing.');
});
```

6. Define caches to load when installing Service Worker

```js
// sw.js
var CACHE_NAME = 'my-site-cache-v1';
var urlsToCache = [
  '/',
  '/app/assets/thank-you.png',
  '/app/js/main.js'
];
```

7. Add `event.waitUntil()` in install event to load defined caches

```js
// sw.js
self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function (cache) {
        console.log('cache created');
        return cache.addAll(urlsToCache);
      }).catch(function (err) {
        console.error('cache created error!', err);
      })
  );
});
```

8. Add `fetch event` to return cached response to the browser

```js
self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request)
      .then(function(response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      }
    )
  );
});
```

9. Run the application to see if the web resources are loaded from Service Worker
10. Check 'offline' in Network Panel and see if it works offline

![cached resources loaded - offline](http://joshua1988.github.io/images/posts/etc/offline-load.png)

11. Add `activate event` to update the registered service worker with a new one

```js
self.addEventListener('activate', function(event) {
  console.log('Service Worker activating.');
});
```

12. (Optional) register a new cache after deleting the previously registered caches

```js
var cacheWhitelist = ['pages-cache-v1', 'blog-posts-cache-v1'];

event.waitUntil(
  caches.keys().then(function(cacheNames) {
    return Promise.all(
      cacheNames.map(function(cacheName) {
        if (cacheWhitelist.indexOf(cacheName) === -1) {
          return caches.delete(cacheName);
        }
      })
    );
  })
);
```

---
# Push-With-Firebase
A simple web app that allows users to enable or disable push notification, which was implemented with Firebase Cloud Messaging.

## Firebase Project Info
- **Project ID** : friendlychat-34059
- **Sender ID** : 800635767370
- **Server Key** : AAAAummcSko:APA91bHppIKcGEMQnLT8RvZC_q1eVrVz2T2IJMIczC4Vh2k-nJquUs0u5_5_UVfiYPVLEJZGUp2jWJsDav8S4ZYifvphaVH0FAJzufKX6-unlvQhKzBM6Ia94BLpSz7_aZGkT7fsqEJg

## Hosted Site
[https://friendlychat-34059.firebaseapp.com/](https://friendlychat-34059.firebaseapp.com/)

## Tutorial
1. Download [code stub](https://github.com/googlechrome/push-notifications/archive/master.zip)
2. Unzip the zip file and move to the project directory
3. Move to app directory. `cd app`
4. Initialize Firebase Project with this command below and select DB & Hosting

```
firebase init
```

5. Add this code in `main.js` to see if the browser supports Service Worker

```js
// main.js
if ('serviceWorker' in navigator && 'PushManager' in window) {
  console.log('Service Worker and Push is supported');

  navigator.serviceWorker.register('sw.js')
    .then(function(swReg) {
      console.log('Service Worker is registered', swReg);

      swRegistration = swReg;
      initialiseUI();
    })
    .catch(function(error) {
      console.error('Service Worker Error', error);
    });
} else {
  console.warn('Push messaging is not supported');
  pushButton.textContent = 'Push Not Supported';
}
```

6. Add a log in `sw.js` if the service worker has been properly registered.
7. Implement `initialiseUI()` to initialize UI based on user's subscription.

```js
// main.js
function initialiseUI() {
  swRegistration.pushManager.getSubscription()
  .then(function(subscription) {
    isSubscribed = !(subscription === null);

    if (isSubscribed) {
      console.log('User IS subscribed.');
    } else {
      console.log('User is NOT subscribed.');
    }

    updateBtn();
  });
}
```

8. Implement `updateBtn()` to update the Push Enable Button based on user's subscription

```js
// main.js
function updateBtn() {
  if (Notification.permission === 'denied') {
    pushButton.textContent = 'Push Messaging Blocked.';
    pushButton.disabled = true;
    updateSubscriptionOnServer(null);
    return;
  }

  if (isSubscribed) {
    pushButton.textContent = 'Disable Push Messaging';
  } else {
    pushButton.textContent = 'Enable Push Messaging';
  }

  pushButton.disabled = false;
}
```

9. Add this code to enable the click event on Push Enable Button

```js
// main.js
function initialiseUI() {
  pushButton.addEventListener('click', function() {
    pushButton.disabled = true;
    if (isSubscribed) {
      unSubscribeUser();
    } else {
      subscribeUser();
    }
  });

  ...
}
```

#### Subscription Implementation
> Let's implement features to enable push on the website.

10. Implement `subscribeUser()` to subscribe with the registered service worker

```js
// main.js
function subscribeUser() {
  swRegistration.pushManager.subscribe({
    // 푸시 수신 시 알람 표시 속성
    userVisibleOnly: true
  })
  .then(function(subscription) {
    console.log('User is subscribed:', subscription);
    isSubscribed = true;

    updateBtn();
  })
  .catch(function(err) {
    console.log('Failed to subscribe the user: ', err);
    updateBtn();
  });
}
```

11. Check the subscription as a callback parameter

![subscription](https://github.com/joshua1988/DevCampWAP/blob/master/%234-progressive-web-apps/push-with-firebase/images/screenshots/subscription.png?raw=true)

12. Add `updateSubscriptionOnServer()` in `subscribeUser()`'s success callback to send the key to Server

```js
// main.js
function subscribeUser() {
  ...
  .then(function(subscription) {
    updateSubscriptionOnServer(subscription);
  })
  ...
}
```

13. Implement the `updateSubscriptionOnServer()` and display the subscription info on the screen

```js
// main.js
function updateSubscriptionOnServer(subscription, unsubscribed) {
  var subscriptionJson = document.querySelector('.js-subscription-json');
  var subscriptionDetails = document.querySelector('.js-subscription-details');

  if (subscription) {
    subscriptionJson.textContent = JSON.stringify(subscription);
    subscriptionDetails.classList.remove('is-invisible');
  } else {
    subscriptionDetails.classList.add('is-invisible');
  }
}
```

14. Run the application and click the button. You will see the prompt as below.

![push alarm](https://github.com/joshua1988/DevCampWAP/blob/master/%234-progressive-web-apps/push-with-firebase/images/screenshots/05-push-codelab.png)


#### Sending the browser key to Firebase
> Now we need to send this subscription information to the server so that we can send the specific device a push message.

15. Add the `sendDeviceKeytoFirebase()` to `updateSubscriptionOnServer()` to send the browser key to Firebase

```js
// main.js
function updateSubscriptionOnServer(subscription) {
  ...
  if (subscription) {
    ...
    sendDeviceKeytoFirebase(subscription.endpoint.split('send/')[1]);
  }
  ...
}
```

16. Implement `sendDeviceKeytoFirebase()` to send this info to Firebase DB

```js
// firebase-db.js
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
```

17. Add the utility functions as well

```js
// firebase-db.js
function getID() {
  var date = new Date();
  return date.getHours() + "-" + date.getMinutes() + "-" + date.getSeconds();
}

function getCurrentTime() {
  return new Date().toLocaleString();
}
```

18. Check the Firebase Database if the data has been stored properly in the table.

![firebase-db](https://github.com/joshua1988/DevCampWAP/blob/master/%234-progressive-web-apps/push-with-firebase/images/screenshots/firebase-db.png?raw=true)

#### Notification Implementation
> Let's code the last part of this tutorial, which is Push Notification

19. Add this code below in `sw.js` to pop up the notification when push arrives

```js
// sw.js
self.addEventListener('push', function(event) {
  console.log('[Service Worker] Push Received.');

  var title = 'Push Codelab';
  var options = {
    body: 'Yay it works.',
    icon: 'images/icon.png',
    badge: 'images/badge.png'
  };

  var notificationPromise = self.registration.showNotification(title, options);
  event.waitUntil(notificationPromise);
});
```

20. Also add this code to monitor click event on the notification

```js
// sw.js
self.addEventListener('notificationclick', function(event) {
  console.log('[Service Worker] Notification click Received.');

  event.notification.close();
  event.waitUntil(
    clients.openWindow('http://www.fastcampus.co.kr/dev_camp_wap/')
  );
});
```

21. Let's see if this push function works through 'Application' panel in Dev Tools. Click the notification too

![09-push-codelab](https://github.com/joshua1988/DevCampWAP/blob/master/%234-progressive-web-apps/push-with-firebase/images/screenshots/09-push-codelab.png?raw=true)

22. Send a push to the browser using the Curl command that contains Server Key & Browser Key (end point).

#### Removing the unsubscribed User key in Firebase
23. Implement `unSubscribeUser()` to delete the subscription info in Firebase DB

```js
function unSubscribeUser() {
  swRegistration.pushManager.getSubscription().then(function(subscription) {
    subscription.unsubscribe().then(function(successful) {
      console.log('User is unsubscribed : ', successful);
      console.log('Unsubscribed subscription : ', subscription);

      updateSubscriptionOnServer(subscription, successful);
      isSubscribed = false;

      updateBtn();
    }).catch(function(e) {
      console.log('Failed to unsubscribe the user: ', e);
      updateBtn();
    })
  });
}
```

24. (optional) Implement `removeDeviceKeyInFirebase()` in `firebase-db.js` to delete the disabled browser for push subscription. refer to this [API](https://firebase.google.com/docs/database/web/read-and-write#delete_data)
