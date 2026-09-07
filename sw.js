// sw.js
self.addEventListener('install', (event) => {
  // Se instala inmediatamente sin esperar
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  // Toma el control de la página inmediatamente
  event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', (event) => {
  // No hace nada. La petición va directo a internet (Network Only).
  return;
});
