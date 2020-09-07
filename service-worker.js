"use strict";var workboxVersion="5.1.3";importScripts("https://storage.googleapis.com/workbox-cdn/releases/".concat(workboxVersion,"/workbox-sw.js")),workbox.setConfig({modulePathPrefix:"https://storage.googleapis.com/workbox-cdn/releases/".concat(workboxVersion,"/")}),workbox.core.setCacheNameDetails({prefix:"Flexiston's Blog"}),workbox.core.skipWaiting(),workbox.core.clientsClaim(),workbox.precaching.precacheAndRoute([{revision:"7d6c5fd90503fecbf91fd8df42c70316",url:"./404.html"},{revision:"c8456155e8cf2ae8ce482a5ad1fc4a2f",url:"./about/index.html"},{revision:"73c04a992742af3fc6601a02b9444932",url:"./apply-link/index.html"},{revision:"7b50c486d8e3dee3ae60bf614a58e412",url:"./archives/2020/04/index.html"},{revision:"7cf527dd7c1924e4c15cad3307804bd5",url:"./archives/2020/05/index.html"},{revision:"2c19e862039959aa1e5c1ce077971bdf",url:"./archives/2020/06/index.html"},{revision:"53228be4cfc4fd6b557eb85bdb94d553",url:"./archives/2020/07/index.html"},{revision:"31d55575fc4ad2ba7572cdeb1cea926c",url:"./archives/2020/08/index.html"},{revision:"894960b159af20b6e3a025a25d3fa630",url:"./archives/2020/index.html"},{revision:"2c361247da53ace031ee8799197f69c9",url:"./archives/2020/page/2/index.html"},{revision:"0e226c20019c4bf92979830f5db30e1b",url:"./archives/index.html"},{revision:"d298ccf9883dffa6503eada9d6ed4e02",url:"./archives/page/2/index.html"},{revision:"9fb351efc4b8a7db51d2d7325f60fb03",url:"./baidu_verify_spMQLbgc0m.html"},{revision:"493321397a4dfcce00d15d06cc0c6762",url:"./catch-cat.min.js"},{revision:"a96fea80c6b7c282b10dfb9b701d81d8",url:"./catch-cat/index.html"},{revision:"d420add5f444ee57b68d70ae3142d8a3",url:"./categories/Bug/index.html"},{revision:"184200536665d166ed67ea78dd35974c",url:"./categories/Dev/GitHub/index.html"},{revision:"b24466e58d9f894f6ff843ad3c36ab84",url:"./categories/Dev/Hexo/index.html"},{revision:"622f2571eafd721a18b4e1589e439fb5",url:"./categories/Dev/index.html"},{revision:"9ade40ab5be9a9740f3568ef489048a7",url:"./categories/Dev/page/2/index.html"},{revision:"bd8e043363c33eb864e1701319e1f977",url:"./categories/Dev/Vercel/index.html"},{revision:"f36c472df19b02c6d6cb1018a44331b1",url:"./categories/Dev/Windows/index.html"},{revision:"063054cc5400d05f15ef84d4d497c663",url:"./categories/Dev/工具/index.html"},{revision:"9aec251122acf2647f8afc17eae6d388",url:"./categories/Emoji/index.html"},{revision:"5141d3ddf715fb81c9e38836579c76ef",url:"./categories/GitHub/index.html"},{revision:"8cadcdca75e58429d250b2c0a40ceba2",url:"./categories/index.html"},{revision:"453bcae4149e8adef18806ce3d541df3",url:"./categories/文言文编程/index.html"},{revision:"af4b4f8fd1f76a0e3a327f897a0c37d6",url:"./css/style/flesx.css"},{revision:"1407dc11577c56dde90dce10aa71bc50",url:"./css/style/note.css"},{revision:"fc764d9a99cd208d780999d32b2c47da",url:"./css/style/timeline.l.css"},{revision:"41aa862d91540c18bb47fb4ecbb38e4a",url:"./css/style/valine.l.css"},{revision:"72622e54aac09aaa381730a70676a78f",url:"./favicon.ico"},{revision:"d4dc1fb328f13c6cb4213d3c5b6107ba",url:"./friends/index.html"},{revision:"9949dd625c17dbbb9f0521557cf08760",url:"./index.html"},{revision:"2b596c1ce3710f02da061e9aee74d3ca",url:"./js/app.js"},{revision:"f564bbb092181f20953084c3ed507461",url:"./manifest.json"},{revision:"61a4de70f8a45c6779cb435a8018965f",url:"./map/index.html"},{revision:"1b3819adb7fdc61d51e9784bcec93a0d",url:"./mikutap/css/mikutap.css"},{revision:"5279a09d7a75b44f3c35364ea2a8f08b",url:"./mikutap/data/main/main.json"},{revision:"d94b20e465ff7289142b647c1ac142ea",url:"./mikutap/data/track/track.json"},{revision:"4b63179db3c45dfd9078a252b2575cd1",url:"./mikutap/icon.png"},{revision:"56ba4222adad2322b0168981868bc934",url:"./mikutap/index.html"},{revision:"936ff3edd8373c243f56bf9c0fc66ec8",url:"./mikutap/js/mikutap.min.js"},{revision:"ee0a7ce469b3a15bd2c57ef76f38dbc6",url:"./mikutap/shared/css/common-1.css"},{revision:"a1aba3a1001e09230cbfdb18d522cdbc",url:"./mikutap/shared/css/index-1.css"},{revision:"43e49a61141c64bcf8d7981f7a6a26f5",url:"./mikutap/shared/js/common-2.min.js"},{revision:"b74c8c57d13ad72401b651f4128a2468",url:"./mikutap/shared/sp/css/common.css"},{revision:"aa4fb2118e4a7a485ba2a5e42c483cf2",url:"./page/2/index.html"},{revision:"1b68550be28848b50f81992d423257e4",url:"./play/index.html"},{revision:"e600dd571fe9f4a6476ce39e46e101e7",url:"./posts/17931.html"},{revision:"2bedf8cd5a7268aa778d15be3eb8e6ab",url:"./posts/22938.html"},{revision:"ec80f6e532a69d599dbdfbb7e84a38d3",url:"./posts/24179.html"},{revision:"46db21437ebe2fab8b847d73531f0fda",url:"./posts/24549.html"},{revision:"3ff3deb57e5e461a0bfed1b8fe03b05e",url:"./posts/25909.html"},{revision:"1426c420c8be644c31bbc29f88d3a9d0",url:"./posts/28146.html"},{revision:"12dc0e8dc07ca2c4bcf58c088987c99d",url:"./posts/32716.html"},{revision:"4ef066ed952ceb116e03fcc5bdeb379f",url:"./posts/39479.html"},{revision:"4472709ba3780044cfd871dfcc1d3658",url:"./posts/4141.html"},{revision:"2dd2d6d13fe0313ea94fe97af07c9d4e",url:"./posts/43359.html"},{revision:"60cffd4706bf5808e114dd82ec49e419",url:"./posts/47424.html"},{revision:"7cf36745818f9897edc187177757db98",url:"./posts/49939.html"},{revision:"0fcd6d5c9e64a4170dd2d9d432cab1fd",url:"./posts/5913.html"},{revision:"4c3861fe073602b0fb311ecc5a38ebf7",url:"./posts/7578.html"},{revision:"42ece2ffb4c4df5e65afbcd5fc03648b",url:"./runner/index.html"},{revision:"d82c79fdfbc073e5e46006c7a0c2a045",url:"./say/index.html"},{revision:"371671a045cdd1589961b8b83348f74a",url:"./search.json"},{revision:"a0c38bf92a2597255dcacc9256333249",url:"./search/index.html"},{revision:"935eb50b24d97a184ca9623a91c0f616",url:"./t-rex/assets/css/t-rex.css"},{revision:"01f2014886ea4de08147a231bebfd958",url:"./t-rex/assets/js/index.js"},{revision:"7bc8783256a189ab13556a4f89a9b96c",url:"./t-rex/assets/js/t-rex.js"},{revision:"cad7798da0d84c8a6e55affb940bc76b",url:"./t-rex/index.html"},{revision:"dd2815699325a997645518b164710ddd",url:"./tags/Bug/index.html"},{revision:"07c9ba9f13188c51166806c8c7bb4a95",url:"./tags/Coding-Pages/index.html"},{revision:"673310d015c2d24556ec2dc200a9fb3b",url:"./tags/Commands/index.html"},{revision:"b08979ea1e383898d9be41c2f7a7eb25",url:"./tags/Dev/index.html"},{revision:"075516a4513ae80882774f34b0f54809",url:"./tags/Emoji/index.html"},{revision:"c73df6ab27117a473221877e4aee9a96",url:"./tags/GitHub-Actions/index.html"},{revision:"05318d9629b71bc2321215f87170eb39",url:"./tags/GitHub/index.html"},{revision:"5131a47b9bba70deeee0342313f75814",url:"./tags/Hexo/index.html"},{revision:"ae0fb4ba69846f8a0c8da414f269bfd4",url:"./tags/index.html"},{revision:"925d3b589ec499e8e5953507eb253d9e",url:"./tags/issues/index.html"},{revision:"a0c6d828bff77cd0f33cdfbcf362c8c6",url:"./tags/LeanCloud/index.html"},{revision:"802b5e32afce03f39cad88043498dfb0",url:"./tags/UptimeRobot/index.html"},{revision:"55864abe88d5915b86897b848cd7c39f",url:"./tags/URL/index.html"},{revision:"1b56a60750157e553774809736f096ef",url:"./tags/Vercel/index.html"},{revision:"269396555d944769c7810e35cba39bb7",url:"./tags/wenyan-lang/index.html"},{revision:"bbe24c6c43c252c51121a64eb1df8ee8",url:"./tags/Windows/index.html"},{revision:"0737abed8f9ca90dc9a88b1e02f32b00",url:"./tags/文言文编程/index.html"},{revision:"525eef1f120777c31eb716f162a23b3d",url:"./tags/浏览器/index.html"},{revision:"9bc1624c5348391c8adc0a1ed26dfbff",url:"./tags/炫酷文字/index.html"},{revision:"5bcb488fc8ad237c9f57a9e5dc9896dd",url:"./tags/网站存活监控/index.html"},{revision:"5c8cf59fb7097d08a55e46864252f9f8",url:"./timeline/index.html"},{revision:"fabf7271fcada1bc1f03c6f2aa92f982",url:"./vercel.json"}],{directoryIndex:null}),workbox.precaching.cleanupOutdatedCaches(),workbox.routing.registerRoute(/\.(?:png|jpg|jpeg|gif|bmp|webp|svg|ico)$/,new workbox.strategies.CacheFirst({cacheName:"images",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:259200}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/\.(?:eot|ttf|woff|woff2)$/,new workbox.strategies.CacheFirst({cacheName:"fonts",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/^https:\/\/fonts\.googleapis\.com/,new workbox.strategies.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets"})),workbox.routing.registerRoute(/^https:\/\/fonts\.gstatic\.com/,new workbox.strategies.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.googleAnalytics.initialize();