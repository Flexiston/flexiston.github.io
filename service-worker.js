"use strict";var workboxVersion="5.1.3";importScripts("https://storage.googleapis.com/workbox-cdn/releases/".concat(workboxVersion,"/workbox-sw.js")),workbox.setConfig({modulePathPrefix:"https://storage.googleapis.com/workbox-cdn/releases/".concat(workboxVersion,"/")}),workbox.core.setCacheNameDetails({prefix:"Flexiston's Blog"}),workbox.core.skipWaiting(),workbox.core.clientsClaim(),workbox.precaching.precacheAndRoute([{revision:"d2c7327c0f3f54b8361dc04338741e8c",url:"./404.html"},{revision:"3c89aa71c33a2f0fc3e9f60d977af19b",url:"./about/index.html"},{revision:"c8fdcc74755326429f90ddbd553b4b81",url:"./archives/2020/04/index.html"},{revision:"a182d17fdb186399fdbc84b069e347ac",url:"./archives/2020/05/index.html"},{revision:"cfafcf5b824ec8b1135797fffe9020f0",url:"./archives/2020/06/index.html"},{revision:"12722cad355e289d35e01cecd7f0d6ee",url:"./archives/2020/07/index.html"},{revision:"394cc7582006c8c269e9348e95bacabc",url:"./archives/2020/08/index.html"},{revision:"ef534c7b064906c608fcdf804ff6b2ad",url:"./archives/2020/09/index.html"},{revision:"a84b98088e60db4ec4748b2becc4915b",url:"./archives/2020/index.html"},{revision:"f0d3bbb00efae397a5abdd9e1e9ace7a",url:"./archives/2020/page/2/index.html"},{revision:"64d79f6781c5f919a47d01ea55194236",url:"./archives/index.html"},{revision:"e62c8b79ee28d920791afa99eb863210",url:"./archives/page/2/index.html"},{revision:"9fb351efc4b8a7db51d2d7325f60fb03",url:"./baidu_verify_spMQLbgc0m.html"},{revision:"6f79b93f3825b881f80a56b9c0fc6ff2",url:"./catch-cat.min.js"},{revision:"4f9c55c15354f8896eec22927cb86a7f",url:"./catch-cat/index.html"},{revision:"fec79a76164c14190c203579704c66f4",url:"./categories/Bug/index.html"},{revision:"da4e9ed4f2d94ed715bf3d231348e6bc",url:"./categories/Dev/GitHub/index.html"},{revision:"5d7884cfdaab027c5f74b163f3937bca",url:"./categories/Dev/Hexo/index.html"},{revision:"550bb2f43adc279920d270e9da50a725",url:"./categories/Dev/index.html"},{revision:"7ba2c47b8785bb4361e5ed44701ee85d",url:"./categories/Dev/page/2/index.html"},{revision:"53524077ae2814958d7a85654b0584d7",url:"./categories/Dev/Vercel/index.html"},{revision:"523da935b4758d914338a1d35fac046d",url:"./categories/Dev/Windows/index.html"},{revision:"96e3d42118b0164bc3766e2258b8b73f",url:"./categories/Dev/工具/index.html"},{revision:"41702929e5efadfcf9aa9b07a5974aa7",url:"./categories/Emoji/index.html"},{revision:"204bfd7231cf97109617842ca16f1790",url:"./categories/GitHub/index.html"},{revision:"36f35a5b1ac9aad1e9868bec217e37a6",url:"./categories/index.html"},{revision:"b3b835169b1c579e94dd3ea0d5920828",url:"./categories/文言文编程/index.html"},{revision:"6b9ad698b690e6358f41ab53a77a2374",url:"./categories/白嫖/index.html"},{revision:"23fbc4adee83f897a8987462f11f4001",url:"./changelog/index.html"},{revision:"716b176afc842df011f56933c1b16f32",url:"./css/style/artalk.css"},{revision:"065e2336df5c077dff1860817f7d9542",url:"./css/style/darkmode.css"},{revision:"c5bfe1681977d5fa13149b655fbcede9",url:"./css/style/flesx.css"},{revision:"d02e328349ed5d545e2c192642304d09",url:"./css/style/links.css"},{revision:"1407dc11577c56dde90dce10aa71bc50",url:"./css/style/note.css"},{revision:"fc764d9a99cd208d780999d32b2c47da",url:"./css/style/timeline.l.css"},{revision:"72622e54aac09aaa381730a70676a78f",url:"./favicon.ico"},{revision:"14c553f8aef63fdc276ef861437cf52e",url:"./friends/index.html"},{revision:"ad183475f376f58650be884e2e66e5c9",url:"./index.html"},{revision:"de47307c7e8466f3e9aa883486ad16f1",url:"./js/app.k.js"},{revision:"ae0be675f96610c4194a953de28b5c84",url:"./js/darkmode.js"},{revision:"f564bbb092181f20953084c3ed507461",url:"./manifest.json"},{revision:"a6ff0ee0d858acabb2d1a8c50b8f105b",url:"./map/index.html"},{revision:"1b3819adb7fdc61d51e9784bcec93a0d",url:"./mikutap/css/mikutap.css"},{revision:"5279a09d7a75b44f3c35364ea2a8f08b",url:"./mikutap/data/main/main.json"},{revision:"d94b20e465ff7289142b647c1ac142ea",url:"./mikutap/data/track/track.json"},{revision:"4b63179db3c45dfd9078a252b2575cd1",url:"./mikutap/icon.png"},{revision:"56ba4222adad2322b0168981868bc934",url:"./mikutap/index.html"},{revision:"936ff3edd8373c243f56bf9c0fc66ec8",url:"./mikutap/js/mikutap.min.js"},{revision:"ee0a7ce469b3a15bd2c57ef76f38dbc6",url:"./mikutap/shared/css/common-1.css"},{revision:"a1aba3a1001e09230cbfdb18d522cdbc",url:"./mikutap/shared/css/index-1.css"},{revision:"43e49a61141c64bcf8d7981f7a6a26f5",url:"./mikutap/shared/js/common-2.min.js"},{revision:"b74c8c57d13ad72401b651f4128a2468",url:"./mikutap/shared/sp/css/common.css"},{revision:"965c4dc9097252e15c2613cb3f515201",url:"./page/2/index.html"},{revision:"92bf083c8736a8b2340166a81e981103",url:"./play/index.html"},{revision:"a56f3bfc7b65665a6dcf1d3f6e06048e",url:"./posts/17931.html"},{revision:"9b5e25f07b4819a2748e2cc119ef06b8",url:"./posts/22938.html"},{revision:"5707cc9a02d493e62b218f0c58e73afb",url:"./posts/24179.html"},{revision:"16e30a55418257658539c4f8dabfd139",url:"./posts/24549.html"},{revision:"6d6618cf60a83878e33bd018f6c78899",url:"./posts/25909.html"},{revision:"c1173d68683408d969b72d27cae758fc",url:"./posts/27708.html"},{revision:"1af66d4d56fb1e21a48fb73841eb1993",url:"./posts/28146.html"},{revision:"2cf38571bf4d074addbf7a4d66dd0896",url:"./posts/32716.html"},{revision:"783011da9fb9ddef27ce1bfe6618f6cb",url:"./posts/39479.html"},{revision:"98977f257b6306bf7badd716f701f02d",url:"./posts/4141.html"},{revision:"edea49773aec33af9cd0c5b522ca17d5",url:"./posts/43359.html"},{revision:"cc35790612c061ba8490832fb69a90ba",url:"./posts/47424.html"},{revision:"c4f194590ead914f102816eccaba692e",url:"./posts/49939.html"},{revision:"2d65df8c0b1b6c9078f8b2ec94813742",url:"./posts/5913.html"},{revision:"aaff10b95ea93cd6e82721473234c10e",url:"./posts/7578.html"},{revision:"990db42c69e6ce5eddc25162191adee2",url:"./runner/index.html"},{revision:"812ba60f037e9104a390a98c9cf183e6",url:"./say/index.html"},{revision:"a5f079d3f2d847f40a94191d97d25921",url:"./search.json"},{revision:"a979dacbb946db905bd8a5e9b0d64be4",url:"./search/index.html"},{revision:"935eb50b24d97a184ca9623a91c0f616",url:"./t-rex/assets/css/t-rex.css"},{revision:"01f2014886ea4de08147a231bebfd958",url:"./t-rex/assets/js/index.js"},{revision:"a10b0288b9d6b93b8b04de3351882514",url:"./t-rex/assets/js/t-rex.js"},{revision:"cad7798da0d84c8a6e55affb940bc76b",url:"./t-rex/index.html"},{revision:"0c637c05e98fb117cc826d6e0a92050f",url:"./tags/Bug/index.html"},{revision:"23aa907e9b4165be8a7b898777afff08",url:"./tags/Coding-Pages/index.html"},{revision:"0a7987bbccf21055c6293fffc1c2a408",url:"./tags/Commands/index.html"},{revision:"578623c3e5a3c4ea3e5a5a1b4fcb5412",url:"./tags/Dev/index.html"},{revision:"4e9b097fad6b020631776cc51e41dad0",url:"./tags/Dev/page/2/index.html"},{revision:"33b752f2b712b0a1a940e9d606ac2fca",url:"./tags/Emoji/index.html"},{revision:"13c7015232f153d65b35b5c058acbc7e",url:"./tags/GitHub-Actions/index.html"},{revision:"adf3fa46ddf1cf3c5253fdcf1aca8f51",url:"./tags/GitHub/index.html"},{revision:"85abd50761201bfda61f176dc559ea29",url:"./tags/Hexo/index.html"},{revision:"d9b5e8a45dbbb318b46983ce9a7f1507",url:"./tags/index.html"},{revision:"34956cf8c51efdc571724e28ded92830",url:"./tags/issues/index.html"},{revision:"271defa9017f732005c144a2f139108e",url:"./tags/LeanCloud/index.html"},{revision:"34202bbbe4362167b6835cb87ebb3aae",url:"./tags/PicGo/index.html"},{revision:"445e2d96aca6b41724684470fe001dce",url:"./tags/UptimeRobot/index.html"},{revision:"471fb2f60abc9b94e7c8978e32d0545e",url:"./tags/URL/index.html"},{revision:"68fcbd795ec49a164b65d22e42409164",url:"./tags/Vercel/index.html"},{revision:"c8f0f6436bd80ce11ee9349fcf0d6f9e",url:"./tags/wenyan-lang/index.html"},{revision:"006007f667254678f92b61e6b827ba75",url:"./tags/Windows/index.html"},{revision:"1a7f6e69391d66c8d096f1c56e8545aa",url:"./tags/图床/index.html"},{revision:"2922bfaae600e3e085ceeca5cff4fd42",url:"./tags/文言文编程/index.html"},{revision:"b64d7ef6ef84b32ebc171be72c579523",url:"./tags/浏览器/index.html"},{revision:"3001b7b3605889458769851b89ebc7c2",url:"./tags/炫酷文字/index.html"},{revision:"d444130f0333d0f0feb2e71988171402",url:"./tags/网站存活监控/index.html"},{revision:"fabf7271fcada1bc1f03c6f2aa92f982",url:"./vercel.json"}],{directoryIndex:null}),workbox.precaching.cleanupOutdatedCaches(),workbox.routing.registerRoute(/\.(?:png|jpg|jpeg|gif|bmp|webp|svg|ico)$/,new workbox.strategies.CacheFirst({cacheName:"images",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:86400}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/\.(?:eot|ttf|woff|woff2)$/,new workbox.strategies.CacheFirst({cacheName:"fonts",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.googleAnalytics.initialize();