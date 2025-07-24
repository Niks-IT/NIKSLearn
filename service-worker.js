const CACHE_NAME = 'nikslearn-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/allcourses.html',
  '/styles.css',
  '/allcourses.css',
  '/icon-192.png',
  '/icon-512.png'
];

// Установка сервис-воркера и кэширование ресурсов
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

// Обработка запросов
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});