"use strict";var precacheConfig=[["/myprofile/index.html","9399d257c0836576f769757122cb1359"],["/myprofile/static/css/main.9808936f.css","07df7f555b44d652596c9588815be06b"],["/myprofile/static/js/0.3914d4eb.chunk.js","edf7657b645cc42af4eea7c347aa952b"],["/myprofile/static/js/main.e3c4d90f.js","2207a0fc623778f64e22f6a6c3b0685a"],["/myprofile/static/media/Inter-Black.09f4068b.woff2","09f4068bb74fc78ffbce74f5596d6aa5"],["/myprofile/static/media/Inter-Black.e3735483.woff","e37354838bf8078ac0d296217613533f"],["/myprofile/static/media/Inter-Medium.7a8cc724.woff","7a8cc7241f766a142e15b2948804e547"],["/myprofile/static/media/Inter-Medium.f6cf0a0b.woff2","f6cf0a0bc5fce3307e2c426eb14eb752"],["/myprofile/static/media/Inter-Regular.4dd66a11.woff2","4dd66a113d54a7f9a1ae913049610617"],["/myprofile/static/media/Inter-Regular.7c539936.woff","7c539936c4c8c822b59a1bcc6c08a6ec"],["/myprofile/static/media/Monoton-Regular.6b38d3b6.woff","6b38d3b6010f865691535f4f1887bc03"],["/myprofile/static/media/Monoton-Regular.c231ba4a.woff2","c231ba4a3b7f5806c8108d863de8b8f8"],["/myprofile/static/media/coding.b8511621.svg","b851162182b2486220dafb434c2e9011"],["/myprofile/static/media/css.2b7bc787.svg","2b7bc787fe5c0397f5bfafdea784c8db"],["/myprofile/static/media/git.b00dd667.svg","b00dd667a12f075ef7251b30a5d2d6c3"],["/myprofile/static/media/github-logo.a7370693.svg","a7370693f3cc79a58119b7305b4eaa2d"],["/myprofile/static/media/github.6d7519f8.svg","6d7519f821c0b922699399e1507da5fa"],["/myprofile/static/media/how.227566dc.WebP","227566dcb937cac30093af8522fe7f95"],["/myprofile/static/media/html.cedf99cf.svg","cedf99cf1e2a3c8df19b90c945f13a0a"],["/myprofile/static/media/javascript.d8c3b7fd.svg","d8c3b7fdc670a7b6eb0d5b4ed93f1ce8"],["/myprofile/static/media/logo.35b68e8c.svg","35b68e8cd15301df7f092f6ce88420eb"],["/myprofile/static/media/mail.439d5d49.svg","439d5d49f548ddfb2a4ac34e773b60d7"],["/myprofile/static/media/me.1942824f.WebP","1942824f253205a902dbf3709d32d12d"],["/myprofile/static/media/me_one.fe6283a6.jpg","fe6283a67f25c4628aa36f905755f79a"],["/myprofile/static/media/mesto.ae9db7ea.WebP","ae9db7ea48a8c3713c7f73ed678aa824"],["/myprofile/static/media/movies.b01a2c45.WebP","b01a2c457baae644c89ec9402313bb91"],["/myprofile/static/media/russian.c7076311.WebP","c70763114c1d3eb2f51623ddf20f9059"],["/myprofile/static/media/telegram.fd1f74a1.svg","fd1f74a15be360ce6d276c194122a5c5"],["/myprofile/static/media/triangle.97488f74.svg","97488f74b272f4faf5ec12b5007f7b80"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var t=new URL(e);return"/"===t.pathname.slice(-1)&&(t.pathname+=a),t.toString()},cleanResponse=function(a){return a.redirected?("body"in a?Promise.resolve(a.body):a.blob()).then(function(e){return new Response(e,{headers:a.headers,status:a.status,statusText:a.statusText})}):Promise.resolve(a)},createCacheKey=function(e,a,t,c){var r=new URL(e);return c&&r.pathname.match(c)||(r.search+=(r.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(t)),r.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var t=new URL(a).pathname;return e.some(function(e){return t.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(a){return t.every(function(e){return!e.test(a[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],t=e[1],c=new URL(a,self.location),r=createCacheKey(c,hashParamName,t,/\.\w{8}\./);return[c.toString(),r]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(c){return setOfCachedUrls(c).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var e=new Request(a,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+a+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return c.put(a,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(a){return a.keys().then(function(e){return Promise.all(e.map(function(e){if(!t.has(e.url))return a.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(a){if("GET"===a.request.method){var e,t=stripIgnoredUrlParameters(a.request.url,ignoreUrlParametersMatching),c="index.html";(e=urlsToCacheKeys.has(t))||(t=addDirectoryIndex(t,c),e=urlsToCacheKeys.has(t));var r="/myprofile/index.html";!e&&"navigate"===a.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],a.request.url)&&(t=new URL(r,self.location).toString(),e=urlsToCacheKeys.has(t)),e&&a.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(t)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',a.request.url,e),fetch(a.request)}))}});