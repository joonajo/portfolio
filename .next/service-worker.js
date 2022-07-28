self.__precacheManifest = [
  {
    "url": "/_next//_next/build-manifest.json",
    "revision": "0a2d0ecce3440908558e690e0f104740"
  },
  {
    "url": "/_next//_next/react-loadable-manifest.json",
    "revision": "35e207ed6aafa32302ede3b44b8dfd3d"
  },
  {
    "url": "/_next//_next/static/MZqA3vvta_4tFRCSySni2/_buildManifest.js",
    "revision": "dfea40a0f0d84c5007046c71ba87f20d"
  },
  {
    "url": "/_next//_next/static/MZqA3vvta_4tFRCSySni2/_ssgManifest.js",
    "revision": "b6652df95db52feb4daf4eca35380933"
  },
  {
    "url": "/_next//_next/static/chunks/374.cd0b0f225b5ad04c.js",
    "revision": "0fdbadbeb88d8ea9"
  },
  {
    "url": "/_next//_next/static/chunks/651.412a32fde78b36e0.js",
    "revision": "edfb961bef05e943"
  },
  {
    "url": "/_next//_next/static/chunks/703-c432af0c3dd43fdf.js",
    "revision": "1647d06008a094b6"
  },
  {
    "url": "/_next//_next/static/chunks/a9a7754c-5a75a5dfc09792f8.js",
    "revision": "9b5caaae779e04b3"
  },
  {
    "url": "/_next//_next/static/chunks/cb1608f2-ed64d9fac7b45dde.js",
    "revision": "1a4369b698407111"
  },
  {
    "url": "/_next//_next/static/chunks/framework-72d48a04eb279bbd.js",
    "revision": "6e387b1ff6bfd4a3"
  },
  {
    "url": "/_next//_next/static/chunks/main-794eb8ad30c708fa.js",
    "revision": "3e9cd157d072e9f0"
  },
  {
    "url": "/_next//_next/static/chunks/pages/_app-a881a294975455a9.js",
    "revision": "09f204cac9f8a2c7"
  },
  {
    "url": "/_next//_next/static/chunks/pages/_error-b53b8f599aff85eb.js",
    "revision": "c7c9f41d1c23ee11"
  },
  {
    "url": "/_next//_next/static/chunks/pages/admin-d90fedb59ee909c0.js",
    "revision": "72a21cad30ae64eb"
  },
  {
    "url": "/_next//_next/static/chunks/pages/index/index-dc53b28c1dc9a340.js",
    "revision": "eed037ccb96eb510"
  },
  {
    "url": "/_next//_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",
    "revision": "837c0df77fd5009c9e46d446188ecfd0"
  },
  {
    "url": "/_next//_next/static/chunks/webpack-04df61b3ccd1a34b.js",
    "revision": "0c0cc6114f376c73"
  },
  {
    "url": "/_next//_next/static/css/0419b4f224b7c266.css",
    "revision": "72a21cad30ae64eb"
  },
  {
    "url": "/_next//_next/static/css/39afd17842e60357.css",
    "revision": "0fdbadbeb88d8ea9"
  },
  {
    "url": "/_next//_next/static/css/fd6b5f785d34660f.css",
    "revision": "eed037ccb96eb510"
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
  "/_next/precache-manifest.222d10b349e3d4c0f722b83ad5ff513f.js"
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
