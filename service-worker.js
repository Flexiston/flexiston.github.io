const workboxVersion="5.1.3";importScripts("https://storage.googleapis.com/workbox-cdn/releases/5.1.3/workbox-sw.js"),workbox.setConfig({modulePathPrefix:"https://storage.googleapis.com/workbox-cdn/releases/5.1.3/"}),workbox.core.setCacheNameDetails({prefix:"Flexiston's Blog"}),workbox.core.skipWaiting(),workbox.core.clientsClaim(),workbox.precaching.precacheAndRoute([{revision:"76adfd38d7358456b87c57b8c099c35d",url:"./404.html"},{revision:"01aa12c345e53fa35a87a9e1db36bfe7",url:"./about/index.html"},{revision:"1f986a0982deb3fa729d1671c8d808fd",url:"./archives/2020/04/index.html"},{revision:"62a20db9faea21f18d466dba5c86e1b2",url:"./archives/2020/05/index.html"},{revision:"61b90ac8f3c722384020b2cf1a00de3f",url:"./archives/2020/06/index.html"},{revision:"e83a2f2878ad1bd68d5570ec9888e649",url:"./archives/2020/07/index.html"},{revision:"47f7bdb6edb684d2c26e51aa285a8fc4",url:"./archives/2020/08/index.html"},{revision:"5d81743f66f03b0a653d3da2a820fa7f",url:"./archives/2020/09/index.html"},{revision:"f95fddfffa2d4179e70eff190326c313",url:"./archives/2020/index.html"},{revision:"5f18dbc8f09c1cd6acf6614f7292c205",url:"./archives/2020/page/2/index.html"},{revision:"38bd3c16276d3763137995b3bed2a618",url:"./archives/index.html"},{revision:"65afa644b14536735030467914f34236",url:"./archives/page/2/index.html"},{revision:"9fb351efc4b8a7db51d2d7325f60fb03",url:"./baidu_verify_spMQLbgc0m.html"},{revision:"6f79b93f3825b881f80a56b9c0fc6ff2",url:"./catch-cat.min.js"},{revision:"bf922727fb6875631f3feca5dc267525",url:"./catch-cat/index.html"},{revision:"0942020b7ac67a26c9214616845b2f73",url:"./categories/Bug/index.html"},{revision:"8904b8e663d2ddb7c413140412c70b52",url:"./categories/Dev/GitHub/index.html"},{revision:"2eaa3a7fa68fb897c81b7f6b9f2386eb",url:"./categories/Dev/Hexo/index.html"},{revision:"9c93b8597e2385fdb65afc7bd260af78",url:"./categories/Dev/index.html"},{revision:"b106cab5f857268eaa1acb6bf712490b",url:"./categories/Dev/page/2/index.html"},{revision:"8b496ee9d18157de5a967c26eddeec99",url:"./categories/Dev/Vercel/index.html"},{revision:"8106bd2d858d90c60ad9aa41b75b0ee5",url:"./categories/Dev/Windows/index.html"},{revision:"70af02c6d138d8b2b787b8a51019a887",url:"./categories/Dev/工具/index.html"},{revision:"d0ea7d26f168267d7b2009ec298650f9",url:"./categories/Emoji/index.html"},{revision:"66540956a04c47c7e2e723372610a327",url:"./categories/GitHub/index.html"},{revision:"7fa66791e23e25243b11948180c5c4bc",url:"./categories/index.html"},{revision:"f46300f5448059d521708719f1b7c6b3",url:"./categories/文言文编程/index.html"},{revision:"d5d11f00857cea3983f6520368202deb",url:"./categories/白嫖/index.html"},{revision:"8ca454f18106c61e7d117d7ceb52e33e",url:"./changelog/index.html"},{revision:"56a11a5f3b6a788133d1f6cb8a73af84",url:"./css/style/darkmode.css"},{revision:"de412877e1f62cef54b96d064e716d1e",url:"./css/style/index.css"},{revision:"ad92a9b3bbf67dc1f9649d065f1f1086",url:"./css/style/links.css"},{revision:"72622e54aac09aaa381730a70676a78f",url:"./favicon.ico"},{revision:"b59b8aa47b096cb1f092c9ba7c79176e",url:"./friends/index.html"},{revision:"eceff2bf08bd8be5f9ea744357bdc88e",url:"./index.html"},{revision:"b0fd9b8ec1788b87ee05d8cc5af76711",url:"./js/b2t.js"},{revision:"ae0be675f96610c4194a953de28b5c84",url:"./js/darkmod.js"},{revision:"234f5ecbcc4ff663d977346daa16ea75",url:"./map/index.html"},{revision:"1b3819adb7fdc61d51e9784bcec93a0d",url:"./mikutap/css/mikutap.css"},{revision:"5279a09d7a75b44f3c35364ea2a8f08b",url:"./mikutap/data/main/main.json"},{revision:"d94b20e465ff7289142b647c1ac142ea",url:"./mikutap/data/track/track.json"},{revision:"4b63179db3c45dfd9078a252b2575cd1",url:"./mikutap/icon.png"},{revision:"56ba4222adad2322b0168981868bc934",url:"./mikutap/index.html"},{revision:"936ff3edd8373c243f56bf9c0fc66ec8",url:"./mikutap/js/mikutap.min.js"},{revision:"ee0a7ce469b3a15bd2c57ef76f38dbc6",url:"./mikutap/shared/css/common-1.css"},{revision:"a1aba3a1001e09230cbfdb18d522cdbc",url:"./mikutap/shared/css/index-1.css"},{revision:"43e49a61141c64bcf8d7981f7a6a26f5",url:"./mikutap/shared/js/common-2.min.js"},{revision:"b74c8c57d13ad72401b651f4128a2468",url:"./mikutap/shared/sp/css/common.css"},{revision:"2d581a47b311b74faafb7c29060a316f",url:"./page/2/index.html"},{revision:"b45b75dd1635a15b4f138d3c2bb929b8",url:"./play/index.html"},{revision:"93425d7a8fc6fcffc548aaeb66f66411",url:"./posts/17931.html"},{revision:"594a9b542113a9632a9fdda978b51088",url:"./posts/22938.html"},{revision:"8509ceb87c8c6f9b21566cc5e43acfd9",url:"./posts/24179.html"},{revision:"d479f477bbda27625a273bb39b3a3445",url:"./posts/24549.html"},{revision:"4ca925dbaee1060d2b765b7dea845f93",url:"./posts/25909.html"},{revision:"e043de6e7064b2c2d994d604cb414c55",url:"./posts/27708.html"},{revision:"f692a6425f410e56d6f7e17a22a73048",url:"./posts/28146.html"},{revision:"caa41e95c5202b9a9e8f5a8aeedb978b",url:"./posts/32716.html"},{revision:"53a79acaaef8641f64813bc66891686f",url:"./posts/39479.html"},{revision:"07c1ae3a05b978d7d3e8c474313052bc",url:"./posts/4141.html"},{revision:"f224d53b4185fd6f60f172043335e8d5",url:"./posts/43359.html"},{revision:"7d7484ea04e58febe2ab7b299a8d40b8",url:"./posts/47424.html"},{revision:"800c566b6cc927c33d085b4085658ad2",url:"./posts/49939.html"},{revision:"20fcf4e0bc64bb1a81ab3eec0fcd50ef",url:"./posts/5913.html"},{revision:"5a04cc94b19d2349ed572350d96b7ca1",url:"./posts/7578.html"},{revision:"69a8f8ab766fe31a6322dcf27dcf7e31",url:"./runner/index.html"},{revision:"4d96aaf55597f520573a25368d537775",url:"./say/index.html"},{revision:"7837d62df3185d23b6d68095bc3044d6",url:"./search.json"},{revision:"7c8f0c16e64beaa83b4169eed7afa809",url:"./search/index.html"},{revision:"935eb50b24d97a184ca9623a91c0f616",url:"./t-rex/assets/css/t-rex.css"},{revision:"01f2014886ea4de08147a231bebfd958",url:"./t-rex/assets/js/index.js"},{revision:"a10b0288b9d6b93b8b04de3351882514",url:"./t-rex/assets/js/t-rex.js"},{revision:"cad7798da0d84c8a6e55affb940bc76b",url:"./t-rex/index.html"},{revision:"535ee5442a030938c1ad9d166f48b7c6",url:"./tags/Bug/index.html"},{revision:"ae09c468659a65c1ef22672c06abadf5",url:"./tags/Coding-Pages/index.html"},{revision:"57271bf224820d2f9e166c25fa641913",url:"./tags/Commands/index.html"},{revision:"2cafd8552227403396d0ff917337fac5",url:"./tags/Dev/index.html"},{revision:"faff63dbf0750dae70ecbfde2f2c8984",url:"./tags/Dev/page/2/index.html"},{revision:"5db9b3222d071c4bedce6f18d49e6986",url:"./tags/Emoji/index.html"},{revision:"68c80b7a4954c2b3f9f033b743a2d66a",url:"./tags/GitHub-Actions/index.html"},{revision:"36e6a19d996854264cab1a457a3c7775",url:"./tags/GitHub/index.html"},{revision:"1c2e72033b640a411428067d2149ba40",url:"./tags/Hexo/index.html"},{revision:"9a15761ff916d54a9c6e3c99add8dc52",url:"./tags/index.html"},{revision:"be6572fc73be5b664524be632afe67ba",url:"./tags/issues/index.html"},{revision:"e9e8b24e4d380a045037e4931de9ea58",url:"./tags/LeanCloud/index.html"},{revision:"c3599cf246b86ef49efcdf32f8fbb7fc",url:"./tags/PicGo/index.html"},{revision:"999d3bc763d6022828dfe16c92d11386",url:"./tags/UptimeRobot/index.html"},{revision:"d0c7f1fec12340326b21f2104e095f08",url:"./tags/URL/index.html"},{revision:"6fb0b95acf06b3c2a0c9a9d3d7dec151",url:"./tags/Vercel/index.html"},{revision:"bf58c22015b383e05e6dac5e07e2e521",url:"./tags/wenyan-lang/index.html"},{revision:"a78702f4dae02d7c19cc1726ddb6b424",url:"./tags/Windows/index.html"},{revision:"ef75a93208e21aaca2b978a80b8b3005",url:"./tags/图床/index.html"},{revision:"57283efeab626b618a9216f9dac0024e",url:"./tags/文言文编程/index.html"},{revision:"b2d3c31d5041ef0ed5bbc159e09a0b82",url:"./tags/浏览器/index.html"},{revision:"9610acf6b084c30d0b0097bff7d37e70",url:"./tags/炫酷文字/index.html"},{revision:"c814f7a600887a5498c9adedc1da2177",url:"./tags/网站存活监控/index.html"},{revision:"fabf7271fcada1bc1f03c6f2aa92f982",url:"./vercel.json"}],{directoryIndex:null}),workbox.precaching.cleanupOutdatedCaches(),workbox.routing.registerRoute(/\.(?:png|jpg|jpeg|gif|bmp|webp|svg|ico)$/,new workbox.strategies.CacheFirst({cacheName:"images",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:86400}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/\.(?:eot|ttf|woff|woff2)$/,new workbox.strategies.CacheFirst({cacheName:"fonts",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.googleAnalytics.initialize();