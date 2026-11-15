// Trades demo service worker: the whole app is cached at install, so it opens and runs offline.
// Bump VERSION on every release so installed copies pick up the new files.
const VERSION = 'trades-demo-v10';
const PRECACHE = ["./", "index.html", "manifest.webmanifest", "icons/apple-touch-icon.png", "icons/favicon-32.png", "icons/icon-192.png", "icons/icon-512.png", "icons/maskable-192.png", "icons/maskable-512.png", "fonts/Poppins-Bold.ttf", "fonts/Poppins-Medium.ttf", "fonts/Poppins-Regular.ttf"];
self.addEventListener('install', e => e.waitUntil(caches.open(VERSION).then(c => c.addAll(PRECACHE))));
self.addEventListener('activate', e => e.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k => k !== VERSION).map(k => caches.delete(k)))).then(() => self.clients.claim())));
self.addEventListener('message', e => { if (e.data === 'SKIP_WAITING') self.skipWaiting(); });
self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET' || new URL(req.url).origin !== location.origin) return;   // outside links (sources) go to the network as usual
  if (req.mode === 'navigate') { e.respondWith(fetch(req).catch(() => caches.match('index.html'))); return; }
  e.respondWith(caches.match(req).then(hit => hit || fetch(req).then(res => { const copy = res.clone(); caches.open(VERSION).then(c => c.put(req, copy)); return res; })));
});
