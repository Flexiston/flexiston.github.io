"use strict";var workboxVersion="5.1.3";importScripts("https://storage.googleapis.com/workbox-cdn/releases/".concat(workboxVersion,"/workbox-sw.js")),workbox.setConfig({modulePathPrefix:"https://storage.googleapis.com/workbox-cdn/releases/".concat(workboxVersion,"/")}),workbox.core.setCacheNameDetails({prefix:"Flexiston's Blog"}),workbox.core.skipWaiting(),workbox.core.clientsClaim(),workbox.precaching.precacheAndRoute([{revision:"fc3522605c46d8dc04e1f15789edd889",url:"./404.html"},{revision:"d70a4b75eff7a312b0a67cc12ad476ed",url:"./about/index.html"},{revision:"99ce187102c4bf02cb5220dfcc246909",url:"./apply-link/index.html"},{revision:"aa5072d63a5e17a842ad7853e97b305c",url:"./archives/2020/04/index.html"},{revision:"9815fc37f7cd26b5f48db98ee9fc3c56",url:"./archives/2020/05/index.html"},{revision:"564ff706d702d76b6d8db7f1a3fa3faa",url:"./archives/2020/06/index.html"},{revision:"265f5f5eca102a07cc01898d6a036e08",url:"./archives/2020/07/index.html"},{revision:"5836dd4581e0fe236a341cbebea01149",url:"./archives/2020/08/index.html"},{revision:"ee77aecea19c5e647211a02a131c0100",url:"./archives/2020/index.html"},{revision:"d193e23a90262b39e5bdb4f5859bd616",url:"./archives/2020/page/2/index.html"},{revision:"6eff836157d97c705143dacf6cc048a8",url:"./archives/index.html"},{revision:"5e1393df7ec74b71042e1321d49ddef3",url:"./archives/page/2/index.html"},{revision:"9fb351efc4b8a7db51d2d7325f60fb03",url:"./baidu_verify_spMQLbgc0m.html"},{revision:"493321397a4dfcce00d15d06cc0c6762",url:"./catch-cat.min.js"},{revision:"8b6c697a604f9d67d3bfc868c51d6eae",url:"./catch-cat/index.html"},{revision:"f04457e940e3d00fd4b92cfdb522fea6",url:"./categories/Bug/index.html"},{revision:"d5cc5aa2a8b940ca1e0e9d4248102ff6",url:"./categories/Dev/GitHub/index.html"},{revision:"3a80cca57fa984fe2ac603b127199cae",url:"./categories/Dev/Hexo/index.html"},{revision:"b07b3f731525c79397dcfc4ace84b952",url:"./categories/Dev/index.html"},{revision:"fe61554fa25cbdf96b2cbd41e5208ebb",url:"./categories/Dev/page/2/index.html"},{revision:"260e9e27bdc52ea6651bca433142cd08",url:"./categories/Dev/Vercel/index.html"},{revision:"37e1c140af3861574adadb46f503d9f5",url:"./categories/Dev/Windows/index.html"},{revision:"f36ca868cabc041a19d3cc4586b85866",url:"./categories/Dev/工具/index.html"},{revision:"84061aa6806d60cfa90574d02b78f8c9",url:"./categories/Emoji/index.html"},{revision:"4d80e86c163deaf8cfc19700e00d96b1",url:"./categories/GitHub/index.html"},{revision:"41c8381a9e276e4d40ab5c4c96c4f257",url:"./categories/index.html"},{revision:"5b982e90179d738035cbbaefad7b5bcc",url:"./categories/文言文编程/index.html"},{revision:"f672ff74a0632a3168fa4c41ac545274",url:"./css/style/flesx.css"},{revision:"1407dc11577c56dde90dce10aa71bc50",url:"./css/style/note.css"},{revision:"fc764d9a99cd208d780999d32b2c47da",url:"./css/style/timeline.l.css"},{revision:"41aa862d91540c18bb47fb4ecbb38e4a",url:"./css/style/valine.l.css"},{revision:"b2e5f90d67fcd5bde63f51b16ba4d5f2",url:"./favicon.png"},{revision:"f0a5fe03b479f943ca44c50e9b9c8b54",url:"./friends/index.html"},{revision:"75228a594044892932fb3a1344a13b12",url:"./index.html"},{revision:"0b3842ac9cbed38d390171e601f72b7f",url:"./js/app.js"},{revision:"f564bbb092181f20953084c3ed507461",url:"./manifest.json"},{revision:"bd1a559d29ddef04a22883d67a1ef5f0",url:"./map/index.html"},{revision:"1b3819adb7fdc61d51e9784bcec93a0d",url:"./mikutap/css/mikutap.css"},{revision:"5279a09d7a75b44f3c35364ea2a8f08b",url:"./mikutap/data/main/main.json"},{revision:"d94b20e465ff7289142b647c1ac142ea",url:"./mikutap/data/track/track.json"},{revision:"4b63179db3c45dfd9078a252b2575cd1",url:"./mikutap/icon.png"},{revision:"56ba4222adad2322b0168981868bc934",url:"./mikutap/index.html"},{revision:"936ff3edd8373c243f56bf9c0fc66ec8",url:"./mikutap/js/mikutap.min.js"},{revision:"ee0a7ce469b3a15bd2c57ef76f38dbc6",url:"./mikutap/shared/css/common-1.css"},{revision:"a1aba3a1001e09230cbfdb18d522cdbc",url:"./mikutap/shared/css/index-1.css"},{revision:"43e49a61141c64bcf8d7981f7a6a26f5",url:"./mikutap/shared/js/common-2.min.js"},{revision:"b74c8c57d13ad72401b651f4128a2468",url:"./mikutap/shared/sp/css/common.css"},{revision:"713eaa7e3248449389fd8cf91e4d2577",url:"./page/2/index.html"},{revision:"7eb0d6df683948931b830d91f8ca83a6",url:"./play/index.html"},{revision:"43de4eeb503c76b2ee1fd2d5ac5c62a1",url:"./posts/17931.html"},{revision:"d6728c8a283a6da51f9d4a92f6a0f446",url:"./posts/22938.html"},{revision:"7724be35e27edfd7bd48dc616fc7c40b",url:"./posts/24179.html"},{revision:"9c22f8242776d5876210e74d833e9ef6",url:"./posts/24549.html"},{revision:"1c8760b1594596a30d606a395b757fc9",url:"./posts/25909.html"},{revision:"2bcbba29bbad4c523bc14c8b950c362d",url:"./posts/28146.html"},{revision:"3e0e9b12c963db273b5bba6f035f200a",url:"./posts/32716.html"},{revision:"5bcd5a3a0c2f999cf87510c112c5f500",url:"./posts/39479.html"},{revision:"3b397e1ab3a54b4b851094f4b72dbe18",url:"./posts/4141.html"},{revision:"ca1fd881bc8f3a40d84881ff3e98ff48",url:"./posts/43359.html"},{revision:"39660c7c600bef1558890d72a7bc4e40",url:"./posts/47424.html"},{revision:"8d8ce15166fed1a487506b733a753cd7",url:"./posts/49939.html"},{revision:"cdf15d0ebd72d4a732a96272d23f7418",url:"./posts/5913.html"},{revision:"259b23fe2a4d1c8825ff61624154c057",url:"./posts/7578.html"},{revision:"959a8608aa1b8ad638e10bf090b69754",url:"./runner/index.html"},{revision:"3d2ce95f8630e5a73a8f5b505f5b91e8",url:"./say/index.html"},{revision:"12c0209a6b47b53cd191fd19ffa17e9c",url:"./search.json"},{revision:"f1768a4002993eb9ba8879b0643efe14",url:"./search/index.html"},{revision:"935eb50b24d97a184ca9623a91c0f616",url:"./t-rex/assets/css/t-rex.css"},{revision:"01f2014886ea4de08147a231bebfd958",url:"./t-rex/assets/js/index.js"},{revision:"7bc8783256a189ab13556a4f89a9b96c",url:"./t-rex/assets/js/t-rex.js"},{revision:"cad7798da0d84c8a6e55affb940bc76b",url:"./t-rex/index.html"},{revision:"724e0dea3a090a5014aafea67531a8d9",url:"./tags/Bug/index.html"},{revision:"56d9a837addd0e27a4b24c8427ef0e40",url:"./tags/Coding-Pages/index.html"},{revision:"ed9650139c337a87cb41f61e040adc2b",url:"./tags/Commands/index.html"},{revision:"4ba0781fa59ee4aeb4e40309779502bd",url:"./tags/Dev/index.html"},{revision:"eb858c78585dec8e42b6e7c044a717fa",url:"./tags/Emoji/index.html"},{revision:"7656e7462723e3944387d875e2f7ce1a",url:"./tags/GitHub-Actions/index.html"},{revision:"a71bc6d43234674ed648262b494f84ae",url:"./tags/GitHub/index.html"},{revision:"373d8ecc139ba4e9e5ad545b27c18ffc",url:"./tags/Hexo/index.html"},{revision:"dd3e3a184bea20a395cd01dafaa2994b",url:"./tags/index.html"},{revision:"47100b039b5fe05efda605d7aa7f36c3",url:"./tags/issues/index.html"},{revision:"50cb9e149aa48cbd6ad61ead12076164",url:"./tags/LeanCloud/index.html"},{revision:"d209516c97f6ccb1deaacc557e871d89",url:"./tags/UptimeRobot/index.html"},{revision:"c0d3c56b348ba3ae76a76025e92e40e6",url:"./tags/URL/index.html"},{revision:"2f59e15051947c9b24e5ce88b66d14c7",url:"./tags/Vercel/index.html"},{revision:"7db2e61c0d9c4bd2bd18a8d99dad7527",url:"./tags/wenyan-lang/index.html"},{revision:"58d21eca73fb34f3bc714cba3d6095dd",url:"./tags/Windows/index.html"},{revision:"848ba2f739746c013c63bd1cf60f7896",url:"./tags/文言文编程/index.html"},{revision:"d967912b2ebc72131b8f62d44c1482ae",url:"./tags/浏览器/index.html"},{revision:"6a324e54931eacede88d72d63e26a35c",url:"./tags/炫酷文字/index.html"},{revision:"e6e04b723def0cf815f8592e7c511d04",url:"./tags/网站存活监控/index.html"},{revision:"21a4f0349012bb52230d63ccfcdbae7b",url:"./timeline/index.html"},{revision:"fabf7271fcada1bc1f03c6f2aa92f982",url:"./vercel.json"}],{directoryIndex:null}),workbox.precaching.cleanupOutdatedCaches(),workbox.routing.registerRoute(/\.(?:png|jpg|jpeg|gif|bmp|webp|svg|ico)$/,new workbox.strategies.CacheFirst({cacheName:"images",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:259200}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/\.(?:eot|ttf|woff|woff2)$/,new workbox.strategies.CacheFirst({cacheName:"fonts",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/^https:\/\/fonts\.googleapis\.com/,new workbox.strategies.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets"})),workbox.routing.registerRoute(/^https:\/\/fonts\.gstatic\.com/,new workbox.strategies.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.googleAnalytics.initialize();