"use strict";var workboxVersion="5.1.3";importScripts("https://storage.googleapis.com/workbox-cdn/releases/".concat(workboxVersion,"/workbox-sw.js")),workbox.setConfig({modulePathPrefix:"https://storage.googleapis.com/workbox-cdn/releases/".concat(workboxVersion,"/")}),workbox.core.setCacheNameDetails({prefix:"Flexiston's Blog"}),workbox.core.skipWaiting(),workbox.core.clientsClaim(),workbox.precaching.precacheAndRoute([{revision:"3e45940ccda5daa42a6aa62c14b2815d",url:"./404.html"},{revision:"fecea51d21ef03abb75716c13f1f3445",url:"./about/index.html"},{revision:"599cc9347e498096cc1c412a9d46fb4e",url:"./apply-link/index.html"},{revision:"540fc7d75cec7624455114b51745b724",url:"./archives/2020/04/index.html"},{revision:"5f864f48ad0827e6cbe7fe23d9f8924b",url:"./archives/2020/05/index.html"},{revision:"6d8cee5e9ad88e137615aa519bce5de1",url:"./archives/2020/06/index.html"},{revision:"58a07e173ac04024b9e2e95fe381db15",url:"./archives/2020/07/index.html"},{revision:"3aa13be951e680817144ec0b1b4b7117",url:"./archives/2020/08/index.html"},{revision:"d06caac49e7507a741b5826e08ccf7af",url:"./archives/2020/index.html"},{revision:"5e634ac2a976128ab811fd665b5adc9e",url:"./archives/2020/page/2/index.html"},{revision:"0d7b66327e7811a4c09e9b37b1b24cbc",url:"./archives/index.html"},{revision:"f87effea4eb3b671f6c4f77e43b992d1",url:"./archives/page/2/index.html"},{revision:"493321397a4dfcce00d15d06cc0c6762",url:"./catch-cat.min.js"},{revision:"79e73ad0b3fb0bdaf09eec8db0be287b",url:"./catch-cat/index.html"},{revision:"c2120986a8304ea09ee7925662377ab5",url:"./categories/Bug/index.html"},{revision:"d2318e770443d1b02fa7f4946c098b33",url:"./categories/Dev/GitHub/index.html"},{revision:"b1a355e63445e2bf0e9716d0cec77277",url:"./categories/Dev/Hexo/index.html"},{revision:"4d8a6ec1b9b010a4e0bc75c85ce41ba7",url:"./categories/Dev/index.html"},{revision:"588b7b3c83405e3def46a69b5d893674",url:"./categories/Dev/page/2/index.html"},{revision:"29a66d31b2b143f538dec9297864ea51",url:"./categories/Dev/Vercel/index.html"},{revision:"34b4822895e1622f62a968eb49ff9af1",url:"./categories/Dev/Windows/index.html"},{revision:"5c14333bc75710ed26943dacc72048e2",url:"./categories/Dev/工具/index.html"},{revision:"9869601138bce62201343e3e8e2b64bd",url:"./categories/Emoji/index.html"},{revision:"b64c2ba3455fa622ee693ffc78123084",url:"./categories/GitHub/index.html"},{revision:"e799584a109e3b7893023741261978c7",url:"./categories/index.html"},{revision:"e970a7e962805285cbed52738d9e5717",url:"./categories/文言文编程/index.html"},{revision:"1d6db2e845ee6c20989cb6e71941d8ac",url:"./css/style/main.css"},{revision:"ddb82c3174916eb6f55357c44758be89",url:"./css/style/note.css"},{revision:"6195028e0fc1e71cdc78abed6afdb8e3",url:"./css/style/timeline.l.css"},{revision:"432e1fde311abc4cb282ac6cc045a2ca",url:"./css/style/valine.l.css"},{revision:"b2e5f90d67fcd5bde63f51b16ba4d5f2",url:"./favicon.png"},{revision:"1efb8dddc93a7234c1217895e654075f",url:"./friends/index.html"},{revision:"3f59539f4fcc89146786b98470cbf22c",url:"./index.html"},{revision:"0db1ccc0f70e2d803bcf14ac58679f8d",url:"./js/app.js"},{revision:"f564bbb092181f20953084c3ed507461",url:"./manifest.json"},{revision:"d1e3fc6f952a8de351b53a8bd97e8fc5",url:"./map/index.html"},{revision:"1b3819adb7fdc61d51e9784bcec93a0d",url:"./mikutap/css/mikutap.css"},{revision:"5279a09d7a75b44f3c35364ea2a8f08b",url:"./mikutap/data/main/main.json"},{revision:"d94b20e465ff7289142b647c1ac142ea",url:"./mikutap/data/track/track.json"},{revision:"4b63179db3c45dfd9078a252b2575cd1",url:"./mikutap/icon.png"},{revision:"7215914e2364de945c6b88cf2e97b8ab",url:"./mikutap/index.html"},{revision:"936ff3edd8373c243f56bf9c0fc66ec8",url:"./mikutap/js/mikutap.min.js"},{revision:"ee0a7ce469b3a15bd2c57ef76f38dbc6",url:"./mikutap/shared/css/common-1.css"},{revision:"a1aba3a1001e09230cbfdb18d522cdbc",url:"./mikutap/shared/css/index-1.css"},{revision:"43e49a61141c64bcf8d7981f7a6a26f5",url:"./mikutap/shared/js/common-2.min.js"},{revision:"b74c8c57d13ad72401b651f4128a2468",url:"./mikutap/shared/sp/css/common.css"},{revision:"ef6ad652e5a7d9b323e0d792bf4ce66a",url:"./page/2/index.html"},{revision:"427823a477f3ab0901e4370f440e9c5f",url:"./play/index.html"},{revision:"2d48aa4f8d82040e5296d333f0b12722",url:"./posts/17931.html"},{revision:"fb497f5b33b5abedbf5597ca0600e500",url:"./posts/22938.html"},{revision:"daccf897235db1db47905db90d4572c3",url:"./posts/24179.html"},{revision:"5be08b7e7574719645802bc262b44fdb",url:"./posts/24549.html"},{revision:"ae5bcaef1aa72a8f0ccf79c46edd2cd9",url:"./posts/25909.html"},{revision:"9a393f06809ae4cf2ce233ec5aeb4a1d",url:"./posts/28146.html"},{revision:"913d344c411915f83dca3ed939939831",url:"./posts/32716.html"},{revision:"32ae2bd9288a53b57a0a41f05cf0b675",url:"./posts/39479.html"},{revision:"4d1e9dddb3d450261e2bb2fafff83700",url:"./posts/4141.html"},{revision:"ee753ba2ce9436e7c189cb2a081f1c9b",url:"./posts/43359.html"},{revision:"531a362285f80617c75b86bfcf2cb07f",url:"./posts/47424.html"},{revision:"60265b9bd3d5b8bc1914dc0840934fee",url:"./posts/49939.html"},{revision:"b7394a3878dbb2e1a3e22f2909fb38a4",url:"./posts/5913.html"},{revision:"ec5c4e09bffccd6bf46bf100045f7f50",url:"./posts/7578.html"},{revision:"b60fe83215fbb9dfd2930a36cb655610",url:"./runner/index.html"},{revision:"c273df6628cd2b8e86949f2115592d38",url:"./say/index.html"},{revision:"c50e6e9eabcd50e3970d371219f1c2b3",url:"./search.json"},{revision:"9bab9fd938f85baee85ae471a03c2595",url:"./search/index.html"},{revision:"935eb50b24d97a184ca9623a91c0f616",url:"./t-rex/assets/css/t-rex.css"},{revision:"01f2014886ea4de08147a231bebfd958",url:"./t-rex/assets/js/index.js"},{revision:"7bc8783256a189ab13556a4f89a9b96c",url:"./t-rex/assets/js/t-rex.js"},{revision:"b23d0321aaa779beece14c072e74e60f",url:"./t-rex/index.html"},{revision:"2a7d68ee26946762c7e3b3ae70da262c",url:"./tags/Bug/index.html"},{revision:"a142dcc0fe6ede300728b0f9a02eaacc",url:"./tags/Coding-Pages/index.html"},{revision:"ced2d4eb03c1fe8e82e59bc95bd78226",url:"./tags/Commands/index.html"},{revision:"cf70025503d2345317986ffff258375f",url:"./tags/Dev/index.html"},{revision:"0c2f5721ab5de024c276bccd317dc2c5",url:"./tags/Emoji/index.html"},{revision:"9505573817ef2a6e8b313190a7d32eff",url:"./tags/GitHub-Actions/index.html"},{revision:"b45afbd0891131b1acce243c89da9d1c",url:"./tags/GitHub/index.html"},{revision:"46a00985e1bf5da94c9eadc2b2972546",url:"./tags/Hexo/index.html"},{revision:"de25be68ab9ce35d18b9674fab3cdf98",url:"./tags/index.html"},{revision:"89fd2ccf8bed385771ed36a080815bb6",url:"./tags/issues/index.html"},{revision:"136c63125027f95cfcf2efbbd9038b7a",url:"./tags/LeanCloud/index.html"},{revision:"7a94a277d6aac63d3ad4b7d227cd31e3",url:"./tags/UptimeRobot/index.html"},{revision:"4643fa83dcdb4e99255bb2fd60314312",url:"./tags/URL/index.html"},{revision:"b55f3b37857b81eaa39469e4d22b304b",url:"./tags/Vercel/index.html"},{revision:"0275f497f2a04465f90a92431c6ac2e7",url:"./tags/wenyan-lang/index.html"},{revision:"ce0489ae05a111fec6ca478ddfee3d64",url:"./tags/Windows/index.html"},{revision:"c3d2fb8578dd5293064a8b919044d0e5",url:"./tags/文言文编程/index.html"},{revision:"abd658695cacdc11d5ebfbc60febdb88",url:"./tags/浏览器/index.html"},{revision:"e44bcee595d1a68bec2b06b6d5aeca8f",url:"./tags/炫酷文字/index.html"},{revision:"bfe684e177deaf3206f3d124203058a8",url:"./tags/网站存活监控/index.html"},{revision:"98aa2c2eede1fe2363b3938f108b24c2",url:"./timeline/index.html"},{revision:"fabf7271fcada1bc1f03c6f2aa92f982",url:"./vercel.json"}],{directoryIndex:null}),workbox.precaching.cleanupOutdatedCaches(),workbox.routing.registerRoute(/\.(?:png|jpg|jpeg|gif|bmp|webp|svg|ico)$/,new workbox.strategies.CacheFirst({cacheName:"images",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:259200}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/\.(?:eot|ttf|woff|woff2)$/,new workbox.strategies.CacheFirst({cacheName:"fonts",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/^https:\/\/fonts\.googleapis\.com/,new workbox.strategies.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets"})),workbox.routing.registerRoute(/^https:\/\/fonts\.gstatic\.com/,new workbox.strategies.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.googleAnalytics.initialize();