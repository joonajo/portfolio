self.__precacheManifest = [
  {
    "url": "/_next/static/chunks/9.c2203cc34ca6778c43d4.js",
    "revision": "9adadd9395ae5600b655"
  },
  {
    "url": "/_next/static/chunks/commons.8ee4e4ee.chunk.css",
    "revision": "7a8ab694515bf023eb93"
  },
  {
    "url": "/_next/static/chunks/commons.f6704633214f8a049d98.js",
    "revision": "7a8ab694515bf023eb93"
  },
  {
    "url": "/_next/static/chunks/styles.53f3ae2c.chunk.css",
    "revision": "db9be8d9dd076441731e"
  },
  {
    "url": "/_next/static/chunks/styles.cde9610bcc2764c63fae.js",
    "revision": "db9be8d9dd076441731e"
  },
  {
    "url": "/_next/static/runtime/main-05aeae7962329c34eec5.js",
    "revision": "bf5cc21ee93f47b6abc3"
  },
  {
    "url": "/_next/static/runtime/polyfills-2889d9d9fcf08314dd3a.js",
    "revision": "72af0bf5f5ab36df8ae8"
  },
  {
    "url": "/_next/static/runtime/webpack-e558580112247d744556.js",
    "revision": "ae1b16b745c973172438"
  },
  {
    "url": "/_next/static\\BCwxc0XBqeBycERkjhFD5\\pages\\_app.js",
    "revision": "27e92ed35abf7a618e87"
  },
  {
    "url": "/_next/static\\BCwxc0XBqeBycERkjhFD5\\pages\\_error.js",
    "revision": "dbc73a89afa23954bc88"
  },
  {
    "url": "/_next/static\\BCwxc0XBqeBycERkjhFD5\\pages\\admin.js",
    "revision": "234f30c3fc7a1665aab2"
  },
  {
    "url": "/_next/static\\BCwxc0XBqeBycERkjhFD5\\pages\\index.js",
    "revision": "c17cf49dcac320f268d9"
  }
];

/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

importScripts(
  
);

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerRoute(/^https?.*/, new workbox.strategies.NetworkFirst({ "cacheName":"offlineCache", plugins: [new workbox.expiration.Plugin({ maxEntries: 200, purgeOnQuotaError: false })] }), 'GET');
