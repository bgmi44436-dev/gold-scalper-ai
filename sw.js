const CACHE_NAME = 'gold-scalper-v6-pro-chart';
const CORE = ['./','./index.html','./manifest.json'];
self.addEventListener('install', e => {e.waitUntil(caches.open(CACHE_NAME).then(c=>c.addAll(CORE)).then(()=>self.skipWaiting()));});
self.addEventListener('activate', e => {e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE_NAME).map(k=>caches.delete(k)))).then(()=>self.clients.claim()));});
self.addEventListener('fetch', e => {const u=new URL(e.request.url); if(e.request.method!=='GET'||u.origin!==self.location.origin)return; e.respondWith(fetch(e.request).then(r=>{if(r.ok){const copy=r.clone();caches.open(CACHE_NAME).then(c=>c.put(e.request,copy));}return r;}).catch(()=>caches.match(e.request)));});
