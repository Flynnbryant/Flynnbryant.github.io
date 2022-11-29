self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open('raflin-store').then((cache) => cache.addAll([
      '/index.html',
      '/index.js',
      '/style.css',
      '/images/raflin1.jpg',
    ])),
  );
});

self.addEventListener('fetch', (e) => {
  console.log(e.request.url);
  e.respondWith(
    caches.match(e.request).then((response) => response || fetch(e.request)),
  );
});
