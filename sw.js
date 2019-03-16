/**
 * PWA service worker.js
 */
self.addEventListener('install', function (e) {
    e.waitUntil(
        caches.open('pwa-cache').then(function (cache) {
            return cache.addAll([
                '/pwa-sample/start.html?v=1',
            ]);
        })
    );
});

self.addEventListener('fetch', function (e) {
    console.log(e.request.url);
    e.respondWith(
        caches.match(e.request).then(function (response) {
            return response || fetch(e.request);
        })
    );
});