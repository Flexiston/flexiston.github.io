"use strict";var workboxVersion="5.1.3";importScripts("https://storage.googleapis.com/workbox-cdn/releases/".concat(workboxVersion,"/workbox-sw.js")),workbox.setConfig({modulePathPrefix:"https://storage.googleapis.com/workbox-cdn/releases/".concat(workboxVersion,"/")}),workbox.core.setCacheNameDetails({prefix:"Flexiston's Blog"}),workbox.core.skipWaiting(),workbox.core.clientsClaim(),workbox.precaching.precacheAndRoute([{revision:"6dbedd17b81532a91c9a328cddb98704",url:"./404.html"},{revision:"23ecf9697addab2e881555d6c805d3b2",url:"./about/index.html"},{revision:"a5618a051dd85d34699e7e2134730da1",url:"./apply-link/index.html"},{revision:"fd7f40d71fa7a8b981e34ac4dadbce2b",url:"./archives/2020/04/index.html"},{revision:"7b6e47316f6a2ad1ff0f8bf7030891a5",url:"./archives/2020/05/index.html"},{revision:"dc101247e8a0752a26a54f852da29466",url:"./archives/2020/06/index.html"},{revision:"38c1100ed1bc0898a105987fbe35815d",url:"./archives/2020/07/index.html"},{revision:"9a667d1f0b7e0718fa58814acfe891e0",url:"./archives/2020/08/index.html"},{revision:"647ddd13687d444c58288f41bc499f54",url:"./archives/2020/index.html"},{revision:"6b3b4a8b58cdbeb2bbdf433ea69282d6",url:"./archives/2020/page/2/index.html"},{revision:"bb7a2c9fdc703a31ba9ae6c89f81ac00",url:"./archives/index.html"},{revision:"6f1a8b27926a33e37147cedcc4af3768",url:"./archives/page/2/index.html"},{revision:"493321397a4dfcce00d15d06cc0c6762",url:"./catch-cat.min.js"},{revision:"9e9eddfbc9dd5c930c6b87e9e3cc77fa",url:"./catch-cat/index.html"},{revision:"3100cf740d28e8f6a88ac19ebff4f196",url:"./categories/Bug/index.html"},{revision:"c3c1df811ac2c9f49eefa98acf2d8bdd",url:"./categories/Dev/GitHub/index.html"},{revision:"58eca65ce631b6130a344c30efdcd0f9",url:"./categories/Dev/Hexo/index.html"},{revision:"5b45fedca95846d2a82489b1c5398e7c",url:"./categories/Dev/index.html"},{revision:"a01e1f7a3281f40e50c06a9cdd0971bc",url:"./categories/Dev/page/2/index.html"},{revision:"9d9640592878f36d4a06740d32a23a8a",url:"./categories/Dev/Vercel/index.html"},{revision:"f9b069131ae7311479874e969e4691ee",url:"./categories/Dev/Windows/index.html"},{revision:"e7ee020fa80ccc45ca1a9171f4613795",url:"./categories/Dev/工具/index.html"},{revision:"18d19bfce7acbf9992cd94b4cb9b7eec",url:"./categories/Emoji/index.html"},{revision:"f063899a9c8343c8fc26cbc8e865df37",url:"./categories/GitHub/index.html"},{revision:"e0dc0280af63b095a4b4b9724fc1fb2d",url:"./categories/index.html"},{revision:"dca94b76898b097882246d2625e3e9cf",url:"./categories/文言文编程/index.html"},{revision:"7338d79f256e795703cb05a9998bb81a",url:"./css/style/main.css"},{revision:"ddb82c3174916eb6f55357c44758be89",url:"./css/style/note.css"},{revision:"6195028e0fc1e71cdc78abed6afdb8e3",url:"./css/style/timeline.l.css"},{revision:"432e1fde311abc4cb282ac6cc045a2ca",url:"./css/style/valine.l.css"},{revision:"8e4c81dcb770e5ccec0f5b04f65bf9ce",url:"./friends/index.html"},{revision:"b2e5f90d67fcd5bde63f51b16ba4d5f2",url:"./images/favicon.png"},{revision:"4090ef43e7791f9d1bd3dde7e0b66e09",url:"./images/post/ga-devsettings.png"},{revision:"bc79d6bba003bd712df582233874370f",url:"./images/post/ga-newrepo.png"},{revision:"c6fd104e557634e6d0d568ec7fdf9a89",url:"./images/post/ga-push.png"},{revision:"e0541aa77e810b81de49d60dc6dfb17d",url:"./images/post/ga-reposuccess.png"},{revision:"7d7e52eff8253cec9c3b53b1be8ae4ad",url:"./images/post/ga-settings.png"},{revision:"fdebd8ae01245e34454663aeeff43b13",url:"./images/post/ga-token.png"},{revision:"f310d88c6608e01a281544d66dacde90",url:"./images/post/ga-tokensuccess.png"},{revision:"85c92d15c572a2a7fec111d64a5462d2",url:"./images/post/ga-workflows.png"},{revision:"5dff02adac8d9c3ec56e0b1f57430542",url:"./images/post/ver-accessaccount.png"},{revision:"94c41cc3888a8f3f2d9670268da24c7c",url:"./images/post/ver-arecord.png"},{revision:"8c34adfc93d7dbebb16d8a7848df3f6b",url:"./images/post/ver-cloning.png"},{revision:"51a42809f63bf935add68fd416430602",url:"./images/post/ver-config.png"},{revision:"f3fe0e5d3934ca41178143a6b73006d4",url:"./images/post/ver-domain.png"},{revision:"278d04202a9241fa688d8b0b56fc1af5",url:"./images/post/ver-domains.png"},{revision:"8cf86e36b1a6cd280e7082d16ec211a8",url:"./images/post/ver-import.png"},{revision:"3a6ba51c9ae8f4887cff5f647c22c7a1",url:"./images/post/ver-importrepo.png"},{revision:"b638932ceb036e24f3bf65560a22821c",url:"./images/post/ver-importroot.png"},{revision:"11a7b323675bc4c642c434266605d0ac",url:"./images/post/ver-install.png"},{revision:"3078732e532df65f8a8bbd1285a2a694",url:"./images/post/ver-signup.png"},{revision:"c51c1dde60874403992360df8ea1c61c",url:"./images/post/ver-success.png"},{revision:"7bf9b335d97a082ea56935e9ff0f05d1",url:"./index.html"},{revision:"ca1cbc58b95e50c5d30b9100930d8fc9",url:"./js/main.js"},{revision:"f564bbb092181f20953084c3ed507461",url:"./manifest.json"},{revision:"829232f87308d9645298def0cad5d6b7",url:"./map/index.html"},{revision:"1b3819adb7fdc61d51e9784bcec93a0d",url:"./mikutap/css/mikutap.css"},{revision:"5279a09d7a75b44f3c35364ea2a8f08b",url:"./mikutap/data/main/main.json"},{revision:"d94b20e465ff7289142b647c1ac142ea",url:"./mikutap/data/track/track.json"},{revision:"4b63179db3c45dfd9078a252b2575cd1",url:"./mikutap/icon.png"},{revision:"7215914e2364de945c6b88cf2e97b8ab",url:"./mikutap/index.html"},{revision:"c9c9e57bcfff0719038403667fff9694",url:"./mikutap/js/mikutap.min.js"},{revision:"ee0a7ce469b3a15bd2c57ef76f38dbc6",url:"./mikutap/shared/css/common-1.css"},{revision:"a1aba3a1001e09230cbfdb18d522cdbc",url:"./mikutap/shared/css/index-1.css"},{revision:"43e49a61141c64bcf8d7981f7a6a26f5",url:"./mikutap/shared/js/common-2.min.js"},{revision:"b74c8c57d13ad72401b651f4128a2468",url:"./mikutap/shared/sp/css/common.css"},{revision:"8d671af75a38e836350938be73a1ecd8",url:"./page/2/index.html"},{revision:"72a67fcb2f8899219187b71153314385",url:"./play/index.html"},{revision:"9d8662bd5dca030b8c19ed201fb74a53",url:"./posts/17931.html"},{revision:"09a73ec01756214690916f9b1f4acdf8",url:"./posts/22938.html"},{revision:"0d21284aa677251677c1b1968fea3484",url:"./posts/24179.html"},{revision:"a4ba12682ff6c2d383b149844ccd96e6",url:"./posts/24549.html"},{revision:"7dd0d93316d6cf0358d588f27777d4c7",url:"./posts/25909.html"},{revision:"384b9f750fc24d3f6fb6c163f5e87bc4",url:"./posts/28146.html"},{revision:"b274df34469a257699dbef02d669e9a3",url:"./posts/32716.html"},{revision:"25a57abf073abeaba587f81175cb0897",url:"./posts/39479.html"},{revision:"d8b82c255bcc90c03d78c06672be6e34",url:"./posts/4141.html"},{revision:"4e73e64893f385a422d071995ad14894",url:"./posts/43359.html"},{revision:"c2d8f39994703709faa319a6859e7507",url:"./posts/47424.html"},{revision:"6ce92fa18815564b354ad5431728eaf4",url:"./posts/49939.html"},{revision:"8ffb6c1165f11ee7506a7a665c6ff754",url:"./posts/57807.html"},{revision:"bb5570b9d8ce5cf93aeda48078e57303",url:"./posts/5913.html"},{revision:"dea61dd80f77c713eaff6a01fb041be0",url:"./posts/7578.html"},{revision:"8e3e14cb2a0000ef3e46ec668ff2948e",url:"./runner/index.html"},{revision:"6434c2fe768527451f69cd098994afef",url:"./say/index.html"},{revision:"f2ab115c779220587114ec427df0f29c",url:"./search.json"},{revision:"5b1d2c194bd6d50f6f1735ee1dcb27d2",url:"./search/index.html"},{revision:"935eb50b24d97a184ca9623a91c0f616",url:"./t-rex/assets/css/t-rex.css"},{revision:"01f2014886ea4de08147a231bebfd958",url:"./t-rex/assets/js/index.js"},{revision:"7bc8783256a189ab13556a4f89a9b96c",url:"./t-rex/assets/js/t-rex.js"},{revision:"b23d0321aaa779beece14c072e74e60f",url:"./t-rex/index.html"},{revision:"145a74ce0b08b8122d56278f48b72e05",url:"./tags/Bug/index.html"},{revision:"eca1b17723334820312741a3946c5a51",url:"./tags/Coding-Pages/index.html"},{revision:"d0ab27aa6d83a179823f57a1b367dca3",url:"./tags/Commands/index.html"},{revision:"09eaff444e1078beb579f15d11683e63",url:"./tags/Dev/index.html"},{revision:"205b78778d9f0836b0cb784bd42dd0bd",url:"./tags/Dev/page/2/index.html"},{revision:"533fa4b403cf0af68af7e2bfece37894",url:"./tags/Emoji/index.html"},{revision:"fa04fa5f988ccb85aebec1ee10f7078b",url:"./tags/GitHub-Actions/index.html"},{revision:"65c992588ecf6f4a5d82f529b564c4bd",url:"./tags/GitHub/index.html"},{revision:"6165b11961fcd0e50341eb111551e132",url:"./tags/Hexo/index.html"},{revision:"c137e7d5c24a927c26509973177c75fa",url:"./tags/index.html"},{revision:"580c2213515b8e62d87391260044f797",url:"./tags/issues/index.html"},{revision:"ae5211cbc436d17f69be539f41e3d662",url:"./tags/LeanCloud/index.html"},{revision:"d8c160bdced99e0d560359bc768fbddb",url:"./tags/UptimeRobot/index.html"},{revision:"328b59adb2572912d9fa77b4646e9e18",url:"./tags/URL/index.html"},{revision:"499ebf781a9605aaa9cd5496c5e7eb1e",url:"./tags/Vercel/index.html"},{revision:"cbc7c4d1a5857acc85f37a50696dd1fd",url:"./tags/wenyan-lang/index.html"},{revision:"8c4c3e973ba3e8c9042260ecbef66073",url:"./tags/Windows/index.html"},{revision:"d9fcd625dcf3ba501a37b2675a3a124c",url:"./tags/文言文编程/index.html"},{revision:"755e4c8925746473eb72418f447346e0",url:"./tags/浏览器/index.html"},{revision:"5cf69ac8f77dcfc6bf5bc0a5f572a166",url:"./tags/炫酷文字/index.html"},{revision:"4d3d9364d4d6db520c8e890fb4abec4f",url:"./tags/网站存活监控/index.html"},{revision:"a0cd3846598f1da40aeee3ea97a33f70",url:"./timeline/index.html"},{revision:"fabf7271fcada1bc1f03c6f2aa92f982",url:"./vercel.json"}],{directoryIndex:null}),workbox.precaching.cleanupOutdatedCaches(),workbox.routing.registerRoute(/\.(?:png|jpg|jpeg|gif|bmp|webp|svg|ico)$/,new workbox.strategies.CacheFirst({cacheName:"images",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:259200}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/\.(?:eot|ttf|woff|woff2)$/,new workbox.strategies.CacheFirst({cacheName:"fonts",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/^https:\/\/fonts\.googleapis\.com/,new workbox.strategies.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets"})),workbox.routing.registerRoute(/^https:\/\/fonts\.gstatic\.com/,new workbox.strategies.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.googleAnalytics.initialize();