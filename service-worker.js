"use strict";var workboxVersion="5.1.3";importScripts("https://storage.googleapis.com/workbox-cdn/releases/".concat(workboxVersion,"/workbox-sw.js")),workbox.setConfig({modulePathPrefix:"https://storage.googleapis.com/workbox-cdn/releases/".concat(workboxVersion,"/")}),workbox.core.setCacheNameDetails({prefix:"Flexiston's Blog"}),workbox.core.skipWaiting(),workbox.core.clientsClaim(),workbox.precaching.precacheAndRoute([{revision:"c0e99a810f4fa76d16b2d885140641c5",url:"./404.html"},{revision:"2c922a223d4ff97f3e6d18f7b9f4bd21",url:"./about/index.html"},{revision:"0d4014893f3e8ab7c605d465fa5805cd",url:"./archives/2020/04/index.html"},{revision:"83157e325bf57192cf80afc34f994797",url:"./archives/2020/05/index.html"},{revision:"fe9a4e83133c4b965e00403f0cbd3ed9",url:"./archives/2020/06/index.html"},{revision:"5126c459c91e8c659911799a8e9b0444",url:"./archives/2020/07/index.html"},{revision:"85d6c7a276fb6620756120fa81d2d77a",url:"./archives/2020/08/index.html"},{revision:"40990fa2d614de264a0ef2710141855b",url:"./archives/2020/09/index.html"},{revision:"bf3b0d0f6ddebfe423515ef2864c6110",url:"./archives/2020/index.html"},{revision:"4c5948983fd5cd0586c70c01cd2a9a04",url:"./archives/2020/page/2/index.html"},{revision:"12c99aaf34ba2041fa69463e6728f811",url:"./archives/index.html"},{revision:"195c7315bc6036eed36e56921657f8e8",url:"./archives/page/2/index.html"},{revision:"9fb351efc4b8a7db51d2d7325f60fb03",url:"./baidu_verify_spMQLbgc0m.html"},{revision:"6f79b93f3825b881f80a56b9c0fc6ff2",url:"./catch-cat.min.js"},{revision:"391af5cb2e862b004f458b88314aa612",url:"./catch-cat/index.html"},{revision:"3e45428f9db1cf64e700d0988571e96b",url:"./categories/Bug/index.html"},{revision:"e189117bc00d613fbae1287f0c04cbf9",url:"./categories/Dev/GitHub/index.html"},{revision:"8be8ef7cfe05971dd1e341edb72a7e0c",url:"./categories/Dev/Hexo/index.html"},{revision:"37b3ccad4e68aaf4fbf8761b016f6cfb",url:"./categories/Dev/index.html"},{revision:"fcfd1f88251869c91a6cdd9c04a6f39d",url:"./categories/Dev/page/2/index.html"},{revision:"1f2cba46f17563ac74117ab9b90dd8de",url:"./categories/Dev/Vercel/index.html"},{revision:"3bdf475d7b58a032b7adeb12f9d3a443",url:"./categories/Dev/Windows/index.html"},{revision:"3287c1f91c1c2ec2f78fa61f6b145d2a",url:"./categories/Dev/工具/index.html"},{revision:"d53a4a8b2905920d216c96dfa4bf4b6a",url:"./categories/Emoji/index.html"},{revision:"67941a7451118787678f543c7437be86",url:"./categories/GitHub/index.html"},{revision:"50b3174085648897baff8086546e71cb",url:"./categories/index.html"},{revision:"d309d2bf410f2c25e7a153176fe55d41",url:"./categories/文言文编程/index.html"},{revision:"0df07f1c5f3087435bd5db2577b5b2f3",url:"./categories/白嫖/index.html"},{revision:"b3ba7f49b8fca74186ab50550278d821",url:"./changelog/index.html"},{revision:"716b176afc842df011f56933c1b16f32",url:"./css/style/artalk.css"},{revision:"065e2336df5c077dff1860817f7d9542",url:"./css/style/darkmode.css"},{revision:"a5bd4e5cc51313456484e8f33a4a1ea2",url:"./css/style/flesx.css"},{revision:"284fb56f511014cedb50288c054fe7b5",url:"./css/style/links.css"},{revision:"1407dc11577c56dde90dce10aa71bc50",url:"./css/style/note.css"},{revision:"fc764d9a99cd208d780999d32b2c47da",url:"./css/style/timeline.l.css"},{revision:"72622e54aac09aaa381730a70676a78f",url:"./favicon.ico"},{revision:"6143fd7d234f2b675b893ee24b1a9675",url:"./friends/index.html"},{revision:"54149820718ed0c9817ec047ac66bbec",url:"./index.html"},{revision:"de47307c7e8466f3e9aa883486ad16f1",url:"./js/app.k.js"},{revision:"ae0be675f96610c4194a953de28b5c84",url:"./js/darkmode.js"},{revision:"32973883fcac0a9ae6cc79c0ea25fda2",url:"./live2dw/lib/L2Dwidget.0.min.js"},{revision:"094cbace49a39548bed64abff5988b05",url:"./live2dw/lib/L2Dwidget.min.js"},{revision:"f564bbb092181f20953084c3ed507461",url:"./manifest.json"},{revision:"03bb5ee762dff8f53a992deede0b6f67",url:"./map/index.html"},{revision:"1b3819adb7fdc61d51e9784bcec93a0d",url:"./mikutap/css/mikutap.css"},{revision:"5279a09d7a75b44f3c35364ea2a8f08b",url:"./mikutap/data/main/main.json"},{revision:"d94b20e465ff7289142b647c1ac142ea",url:"./mikutap/data/track/track.json"},{revision:"4b63179db3c45dfd9078a252b2575cd1",url:"./mikutap/icon.png"},{revision:"56ba4222adad2322b0168981868bc934",url:"./mikutap/index.html"},{revision:"936ff3edd8373c243f56bf9c0fc66ec8",url:"./mikutap/js/mikutap.min.js"},{revision:"ee0a7ce469b3a15bd2c57ef76f38dbc6",url:"./mikutap/shared/css/common-1.css"},{revision:"a1aba3a1001e09230cbfdb18d522cdbc",url:"./mikutap/shared/css/index-1.css"},{revision:"43e49a61141c64bcf8d7981f7a6a26f5",url:"./mikutap/shared/js/common-2.min.js"},{revision:"b74c8c57d13ad72401b651f4128a2468",url:"./mikutap/shared/sp/css/common.css"},{revision:"06201790239ffdfded2ab65c6086fc00",url:"./page/2/index.html"},{revision:"1f1e811ac7ccf70095c97d2e2f924e25",url:"./play/index.html"},{revision:"0fb17348b2e6b3ce5fdf5d0ea6c9b89e",url:"./posts/17931.html"},{revision:"15ab4e6dafc26611952ab739e74acc83",url:"./posts/22938.html"},{revision:"99f67288c0faab260c5062fef7a87ebc",url:"./posts/24179.html"},{revision:"94c8026b5a156297035d18b4cef97160",url:"./posts/24549.html"},{revision:"bf33152f3756a87c70b425fed28dfcab",url:"./posts/25909.html"},{revision:"096ae9147adc16eecb12b211ada33069",url:"./posts/27708.html"},{revision:"fc66269cade1bdc161d7ce231e6f0b57",url:"./posts/28146.html"},{revision:"964164a00e98ef5b027623a3a05b21dd",url:"./posts/32716.html"},{revision:"3276445d754dbc21f8f5f0ee4ef00912",url:"./posts/39479.html"},{revision:"daa6fd04ab8f47b9e91803a35cd6d378",url:"./posts/4141.html"},{revision:"0e0520f2e5e03b5c46d12a454fd84c27",url:"./posts/43359.html"},{revision:"57c1c73e152271344023b5a21fe771dc",url:"./posts/47424.html"},{revision:"25d5b7fb9e676dc239bcff7525f12d09",url:"./posts/49939.html"},{revision:"38dd583b2c27b4196d60dcf580869574",url:"./posts/5913.html"},{revision:"fff9891dfe2365c87edd17d32ff4b6d4",url:"./posts/7578.html"},{revision:"ef1f162ca4f5e1c5f9b67e59497c784b",url:"./runner/index.html"},{revision:"1435d13f70e94fa87d1fc7e052e58ff5",url:"./say/index.html"},{revision:"922f2b9a3a20762d6d6bb9e4c3ff075c",url:"./search.json"},{revision:"483c9b3c5ee4c5e4378477a91ee928c4",url:"./search/index.html"},{revision:"935eb50b24d97a184ca9623a91c0f616",url:"./t-rex/assets/css/t-rex.css"},{revision:"01f2014886ea4de08147a231bebfd958",url:"./t-rex/assets/js/index.js"},{revision:"a10b0288b9d6b93b8b04de3351882514",url:"./t-rex/assets/js/t-rex.js"},{revision:"cad7798da0d84c8a6e55affb940bc76b",url:"./t-rex/index.html"},{revision:"44a7df77450277557895fe4383524285",url:"./tags/Bug/index.html"},{revision:"b25deebe170ba82ff7865d06dbfedfb4",url:"./tags/Coding-Pages/index.html"},{revision:"47002b2235869b07c25af5815c5a0202",url:"./tags/Commands/index.html"},{revision:"ad1ac781792576507d03bf46518807a4",url:"./tags/Dev/index.html"},{revision:"73a6558df18187223abeb61bd43a16f9",url:"./tags/Dev/page/2/index.html"},{revision:"ed3e9159dcb7401f7e487567012e6a57",url:"./tags/Emoji/index.html"},{revision:"9ffdb53d05a953f44a3c77655cd76dd6",url:"./tags/GitHub-Actions/index.html"},{revision:"02b0250a788b3c5978a19f95ab203604",url:"./tags/GitHub/index.html"},{revision:"b0ac2cb36d3aa29fa6d29ef8301f181d",url:"./tags/Hexo/index.html"},{revision:"8e2942213cb185edc98f15c190d23046",url:"./tags/index.html"},{revision:"04fdd05fd977316bc7bcadde1804173a",url:"./tags/issues/index.html"},{revision:"a052afa1f491b3ed38fa1bf3497b9c5e",url:"./tags/LeanCloud/index.html"},{revision:"2580eaf00ff4b0ddefa39d83b2855c31",url:"./tags/PicGo/index.html"},{revision:"390df039fe9039ad8adc2e964fbbcf45",url:"./tags/UptimeRobot/index.html"},{revision:"dd0d192e50546656721ba65072c4fe8e",url:"./tags/URL/index.html"},{revision:"8faf09b877e98a6e23c3b4b4e9c6ef66",url:"./tags/Vercel/index.html"},{revision:"d0d9863e4d9447cd8f9c448faea53997",url:"./tags/wenyan-lang/index.html"},{revision:"196bdd7136b3c7d6a76711c3edeb9b2e",url:"./tags/Windows/index.html"},{revision:"59028510ab70a226f94bfa6f5e75aa96",url:"./tags/图床/index.html"},{revision:"c252ee2685fc114012f44d164b072763",url:"./tags/文言文编程/index.html"},{revision:"d3381a7e027f524b4f4f9ee40e526d47",url:"./tags/浏览器/index.html"},{revision:"ecc69482bc0cd6632dbd3423d5c8ed6b",url:"./tags/炫酷文字/index.html"},{revision:"2a0598077514b2c661909dca4323a5d8",url:"./tags/网站存活监控/index.html"},{revision:"fabf7271fcada1bc1f03c6f2aa92f982",url:"./vercel.json"}],{directoryIndex:null}),workbox.precaching.cleanupOutdatedCaches(),workbox.routing.registerRoute(/\.(?:png|jpg|jpeg|gif|bmp|webp|svg|ico)$/,new workbox.strategies.CacheFirst({cacheName:"images",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:86400}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/\.(?:eot|ttf|woff|woff2)$/,new workbox.strategies.CacheFirst({cacheName:"fonts",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.googleAnalytics.initialize();