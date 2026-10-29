// Service worker: rende il gioco disponibile anche senza connessione.
// Quando modifichi i file, aumenta VERSION così i telefoni scaricano la nuova versione.
const VERSION = "v1";
const CACHE = "memory-frontiera-" + VERSION;
const FILES = [
  "./",
  "./index.html",
  "./manifest.webmanifest",
  "./fonts/rye-400.woff2",
  "./fonts/atkinson-400.woff2",
  "./fonts/atkinson-700.woff2",
  "./icons/icon-192.png",
  "./icons/icon-512.png",
  "./icons/icon-maskable-512.png",
  "./icons/apple-touch-icon.png"
];

self.addEventListener("install", (e) => {
  e.waitUntil(caches.open(CACHE).then((c) => c.addAll(FILES)).then(() => self.skipWaiting()));
});

self.addEventListener("activate", (e) => {
  e.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((k) => k.startsWith("memory-frontiera-") && k !== CACHE).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

// Pagina: prima la rete (così gli aggiornamenti arrivano), poi la copia salvata se offline.
// Altri file: prima la copia salvata.
self.addEventListener("fetch", (e) => {
  const req = e.request;
  if (req.method !== "GET" || new URL(req.url).origin !== location.origin) return;
  if (req.mode === "navigate") {
    e.respondWith(
      fetch(req).then((res) => {
        const copy = res.clone();
        caches.open(CACHE).then((c) => c.put("./index.html", copy));
        return res;
      }).catch(() => caches.match("./index.html"))
    );
    return;
  }
  e.respondWith(caches.match(req).then((hit) => hit || fetch(req)));
});
