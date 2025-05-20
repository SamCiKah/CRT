const cacheName = "david-v1";
const assets = [
  "/",
  "/index.html",
  "/assets/css/theme.min.css",
  "/script.js",
  "/web-app-manifest-192x192.png",
  "/web-app-manifest-512x512.png"
];

// Install event
self.addEventListener("install", (e) => {
  e.waitUntil(
    caches.open(cacheName).then((cache) => {
      return cache.addAll(assets);
    })
  );
});

// Fetch event
self.addEventListener("fetch", (e) => {
  e.respondWith(
    caches.match(e.request).then((res) => {
      return res || fetch(e.request);
    })
  );
});
