// Register service worker to control making site work offline
if ('serviceWorker' in navigator) {
    navigator.serviceWorker
        .register('sw.js')
        .then(function () {
            console.log('Service Worker Registered');
        });
}


if (window.navigator && navigator.serviceWorker) {
    navigator.serviceWorker.getRegistrations()
        .then(function (registrations) {
            for (let registration of registrations) {
                console.log('unregistering...');
                registration.unregister();
            }
        });
}