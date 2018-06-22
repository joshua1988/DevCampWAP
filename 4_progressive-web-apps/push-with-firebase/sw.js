// #10
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

// #11
self.addEventListener('notificationclick', function(event) {
  console.log('[Service Worker] Notification click Received.');

  event.notification.close();
  event.waitUntil(
    clients.openWindow('http://www.fastcampus.co.kr/dev_camp_wap/')
  );
});
