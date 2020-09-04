"use strict";var workboxVersion="5.1.3";importScripts("https://storage.googleapis.com/workbox-cdn/releases/".concat(workboxVersion,"/workbox-sw.js")),workbox.setConfig({modulePathPrefix:"https://storage.googleapis.com/workbox-cdn/releases/".concat(workboxVersion,"/")}),workbox.core.setCacheNameDetails({prefix:"Flexiston's Blog"}),workbox.core.skipWaiting(),workbox.core.clientsClaim(),workbox.precaching.precacheAndRoute([{revision:"7ede1cdd4fb6c198f0ab97bf07b3cde2",url:"./404.html"},{revision:"e097427eab4515d808430a223cc9243c",url:"./about/index.html"},{revision:"6845daad423c55760ff844d53ba7595b",url:"./apply-link/index.html"},{revision:"d92fb76e5b21028d5b9e93b207301e1f",url:"./archives/2020/04/index.html"},{revision:"d7b8ddd8a44ee2923d365914b700666f",url:"./archives/2020/05/index.html"},{revision:"3759676fda42d2846c066052e9d28194",url:"./archives/2020/06/index.html"},{revision:"49ac326db807272f368df2ab81b05835",url:"./archives/2020/07/index.html"},{revision:"76ae27c018045b6c6cffa0cad5ed6765",url:"./archives/2020/08/index.html"},{revision:"a47a05968a1e16ad8226dbd5f3405d11",url:"./archives/2020/index.html"},{revision:"2a93fac8eaf3cdb458315c0cc5169ee2",url:"./archives/2020/page/2/index.html"},{revision:"a930ed5136b0345572dcaa858eb3d141",url:"./archives/index.html"},{revision:"11f483b0917d4d5723685c459d2d31ca",url:"./archives/page/2/index.html"},{revision:"9fb351efc4b8a7db51d2d7325f60fb03",url:"./baidu_verify_spMQLbgc0m.html"},{revision:"493321397a4dfcce00d15d06cc0c6762",url:"./catch-cat.min.js"},{revision:"4f8d6c3c1753595334beb2d4a0ff2b76",url:"./catch-cat/index.html"},{revision:"c55b116c541ab3389aa4e0dd776beba4",url:"./categories/Bug/index.html"},{revision:"bbc2a002df81ac731a2a25b598879cc5",url:"./categories/Dev/GitHub/index.html"},{revision:"20bb952780bf4745e9a4eab78fd0cd54",url:"./categories/Dev/Hexo/index.html"},{revision:"559186651e8ad978ffde71951d1c7cf6",url:"./categories/Dev/index.html"},{revision:"46cfb92b99183193b3cadbd6994e49ba",url:"./categories/Dev/page/2/index.html"},{revision:"9ddbc0c5d7b68546c5d884d2bae6465d",url:"./categories/Dev/Vercel/index.html"},{revision:"d6e7e8bbf7c87278c28a8149b385c232",url:"./categories/Dev/Windows/index.html"},{revision:"aa48976837e4364ae9878e827a01a277",url:"./categories/Dev/工具/index.html"},{revision:"5d40f59bbdc2133220eda8f74e72c25a",url:"./categories/Emoji/index.html"},{revision:"0eadc2d7aceee40934b3987e9f7a8eea",url:"./categories/GitHub/index.html"},{revision:"10f55bd44ead880fb98f04967bdc44dc",url:"./categories/index.html"},{revision:"7c88a0d6cceb7923f6b9c88857fcae64",url:"./categories/文言文编程/index.html"},{revision:"579d30409d10362111159b11dc09f121",url:"./css/style/flesx.css"},{revision:"ddb82c3174916eb6f55357c44758be89",url:"./css/style/note.css"},{revision:"fc764d9a99cd208d780999d32b2c47da",url:"./css/style/timeline.l.css"},{revision:"432e1fde311abc4cb282ac6cc045a2ca",url:"./css/style/valine.l.css"},{revision:"b2e5f90d67fcd5bde63f51b16ba4d5f2",url:"./favicon.png"},{revision:"1e6034e382d3e8b46ccc3dd08a770383",url:"./friends/index.html"},{revision:"3b31b99ed09b10d8c9d1d9c400bce1cd",url:"./index.html"},{revision:"3eaec3b0473d3042cc8dea3ea181aa41",url:"./js/app.js"},{revision:"f564bbb092181f20953084c3ed507461",url:"./manifest.json"},{revision:"b8d9ffd5cb39155aba7f14da3dc77eb3",url:"./map/index.html"},{revision:"1b3819adb7fdc61d51e9784bcec93a0d",url:"./mikutap/css/mikutap.css"},{revision:"5279a09d7a75b44f3c35364ea2a8f08b",url:"./mikutap/data/main/main.json"},{revision:"d94b20e465ff7289142b647c1ac142ea",url:"./mikutap/data/track/track.json"},{revision:"4b63179db3c45dfd9078a252b2575cd1",url:"./mikutap/icon.png"},{revision:"56ba4222adad2322b0168981868bc934",url:"./mikutap/index.html"},{revision:"936ff3edd8373c243f56bf9c0fc66ec8",url:"./mikutap/js/mikutap.min.js"},{revision:"ee0a7ce469b3a15bd2c57ef76f38dbc6",url:"./mikutap/shared/css/common-1.css"},{revision:"a1aba3a1001e09230cbfdb18d522cdbc",url:"./mikutap/shared/css/index-1.css"},{revision:"43e49a61141c64bcf8d7981f7a6a26f5",url:"./mikutap/shared/js/common-2.min.js"},{revision:"b74c8c57d13ad72401b651f4128a2468",url:"./mikutap/shared/sp/css/common.css"},{revision:"02e85269f731a341309cf7aef13789bd",url:"./page/2/index.html"},{revision:"b6de973e4e416b4fbe8bfb99f3e4ecf2",url:"./play/index.html"},{revision:"cb384fede1af8b186190a4b8b8caa384",url:"./posts/17931.html"},{revision:"46245184ab84a5344adcd4ec44eda880",url:"./posts/22938.html"},{revision:"f5e12d8897d9d5dc9aed2b971ba2d252",url:"./posts/24179.html"},{revision:"54eb0796f00d3766971fa5408ac38c17",url:"./posts/24549.html"},{revision:"d33824061390b4388b870b9513d96d99",url:"./posts/25909.html"},{revision:"8638236871276b23022c558ce668f9f4",url:"./posts/28146.html"},{revision:"abb5ecddb8c0740e563a7e02625d20a4",url:"./posts/32716.html"},{revision:"a1d844ba5ea9da5183d28a09c9ee9d93",url:"./posts/39479.html"},{revision:"baee16bb011e68d125da0481890e87d6",url:"./posts/4141.html"},{revision:"999f6f463bb00690016b6a82f3f4a381",url:"./posts/43359.html"},{revision:"7aed17e8cbd14e0cab3a998f1139cedd",url:"./posts/47424.html"},{revision:"37dccf94f877fa53d222fec5d3cf1c7f",url:"./posts/49939.html"},{revision:"7301b640704810c3b83a575cf2c7ec78",url:"./posts/5913.html"},{revision:"ca96e753bfaf423c8c830cc034ea7339",url:"./posts/7578.html"},{revision:"2ef4297de0249acb8cb4e1b1ea40f04f",url:"./runner/index.html"},{revision:"2593f34bf367d11c5da830d4c32fa364",url:"./say/index.html"},{revision:"a0ff454766e803947e51e71f1053de1c",url:"./search.json"},{revision:"4a1f617c26eb76ddc286ba78ca11a4e7",url:"./search/index.html"},{revision:"935eb50b24d97a184ca9623a91c0f616",url:"./t-rex/assets/css/t-rex.css"},{revision:"01f2014886ea4de08147a231bebfd958",url:"./t-rex/assets/js/index.js"},{revision:"7bc8783256a189ab13556a4f89a9b96c",url:"./t-rex/assets/js/t-rex.js"},{revision:"cad7798da0d84c8a6e55affb940bc76b",url:"./t-rex/index.html"},{revision:"9b50006161775b404c4eb9af774626d7",url:"./tags/Bug/index.html"},{revision:"791550abe90b25647d8d1b31f9744011",url:"./tags/Coding-Pages/index.html"},{revision:"9895eeadc610cf2259c8f60397f8e43f",url:"./tags/Commands/index.html"},{revision:"9bc13e4aabaf2f14a8b1e8bc2dd75932",url:"./tags/Dev/index.html"},{revision:"7930fc693a0236af88ba225f7ed9e9f7",url:"./tags/Emoji/index.html"},{revision:"78f64bd641bd0c8367497323b49f65d9",url:"./tags/GitHub-Actions/index.html"},{revision:"027f84c45ef032bac955b2d102a2c45a",url:"./tags/GitHub/index.html"},{revision:"eccc858b641a758c9c9b1697debc0bca",url:"./tags/Hexo/index.html"},{revision:"53354b948b62db42e58bc063fe43bb10",url:"./tags/index.html"},{revision:"4a255e5000ba3b3867ee05064e01167c",url:"./tags/issues/index.html"},{revision:"59e5d0ba010ebcb07c4a31d13f25a4f6",url:"./tags/LeanCloud/index.html"},{revision:"6cc4d07b31b3ae93852cd548e5962133",url:"./tags/UptimeRobot/index.html"},{revision:"0d3c28617c78df48aacd7534ef748590",url:"./tags/URL/index.html"},{revision:"31e9ee86c06dd53390f8630901d4790a",url:"./tags/Vercel/index.html"},{revision:"6177b78f9ca0b537de764801646cbfed",url:"./tags/wenyan-lang/index.html"},{revision:"0cc688c486afdcfe9a1b4637e837f101",url:"./tags/Windows/index.html"},{revision:"fe12a73d502a2b56cce1e8ebef680fc4",url:"./tags/文言文编程/index.html"},{revision:"0a26f0765ec697e2dd038e8a9a6aa121",url:"./tags/浏览器/index.html"},{revision:"43c0e05d2c5b96576f727745aaf85634",url:"./tags/炫酷文字/index.html"},{revision:"6aabc92a4d91231d603bc2bcfa984094",url:"./tags/网站存活监控/index.html"},{revision:"d206581c48505e07a3f34e66a728fe16",url:"./timeline/index.html"},{revision:"fabf7271fcada1bc1f03c6f2aa92f982",url:"./vercel.json"}],{directoryIndex:null}),workbox.precaching.cleanupOutdatedCaches(),workbox.routing.registerRoute(/\.(?:png|jpg|jpeg|gif|bmp|webp|svg|ico)$/,new workbox.strategies.CacheFirst({cacheName:"images",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:259200}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/\.(?:eot|ttf|woff|woff2)$/,new workbox.strategies.CacheFirst({cacheName:"fonts",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/^https:\/\/fonts\.googleapis\.com/,new workbox.strategies.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets"})),workbox.routing.registerRoute(/^https:\/\/fonts\.gstatic\.com/,new workbox.strategies.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.googleAnalytics.initialize();