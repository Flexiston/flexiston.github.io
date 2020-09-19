"use strict";var workboxVersion="5.1.3";importScripts("https://storage.googleapis.com/workbox-cdn/releases/".concat(workboxVersion,"/workbox-sw.js")),workbox.setConfig({modulePathPrefix:"https://storage.googleapis.com/workbox-cdn/releases/".concat(workboxVersion,"/")}),workbox.core.setCacheNameDetails({prefix:"Flexiston's Blog"}),workbox.core.skipWaiting(),workbox.core.clientsClaim(),workbox.precaching.precacheAndRoute([{revision:"c10bc34d03059181dfffb463afa8a3fa",url:"./404.html"},{revision:"c99d24151ed2d9b568697bb81bcdaf94",url:"./about/index.html"},{revision:"e32fe1c4f23dd2bc47f47117af20b137",url:"./archives/2020/04/index.html"},{revision:"0f02f06906e0ca2e7e81829293ff9685",url:"./archives/2020/05/index.html"},{revision:"df16de8a90d8156c443550a863ef4505",url:"./archives/2020/06/index.html"},{revision:"fcd68ed018af39a855e70034f2aa88d8",url:"./archives/2020/07/index.html"},{revision:"f250574b101985c34093ae091b6e521f",url:"./archives/2020/08/index.html"},{revision:"912e604aa178f8a45619ce0fb62ea297",url:"./archives/2020/09/index.html"},{revision:"5b13c55f2dd04ca6aaf932871362fc29",url:"./archives/2020/index.html"},{revision:"a687e26a8f0e40bd51eecce964c80e52",url:"./archives/2020/page/2/index.html"},{revision:"7917bf6859f3feb24eb59999ce6237c8",url:"./archives/index.html"},{revision:"45acb3142db173013ef47184bacb5207",url:"./archives/page/2/index.html"},{revision:"9fb351efc4b8a7db51d2d7325f60fb03",url:"./baidu_verify_spMQLbgc0m.html"},{revision:"6f79b93f3825b881f80a56b9c0fc6ff2",url:"./catch-cat.min.js"},{revision:"f8cfea67ed27fc2fe59430f19ba26d83",url:"./catch-cat/index.html"},{revision:"30dbfc7a328265b14a849c1d43dc5a36",url:"./categories/Bug/index.html"},{revision:"9a9552d6580e4108d4ddf7a5c27d7d65",url:"./categories/Dev/GitHub/index.html"},{revision:"b24e1706f6ac147f7aa654f98384da77",url:"./categories/Dev/Hexo/index.html"},{revision:"7c7f78927cd120444c12553eeaf4027d",url:"./categories/Dev/index.html"},{revision:"b3faa53d6284d2f7da0b1813744bb597",url:"./categories/Dev/page/2/index.html"},{revision:"5b510797ef47c8f46918fef27083f809",url:"./categories/Dev/Vercel/index.html"},{revision:"7e8870d7918425276b879c57cf0705ed",url:"./categories/Dev/Windows/index.html"},{revision:"276d62d2b22edc9220a83b1e8e408d30",url:"./categories/Dev/工具/index.html"},{revision:"199dfc2b2bfe6bea6db737610d42c0c7",url:"./categories/Emoji/index.html"},{revision:"8692df25fd9b631899192cf939b250d6",url:"./categories/GitHub/index.html"},{revision:"85fe134102b4d1e21c0e5297878212c5",url:"./categories/index.html"},{revision:"1989db9c5d6ba4936d8c7f1759f40647",url:"./categories/文言文编程/index.html"},{revision:"1efa6eef5f330c47cd8ba40ff77203db",url:"./categories/白嫖/index.html"},{revision:"72d1b1f2f49b4d6a0aa6bb12b5104e0b",url:"./changelog/index.html"},{revision:"5c07c8ef0bae0ffc8aaca2d5cadeaac9",url:"./css/style/app.css"},{revision:"716b176afc842df011f56933c1b16f32",url:"./css/style/artalk.css"},{revision:"065e2336df5c077dff1860817f7d9542",url:"./css/style/darkmode.css"},{revision:"284fb56f511014cedb50288c054fe7b5",url:"./css/style/links.css"},{revision:"1407dc11577c56dde90dce10aa71bc50",url:"./css/style/note.css"},{revision:"fc764d9a99cd208d780999d32b2c47da",url:"./css/style/timeline.l.css"},{revision:"72622e54aac09aaa381730a70676a78f",url:"./favicon.ico"},{revision:"6d75f6d60fa51f675f4faee205536e18",url:"./friends/index.html"},{revision:"8d2dd47c97155eb0fa4aa98312375745",url:"./index.html"},{revision:"e700c091adccb8f56c21ba8fb8d137e7",url:"./js/app.ooo.js"},{revision:"ae0be675f96610c4194a953de28b5c84",url:"./js/darkmod.js"},{revision:"f564bbb092181f20953084c3ed507461",url:"./manifest.json"},{revision:"87f17c785c30fb46e8ed5930d014a6a0",url:"./map/index.html"},{revision:"1b3819adb7fdc61d51e9784bcec93a0d",url:"./mikutap/css/mikutap.css"},{revision:"5279a09d7a75b44f3c35364ea2a8f08b",url:"./mikutap/data/main/main.json"},{revision:"d94b20e465ff7289142b647c1ac142ea",url:"./mikutap/data/track/track.json"},{revision:"4b63179db3c45dfd9078a252b2575cd1",url:"./mikutap/icon.png"},{revision:"56ba4222adad2322b0168981868bc934",url:"./mikutap/index.html"},{revision:"936ff3edd8373c243f56bf9c0fc66ec8",url:"./mikutap/js/mikutap.min.js"},{revision:"ee0a7ce469b3a15bd2c57ef76f38dbc6",url:"./mikutap/shared/css/common-1.css"},{revision:"a1aba3a1001e09230cbfdb18d522cdbc",url:"./mikutap/shared/css/index-1.css"},{revision:"43e49a61141c64bcf8d7981f7a6a26f5",url:"./mikutap/shared/js/common-2.min.js"},{revision:"b74c8c57d13ad72401b651f4128a2468",url:"./mikutap/shared/sp/css/common.css"},{revision:"fd0ede03c7c34e33a82f21afd657a32c",url:"./page/2/index.html"},{revision:"67bd942cb38dc59c6bd2cd6b26cd050d",url:"./play/index.html"},{revision:"55c416b88cc812fec0c3934aff07768d",url:"./posts/17931.html"},{revision:"6b51d045c81957d31d0ed9ae2ca9d1d4",url:"./posts/22938.html"},{revision:"325c54af981fcd989a6e9a8a1d80cc16",url:"./posts/24179.html"},{revision:"f21516b7bda6203b2ffb3847ccc85157",url:"./posts/24549.html"},{revision:"871c05c9ca2459078235582c610f20e3",url:"./posts/25909.html"},{revision:"1d6adebebbf1a6f7325a12a3892bde25",url:"./posts/27708.html"},{revision:"7bee003493ce8bd62635d2aa574e6863",url:"./posts/28146.html"},{revision:"7cefadda44c7382db9ae018a8bfe96ac",url:"./posts/32716.html"},{revision:"4164521ff3c40fe4f9c01c19009fd6b2",url:"./posts/39479.html"},{revision:"b14c2be88a7aeff504e3de20250a60fe",url:"./posts/4141.html"},{revision:"d41323c7fb34efa26d0fd1ef1df36664",url:"./posts/43359.html"},{revision:"a3cbbfcadd105134e1aab8a8971c53ea",url:"./posts/47424.html"},{revision:"42062337553b72a4602c4a7a132ae28d",url:"./posts/49939.html"},{revision:"c743988ebe1ebc3db044eb87eacc129c",url:"./posts/5913.html"},{revision:"a3a8da104694c9fa28d1f1c85e1777d8",url:"./posts/7578.html"},{revision:"b83554e07c7e7e1f1d72571228b53d57",url:"./runner/index.html"},{revision:"64610e92657f7bf0f6d797debe5f7ef0",url:"./say/index.html"},{revision:"a3ea8cddf929621c4ac6180dba146e52",url:"./search.json"},{revision:"2aaf213c0b2ea318ce93f6f05871be3d",url:"./search/index.html"},{revision:"935eb50b24d97a184ca9623a91c0f616",url:"./t-rex/assets/css/t-rex.css"},{revision:"01f2014886ea4de08147a231bebfd958",url:"./t-rex/assets/js/index.js"},{revision:"a10b0288b9d6b93b8b04de3351882514",url:"./t-rex/assets/js/t-rex.js"},{revision:"cad7798da0d84c8a6e55affb940bc76b",url:"./t-rex/index.html"},{revision:"ec0cb1b7275dc8e12c193d72b51cb1f1",url:"./tags/Bug/index.html"},{revision:"968b495ecf77197b669ac6860600ee87",url:"./tags/Coding-Pages/index.html"},{revision:"13b4b9fbd47d6d5d474e78d3aa79c164",url:"./tags/Commands/index.html"},{revision:"23703a54e05bfbfd58a02729ae5bc29b",url:"./tags/Dev/index.html"},{revision:"14ea6b4ad29f1899316fccb2f4c3ea4d",url:"./tags/Dev/page/2/index.html"},{revision:"59e5dac41955b9a7a6edabf6bf2588fe",url:"./tags/Emoji/index.html"},{revision:"46db7c6717ef59f4209cd4023b5b0be5",url:"./tags/GitHub-Actions/index.html"},{revision:"ae1cb692e380452013fed4b9f9971ff1",url:"./tags/GitHub/index.html"},{revision:"e92a4044b0ea4b10cb90daaf62e45ebe",url:"./tags/Hexo/index.html"},{revision:"e905d6e0c9e8323b574361b246740ef7",url:"./tags/index.html"},{revision:"73a8a7f8c5586c4172e93c869cf68a56",url:"./tags/issues/index.html"},{revision:"cdc84783a55fc6a0a7eef45af32c8a73",url:"./tags/LeanCloud/index.html"},{revision:"f65a43881e2314d711777fa290b53026",url:"./tags/PicGo/index.html"},{revision:"c1e41ed558f8a3bb97d3338ee2cf599f",url:"./tags/UptimeRobot/index.html"},{revision:"8c117d38a10750e169e1de6b94d02385",url:"./tags/URL/index.html"},{revision:"a3e892d3cea627d965db5dfe5420ebc8",url:"./tags/Vercel/index.html"},{revision:"6877829e2344c79a4005ece17ac5985d",url:"./tags/wenyan-lang/index.html"},{revision:"b79db912034c82391fbae4726cb8ddd1",url:"./tags/Windows/index.html"},{revision:"9402025c6b712b4b8729110dcffe85ff",url:"./tags/图床/index.html"},{revision:"eb94f7d65e8e26ea4ca69a0c607df1af",url:"./tags/文言文编程/index.html"},{revision:"0573027421630747146acf92a38a742c",url:"./tags/浏览器/index.html"},{revision:"03f68611f6041451134cc325fc5737dc",url:"./tags/炫酷文字/index.html"},{revision:"1c45d287ea5667fd0d47f1dad9749668",url:"./tags/网站存活监控/index.html"},{revision:"fabf7271fcada1bc1f03c6f2aa92f982",url:"./vercel.json"}],{directoryIndex:null}),workbox.precaching.cleanupOutdatedCaches(),workbox.routing.registerRoute(/\.(?:png|jpg|jpeg|gif|bmp|webp|svg|ico)$/,new workbox.strategies.CacheFirst({cacheName:"images",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:86400}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/\.(?:eot|ttf|woff|woff2)$/,new workbox.strategies.CacheFirst({cacheName:"fonts",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.googleAnalytics.initialize();