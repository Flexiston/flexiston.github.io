"use strict";var workboxVersion="5.1.3";importScripts("https://storage.googleapis.com/workbox-cdn/releases/".concat(workboxVersion,"/workbox-sw.js")),workbox.setConfig({modulePathPrefix:"https://storage.googleapis.com/workbox-cdn/releases/".concat(workboxVersion,"/")}),workbox.core.setCacheNameDetails({prefix:"Flexiston's Blog"}),workbox.core.skipWaiting(),workbox.core.clientsClaim(),workbox.precaching.precacheAndRoute([{revision:"06146de41a91b2a1d527645951149ccc",url:"./404.html"},{revision:"22a77a079fd2b43471b098f9f77b91bd",url:"./about/index.html"},{revision:"dd2943e5b3833201dcedf195bb9c5852",url:"./apply-link/index.html"},{revision:"269131a4a8e36ce10d40f4ee8e0309cc",url:"./archives/2020/04/index.html"},{revision:"c1625063ccfc3facc04d702c500a0dac",url:"./archives/2020/05/index.html"},{revision:"60feaf66b403643a226667257acd9952",url:"./archives/2020/06/index.html"},{revision:"4e00ac6e501438cb336b95cd1233a398",url:"./archives/2020/07/index.html"},{revision:"a98a51b109cd25a5648f08c1285d1699",url:"./archives/2020/08/index.html"},{revision:"f1d5b921a87e08152042af6e4dad579a",url:"./archives/2020/index.html"},{revision:"0a39225728649c841580dcda5744d4c2",url:"./archives/2020/page/2/index.html"},{revision:"c79c2b7f9909493f9100ede069ad5cb8",url:"./archives/index.html"},{revision:"5389b1b91345ad17f3268a6b12ab7080",url:"./archives/page/2/index.html"},{revision:"9fb351efc4b8a7db51d2d7325f60fb03",url:"./baidu_verify_spMQLbgc0m.html"},{revision:"493321397a4dfcce00d15d06cc0c6762",url:"./catch-cat.min.js"},{revision:"8c5c923fa14e1aca5ee3bffb3ee75edd",url:"./catch-cat/index.html"},{revision:"0bf7452440295ad5c9f48fe7574b842c",url:"./categories/Bug/index.html"},{revision:"a3057f3a50f1e3e092ec7f251339727e",url:"./categories/Dev/GitHub/index.html"},{revision:"b1594e6e90c3adabce94295902f02809",url:"./categories/Dev/Hexo/index.html"},{revision:"dd3dbc0339dc12c8d8419840d1e25566",url:"./categories/Dev/index.html"},{revision:"95a2752905b2bcdc75624673fa0346f2",url:"./categories/Dev/page/2/index.html"},{revision:"278dfaa31910bc5bab7ca9efae7d621d",url:"./categories/Dev/Vercel/index.html"},{revision:"4851a67b2af185c5a3c76ff7910ef100",url:"./categories/Dev/Windows/index.html"},{revision:"24464e978e9fea79e20d77905292fad2",url:"./categories/Dev/工具/index.html"},{revision:"0eee56ff74826c7e1a51d9795ab89c23",url:"./categories/Emoji/index.html"},{revision:"b8e6665e37f9f1fb3375ea978443a8c5",url:"./categories/GitHub/index.html"},{revision:"1a7efead3b2a3c4842a20371dd72fcb8",url:"./categories/index.html"},{revision:"4092fb63b41cc8284b21063c311dcd44",url:"./categories/文言文编程/index.html"},{revision:"0a2d73fbd5d9be522a8c39bcdbd10651",url:"./css/style/flesx.css"},{revision:"1407dc11577c56dde90dce10aa71bc50",url:"./css/style/note.css"},{revision:"fc764d9a99cd208d780999d32b2c47da",url:"./css/style/timeline.l.css"},{revision:"41aa862d91540c18bb47fb4ecbb38e4a",url:"./css/style/valine.l.css"},{revision:"b2e5f90d67fcd5bde63f51b16ba4d5f2",url:"./favicon.png"},{revision:"aa040ae572a820e44f59e1cf3194d273",url:"./friends/index.html"},{revision:"0103a0150a495e88243f0bc6aacbcd49",url:"./index.html"},{revision:"cca672e63dfc0f467e27a7da912d00d4",url:"./js/app.js"},{revision:"f564bbb092181f20953084c3ed507461",url:"./manifest.json"},{revision:"cc1fa59c66272efe75cedcb81eda826e",url:"./map/index.html"},{revision:"1b3819adb7fdc61d51e9784bcec93a0d",url:"./mikutap/css/mikutap.css"},{revision:"5279a09d7a75b44f3c35364ea2a8f08b",url:"./mikutap/data/main/main.json"},{revision:"d94b20e465ff7289142b647c1ac142ea",url:"./mikutap/data/track/track.json"},{revision:"4b63179db3c45dfd9078a252b2575cd1",url:"./mikutap/icon.png"},{revision:"56ba4222adad2322b0168981868bc934",url:"./mikutap/index.html"},{revision:"936ff3edd8373c243f56bf9c0fc66ec8",url:"./mikutap/js/mikutap.min.js"},{revision:"ee0a7ce469b3a15bd2c57ef76f38dbc6",url:"./mikutap/shared/css/common-1.css"},{revision:"a1aba3a1001e09230cbfdb18d522cdbc",url:"./mikutap/shared/css/index-1.css"},{revision:"43e49a61141c64bcf8d7981f7a6a26f5",url:"./mikutap/shared/js/common-2.min.js"},{revision:"b74c8c57d13ad72401b651f4128a2468",url:"./mikutap/shared/sp/css/common.css"},{revision:"b0f3b7443cd1710ac14720813b30938d",url:"./page/2/index.html"},{revision:"294a4fb5c7a4f45065dfbbef553dc1ab",url:"./play/index.html"},{revision:"201e45ee8a91f23423f130cfef5434f9",url:"./posts/17931.html"},{revision:"1a76601607cc2c5b24651c89bf239279",url:"./posts/22938.html"},{revision:"3806c302dd7d59007012bf3d25b04fb0",url:"./posts/24179.html"},{revision:"a6559026dba97add869f52f14d287585",url:"./posts/24549.html"},{revision:"a6621f8dc51fce089fb97ddb49432fa7",url:"./posts/25909.html"},{revision:"331bf9e3babb7052d4fdd8c39605598f",url:"./posts/28146.html"},{revision:"9f9825d33d7dd8456e080f9f55dd6e87",url:"./posts/32716.html"},{revision:"f47877bd3c0eeaa474d82aadee6e48d7",url:"./posts/39479.html"},{revision:"d3dcfdce6cce872e2d8a3d5a489d8c17",url:"./posts/4141.html"},{revision:"72b64fd80780139574be8925028d9b20",url:"./posts/43359.html"},{revision:"180785d7094593880e2bdb208ede2d82",url:"./posts/47424.html"},{revision:"aec167251fe684147e3d4988d42dec11",url:"./posts/49939.html"},{revision:"695af459287a83df5cb9f627ffb2ad7a",url:"./posts/5913.html"},{revision:"7c684413f7ca354976ca09fb1879de18",url:"./posts/7578.html"},{revision:"921a680e9861bb37db8b192b0a1562cf",url:"./runner/index.html"},{revision:"8498c91d5e381d850c7f0702f3f1480f",url:"./say/index.html"},{revision:"50788a95d85ef5d359cb4ff7ae14b3c1",url:"./search.json"},{revision:"a07f167dff5e1df64483a9e8b184546b",url:"./search/index.html"},{revision:"935eb50b24d97a184ca9623a91c0f616",url:"./t-rex/assets/css/t-rex.css"},{revision:"01f2014886ea4de08147a231bebfd958",url:"./t-rex/assets/js/index.js"},{revision:"7bc8783256a189ab13556a4f89a9b96c",url:"./t-rex/assets/js/t-rex.js"},{revision:"cad7798da0d84c8a6e55affb940bc76b",url:"./t-rex/index.html"},{revision:"1af66331d5bf184cf7074425fa9d142d",url:"./tags/Bug/index.html"},{revision:"e08df33e67f3ec36665acfa9521926c3",url:"./tags/Coding-Pages/index.html"},{revision:"1cae625c0c3204027bcb64c90744747b",url:"./tags/Commands/index.html"},{revision:"40bc6f2abf813b551393587a010e8431",url:"./tags/Dev/index.html"},{revision:"17569353a5f6ec01660e756331bac562",url:"./tags/Emoji/index.html"},{revision:"7bccdf98b4ac6be268a5c2075109d645",url:"./tags/GitHub-Actions/index.html"},{revision:"a392ca4e9abdfd7a6bf871f8d3283058",url:"./tags/GitHub/index.html"},{revision:"44c6e81a8c6b83dbf9a53ceed5fed389",url:"./tags/Hexo/index.html"},{revision:"42a8fae7bce5405729b9cb3a13cf05e7",url:"./tags/index.html"},{revision:"2736b41dfbf94f1b30dc0ec5d1f1afac",url:"./tags/issues/index.html"},{revision:"3d453be5982cbbd9d1841255ab0bfad4",url:"./tags/LeanCloud/index.html"},{revision:"590642b667509716a37ff8882327500d",url:"./tags/UptimeRobot/index.html"},{revision:"2be50dc7ab0db0a949f76e16c0e952ae",url:"./tags/URL/index.html"},{revision:"19684039c2d22b48d7f125fb87c58223",url:"./tags/Vercel/index.html"},{revision:"ff2bbadebdbec33251e42c6b1bb32173",url:"./tags/wenyan-lang/index.html"},{revision:"9b01ef3a03472831e214f09151724aac",url:"./tags/Windows/index.html"},{revision:"1ce6a81573ebb4ab4e811a3abef29ebb",url:"./tags/文言文编程/index.html"},{revision:"f923c9d5a302a7b27e8d5d7425568765",url:"./tags/浏览器/index.html"},{revision:"cec33bcb7db5c45bc8b707024e129b2c",url:"./tags/炫酷文字/index.html"},{revision:"f4dcc7081e1a0d211763d976bf5b7da1",url:"./tags/网站存活监控/index.html"},{revision:"a83e4d5eff92a8edc7adfb4bb90a8d02",url:"./timeline/index.html"},{revision:"fabf7271fcada1bc1f03c6f2aa92f982",url:"./vercel.json"}],{directoryIndex:null}),workbox.precaching.cleanupOutdatedCaches(),workbox.routing.registerRoute(/\.(?:png|jpg|jpeg|gif|bmp|webp|svg|ico)$/,new workbox.strategies.CacheFirst({cacheName:"images",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:259200}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/\.(?:eot|ttf|woff|woff2)$/,new workbox.strategies.CacheFirst({cacheName:"fonts",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/^https:\/\/fonts\.googleapis\.com/,new workbox.strategies.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets"})),workbox.routing.registerRoute(/^https:\/\/fonts\.gstatic\.com/,new workbox.strategies.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.googleAnalytics.initialize();