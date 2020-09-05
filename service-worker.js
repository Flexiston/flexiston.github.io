"use strict";var workboxVersion="5.1.3";importScripts("https://storage.googleapis.com/workbox-cdn/releases/".concat(workboxVersion,"/workbox-sw.js")),workbox.setConfig({modulePathPrefix:"https://storage.googleapis.com/workbox-cdn/releases/".concat(workboxVersion,"/")}),workbox.core.setCacheNameDetails({prefix:"Flexiston's Blog"}),workbox.core.skipWaiting(),workbox.core.clientsClaim(),workbox.precaching.precacheAndRoute([{revision:"6feea36e01a164081beb68e9406bf43d",url:"./404.html"},{revision:"3cb7222ac1728eb8c47081e77928ceb3",url:"./about/index.html"},{revision:"66c19d613082f72176cb330e0207c7d6",url:"./apply-link/index.html"},{revision:"3eddd8adb49dfd7253c99fb5fc2d5441",url:"./archives/2020/04/index.html"},{revision:"619a0ae21c48f57307a208788a5c1ad8",url:"./archives/2020/05/index.html"},{revision:"3cf42ed9d0fefe1639092b94b31cf8b0",url:"./archives/2020/06/index.html"},{revision:"2d75e8a64eb48b510b3895019b568ab8",url:"./archives/2020/07/index.html"},{revision:"11ae4029484ed03c7bf5c97cd22d5ac9",url:"./archives/2020/08/index.html"},{revision:"3320cf22523eef0b93977805687a19fe",url:"./archives/2020/index.html"},{revision:"df879e9b7de29156c8fa8bbd9cdc09a3",url:"./archives/2020/page/2/index.html"},{revision:"b7adea13c4b3d104a173eca60d06e59d",url:"./archives/index.html"},{revision:"4cfb6f224cd29a46b568b7d10043d025",url:"./archives/page/2/index.html"},{revision:"9fb351efc4b8a7db51d2d7325f60fb03",url:"./baidu_verify_spMQLbgc0m.html"},{revision:"493321397a4dfcce00d15d06cc0c6762",url:"./catch-cat.min.js"},{revision:"14d82c431cccf3e8d1292d2bff006080",url:"./catch-cat/index.html"},{revision:"d4e26366cc860c6c59469d01a5aa3b26",url:"./categories/Bug/index.html"},{revision:"bb9fecdcdaf821f4610f5248a5db040e",url:"./categories/Dev/GitHub/index.html"},{revision:"0b581615653fb3c4f5c7ff5f73422733",url:"./categories/Dev/Hexo/index.html"},{revision:"222d8678d3ccda250fcf0d5582301dfb",url:"./categories/Dev/index.html"},{revision:"15e40af5f185c61ca27cd11e919c8006",url:"./categories/Dev/page/2/index.html"},{revision:"4b4ea2b9d5dc00ae46500f6947364bba",url:"./categories/Dev/Vercel/index.html"},{revision:"2b769980da6338281fbde410440c088f",url:"./categories/Dev/Windows/index.html"},{revision:"1a5f980720c84ab0eac0c63172fcb539",url:"./categories/Dev/工具/index.html"},{revision:"f923f76e3a541a7e43e4deb23d626162",url:"./categories/Emoji/index.html"},{revision:"30252030c25f66cb69bfd993e2d38ca3",url:"./categories/GitHub/index.html"},{revision:"42d4cf773bbb00e869863ff4596fde5f",url:"./categories/index.html"},{revision:"fec23416c965e1c24952e16146496267",url:"./categories/文言文编程/index.html"},{revision:"a1e4f3eb05488d3a56adbf7c4b51ea9e",url:"./css/style/flesx.css"},{revision:"ddb82c3174916eb6f55357c44758be89",url:"./css/style/note.css"},{revision:"fc764d9a99cd208d780999d32b2c47da",url:"./css/style/timeline.l.css"},{revision:"432e1fde311abc4cb282ac6cc045a2ca",url:"./css/style/valine.l.css"},{revision:"b2e5f90d67fcd5bde63f51b16ba4d5f2",url:"./favicon.png"},{revision:"01ba6b2e69e0b9eafb6a04075f4835d4",url:"./friends/index.html"},{revision:"19b9564478c06974df2d97bcc75abf0f",url:"./index.html"},{revision:"3eaec3b0473d3042cc8dea3ea181aa41",url:"./js/app.js"},{revision:"f564bbb092181f20953084c3ed507461",url:"./manifest.json"},{revision:"e666d95ce04fa02145e7d6de9684f7a1",url:"./map/index.html"},{revision:"1b3819adb7fdc61d51e9784bcec93a0d",url:"./mikutap/css/mikutap.css"},{revision:"5279a09d7a75b44f3c35364ea2a8f08b",url:"./mikutap/data/main/main.json"},{revision:"d94b20e465ff7289142b647c1ac142ea",url:"./mikutap/data/track/track.json"},{revision:"4b63179db3c45dfd9078a252b2575cd1",url:"./mikutap/icon.png"},{revision:"56ba4222adad2322b0168981868bc934",url:"./mikutap/index.html"},{revision:"936ff3edd8373c243f56bf9c0fc66ec8",url:"./mikutap/js/mikutap.min.js"},{revision:"ee0a7ce469b3a15bd2c57ef76f38dbc6",url:"./mikutap/shared/css/common-1.css"},{revision:"a1aba3a1001e09230cbfdb18d522cdbc",url:"./mikutap/shared/css/index-1.css"},{revision:"43e49a61141c64bcf8d7981f7a6a26f5",url:"./mikutap/shared/js/common-2.min.js"},{revision:"b74c8c57d13ad72401b651f4128a2468",url:"./mikutap/shared/sp/css/common.css"},{revision:"9e1e86dba2aa0be07feecfc673ac07dd",url:"./page/2/index.html"},{revision:"a21455c64d796d8d4f83045a3223e059",url:"./play/index.html"},{revision:"b09b2f63337437952b7b624e30a9f090",url:"./posts/17931.html"},{revision:"422f928b3d6f748868e0dbb51fafa5d0",url:"./posts/22938.html"},{revision:"1a9d11c697812bbd7b5d706d000b5dea",url:"./posts/24179.html"},{revision:"1769cce37716619ee6ac6298788244dd",url:"./posts/24549.html"},{revision:"65b350888f7b2e00631ce3123eeb7364",url:"./posts/25909.html"},{revision:"6d9879ec546623f03099632ed82f8748",url:"./posts/28146.html"},{revision:"38db729995790adf59fcb3a053fb5e4a",url:"./posts/32716.html"},{revision:"6236c922ce020f6ace78230a6e020ebc",url:"./posts/39479.html"},{revision:"f0d4161c259916946b626934d4022e56",url:"./posts/4141.html"},{revision:"f61063bd442d5b098c3d74cd63b6ff90",url:"./posts/43359.html"},{revision:"f4acc333a7c8eb5d3d13b7a45ad8cbbc",url:"./posts/47424.html"},{revision:"04a42fa19015192849d7ae042bf51d4d",url:"./posts/49939.html"},{revision:"b825c250d88a4c5f08367faa7737940f",url:"./posts/5913.html"},{revision:"9b6678bb5c273f81a103d44e9041583e",url:"./posts/7578.html"},{revision:"831d8020e5d6a50ab1cd04b7eae8d762",url:"./runner/index.html"},{revision:"9a5572858a96ea0a93d9eb3ed95f8820",url:"./say/index.html"},{revision:"d495df57cd8a86b5a5473f8871d96ffa",url:"./search.json"},{revision:"e8cf105976d2c14a71e0e52eb83be779",url:"./search/index.html"},{revision:"935eb50b24d97a184ca9623a91c0f616",url:"./t-rex/assets/css/t-rex.css"},{revision:"01f2014886ea4de08147a231bebfd958",url:"./t-rex/assets/js/index.js"},{revision:"7bc8783256a189ab13556a4f89a9b96c",url:"./t-rex/assets/js/t-rex.js"},{revision:"cad7798da0d84c8a6e55affb940bc76b",url:"./t-rex/index.html"},{revision:"bb1ee09e5548dbe6b79813227d3b1d6f",url:"./tags/Bug/index.html"},{revision:"1d6e194a5252d610ec06a9cb636e757b",url:"./tags/Coding-Pages/index.html"},{revision:"8409f1b9948682f2dee18c12ffda05bf",url:"./tags/Commands/index.html"},{revision:"9fa7d9161884a3ded6d0be851619abf5",url:"./tags/Dev/index.html"},{revision:"b4526cf1da2bb92fe04855342faca6ef",url:"./tags/Emoji/index.html"},{revision:"f50a146ce4b9df2eb7b00782a9b35b03",url:"./tags/GitHub-Actions/index.html"},{revision:"1215df87c1f3a5432383353c3790817d",url:"./tags/GitHub/index.html"},{revision:"37dbb443989b7857f277036e0dbf5947",url:"./tags/Hexo/index.html"},{revision:"b00a63b7df301f595d9f817504a0fd21",url:"./tags/index.html"},{revision:"4a23d3623d260d13d88c86370b555293",url:"./tags/issues/index.html"},{revision:"b6af786f32bb81dce01082512ad0ae67",url:"./tags/LeanCloud/index.html"},{revision:"c1608307f833c4d9e6c76505e1ff42d4",url:"./tags/UptimeRobot/index.html"},{revision:"d0426742148ba20f6f566a0aa36692fd",url:"./tags/URL/index.html"},{revision:"93ee61e4dae92432cc8fdc0780cc2bc9",url:"./tags/Vercel/index.html"},{revision:"d6d59ac3c0c4a2dae541ef639473d040",url:"./tags/wenyan-lang/index.html"},{revision:"b63573f8f48af0df7b99e608cccbb1ff",url:"./tags/Windows/index.html"},{revision:"ad3fdb61c2664cff84d5c8c047448bad",url:"./tags/文言文编程/index.html"},{revision:"d5697fc204d9a962148a3d9153bb7140",url:"./tags/浏览器/index.html"},{revision:"e110051cb7785fad779df67ab9b10677",url:"./tags/炫酷文字/index.html"},{revision:"1b37207fb6e31c734f6ca8edd64a3ad0",url:"./tags/网站存活监控/index.html"},{revision:"9ec463f0a4fd230b592e95e9e4c2502e",url:"./timeline/index.html"},{revision:"fabf7271fcada1bc1f03c6f2aa92f982",url:"./vercel.json"}],{directoryIndex:null}),workbox.precaching.cleanupOutdatedCaches(),workbox.routing.registerRoute(/\.(?:png|jpg|jpeg|gif|bmp|webp|svg|ico)$/,new workbox.strategies.CacheFirst({cacheName:"images",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:259200}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/\.(?:eot|ttf|woff|woff2)$/,new workbox.strategies.CacheFirst({cacheName:"fonts",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/^https:\/\/fonts\.googleapis\.com/,new workbox.strategies.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets"})),workbox.routing.registerRoute(/^https:\/\/fonts\.gstatic\.com/,new workbox.strategies.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.googleAnalytics.initialize();