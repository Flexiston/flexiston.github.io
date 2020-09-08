"use strict";var workboxVersion="5.1.3";importScripts("https://storage.googleapis.com/workbox-cdn/releases/".concat(workboxVersion,"/workbox-sw.js")),workbox.setConfig({modulePathPrefix:"https://storage.googleapis.com/workbox-cdn/releases/".concat(workboxVersion,"/")}),workbox.core.setCacheNameDetails({prefix:"Flexiston's Blog"}),workbox.core.skipWaiting(),workbox.core.clientsClaim(),workbox.precaching.precacheAndRoute([{revision:"af1e5264923b8d5e7820854b0a7d1721",url:"./404.html"},{revision:"2757bae9dd36919d505444a21be20593",url:"./about/index.html"},{revision:"e49b352f69ba1351c4ec13574cec3082",url:"./apply-link/index.html"},{revision:"4ea9f9ccae8bcfc274e6bbed2dafb1b4",url:"./archives/2020/04/index.html"},{revision:"110610b9ede32cb0096671b21f4741ac",url:"./archives/2020/05/index.html"},{revision:"0c4243dd9ef022e95a22d64ecde12f98",url:"./archives/2020/06/index.html"},{revision:"179fd37abce5664c37aeedfffe4ecea6",url:"./archives/2020/07/index.html"},{revision:"ce3d5a963bf4dba542680f2413f49bc5",url:"./archives/2020/08/index.html"},{revision:"b7c0a41364dc3480b8dce5bfbe894db1",url:"./archives/2020/index.html"},{revision:"a4ad54cdef41dc4071ab4d0c2ee99c8f",url:"./archives/2020/page/2/index.html"},{revision:"4e57797067c46f611b729d6501557dc2",url:"./archives/index.html"},{revision:"939b0d8bc5a339770b5883a89cef4834",url:"./archives/page/2/index.html"},{revision:"9fb351efc4b8a7db51d2d7325f60fb03",url:"./baidu_verify_spMQLbgc0m.html"},{revision:"493321397a4dfcce00d15d06cc0c6762",url:"./catch-cat.min.js"},{revision:"54cbd8d48dfea26db71821db383922f4",url:"./catch-cat/index.html"},{revision:"dfc643fad1cf8d7591baa33def4efd14",url:"./categories/Bug/index.html"},{revision:"8c8b4f69a78d0a6c61e00725e21386d5",url:"./categories/Dev/GitHub/index.html"},{revision:"b9fb570ca527aecdca74cc0fb3a63269",url:"./categories/Dev/Hexo/index.html"},{revision:"f14747f7b8cd841f5f13084082111685",url:"./categories/Dev/index.html"},{revision:"034a2377e4f06dab9e27fb221d74f446",url:"./categories/Dev/page/2/index.html"},{revision:"cd85a0ff7ed58e19021f2137f74dd9c7",url:"./categories/Dev/Vercel/index.html"},{revision:"ba8326297bf22bfc22fbbb8e24e8a840",url:"./categories/Dev/Windows/index.html"},{revision:"7237fcaf7b27947dd41e4b266f95685c",url:"./categories/Dev/工具/index.html"},{revision:"4e2f249a9a6d42b04f9901cf0869ec01",url:"./categories/Emoji/index.html"},{revision:"73cb97999768f7eb4cb22a5f3101bdd7",url:"./categories/GitHub/index.html"},{revision:"2ba19828e51f3695ac34ccc43f64a295",url:"./categories/index.html"},{revision:"ec18630e5198cac2e929419a16d257a7",url:"./categories/文言文编程/index.html"},{revision:"a4d32eca2ea2e05a5245667b4f66919a",url:"./changelog/index.html"},{revision:"359a1e71674c135b6598b08037e962b9",url:"./css/style/dark.css"},{revision:"05f87965699ce1b1cfedfcfda7785c9d",url:"./css/style/flesx.css"},{revision:"1407dc11577c56dde90dce10aa71bc50",url:"./css/style/note.css"},{revision:"fc764d9a99cd208d780999d32b2c47da",url:"./css/style/timeline.l.css"},{revision:"ad6908f251401b500ce180848dc739a3",url:"./css/style/valine.l.css"},{revision:"72622e54aac09aaa381730a70676a78f",url:"./favicon.ico"},{revision:"6676c0120ec64da5abd2e9d518f8ee81",url:"./friends/index.html"},{revision:"df34c2ea9556dab149f4ce9b052eb1d5",url:"./index.html"},{revision:"98259345e62bf5e8cb18cc6f5aea951e",url:"./js/b.js"},{revision:"f564bbb092181f20953084c3ed507461",url:"./manifest.json"},{revision:"8189289ae9c29c275168ea1607fc0206",url:"./map/index.html"},{revision:"1b3819adb7fdc61d51e9784bcec93a0d",url:"./mikutap/css/mikutap.css"},{revision:"5279a09d7a75b44f3c35364ea2a8f08b",url:"./mikutap/data/main/main.json"},{revision:"d94b20e465ff7289142b647c1ac142ea",url:"./mikutap/data/track/track.json"},{revision:"4b63179db3c45dfd9078a252b2575cd1",url:"./mikutap/icon.png"},{revision:"56ba4222adad2322b0168981868bc934",url:"./mikutap/index.html"},{revision:"936ff3edd8373c243f56bf9c0fc66ec8",url:"./mikutap/js/mikutap.min.js"},{revision:"ee0a7ce469b3a15bd2c57ef76f38dbc6",url:"./mikutap/shared/css/common-1.css"},{revision:"a1aba3a1001e09230cbfdb18d522cdbc",url:"./mikutap/shared/css/index-1.css"},{revision:"43e49a61141c64bcf8d7981f7a6a26f5",url:"./mikutap/shared/js/common-2.min.js"},{revision:"b74c8c57d13ad72401b651f4128a2468",url:"./mikutap/shared/sp/css/common.css"},{revision:"5ceb07c1fbaf56da3e1323b0ee1fc2e3",url:"./page/2/index.html"},{revision:"e929e74c9f09576236c7a479947a95f0",url:"./play/index.html"},{revision:"7087d354f81c4c332a9bda887ca8a45e",url:"./posts/17931.html"},{revision:"b202e1693eeabb262f444196feb4a276",url:"./posts/22938.html"},{revision:"34c546d2cb922b6cbd7b05df273cc328",url:"./posts/24179.html"},{revision:"8f5fcb455487dbcb0af9f2b3c9ca9483",url:"./posts/24549.html"},{revision:"6d607e96dd4f3cde66540404f59d1d4b",url:"./posts/25909.html"},{revision:"e88525462a7b72ffe1245d03f1c73740",url:"./posts/28146.html"},{revision:"80fd48bf66d8ce681bbc2cc20846506a",url:"./posts/32716.html"},{revision:"c0e909ff21c659bff05581e1445f84e0",url:"./posts/39479.html"},{revision:"e67a981a31487161ac2b90610674e930",url:"./posts/4141.html"},{revision:"71a71cf33915fc605af2c22d91a67c57",url:"./posts/43359.html"},{revision:"46d59a5b8a737b0acb7af3540f4fb326",url:"./posts/47424.html"},{revision:"19bb4b01e2170760008707ba7ccd9667",url:"./posts/49939.html"},{revision:"7bda254470ede43e1f7ba6f408a0225f",url:"./posts/5913.html"},{revision:"e9f8aebcac231d15860330862e5db74e",url:"./posts/7578.html"},{revision:"9f94c588d3d2f9fea645af8467563da0",url:"./runner/index.html"},{revision:"e23c1c36bdbce1d8e8f67d101850b6bc",url:"./say/index.html"},{revision:"1e22bdf5a4836e15228f26b3169c1b15",url:"./search.json"},{revision:"ea22e6ba24fedfea4a6ea2b0a103bb75",url:"./search/index.html"},{revision:"935eb50b24d97a184ca9623a91c0f616",url:"./t-rex/assets/css/t-rex.css"},{revision:"01f2014886ea4de08147a231bebfd958",url:"./t-rex/assets/js/index.js"},{revision:"7bc8783256a189ab13556a4f89a9b96c",url:"./t-rex/assets/js/t-rex.js"},{revision:"cad7798da0d84c8a6e55affb940bc76b",url:"./t-rex/index.html"},{revision:"18b68f4fada6dcc34f526f4a10076bfc",url:"./tags/Bug/index.html"},{revision:"12cc46a8fbfd14eb502233b68239cb10",url:"./tags/Coding-Pages/index.html"},{revision:"266964f82ce2336a1b35e432d39da41c",url:"./tags/Commands/index.html"},{revision:"1200f81aeac41629413aba2d47de1ae3",url:"./tags/Dev/index.html"},{revision:"1ae2e411da61cf77e6cbe3948761a2b5",url:"./tags/Emoji/index.html"},{revision:"83a6c4ea7d98ae4ceb219a887dd43657",url:"./tags/GitHub-Actions/index.html"},{revision:"f828b95c811926114a0eca6fe1e04482",url:"./tags/GitHub/index.html"},{revision:"9669ca357751e307a93665a9ce216c4f",url:"./tags/Hexo/index.html"},{revision:"74362680eb3616891472a79e734e3d19",url:"./tags/index.html"},{revision:"c309180baffced500eac006938afacbe",url:"./tags/issues/index.html"},{revision:"939584cb0d6c8243b0fa036a1af6be19",url:"./tags/LeanCloud/index.html"},{revision:"f8dd672a4927b958ce97dea69f06ecd1",url:"./tags/UptimeRobot/index.html"},{revision:"f1c274bfc0f8e9947f2c7bf65ce8885f",url:"./tags/URL/index.html"},{revision:"55337e3c98d0b7028cefb73d53f054f7",url:"./tags/Vercel/index.html"},{revision:"1c85fb9b87f3f68e45b4a3f1dfead4af",url:"./tags/wenyan-lang/index.html"},{revision:"c9318ff83942941f525c56b5b26cac80",url:"./tags/Windows/index.html"},{revision:"89141d9cd285d322b24ce6302499a709",url:"./tags/文言文编程/index.html"},{revision:"68de3ff6a4d0c10c2275fdd206885779",url:"./tags/浏览器/index.html"},{revision:"719afd67b18f57d4e450cc44e7d1f471",url:"./tags/炫酷文字/index.html"},{revision:"2eae43718892ad07ec7643e1429f6c5a",url:"./tags/网站存活监控/index.html"},{revision:"fabf7271fcada1bc1f03c6f2aa92f982",url:"./vercel.json"}],{directoryIndex:null}),workbox.precaching.cleanupOutdatedCaches(),workbox.routing.registerRoute(/\.(?:png|jpg|jpeg|gif|bmp|webp|svg|ico)$/,new workbox.strategies.CacheFirst({cacheName:"images",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:259200}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/\.(?:eot|ttf|woff|woff2)$/,new workbox.strategies.CacheFirst({cacheName:"fonts",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/^https:\/\/fonts\.googleapis\.com/,new workbox.strategies.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets"})),workbox.routing.registerRoute(/^https:\/\/fonts\.gstatic\.com/,new workbox.strategies.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.googleAnalytics.initialize();