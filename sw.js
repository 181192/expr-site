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
    "url": "webpack-runtime-a03a080a805314dc72df.js"
  },
  {
    "url": "app-cd51368eba36bf49dc0a.js"
  },
  {
    "url": "component---node-modules-gatsby-plugin-offline-app-shell-js-56e47d9dc31822b1ce04.js"
  },
  {
    "url": "index.html",
    "revision": "7d74bc04335224769c91dc61e3c52528"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "5a67a569e7f3cdc662a99e3adfe06058"
  },
  {
    "url": "1.b28c940266011722e295.css"
  },
  {
    "url": "0.663870e3cb4f6d1a7337.css"
  },
  {
    "url": "component---src-pages-index-js-3b4209f2ffa8bb8622e3.js"
  },
  {
    "url": "1-121092454f36de4c618b.js"
  },
  {
    "url": "9-9ecbe64de05f5db253f0.js"
  },
  {
    "url": "0-88f92fa7624af119fe45.js"
  },
  {
    "url": "static/d/54/path---index-6a9-YVgXFnlnoOFaow4jo4aC6i5t2Y.json",
    "revision": "75bd847335dbdaf6f308d9c302aa485d"
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