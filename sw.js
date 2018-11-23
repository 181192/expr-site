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

importScripts("workbox-v3.6.2/workbox-sw.js");
workbox.setConfig({modulePathPrefix: "workbox-v3.6.2"});

workbox.core.setCacheNameDetails({prefix: "gatsby-plugin-offline"});

workbox.skipWaiting();
workbox.clientsClaim();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "webpack-runtime-c1d1b89048cd19d248d1.js"
  },
  {
    "url": "app-66d897646a6b61939eac.js"
  },
  {
    "url": "component---node-modules-gatsby-plugin-offline-app-shell-js-56e47d9dc31822b1ce04.js"
  },
  {
    "url": "index.html",
    "revision": "840158531c08492eb9141bdec165c313"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "d32c1944eba5821bd8a3022d80fb4c1b"
  },
  {
    "url": "1.1ef850cbb845611b6826.css"
  },
  {
    "url": "0.663870e3cb4f6d1a7337.css"
  },
  {
    "url": "component---src-pages-index-js-2f311034fc4ffa741a0b.js"
  },
  {
    "url": "1-82e84a9634ccc15267b2.js"
  },
  {
    "url": "9-69eb90050796cceeaf80.js"
  },
  {
    "url": "0-e4158bbbe2fe27af547e.js"
  },
  {
    "url": "static/d/63/path---index-6a9-Wis5iAvcAOuz3Td9BR6tx4K81N4.json",
    "revision": "44c96dbccbed6543767724f259e57562"
  },
  {
    "url": "component---src-pages-404-js-59ace81cfe0661858c5f.js"
  },
  {
    "url": "static/d/164/path---404-html-516-62a-NZuapzHg3X9TaN1iIixfv1W23E.json",
    "revision": "c2508676a2f33ea9f1f0bf472997f9a0"
  },
  {
    "url": "static/d/520/path---offline-plugin-app-shell-fallback-a-30-c5a-NZuapzHg3X9TaN1iIixfv1W23E.json",
    "revision": "c2508676a2f33ea9f1f0bf472997f9a0"
  },
  {
    "url": "manifest.webmanifest",
    "revision": "2d4239918066414f1508606290113775"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerNavigationRoute("/expr-site/offline-plugin-app-shell-fallback/index.html", {
  whitelist: [/^[^?]*([^.?]{5}|\.html)(\?.*)?$/],
  blacklist: [/\?(.+&)?no-cache=1$/],
});

workbox.routing.registerRoute(/\.(?:png|jpg|jpeg|webp|svg|gif|tiff|js|woff|woff2|json|css)$/, workbox.strategies.staleWhileRevalidate(), 'GET');
workbox.routing.registerRoute(/^https:/, workbox.strategies.networkFirst(), 'GET');
"use strict";

/* global workbox */
self.addEventListener("message", function (event) {
  var api = event.data.api;

  if (api === "gatsby-runtime-cache") {
    var resources = event.data.resources;
    var cacheName = workbox.core.cacheNames.runtime;
    event.waitUntil(caches.open(cacheName).then(function (cache) {
      return Promise.all(resources.map(function (resource) {
        return cache.add(resource).catch(function (e) {
          // ignore TypeErrors - these are usually due to
          // external resources which don't allow CORS
          if (!(e instanceof TypeError)) throw e;
        });
      }));
    }));
  }
});