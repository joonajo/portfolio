const CACHE_NAME = "simple-cache-v1"
const urlsToCache = ["/"]

self.addEventListener("install", event => {
    const preLoaded = caches.open(CACHE_NAME)
        .then(cache => cache.addAll(urlsToCache))
    event.waitUntil(preLoaded)
})

self.addEventListener("fetch", event => {
    const response = caches.match(event.request)
        .then(match => match || fetch(event.request))
    event.respondWith(response)
})

self.addEventListener('activate', function(event) {
    event.waitUntil(
      caches.keys().then(function(cacheNames) {
        //   console.log(caches)
        return Promise.all(
          cacheNames.filter(function(cacheName) {
            // Return true if you want to remove this cache,
            // but remember that caches are shared across
            // the whole origin
            return true
          }).map(function(cacheName) {
            return caches.delete(cacheName);
          })
        );
      })
    );
  });