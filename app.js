if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/service-worker.js')
      .then(reg => console.log('Service Worker зарегистрирован'))
      .catch(err => console.error('Ошибка:', err));
  });
}