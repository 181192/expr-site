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
    "url": "webpack-runtime-ed67d29c060c2011eab8.js"
  },
  {
    "url": "app-66d897646a6b61939eac.js"
  },
  {
    "url": "component---node-modules-gatsby-plugin-offline-app-shell-js-56e47d9dc31822b1ce04.js"
  },
  {
    "url": "index.html",
    "revision": "57f1e4c3eccc6f530d594c07fba9cc61"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "901c8af868de909b0330638957c39243"
  },
  {
    "url": "1.1ef850cbb845611b6826.css"
  },
  {
    "url": "0.663870e3cb4f6d1a7337.css"
  },
  {
    "url": "component---src-pages-index-js-2eb561fff041f2403dff.js"
  },
  {
    "url": "1-742bbc2525283d61151d.js"
  },
  {
    "url": "9-bd79220d7a4c20d9315b.js"
  },
  {
    "url": "0-e39f0be09523d01d0cc6.js"
  },
  {
    "url": "static/d/652/path---index-6a9-7PLAPz4fr8cDDvG4GPwadtNldv4.json",
    "revision": "43d6062321a1a5d9cbfa22f3155a6a02"
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
    "revision": "fc3a4a3aef30d9c2abcc2aaa5088f764"
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