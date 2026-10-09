const CACHE = 'scanner-v2';
const ASSETS = [
  './',
  './index.html',
  './app.js',
  './manifest.json',
  './icon-192.png',
  './icon-512.png'
];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS)));
  self.skipWaiting();
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))
    ).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', e => {
  // Don't cache CDN scripts (they're big and change)
  const url = e.request.url;
  if (url.includes('cdn.jsdelivr.net') || url.includes('docs.opencv.org') || url.includes('cdnjs.cloudflare.com')) {
    return; // let browser handle normally
  }

  e.respondWith(
    caches.match(e.request).then(r => r || fetch(e.request))
  );
});
