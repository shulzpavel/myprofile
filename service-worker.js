"use strict";var precacheConfig=[["/myprofile/index.html","8eca331bdb72bab61869db575815a6b3"],["/myprofile/static/css/main.b23bd809.css","987835a8b1e72827ddbe27ef49347521"],["/myprofile/static/js/0.9618fb75.chunk.js","6181cdd6bb4c063a02b6b1327f914096"],["/myprofile/static/js/main.05fd6f6f.js","bd29fb474aa520c542b970ac078c7efe"],["/myprofile/static/media/GitHub.ab5c16f8.svg","ab5c16f8f783c687fd8022657aeb1b3a"],["/myprofile/static/media/europe-ext.0cb3f228.woff2","0cb3f2281435db395235a51983ad554d"],["/myprofile/static/media/europe-ext.5203e921.woff","5203e921fb63f78897fa68eb662f7e69"],["/myprofile/static/media/github-logo.aaaf531a.svg","aaaf531a1b6d28ab6e420dc43da0f5eb"],["/myprofile/static/media/how.227566dc.WebP","227566dcb937cac30093af8522fe7f95"],["/myprofile/static/media/me.1942824f.WebP","1942824f253205a902dbf3709d32d12d"],["/myprofile/static/media/mesto.ae9db7ea.WebP","ae9db7ea48a8c3713c7f73ed678aa824"],["/myprofile/static/media/movies.b01a2c45.WebP","b01a2c457baae644c89ec9402313bb91"],["/myprofile/static/media/paul.b6e41020.jpg","b6e410208127b416276ee948e52f4543"],["/myprofile/static/media/russian.c7076311.WebP","c70763114c1d3eb2f51623ddf20f9059"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(t){return t.redirected?("body"in t?Promise.resolve(t.body):t.blob()).then(function(e){return new Response(e,{headers:t.headers,status:t.status,statusText:t.statusText})}):Promise.resolve(t)},createCacheKey=function(e,t,a,r){var n=new URL(e);return r&&n.pathname.match(r)||(n.search+=(n.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),n.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(t){return a.every(function(e){return!e.test(t[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],r=new URL(t,self.location),n=createCacheKey(r,hashParamName,a,/\.\w{8}\./);return[r.toString(),n]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(r){return setOfCachedUrls(r).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var e=new Request(t,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+t+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return r.put(t,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(t){return t.keys().then(function(e){return Promise.all(e.map(function(e){if(!a.has(e.url))return t.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(t){if("GET"===t.request.method){var e,a=stripIgnoredUrlParameters(t.request.url,ignoreUrlParametersMatching),r="index.html";(e=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,r),e=urlsToCacheKeys.has(a));var n="/myprofile/index.html";!e&&"navigate"===t.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],t.request.url)&&(a=new URL(n,self.location).toString(),e=urlsToCacheKeys.has(a)),e&&t.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',t.request.url,e),fetch(t.request)}))}});