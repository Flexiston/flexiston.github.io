"use strict";var workboxVersion="5.1.3";importScripts("https://storage.googleapis.com/workbox-cdn/releases/".concat(workboxVersion,"/workbox-sw.js")),workbox.setConfig({modulePathPrefix:"https://storage.googleapis.com/workbox-cdn/releases/".concat(workboxVersion,"/")}),workbox.core.setCacheNameDetails({prefix:"Flexiston's Blog"}),workbox.core.skipWaiting(),workbox.core.clientsClaim(),workbox.precaching.precacheAndRoute([{revision:"e8e55be3b76d96a518da820080034310",url:"./404.html"},{revision:"61836a39f6399a7bcaf3f90107657f03",url:"./about/index.html"},{revision:"9b76fc1af723c3b49f6c045a8595c815",url:"./archives/2020/04/index.html"},{revision:"bb750f5ec10c8846e683e3218dfae930",url:"./archives/2020/05/index.html"},{revision:"43eed4fb805e400323d0b854813f3118",url:"./archives/2020/06/index.html"},{revision:"2aab37e9ad786b256317d6126e2d3c85",url:"./archives/2020/07/index.html"},{revision:"05a80dc3571e548950acba7cbe977395",url:"./archives/2020/08/index.html"},{revision:"48fc4bee9ecd0dcf129444a43c028f7e",url:"./archives/2020/index.html"},{revision:"cae3f4cc75740b2dbff499493d3dd806",url:"./archives/2020/page/2/index.html"},{revision:"d66ee2f9eefa2934a8d6faad422ad4e4",url:"./archives/index.html"},{revision:"cbec3e0423b771673894a3e49d4e0b33",url:"./archives/page/2/index.html"},{revision:"9fb351efc4b8a7db51d2d7325f60fb03",url:"./baidu_verify_spMQLbgc0m.html"},{revision:"493321397a4dfcce00d15d06cc0c6762",url:"./catch-cat.min.js"},{revision:"4cbda06d1c9316794fc2e864b3c47539",url:"./catch-cat/index.html"},{revision:"3db6e579c69c01f745262a4afe0d20a3",url:"./categories/Bug/index.html"},{revision:"a17d21225594e29123379bc7a55b2aa8",url:"./categories/Dev/GitHub/index.html"},{revision:"1bc2f28204e31e6198c53105a59edec0",url:"./categories/Dev/Hexo/index.html"},{revision:"a2f1c147c3f58b671528cdfd984b5996",url:"./categories/Dev/index.html"},{revision:"7b5f01d3d43f84cda1b8a82ed09932f0",url:"./categories/Dev/page/2/index.html"},{revision:"3b125958b0c60bc21204cbfe4c98e535",url:"./categories/Dev/Vercel/index.html"},{revision:"217861e0bb4e74be6aabd708f1dbe9c5",url:"./categories/Dev/Windows/index.html"},{revision:"eb2196293a8317bf5a459e26b7977bcd",url:"./categories/Dev/工具/index.html"},{revision:"a0d06f90b0c731070bf85634b82bd003",url:"./categories/Emoji/index.html"},{revision:"b81d85d6d1b445e59f30bf10e41824a5",url:"./categories/GitHub/index.html"},{revision:"e0c62e59afb691f933919c0c3b8182c6",url:"./categories/index.html"},{revision:"853af3253a3c4aa2641c8b704f188abe",url:"./categories/文言文编程/index.html"},{revision:"85806be7fecf073bb4670bee1d5f0224",url:"./changelog/index.html"},{revision:"359a1e71674c135b6598b08037e962b9",url:"./css/style/dark.css"},{revision:"0e0649bf0458ca96c0b34a9b9905fa88",url:"./css/style/flesx.css"},{revision:"ec07076b1bc9799e0dab5989c7e1d1ee",url:"./css/style/links.css"},{revision:"1407dc11577c56dde90dce10aa71bc50",url:"./css/style/note.css"},{revision:"fc764d9a99cd208d780999d32b2c47da",url:"./css/style/timeline.l.css"},{revision:"9945aa19aa1ff39ac5c6b9a14688131f",url:"./css/style/valine.l.css"},{revision:"72622e54aac09aaa381730a70676a78f",url:"./favicon.ico"},{revision:"b86dc69cffc9e656ce0e0d33e1b40576",url:"./friends/index.html"},{revision:"d817a5299c312d55795f924f361403c3",url:"./index.html"},{revision:"7ae13e74bfba770e04e27d818d1ab28f",url:"./js/io.js"},{revision:"f564bbb092181f20953084c3ed507461",url:"./manifest.json"},{revision:"fa458cb2fb9ff89f0d14d9b618986997",url:"./map/index.html"},{revision:"1b3819adb7fdc61d51e9784bcec93a0d",url:"./mikutap/css/mikutap.css"},{revision:"5279a09d7a75b44f3c35364ea2a8f08b",url:"./mikutap/data/main/main.json"},{revision:"d94b20e465ff7289142b647c1ac142ea",url:"./mikutap/data/track/track.json"},{revision:"4b63179db3c45dfd9078a252b2575cd1",url:"./mikutap/icon.png"},{revision:"56ba4222adad2322b0168981868bc934",url:"./mikutap/index.html"},{revision:"936ff3edd8373c243f56bf9c0fc66ec8",url:"./mikutap/js/mikutap.min.js"},{revision:"ee0a7ce469b3a15bd2c57ef76f38dbc6",url:"./mikutap/shared/css/common-1.css"},{revision:"a1aba3a1001e09230cbfdb18d522cdbc",url:"./mikutap/shared/css/index-1.css"},{revision:"43e49a61141c64bcf8d7981f7a6a26f5",url:"./mikutap/shared/js/common-2.min.js"},{revision:"b74c8c57d13ad72401b651f4128a2468",url:"./mikutap/shared/sp/css/common.css"},{revision:"86baa08bdb1464e9e133ed0f4f7b31e3",url:"./page/2/index.html"},{revision:"f832131ad667a687ef1ba8a4ff6bcbe7",url:"./play/index.html"},{revision:"cc94e54ad1cdb1603414ba76a62e5950",url:"./posts/17931.html"},{revision:"d6a8b408f8bef75b3ddc3d4e3308b003",url:"./posts/22938.html"},{revision:"86ba28197f9f972b1134ddef28e90540",url:"./posts/24179.html"},{revision:"70f70c84a501b9a4db9c8642736e1cca",url:"./posts/24549.html"},{revision:"23122555a4e6400af3be8445ee1b5520",url:"./posts/25909.html"},{revision:"736a887f6390c33f218511a22a955f9f",url:"./posts/28146.html"},{revision:"8557099b56b9042e49dd3031d161a5d2",url:"./posts/32716.html"},{revision:"c10b204f988fd19fbd8b4eca627282be",url:"./posts/39479.html"},{revision:"025ef5cd4bece7044eeb7d5502744267",url:"./posts/4141.html"},{revision:"0ac359fd4b5b47fd12e93327a7216992",url:"./posts/43359.html"},{revision:"dd4273ec275be11a465b75d474128852",url:"./posts/47424.html"},{revision:"f123a8135d8c19d73cd1a5fd10cc4df6",url:"./posts/49939.html"},{revision:"e386273e0dfec954198001d9dd20fd6a",url:"./posts/5913.html"},{revision:"5d2eef54812ee11e5a0cdc64f8896eb7",url:"./posts/7578.html"},{revision:"29d8bfc5f9b1f061ca2d4488756392da",url:"./runner/index.html"},{revision:"592a7dd217debe579171b73437ac0cc4",url:"./say/index.html"},{revision:"4084315872c42885b5908c09b7391cea",url:"./search.json"},{revision:"a36f2c7f0105baa9338ec3355c696f7d",url:"./search/index.html"},{revision:"935eb50b24d97a184ca9623a91c0f616",url:"./t-rex/assets/css/t-rex.css"},{revision:"01f2014886ea4de08147a231bebfd958",url:"./t-rex/assets/js/index.js"},{revision:"7bc8783256a189ab13556a4f89a9b96c",url:"./t-rex/assets/js/t-rex.js"},{revision:"cad7798da0d84c8a6e55affb940bc76b",url:"./t-rex/index.html"},{revision:"0d2a105203fad058dc16a8b999a4310a",url:"./tags/Bug/index.html"},{revision:"0929740c2e4319cc582040c898f0a6a7",url:"./tags/Coding-Pages/index.html"},{revision:"588f5737443f5c4609bca4a6d39f38d7",url:"./tags/Commands/index.html"},{revision:"314746f7cf7c3df34f87c97449af8796",url:"./tags/Dev/index.html"},{revision:"2553c6148570af6c274c3a90df679f9b",url:"./tags/Emoji/index.html"},{revision:"ed9a67c38b573f84a32e8264aef401cd",url:"./tags/GitHub-Actions/index.html"},{revision:"c27c6a665523369b58239990776a72c9",url:"./tags/GitHub/index.html"},{revision:"78a5816bb0e986b8122b2b8f933e6ba6",url:"./tags/Hexo/index.html"},{revision:"050334fbaca54dd188eee12e493e4b9e",url:"./tags/index.html"},{revision:"7c4efc04c4c38919a2ad678837568cde",url:"./tags/issues/index.html"},{revision:"ea4af46ea8b235066b7e824e678cb377",url:"./tags/LeanCloud/index.html"},{revision:"d4cda654457fde98e2af54895717b8ab",url:"./tags/UptimeRobot/index.html"},{revision:"cd4bf344c5f65e60427145eb2b8a1678",url:"./tags/URL/index.html"},{revision:"17b698b8a6a1bebf653c41483f65508c",url:"./tags/Vercel/index.html"},{revision:"1d32b1f86fff78096734f427e4fa24f4",url:"./tags/wenyan-lang/index.html"},{revision:"0525583c6be0a79f851f872c9a32d29f",url:"./tags/Windows/index.html"},{revision:"449f453250c87c2b538d637cc9cb07f1",url:"./tags/文言文编程/index.html"},{revision:"3e5ffe74192933fbb86fa2da12f6a6d0",url:"./tags/浏览器/index.html"},{revision:"77a72136255992f2c72c420d2e67f122",url:"./tags/炫酷文字/index.html"},{revision:"f41564fdd75d3a7c9ab59a8a89f9a5d6",url:"./tags/网站存活监控/index.html"},{revision:"fabf7271fcada1bc1f03c6f2aa92f982",url:"./vercel.json"}],{directoryIndex:null}),workbox.precaching.cleanupOutdatedCaches(),workbox.routing.registerRoute(/\.(?:png|jpg|jpeg|gif|bmp|webp|svg|ico)$/,new workbox.strategies.CacheFirst({cacheName:"images",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:86400}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/\.(?:eot|ttf|woff|woff2)$/,new workbox.strategies.CacheFirst({cacheName:"fonts",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.googleAnalytics.initialize();