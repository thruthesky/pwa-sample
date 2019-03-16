/**
 * PWA service worker.js
 * 
 * @version 1:51 am
 */
var myCache = 'pwa-cache-1-2';
self.addEventListener('install', function (e) {
    e.waitUntil(
        caches.open(myCache).then(function (cache) {
            return cache.addAll([
                '/pwa-sample/start.html',
            ]);
        })
    );
    e.waitUntil(
        caches.keys().then(function (cacheNames) {
            return Promise.all(
                cacheNames.map(function (cacheName) {
                    if (myCache != cacheName) {
                        return caches.delete(cacheName);
                    }
                })
            );
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