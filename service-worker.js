"use strict";var workboxVersion="5.1.3";importScripts("https://storage.googleapis.com/workbox-cdn/releases/".concat(workboxVersion,"/workbox-sw.js")),workbox.setConfig({modulePathPrefix:"https://storage.googleapis.com/workbox-cdn/releases/".concat(workboxVersion,"/")}),workbox.core.setCacheNameDetails({prefix:"Flexiston's Blog"}),workbox.core.skipWaiting(),workbox.core.clientsClaim(),workbox.precaching.precacheAndRoute([{revision:"bfbe9832ba15293a7b6600663815bd0d",url:"./404.html"},{revision:"6b6edf1cbb4a3bb2334a09e6a84362bf",url:"./about/index.html"},{revision:"9e092a8fe200164c518ff3935850590e",url:"./archives/2020/04/index.html"},{revision:"952c92336f91fecad90e6e7be2641e98",url:"./archives/2020/05/index.html"},{revision:"6644bc88004ee2f118fd4891c6f87a39",url:"./archives/2020/06/index.html"},{revision:"17d6fd7b16eb9fff0012d53ac4e0080f",url:"./archives/2020/07/index.html"},{revision:"ff718a71174fd2f4a12dcdfe631f2f03",url:"./archives/2020/08/index.html"},{revision:"de162358f7caecc0c89feee7249ca13b",url:"./archives/2020/09/index.html"},{revision:"d94f5e2b086dffb903b7813b0145f39c",url:"./archives/2020/index.html"},{revision:"6996d1a7f28af006a8dbcdef4a7fad2c",url:"./archives/2020/page/2/index.html"},{revision:"61c5d02d3f88ca1ac1b370c4a6e1b0d8",url:"./archives/index.html"},{revision:"95debc25d81ee2f516934561868c64eb",url:"./archives/page/2/index.html"},{revision:"9fb351efc4b8a7db51d2d7325f60fb03",url:"./baidu_verify_spMQLbgc0m.html"},{revision:"493321397a4dfcce00d15d06cc0c6762",url:"./catch-cat.min.js"},{revision:"32b6ce044d19b2bff9b20708a31f9d86",url:"./catch-cat/index.html"},{revision:"861986e07c2f79e17e01c1406e7a8034",url:"./categories/Bug/index.html"},{revision:"1d9ed6cf0d283b1d1bd528d95a703aa3",url:"./categories/Dev/GitHub/index.html"},{revision:"6d1c3055f341eae0d3f433907f120dd2",url:"./categories/Dev/Hexo/index.html"},{revision:"04e800bf230d44fcaed5fd4065267000",url:"./categories/Dev/index.html"},{revision:"2105d22eb45015829304175904f3b7c2",url:"./categories/Dev/page/2/index.html"},{revision:"ad4b9f5e5c52b45cc73dfd49ad7f71fd",url:"./categories/Dev/Vercel/index.html"},{revision:"01c1d4777225e9e6b4dcbf6a0b81d9bb",url:"./categories/Dev/Windows/index.html"},{revision:"ad1d43360a1fc18e55c70f16e23004cd",url:"./categories/Dev/工具/index.html"},{revision:"966c69ad58178aca4d1d4e60b7b55749",url:"./categories/Emoji/index.html"},{revision:"ee522b94ce0fdff2a51b625cacd9618b",url:"./categories/GitHub/index.html"},{revision:"e2792ae90c5a28c2ebced36b666c4420",url:"./categories/index.html"},{revision:"e723592b6c9c662ccf20be1581450322",url:"./categories/文言文编程/index.html"},{revision:"0222388ff9fff9d70c5c0c69dc336249",url:"./categories/白嫖/index.html"},{revision:"007929c342a5852a861d15a123b25853",url:"./changelog/index.html"},{revision:"359a1e71674c135b6598b08037e962b9",url:"./css/style/dark.css"},{revision:"b274a7ac6354eba3a938aaba776fb76c",url:"./css/style/flesx.css"},{revision:"ec07076b1bc9799e0dab5989c7e1d1ee",url:"./css/style/links.css"},{revision:"1407dc11577c56dde90dce10aa71bc50",url:"./css/style/note.css"},{revision:"fc764d9a99cd208d780999d32b2c47da",url:"./css/style/timeline.l.css"},{revision:"9945aa19aa1ff39ac5c6b9a14688131f",url:"./css/style/valine.l.css"},{revision:"72622e54aac09aaa381730a70676a78f",url:"./favicon.ico"},{revision:"2723816a3da12ac5517a3589e2e2c5e9",url:"./friends/index.html"},{revision:"69f901c95bc2ed3b271914c5e7fd0a81",url:"./index.html"},{revision:"e653c627aa9cf950eebdb9dfb3c77882",url:"./js/app.r.js"},{revision:"f564bbb092181f20953084c3ed507461",url:"./manifest.json"},{revision:"715c584401eaddbc0d66aae2cceb5a6c",url:"./map/index.html"},{revision:"1b3819adb7fdc61d51e9784bcec93a0d",url:"./mikutap/css/mikutap.css"},{revision:"5279a09d7a75b44f3c35364ea2a8f08b",url:"./mikutap/data/main/main.json"},{revision:"d94b20e465ff7289142b647c1ac142ea",url:"./mikutap/data/track/track.json"},{revision:"4b63179db3c45dfd9078a252b2575cd1",url:"./mikutap/icon.png"},{revision:"56ba4222adad2322b0168981868bc934",url:"./mikutap/index.html"},{revision:"936ff3edd8373c243f56bf9c0fc66ec8",url:"./mikutap/js/mikutap.min.js"},{revision:"ee0a7ce469b3a15bd2c57ef76f38dbc6",url:"./mikutap/shared/css/common-1.css"},{revision:"a1aba3a1001e09230cbfdb18d522cdbc",url:"./mikutap/shared/css/index-1.css"},{revision:"43e49a61141c64bcf8d7981f7a6a26f5",url:"./mikutap/shared/js/common-2.min.js"},{revision:"b74c8c57d13ad72401b651f4128a2468",url:"./mikutap/shared/sp/css/common.css"},{revision:"89f43265f7bd360b4d1c415f3bcd4792",url:"./page/2/index.html"},{revision:"db32114c725f2ea9382ffcdb359460b8",url:"./play/index.html"},{revision:"80cd0e216d7d0479e3dbe8d44a98866d",url:"./posts/17931.html"},{revision:"bd56ff1f583fe528ca63e8dd53014029",url:"./posts/22938.html"},{revision:"4fc810523e7ed3f111dd3904d5899676",url:"./posts/24179.html"},{revision:"c3c31d7c57ab87c7875814e0e1299cd2",url:"./posts/24549.html"},{revision:"b3e6b69a84de27b669ef28346859903a",url:"./posts/25909.html"},{revision:"46c9e287cb4604c58cbdb9c327e6c019",url:"./posts/27708.html"},{revision:"6058d3c04943e965ec760247e838729e",url:"./posts/28146.html"},{revision:"cad4a1b3c836b21777d979c2f6a301cb",url:"./posts/32716.html"},{revision:"7f224b92baa096f109b78399bcc0a011",url:"./posts/39479.html"},{revision:"f169608739b3d6dbff7199dc8fe6399e",url:"./posts/4141.html"},{revision:"447cf9499d23494fbf8f8131854579e3",url:"./posts/43359.html"},{revision:"3fb6dbf3753315828b99dd207f9f508d",url:"./posts/47424.html"},{revision:"168d7f3aa0a7fe550eba77b010f35ef7",url:"./posts/49939.html"},{revision:"af96ad733c1d17c55d52b23a25faae65",url:"./posts/5913.html"},{revision:"b9b47057ea05eae1b545c7d813e77300",url:"./posts/7578.html"},{revision:"b28e8118c86045fcd4a95093f83d5e80",url:"./runner/index.html"},{revision:"d38109198f14574dcb49156ec85cffe1",url:"./say/index.html"},{revision:"67b6de0805b75a70fb0792a448d67552",url:"./search.json"},{revision:"bac23a32d6f011b186b9178fcbbe13a7",url:"./search/index.html"},{revision:"935eb50b24d97a184ca9623a91c0f616",url:"./t-rex/assets/css/t-rex.css"},{revision:"01f2014886ea4de08147a231bebfd958",url:"./t-rex/assets/js/index.js"},{revision:"7bc8783256a189ab13556a4f89a9b96c",url:"./t-rex/assets/js/t-rex.js"},{revision:"cad7798da0d84c8a6e55affb940bc76b",url:"./t-rex/index.html"},{revision:"76e6374c2fb1208cd71a6ad206846cb8",url:"./tags/Bug/index.html"},{revision:"275fa7850bf7b10ebf90a7ee3cea716b",url:"./tags/Coding-Pages/index.html"},{revision:"60576d389282afb1984a27a6ec7880d8",url:"./tags/Commands/index.html"},{revision:"594040e600b96a1045eb8660e9e4e616",url:"./tags/Dev/index.html"},{revision:"39b6a594dcecbf9332c624cb074a514d",url:"./tags/Dev/page/2/index.html"},{revision:"3f2d090a388cd93168c7227b59cb8324",url:"./tags/Emoji/index.html"},{revision:"67e733d55f2c60159bdbef35f84f813d",url:"./tags/GitHub-Actions/index.html"},{revision:"d517018daa95fd9d9c41e805db8a8410",url:"./tags/GitHub/index.html"},{revision:"2e34cce1c1b7cf3fb113965d1cc4373f",url:"./tags/Hexo/index.html"},{revision:"0c1e83dfdcba0be3bb04c816a3d71410",url:"./tags/index.html"},{revision:"89728eaa3e6eb461695742f33454e334",url:"./tags/issues/index.html"},{revision:"3864bd7b42d14547838329669cfe6846",url:"./tags/LeanCloud/index.html"},{revision:"8ba7281ea7704e9f8b14c0bcff7fe462",url:"./tags/PicGo/index.html"},{revision:"09245044fa79ee727d8ba6b2825931a6",url:"./tags/UptimeRobot/index.html"},{revision:"ed6e89a7e27136dca1ff732ca1e15347",url:"./tags/URL/index.html"},{revision:"8ada717f3c28bb6f9fb1284fdf51dacb",url:"./tags/Vercel/index.html"},{revision:"7227b62d3c757338b117a768b8d1023e",url:"./tags/wenyan-lang/index.html"},{revision:"f69f57104bf5d1b9bd34778e5b7fa725",url:"./tags/Windows/index.html"},{revision:"7dc2e88b0e665cfbcb0d6807001a9e67",url:"./tags/图床/index.html"},{revision:"6b087a8bc23ef9b4232486d6cb421e08",url:"./tags/文言文编程/index.html"},{revision:"a7b9e868b2762bd2b5cb812226d67fb2",url:"./tags/浏览器/index.html"},{revision:"12312763165c63ba07038ee99dd06164",url:"./tags/炫酷文字/index.html"},{revision:"20b6f743c983425db09fcc2906c4a1af",url:"./tags/网站存活监控/index.html"},{revision:"fabf7271fcada1bc1f03c6f2aa92f982",url:"./vercel.json"}],{directoryIndex:null}),workbox.precaching.cleanupOutdatedCaches(),workbox.routing.registerRoute(/\.(?:png|jpg|jpeg|gif|bmp|webp|svg|ico)$/,new workbox.strategies.CacheFirst({cacheName:"images",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:86400}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/\.(?:eot|ttf|woff|woff2)$/,new workbox.strategies.CacheFirst({cacheName:"fonts",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.googleAnalytics.initialize();