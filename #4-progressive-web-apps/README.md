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
- project id : friendlychat-34059
- sender id : 800635767370

## Hosted Site
[https://friendlychat-34059.firebaseapp.com/](https://friendlychat-34059.firebaseapp.com/)
