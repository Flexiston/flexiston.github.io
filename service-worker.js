"use strict";var workboxVersion="5.1.3";importScripts("https://storage.googleapis.com/workbox-cdn/releases/".concat(workboxVersion,"/workbox-sw.js")),workbox.setConfig({modulePathPrefix:"https://storage.googleapis.com/workbox-cdn/releases/".concat(workboxVersion,"/")}),workbox.core.setCacheNameDetails({prefix:"Flexiston's Blog"}),workbox.core.skipWaiting(),workbox.core.clientsClaim(),workbox.precaching.precacheAndRoute([{revision:"fd1f3fe3812fcccb23ba827a70e6477b",url:"./1.js"},{revision:"b9e1f353c57654e9847bc342b0dfa600",url:"./404.html"},{revision:"4d0169b61024dd833f523f203e194208",url:"./about/index.html"},{revision:"96275d06341121931bee21d3a0ff19c5",url:"./archives/2020/04/index.html"},{revision:"86d5f79de05d1a8ca38e6b473b80e6ea",url:"./archives/2020/05/index.html"},{revision:"2d97cd48f682c758324c2435c171c7a9",url:"./archives/2020/06/index.html"},{revision:"22d82564642b7f5b85a3253ad746785f",url:"./archives/2020/07/index.html"},{revision:"33ccfe2f37dc64d69a2dda36d9a8e968",url:"./archives/2020/08/index.html"},{revision:"f5eef209caaabcabe8f3e64ba4531e22",url:"./archives/2020/09/index.html"},{revision:"bd4c2ccdf4982015c98321f3e8de870c",url:"./archives/2020/index.html"},{revision:"1ebe8248775276fc1826ffd58442934f",url:"./archives/2020/page/2/index.html"},{revision:"d889a184f3f60759d83ad9df983de41c",url:"./archives/index.html"},{revision:"58ad7e7934b55e66889a9c0e70c248fc",url:"./archives/page/2/index.html"},{revision:"9fb351efc4b8a7db51d2d7325f60fb03",url:"./baidu_verify_spMQLbgc0m.html"},{revision:"493321397a4dfcce00d15d06cc0c6762",url:"./catch-cat.min.js"},{revision:"945bbde9f047f7826255395c25bb498f",url:"./catch-cat/index.html"},{revision:"d00a794cc9191ea5bb4083b0f7def544",url:"./categories/Bug/index.html"},{revision:"f7e4b79c5be5f268059b2fd198dec5be",url:"./categories/Dev/GitHub/index.html"},{revision:"b23dc33c1383aa7efc4b2b1c03920106",url:"./categories/Dev/Hexo/index.html"},{revision:"edf201e00d193cf57a0f5a08b5abf24c",url:"./categories/Dev/index.html"},{revision:"69011d167dcf5541b03f57ff2a23a6f4",url:"./categories/Dev/page/2/index.html"},{revision:"c6bd0ee44e990b2703958d8e3ff40561",url:"./categories/Dev/Vercel/index.html"},{revision:"cf544f42d9129d768a68d299f0206635",url:"./categories/Dev/Windows/index.html"},{revision:"695a19eaa751ec181a6e6b9d8ae81a85",url:"./categories/Dev/工具/index.html"},{revision:"e3afad92e75f04981269c57d682cc9da",url:"./categories/Emoji/index.html"},{revision:"97f4f545a295f663d24535da386b9b90",url:"./categories/GitHub/index.html"},{revision:"ff2e13ddf9d527a690e9c9053883c3a3",url:"./categories/index.html"},{revision:"fd011c11728dbd8b99b3e7142ada499b",url:"./categories/文言文编程/index.html"},{revision:"95628be36388f89b00e770a1f08d1dca",url:"./categories/白嫖/index.html"},{revision:"8be81a5909af5b04337adcde11037445",url:"./changelog/index.html"},{revision:"359a1e71674c135b6598b08037e962b9",url:"./css/style/dark.css"},{revision:"be7c2bb8dda832c58e7f995d45b16af5",url:"./css/style/flesx.css"},{revision:"ec07076b1bc9799e0dab5989c7e1d1ee",url:"./css/style/links.css"},{revision:"1407dc11577c56dde90dce10aa71bc50",url:"./css/style/note.css"},{revision:"fc764d9a99cd208d780999d32b2c47da",url:"./css/style/timeline.l.css"},{revision:"9945aa19aa1ff39ac5c6b9a14688131f",url:"./css/style/valine.l.css"},{revision:"72622e54aac09aaa381730a70676a78f",url:"./favicon.ico"},{revision:"a821d723d3293e59b85b3e474b172eb0",url:"./friends/index.html"},{revision:"a4509f057e1ecd5527a66c97413296bc",url:"./index.html"},{revision:"de47307c7e8466f3e9aa883486ad16f1",url:"./js/app.u.js"},{revision:"710809b8bea99a5bbe77f9cbe26aafb2",url:"./js/darkmode.js"},{revision:"f564bbb092181f20953084c3ed507461",url:"./manifest.json"},{revision:"c1b06f8e4092cfdca44a227eec426055",url:"./map/index.html"},{revision:"1b3819adb7fdc61d51e9784bcec93a0d",url:"./mikutap/css/mikutap.css"},{revision:"5279a09d7a75b44f3c35364ea2a8f08b",url:"./mikutap/data/main/main.json"},{revision:"d94b20e465ff7289142b647c1ac142ea",url:"./mikutap/data/track/track.json"},{revision:"4b63179db3c45dfd9078a252b2575cd1",url:"./mikutap/icon.png"},{revision:"56ba4222adad2322b0168981868bc934",url:"./mikutap/index.html"},{revision:"936ff3edd8373c243f56bf9c0fc66ec8",url:"./mikutap/js/mikutap.min.js"},{revision:"ee0a7ce469b3a15bd2c57ef76f38dbc6",url:"./mikutap/shared/css/common-1.css"},{revision:"a1aba3a1001e09230cbfdb18d522cdbc",url:"./mikutap/shared/css/index-1.css"},{revision:"43e49a61141c64bcf8d7981f7a6a26f5",url:"./mikutap/shared/js/common-2.min.js"},{revision:"b74c8c57d13ad72401b651f4128a2468",url:"./mikutap/shared/sp/css/common.css"},{revision:"eb94fe2a4bd02dcf72b03fa61b609da3",url:"./page/2/index.html"},{revision:"c83932c27176e79d0e28be6145e15649",url:"./play/index.html"},{revision:"463bc885c3892aec9dfcfe900a3a3de4",url:"./posts/17931.html"},{revision:"e66cfb0463398e9bcbb13eb764e456a6",url:"./posts/22938.html"},{revision:"7745689bec7a64ab3f2cc6860ac8d688",url:"./posts/24179.html"},{revision:"e86149ec0ecb8bc5efa45ff78f006e19",url:"./posts/24549.html"},{revision:"2eb1e85798a1b569c994ff3228acd2b7",url:"./posts/25909.html"},{revision:"6c0278e1f2f351cb9988ec9a93c2c1fc",url:"./posts/27708.html"},{revision:"2cc97722ba522c72e81453bf6e30abac",url:"./posts/28146.html"},{revision:"f4414a414e51c2c56a44abf820f67206",url:"./posts/32716.html"},{revision:"4353fdbed64c22c97accd68df97622ce",url:"./posts/39479.html"},{revision:"c7c712162222eb8ef7b3ed814ba6c4cc",url:"./posts/4141.html"},{revision:"497612876d62bbf3c699138a45716e5e",url:"./posts/43359.html"},{revision:"647124c1c165132b020799d2ef699d64",url:"./posts/47424.html"},{revision:"8859ae574c7e3e048b12f4c2abf0e387",url:"./posts/49939.html"},{revision:"3e330396034a9802d644dbcfc09c5076",url:"./posts/5913.html"},{revision:"491db0df7a02cb4fccfd9f8a582315d1",url:"./posts/7578.html"},{revision:"fe20c23b2d0afe3c0c8b6fea173ab07a",url:"./runner/index.html"},{revision:"93109484794159e93815e4ecbee6bfbf",url:"./say/index.html"},{revision:"5cc3f2185eba5a2dd060d6fd41a22717",url:"./search.json"},{revision:"5fdd34bd0609b0923f1b5aab65494ff5",url:"./search/index.html"},{revision:"935eb50b24d97a184ca9623a91c0f616",url:"./t-rex/assets/css/t-rex.css"},{revision:"01f2014886ea4de08147a231bebfd958",url:"./t-rex/assets/js/index.js"},{revision:"7bc8783256a189ab13556a4f89a9b96c",url:"./t-rex/assets/js/t-rex.js"},{revision:"cad7798da0d84c8a6e55affb940bc76b",url:"./t-rex/index.html"},{revision:"0b23f8d60c042a605df5779d5deb4cc3",url:"./tags/Bug/index.html"},{revision:"505bc120d84351ccbea310fcdb2bea6e",url:"./tags/Coding-Pages/index.html"},{revision:"a2156ee20d5760c6a7d3c629e26d37b7",url:"./tags/Commands/index.html"},{revision:"1be970f6dd1299c7dfc99b8d4b3f7335",url:"./tags/Dev/index.html"},{revision:"b19f6d1fb2e4c1f087cc484f05c16030",url:"./tags/Dev/page/2/index.html"},{revision:"8e988b3a1f5a3234a7c0ae085fc80841",url:"./tags/Emoji/index.html"},{revision:"1871b37a28312dc7a7bfb77f8d7944a4",url:"./tags/GitHub-Actions/index.html"},{revision:"6aa0580aae0abe2c687f4dea0d1b12a1",url:"./tags/GitHub/index.html"},{revision:"6bf61986500462a79e90c267ac257065",url:"./tags/Hexo/index.html"},{revision:"5bea71131b2a6131374bf89ec7eae6e8",url:"./tags/index.html"},{revision:"f4f389ef77dc3e967901026e5356bcd7",url:"./tags/issues/index.html"},{revision:"4aaea81570c33c921282ec251bd30b73",url:"./tags/LeanCloud/index.html"},{revision:"aaee142ae7cbcb6a7b8d7d2d2ee0c974",url:"./tags/PicGo/index.html"},{revision:"95494e3f6eb9e2f1e02e41292ad9dcc7",url:"./tags/UptimeRobot/index.html"},{revision:"2b34fda16a7ef8ed5c33394fdc0335f6",url:"./tags/URL/index.html"},{revision:"687a3c132edfdb0e8e6f36ef0ef54ba8",url:"./tags/Vercel/index.html"},{revision:"a6d147dacbee642aa28a7980bf97c1a9",url:"./tags/wenyan-lang/index.html"},{revision:"c38b562a3262310365b4d49191490f9e",url:"./tags/Windows/index.html"},{revision:"1bf3be881f62db6d9400e750ddb9894d",url:"./tags/图床/index.html"},{revision:"4cf3b3a8e7154c86ff85c909fb4e77c7",url:"./tags/文言文编程/index.html"},{revision:"de5a8b46dfc598fcbac1732755ed4583",url:"./tags/浏览器/index.html"},{revision:"45461457c8fffcc0465a548acb9ae3bc",url:"./tags/炫酷文字/index.html"},{revision:"fc9ad7e6179ed3eee2638be8e87f4a24",url:"./tags/网站存活监控/index.html"},{revision:"fabf7271fcada1bc1f03c6f2aa92f982",url:"./vercel.json"}],{directoryIndex:null}),workbox.precaching.cleanupOutdatedCaches(),workbox.routing.registerRoute(/\.(?:png|jpg|jpeg|gif|bmp|webp|svg|ico)$/,new workbox.strategies.CacheFirst({cacheName:"images",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:86400}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/\.(?:eot|ttf|woff|woff2)$/,new workbox.strategies.CacheFirst({cacheName:"fonts",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.googleAnalytics.initialize();