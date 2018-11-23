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
    "url": "webpack-runtime-624e4830c54530535f03.js"
  },
  {
    "url": "app-66d897646a6b61939eac.js"
  },
  {
    "url": "component---node-modules-gatsby-plugin-offline-app-shell-js-56e47d9dc31822b1ce04.js"
  },
  {
    "url": "index.html",
    "revision": "42a3ad4a509f445589d6a8f6de37f5f4"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "49a8ec285819a77a433ef5543a89d721"
  },
  {
    "url": "1.1ef850cbb845611b6826.css"
  },
  {
    "url": "0.663870e3cb4f6d1a7337.css"
  },
  {
    "url": "component---src-pages-index-js-97ebd8024ab39320229d.js"
  },
  {
    "url": "1-54672c46df925a0b21c9.js"
  },
  {
    "url": "9-69eb90050796cceeaf80.js"
  },
  {
    "url": "0-e4158bbbe2fe27af547e.js"
  },
  {
    "url": "static/d/996/path---index-6a9-uohcZ3DWs3GRrbXEsvCf5uHPFzo.json",
    "revision": "2eb768a3449fb51d345a12fd9652440e"
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