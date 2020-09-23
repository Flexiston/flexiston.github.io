const workboxVersion="5.1.3";importScripts("https://storage.googleapis.com/workbox-cdn/releases/5.1.3/workbox-sw.js"),workbox.setConfig({modulePathPrefix:"https://storage.googleapis.com/workbox-cdn/releases/5.1.3/"}),workbox.core.setCacheNameDetails({prefix:"Flexiston's Blog"}),workbox.core.skipWaiting(),workbox.core.clientsClaim(),workbox.precaching.precacheAndRoute([{revision:"619ac5eab1c17ff6e2ef2013428d1d01",url:"./404.html"},{revision:"1b4692dafca33985873f084922ad4b58",url:"./about/index.html"},{revision:"bc98640b090f73fe4df22b1900a54772",url:"./archives/2020/04/index.html"},{revision:"88c80b2745d8cbf135a3eaa3150143fc",url:"./archives/2020/05/index.html"},{revision:"3087f66766022001fd5e00ebb890b720",url:"./archives/2020/06/index.html"},{revision:"95301949c7e34ed5a8cfc032aed8ad9e",url:"./archives/2020/07/index.html"},{revision:"7d271a9ff2d0f97adc181bdf8eb9fa5e",url:"./archives/2020/08/index.html"},{revision:"0027b26509c985cc74213daa52f60d92",url:"./archives/2020/09/index.html"},{revision:"9f18074fd80f75103116c9b8b7beaf52",url:"./archives/2020/index.html"},{revision:"a8d2a897b4b7253dfb15ae2e47461114",url:"./archives/2020/page/2/index.html"},{revision:"1c370dcc486c33439d23e095b105a5f2",url:"./archives/index.html"},{revision:"1e76c955a9ed66ae8934ac24b8226908",url:"./archives/page/2/index.html"},{revision:"9fb351efc4b8a7db51d2d7325f60fb03",url:"./baidu_verify_spMQLbgc0m.html"},{revision:"6f79b93f3825b881f80a56b9c0fc6ff2",url:"./catch-cat.min.js"},{revision:"cb15a8188fb302f8d0dccbc04a5597a5",url:"./catch-cat/index.html"},{revision:"bf9e4eb26a3bdb66be8515c7edb96aeb",url:"./categories/Bug/index.html"},{revision:"e93a27a6133e631febfea069d041c298",url:"./categories/Dev/GitHub/index.html"},{revision:"14019cc8f5f5eb3b3056bd2ba7eac37e",url:"./categories/Dev/Hexo/index.html"},{revision:"5e95432ad66205b3cd03d4d5c9d8212a",url:"./categories/Dev/index.html"},{revision:"e7a00124891007873635764428ff8107",url:"./categories/Dev/page/2/index.html"},{revision:"4154a731e61ac1b65197b6e924823e57",url:"./categories/Dev/Vercel/index.html"},{revision:"b62036f38217226e0ab8f9f93771fbd1",url:"./categories/Dev/Windows/index.html"},{revision:"26ef8e01c36e660f2f07e8480bf94a66",url:"./categories/Dev/工具/index.html"},{revision:"0db6df1eef572c2a3b37377a7526c44a",url:"./categories/Emoji/index.html"},{revision:"86fd00d1de0e31fdede64fd3f9250cdb",url:"./categories/GitHub/index.html"},{revision:"79cc96e8f02568ac2aa4c10696a17aca",url:"./categories/index.html"},{revision:"6d25215d5ee871fbf962510ef22a9c65",url:"./categories/文言文编程/index.html"},{revision:"6d995e143a1b1b0644e9a0f20d3558a3",url:"./categories/白嫖/index.html"},{revision:"c3a237d24f0a0945979064551f0b827f",url:"./changelog/index.html"},{revision:"56a11a5f3b6a788133d1f6cb8a73af84",url:"./css/style/darkmode.css"},{revision:"ad92a9b3bbf67dc1f9649d065f1f1086",url:"./css/style/links.css"},{revision:"b1107849cd2ce9a0ad26087e1026057e",url:"./css/style/sty.css"},{revision:"72622e54aac09aaa381730a70676a78f",url:"./favicon.ico"},{revision:"180c14c85784c2ce214b34ee26e051f0",url:"./friends/index.html"},{revision:"ecc348566489f5544a7005f5eff80993",url:"./index.html"},{revision:"05a107e94a1f191d6161800682ea33dc",url:"./js/bs2t.js"},{revision:"ae0be675f96610c4194a953de28b5c84",url:"./js/darkmod.js"},{revision:"2da01940827209cc3701b0c39fae9327",url:"./map/index.html"},{revision:"1b3819adb7fdc61d51e9784bcec93a0d",url:"./mikutap/css/mikutap.css"},{revision:"5279a09d7a75b44f3c35364ea2a8f08b",url:"./mikutap/data/main/main.json"},{revision:"d94b20e465ff7289142b647c1ac142ea",url:"./mikutap/data/track/track.json"},{revision:"4b63179db3c45dfd9078a252b2575cd1",url:"./mikutap/icon.png"},{revision:"56ba4222adad2322b0168981868bc934",url:"./mikutap/index.html"},{revision:"936ff3edd8373c243f56bf9c0fc66ec8",url:"./mikutap/js/mikutap.min.js"},{revision:"ee0a7ce469b3a15bd2c57ef76f38dbc6",url:"./mikutap/shared/css/common-1.css"},{revision:"a1aba3a1001e09230cbfdb18d522cdbc",url:"./mikutap/shared/css/index-1.css"},{revision:"43e49a61141c64bcf8d7981f7a6a26f5",url:"./mikutap/shared/js/common-2.min.js"},{revision:"b74c8c57d13ad72401b651f4128a2468",url:"./mikutap/shared/sp/css/common.css"},{revision:"b89ede8d6c0997b3233e8ae51bb96b78",url:"./page/2/index.html"},{revision:"f66fe316270798e0ea58648225e84426",url:"./play/index.html"},{revision:"22b83416c693db20ed57fd11a4f7bdf7",url:"./posts/17931.html"},{revision:"5c58dc7c8b73315dad779a162d195e80",url:"./posts/22938.html"},{revision:"3ed299bc65f6b09a12c775958e1de669",url:"./posts/24179.html"},{revision:"fa59f7d1ccc3cda39e0d779837ba7744",url:"./posts/24549.html"},{revision:"978dd13ba639f3a254373c3961713a65",url:"./posts/25909.html"},{revision:"1b752c921531ea6855c2e7b83cb452c8",url:"./posts/27708.html"},{revision:"37e337176878c82d37a4ccfdd43ad3fd",url:"./posts/28146.html"},{revision:"8df83a06a0fe00059a17c1d100f72c73",url:"./posts/32716.html"},{revision:"9fc825917fc92a86d5cefdd83f42f23e",url:"./posts/39479.html"},{revision:"5b51ac4293dbfd3e910fd2f87532df5e",url:"./posts/4141.html"},{revision:"cd6aaa9b2454ca3fffdd129ddf048d5a",url:"./posts/43359.html"},{revision:"e85c250fcffea5124bb7f1c73e4336d3",url:"./posts/47424.html"},{revision:"9e0a7db9d86eea6dd4e167e15ed4c667",url:"./posts/49939.html"},{revision:"62fcb3219d39ff2e644cba2e5270dab5",url:"./posts/5913.html"},{revision:"6f5fbfd300a53e9044ed44910edda067",url:"./posts/7578.html"},{revision:"79bfe006830039b61bbf64e418a05649",url:"./runner/index.html"},{revision:"396f5ed9bb9d9b9717f118d9bc4f76fd",url:"./say/index.html"},{revision:"3be81ee131735f4734d8feaf53472b8b",url:"./search.json"},{revision:"ac2008ee75a53a0c706b5024770d6c8b",url:"./search/index.html"},{revision:"935eb50b24d97a184ca9623a91c0f616",url:"./t-rex/assets/css/t-rex.css"},{revision:"01f2014886ea4de08147a231bebfd958",url:"./t-rex/assets/js/index.js"},{revision:"a10b0288b9d6b93b8b04de3351882514",url:"./t-rex/assets/js/t-rex.js"},{revision:"cad7798da0d84c8a6e55affb940bc76b",url:"./t-rex/index.html"},{revision:"3e69150ab5a12fb86602ed8464820228",url:"./tags/Bug/index.html"},{revision:"d3df251e1f505ad431557aa07d758276",url:"./tags/Coding-Pages/index.html"},{revision:"826648ffcbe89291d1f6913ada6afe44",url:"./tags/Commands/index.html"},{revision:"6d25e6f5c0b106202b0cf48c11cb73d8",url:"./tags/Dev/index.html"},{revision:"1dd01a87959341193467249c784d410f",url:"./tags/Dev/page/2/index.html"},{revision:"c13ad1e7a7811ea13c79886671b10125",url:"./tags/Emoji/index.html"},{revision:"f47f0b075502234e989817ebe5d9046c",url:"./tags/GitHub-Actions/index.html"},{revision:"231cb58a25be9a91f9276004ed07f4d0",url:"./tags/GitHub/index.html"},{revision:"ebe3bd0bd8e6ffdf47a9b159ed6eb6bb",url:"./tags/Hexo/index.html"},{revision:"1fc5e0ed2b0259156d1afee6bd4b854f",url:"./tags/index.html"},{revision:"c3c1e07a4e3d99709929338a5c03d74b",url:"./tags/issues/index.html"},{revision:"165212e93e52c43058288c450a031ee9",url:"./tags/LeanCloud/index.html"},{revision:"916d3b911f79af74da34d98ec8226acf",url:"./tags/PicGo/index.html"},{revision:"998c5ab43f3f1d98ae5b7b28510a5a1a",url:"./tags/UptimeRobot/index.html"},{revision:"19083a21451be93e80c3c9c32bfac80e",url:"./tags/URL/index.html"},{revision:"f62585c0e4e6178f7aea90ce73913cea",url:"./tags/Vercel/index.html"},{revision:"7d6182f4474ac866f4790bc8a85cf110",url:"./tags/wenyan-lang/index.html"},{revision:"20843aed93ffb99e32fd554b65dedc67",url:"./tags/Windows/index.html"},{revision:"1b3cd2633dfe466d41009b674f731833",url:"./tags/图床/index.html"},{revision:"8749c1ae834fd3bd12d851f6ee26e15a",url:"./tags/文言文编程/index.html"},{revision:"4f842f75b1486264ca8e0776936bcbfc",url:"./tags/浏览器/index.html"},{revision:"5f5e146340b4e633e73609a03c6173ec",url:"./tags/炫酷文字/index.html"},{revision:"39e7becf2ec985c8532492adcd2ab107",url:"./tags/网站存活监控/index.html"},{revision:"fabf7271fcada1bc1f03c6f2aa92f982",url:"./vercel.json"}],{directoryIndex:null}),workbox.precaching.cleanupOutdatedCaches(),workbox.routing.registerRoute(/\.(?:png|jpg|jpeg|gif|bmp|webp|svg|ico)$/,new workbox.strategies.CacheFirst({cacheName:"images",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:86400}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/\.(?:eot|ttf|woff|woff2)$/,new workbox.strategies.CacheFirst({cacheName:"fonts",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.googleAnalytics.initialize();