// Register service worker to control making site work offline
if ('serviceWorker' in navigator) {
    navigator.serviceWorker
        .register('sw-2.js')
        .then(function () {
            console.log('Service Worker Registered');
        });
}


/**
 * 
 */
// if (window.navigator && navigator.serviceWorker) {
//     navigator.serviceWorker.getRegistrations()
//         .then(function (registrations) {
//             for (let registration of registrations) {
//                 console.log('unregistering...');
//                 registration.unregister();
//             }
//         });

//     self.addEventListener('install', function (e) {
//         e.waitUntil(
//             caches.keys().then(function (cacheNames) {
//                 console.log('deleting cache: ', cacheNames);
//                 return Promise.all(
//                     cacheNames.map(function (cacheName) {
//                         if (myCache != cacheName) {
//                             return caches.delete(cacheName);
//                         }
//                     })
//                 );
//             })
//         );
//     });

// }