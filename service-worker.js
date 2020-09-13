"use strict";var workboxVersion="5.1.3";importScripts("https://storage.googleapis.com/workbox-cdn/releases/".concat(workboxVersion,"/workbox-sw.js")),workbox.setConfig({modulePathPrefix:"https://storage.googleapis.com/workbox-cdn/releases/".concat(workboxVersion,"/")}),workbox.core.setCacheNameDetails({prefix:"Flexiston's Blog"}),workbox.core.skipWaiting(),workbox.core.clientsClaim(),workbox.precaching.precacheAndRoute([{revision:"c56f0e6e9da0463246b807a42a61d029",url:"./404.html"},{revision:"45e5da015b7f669e2d50b84e008ab71c",url:"./about/index.html"},{revision:"7fc798c6dc015a8edaec5a2cc200c681",url:"./archives/2020/04/index.html"},{revision:"f2305a7e647ed716ac2a70bdf527bdaa",url:"./archives/2020/05/index.html"},{revision:"17d4865b4ea6fc3d5b10eec7273f89bc",url:"./archives/2020/06/index.html"},{revision:"908447c9723afa3d666c0dedbc7b2727",url:"./archives/2020/07/index.html"},{revision:"b1763a21c220e6afb47bb02abd60b7fe",url:"./archives/2020/08/index.html"},{revision:"da46c86502b257f29865b2d636ad5548",url:"./archives/2020/09/index.html"},{revision:"efac1e6afb3b9190d0f83f932957b8bf",url:"./archives/2020/index.html"},{revision:"c5a4ad84243c6df0045a6d19f8cf1bb3",url:"./archives/2020/page/2/index.html"},{revision:"517a5498c16ea97a7839ec680f833a74",url:"./archives/index.html"},{revision:"9059791f560645748c1bf839e6622718",url:"./archives/page/2/index.html"},{revision:"9fb351efc4b8a7db51d2d7325f60fb03",url:"./baidu_verify_spMQLbgc0m.html"},{revision:"493321397a4dfcce00d15d06cc0c6762",url:"./catch-cat.min.js"},{revision:"9449b4b7691de9543ad93b0deea7cb36",url:"./catch-cat/index.html"},{revision:"0d43e0a4f32d258622dea2f567796bbf",url:"./categories/Bug/index.html"},{revision:"ecb3e64b78f83d33d5e20c49932a7077",url:"./categories/Dev/GitHub/index.html"},{revision:"7b39457464ae031c8f20b45d27016266",url:"./categories/Dev/Hexo/index.html"},{revision:"dcbfe6922921b3c59cda9b7b88c685f6",url:"./categories/Dev/index.html"},{revision:"bd400d5ad9f102dd273205ccfe574807",url:"./categories/Dev/page/2/index.html"},{revision:"521b826bb35c40dee8094c56d4fc246b",url:"./categories/Dev/Vercel/index.html"},{revision:"c0a70bb6ae69af619c0ec2439787ba02",url:"./categories/Dev/Windows/index.html"},{revision:"ba5ff84c21ca10b62cb7ee9eebd7a57f",url:"./categories/Dev/工具/index.html"},{revision:"b6d2d274312966a7afc51c51a0425f0e",url:"./categories/Emoji/index.html"},{revision:"d464f60648536fcab326d775ec6633a2",url:"./categories/GitHub/index.html"},{revision:"22fbb617ae9742db011a6cf6a6a5a4d3",url:"./categories/index.html"},{revision:"3a5e38bd16412146f036ff9b638dce66",url:"./categories/文言文编程/index.html"},{revision:"3a05ff9cdd267111217e71fecbeecf74",url:"./categories/白嫖/index.html"},{revision:"ac02e084ab426517cfd8bdeda532178b",url:"./changelog/index.html"},{revision:"359a1e71674c135b6598b08037e962b9",url:"./css/style/dark.css"},{revision:"d7314b112b60b2cc61f2e1f92669d808",url:"./css/style/flesx.css"},{revision:"ec07076b1bc9799e0dab5989c7e1d1ee",url:"./css/style/links.css"},{revision:"1407dc11577c56dde90dce10aa71bc50",url:"./css/style/note.css"},{revision:"fc764d9a99cd208d780999d32b2c47da",url:"./css/style/timeline.l.css"},{revision:"9945aa19aa1ff39ac5c6b9a14688131f",url:"./css/style/valine.l.css"},{revision:"72622e54aac09aaa381730a70676a78f",url:"./favicon.ico"},{revision:"4abeca9e6e145c96b3ef70ff9d9a1bbb",url:"./index.html"},{revision:"1ab0d85e0221854c67992edadd3d02ca",url:"./js/h.h.js"},{revision:"f564bbb092181f20953084c3ed507461",url:"./manifest.json"},{revision:"cfce5f2f1f84d9a86a707fcc3fd60a16",url:"./map/index.html"},{revision:"1b3819adb7fdc61d51e9784bcec93a0d",url:"./mikutap/css/mikutap.css"},{revision:"5279a09d7a75b44f3c35364ea2a8f08b",url:"./mikutap/data/main/main.json"},{revision:"d94b20e465ff7289142b647c1ac142ea",url:"./mikutap/data/track/track.json"},{revision:"4b63179db3c45dfd9078a252b2575cd1",url:"./mikutap/icon.png"},{revision:"56ba4222adad2322b0168981868bc934",url:"./mikutap/index.html"},{revision:"936ff3edd8373c243f56bf9c0fc66ec8",url:"./mikutap/js/mikutap.min.js"},{revision:"ee0a7ce469b3a15bd2c57ef76f38dbc6",url:"./mikutap/shared/css/common-1.css"},{revision:"a1aba3a1001e09230cbfdb18d522cdbc",url:"./mikutap/shared/css/index-1.css"},{revision:"43e49a61141c64bcf8d7981f7a6a26f5",url:"./mikutap/shared/js/common-2.min.js"},{revision:"b74c8c57d13ad72401b651f4128a2468",url:"./mikutap/shared/sp/css/common.css"},{revision:"24b20f5c7657551841e6e87df8a0ad9b",url:"./page/2/index.html"},{revision:"af68e2f6938cd9c609138f47c4027224",url:"./play/index.html"},{revision:"6ad78d5f3eb5a32dc054fde7a04e4d08",url:"./posts/17931.html"},{revision:"8b077355f1f5e3d91925878a3b2bad59",url:"./posts/22938.html"},{revision:"4e95c47c08a3a4003d4f20b5f69d4d7a",url:"./posts/24179.html"},{revision:"a3c26473ff61348a9f681603adaec8ec",url:"./posts/24549.html"},{revision:"52d9e9b237b2ff863c484b36a6ff67f8",url:"./posts/25909.html"},{revision:"81bf0ea8592f7a2550a843a077f0811e",url:"./posts/27708.html"},{revision:"da02bd7fc9c521fe0f345d46f304d3eb",url:"./posts/28146.html"},{revision:"f20ca717e121e6a834b244969e2ae9e5",url:"./posts/32716.html"},{revision:"05153e337997cf19fc206c25db4b3b98",url:"./posts/39479.html"},{revision:"3637f58a5eb6096e0f0ddcfb5fc59f87",url:"./posts/4141.html"},{revision:"f86b1368e8beeabfc0681e45b330b1b5",url:"./posts/43359.html"},{revision:"b9052242f59b09107c62395ed7065359",url:"./posts/47424.html"},{revision:"e61553892d7664ae1070dbb624811f7b",url:"./posts/49939.html"},{revision:"fa5bd3735453e4706a79e745ef50f745",url:"./posts/5913.html"},{revision:"12789f718c775da3e57c4deced922f9d",url:"./posts/7578.html"},{revision:"f8a60317d0a8f3ab618d5f8f67e44acd",url:"./runner/index.html"},{revision:"82353fc7dfecf1b2497aabd82e737480",url:"./say/index.html"},{revision:"c0993fe17cd69265ff67ca241e302bf5",url:"./search.json"},{revision:"55e9fc8b751f11c0242df729f11703fb",url:"./search/index.html"},{revision:"935eb50b24d97a184ca9623a91c0f616",url:"./t-rex/assets/css/t-rex.css"},{revision:"01f2014886ea4de08147a231bebfd958",url:"./t-rex/assets/js/index.js"},{revision:"7bc8783256a189ab13556a4f89a9b96c",url:"./t-rex/assets/js/t-rex.js"},{revision:"cad7798da0d84c8a6e55affb940bc76b",url:"./t-rex/index.html"},{revision:"5fcc1be88bd0c3fa72bf55ce14ecc037",url:"./tags/Bug/index.html"},{revision:"31b571b17f5b86249b3e4a5a5666b5dd",url:"./tags/Coding-Pages/index.html"},{revision:"a9260a6423c3eb8e0d7e1bbb4f2792b6",url:"./tags/Commands/index.html"},{revision:"2a122a12f1062d62f6c3bfa1cb7e3381",url:"./tags/Dev/index.html"},{revision:"78d980553802438917be660e951d1ecb",url:"./tags/Dev/page/2/index.html"},{revision:"13756484e90f1cb84240ad64aae10aa7",url:"./tags/Emoji/index.html"},{revision:"9bf5c3881f0848147c14ca56747d9a2b",url:"./tags/GitHub-Actions/index.html"},{revision:"9b4a7ceecf0f4d27172daf64828aa1d5",url:"./tags/GitHub/index.html"},{revision:"4ec6e791c34d0268e344a9478e1a6b88",url:"./tags/Hexo/index.html"},{revision:"aa6e451e14bb21e942156b471bb6389e",url:"./tags/index.html"},{revision:"e6f9bc7d1fe871c24b6f35d8d20eb3b6",url:"./tags/issues/index.html"},{revision:"1b7a522a1280bf6a38b5ade62dfd24ff",url:"./tags/LeanCloud/index.html"},{revision:"fe4bc500c6c598b3a00ae712c770ee88",url:"./tags/PicGo/index.html"},{revision:"64e4777bfc63776811bca305e27a8f53",url:"./tags/UptimeRobot/index.html"},{revision:"e1abd387992b8ca7a952a5637712b921",url:"./tags/URL/index.html"},{revision:"c71e50b17852b1f06accefeb3f31a821",url:"./tags/Vercel/index.html"},{revision:"ba420200f2d528ff06b3ffeab1a7f73c",url:"./tags/wenyan-lang/index.html"},{revision:"88e3f83110b63acb28e9ce7b72bcafb6",url:"./tags/Windows/index.html"},{revision:"acf5467e0d1337051894ea05577f97d1",url:"./tags/图床/index.html"},{revision:"c0216acf967762ffd5554e04e312356c",url:"./tags/文言文编程/index.html"},{revision:"2516b7459d9df9eb93a6a5a3cc621f04",url:"./tags/浏览器/index.html"},{revision:"f024ff762bc7d8da5ebcdd7ebac58cfc",url:"./tags/炫酷文字/index.html"},{revision:"4685e5e7f19755dbf51a4fcbbeb17e07",url:"./tags/网站存活监控/index.html"},{revision:"fabf7271fcada1bc1f03c6f2aa92f982",url:"./vercel.json"}],{directoryIndex:null}),workbox.precaching.cleanupOutdatedCaches(),workbox.routing.registerRoute(/\.(?:png|jpg|jpeg|gif|bmp|webp|svg|ico)$/,new workbox.strategies.CacheFirst({cacheName:"images",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:86400}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/\.(?:eot|ttf|woff|woff2)$/,new workbox.strategies.CacheFirst({cacheName:"fonts",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.googleAnalytics.initialize();