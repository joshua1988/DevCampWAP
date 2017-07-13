var CACHE_NAME = 'pwair-v1.0';
var urlsToCache = [
  './',
  // CSS
  './src/css/font.css',
  './src/css/roboto.css',
  './src/css/vue-material.css',
  // Images
  './src/assets/favicon.ico',
  './src/assets/images/logo-192.png',
  './src/assets/images/logo-144.png',
  './src/assets/images/logo-96.png',
  './src/assets/images/logo-48.png',
  './src/assets/images/logo.png',
  // Fonts
  './src/assets/fonts/icomoon.eot',
  './src/assets/fonts/icomoon.svg',
  './src/assets/fonts/icomoon.ttf',
  './src/assets/fonts/icomoon.woff',
  // JS
  './src/vendor/firebase.js',
  './src/vendor/naver-maps-geocoder.js',
  // './src/vendor/sw-toolbox.js',
  // './src/vendor/sw-toolbox.js.map',
  './app-init.js',
  './dist/build.js',
  // Mock Json
  './src/utils/mock-airstatus.json'
];

self.addEventListener('install', function(event) {
  console.log('Service Worker installing.');

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
