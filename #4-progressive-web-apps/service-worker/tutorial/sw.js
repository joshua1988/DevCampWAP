console.log("serviceWorker loaded");

// #6 - add cache
var CACHE_NAME = 'my-site-cache-v1';
var urlsToCache = [
  '/',
  '/app/assets/thank-you.png',
  '/app/js/main.js'
];

// #5 - add serviceworker install event
self.addEventListener('install', function(event) {
  console.log('Service Worker installing.');

  // #7 - add cache register
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

// #8
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

// #
self.addEventListener('activate', function(event) {
  console.log('Service Worker activating.');
});
