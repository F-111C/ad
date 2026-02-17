self.addEventListener('install', e=>{
  e.waitUntil(
    caches.open('snake-cache').then(cache => 
      cache.addAll([
        './',               // cache index.html
        './index.html',
        './manifest.json',
        './icon-192.png',
        './icon-512.png',
        './sw.js'
      ])
    )
  );
});

self.addEventListener('fetch', e=>{
  e.respondWith(
    caches.match(e.request).then(r => r || fetch(e.request))
  );
});
