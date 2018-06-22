importScripts('src/vendor/sw-toolbox.js');

const precacheFiles = [
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

// Precache the files
toolbox.precache(precacheFiles);

// Push Notification
self.addEventListener('push', function(event) {
  console.log('[Service Worker] Push Received.');

  var title = 'PWAir';
  var options = {
    body: 'Yay it works.',
    icon: 'src/assets/images/logo-192.png',
    badge: 'src/assets/images/logo-96.png'
  };

  var notificationPromise = self.registration.showNotification(title, options);
  event.waitUntil(notificationPromise);
});

self.addEventListener('notificationclick', function(event) {
  console.log('[Service Worker] Notification click Received.');

  event.notification.close();
  event.waitUntil(
    clients.openWindow('http://www.fastcampus.co.kr/dev_camp_wap/')
  );
});
