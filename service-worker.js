const workboxVersion="5.1.3";importScripts("https://storage.googleapis.com/workbox-cdn/releases/5.1.3/workbox-sw.js"),workbox.setConfig({modulePathPrefix:"https://storage.googleapis.com/workbox-cdn/releases/5.1.3/"}),workbox.core.setCacheNameDetails({prefix:"Flexiston's Blog"}),workbox.core.skipWaiting(),workbox.core.clientsClaim(),workbox.precaching.precacheAndRoute([{revision:"4714deb91145bfb766332926bf7ad6a9",url:"./404.html"},{revision:"02e1422b00eeeaa078bb04974ea1449b",url:"./about/index.html"},{revision:"81c61a308a875270b3eace0b43224523",url:"./archives/2020/04/index.html"},{revision:"3c192386f58f7436b420c7e9511cb8ba",url:"./archives/2020/05/index.html"},{revision:"14d837400aa50f1f0dbfdc03b1151aa4",url:"./archives/2020/06/index.html"},{revision:"1f59da82d12ff739b90ceac089e7b287",url:"./archives/2020/07/index.html"},{revision:"d721592ce16e212b18248b03bff784e0",url:"./archives/2020/08/index.html"},{revision:"501650335ef9418e1b478a649a8c4558",url:"./archives/2020/09/index.html"},{revision:"426c88562991dcb5687c1391cd2bcce5",url:"./archives/2020/index.html"},{revision:"d20e545e4b61a0173d643ac2a9c3847d",url:"./archives/2020/page/2/index.html"},{revision:"98e7f72b124bce4580946f76fc5b93c2",url:"./archives/index.html"},{revision:"4c2e5570f82435df909750dc2bb9bee1",url:"./archives/page/2/index.html"},{revision:"9fb351efc4b8a7db51d2d7325f60fb03",url:"./baidu_verify_spMQLbgc0m.html"},{revision:"6f79b93f3825b881f80a56b9c0fc6ff2",url:"./catch-cat.min.js"},{revision:"c9fd7d5d3163cc97c89850ac25e963ca",url:"./catch-cat/index.html"},{revision:"643925f379b1a9c3252789134958228b",url:"./categories/Bug/index.html"},{revision:"3fb3a60b00f4e41b9c14cc81418fe4fa",url:"./categories/Dev/GitHub/index.html"},{revision:"227c372efa15759e414c5b742d4d4608",url:"./categories/Dev/Hexo/index.html"},{revision:"a505811328108ac0f962c9bf6ce94097",url:"./categories/Dev/index.html"},{revision:"9aabd5fdfa5444aafc5f3a72b155b296",url:"./categories/Dev/page/2/index.html"},{revision:"745aca7173592ef1521b095c71d147e1",url:"./categories/Dev/Vercel/index.html"},{revision:"774f8675f7865b133388d91d3f015bc9",url:"./categories/Dev/Windows/index.html"},{revision:"d23f9b5da1e365d9da89d67832ea2acf",url:"./categories/Dev/工具/index.html"},{revision:"8baef4b53b01b86983996f7f1cf11316",url:"./categories/Emoji/index.html"},{revision:"34bff9f8699a74ee128cc46402e95602",url:"./categories/GitHub/index.html"},{revision:"7ae7138bcc53ce586c0684e7c664b4dd",url:"./categories/index.html"},{revision:"2ef1b32d27b1380ba16911a01a4acea6",url:"./categories/文言文编程/index.html"},{revision:"a7fbf5187ff740813a25658623ef9c12",url:"./categories/白嫖/index.html"},{revision:"74f6f066f5a7dd079c6fc849da9db6ce",url:"./changelog/index.html"},{revision:"ad5e1a03c1c670b788e8749a64648112",url:"./css/style/darkmode.css"},{revision:"151d82bf8b36f00049f360a30b87a4ae",url:"./css/style/ii.css"},{revision:"ad92a9b3bbf67dc1f9649d065f1f1086",url:"./css/style/links.css"},{revision:"72622e54aac09aaa381730a70676a78f",url:"./favicon.ico"},{revision:"520aaa9beb9c1ee3bdd5f36e8778dc8e",url:"./friends/index.html"},{revision:"1f6ce2a3e6be229e6d4eba67896c2c96",url:"./github-calendar.css"},{revision:"b7e7f9af145900e2024111c7bf1340b6",url:"./github-calendar.js"},{revision:"20f0d11fd0b834b1fe228abd4499dcd7",url:"./index.html"},{revision:"05a107e94a1f191d6161800682ea33dc",url:"./js/bs2t.js"},{revision:"ae0be675f96610c4194a953de28b5c84",url:"./js/darkmod.js"},{revision:"320c604fde4721f8d1cee8cac87a321b",url:"./map/index.html"},{revision:"1b3819adb7fdc61d51e9784bcec93a0d",url:"./mikutap/css/mikutap.css"},{revision:"5279a09d7a75b44f3c35364ea2a8f08b",url:"./mikutap/data/main/main.json"},{revision:"d94b20e465ff7289142b647c1ac142ea",url:"./mikutap/data/track/track.json"},{revision:"4b63179db3c45dfd9078a252b2575cd1",url:"./mikutap/icon.png"},{revision:"56ba4222adad2322b0168981868bc934",url:"./mikutap/index.html"},{revision:"936ff3edd8373c243f56bf9c0fc66ec8",url:"./mikutap/js/mikutap.min.js"},{revision:"ee0a7ce469b3a15bd2c57ef76f38dbc6",url:"./mikutap/shared/css/common-1.css"},{revision:"a1aba3a1001e09230cbfdb18d522cdbc",url:"./mikutap/shared/css/index-1.css"},{revision:"43e49a61141c64bcf8d7981f7a6a26f5",url:"./mikutap/shared/js/common-2.min.js"},{revision:"b74c8c57d13ad72401b651f4128a2468",url:"./mikutap/shared/sp/css/common.css"},{revision:"fbe994054426fadb2dff69d824c5c67a",url:"./music/css/APlayer.min.css"},{revision:"269550530cc127b6aa5a35925a7de6ce",url:"./music/css/font-awesome.min.css"},{revision:"6482d5a2cc7efeeadbd599bbe0ac51bd",url:"./music/css/justaddmusic.css"},{revision:"674f50d287a8c48dc19ba404d20fe713",url:"./music/fonts/fontawesome-webfont.eot"},{revision:"912ec66d7572ff821749319396470bde",url:"./music/fonts/fontawesome-webfont.svg"},{revision:"b06871f281fee6b241d60582ae9369b9",url:"./music/fonts/fontawesome-webfont.ttf"},{revision:"fee66e712a8a08eef5805a46892932ad",url:"./music/fonts/fontawesome-webfont.woff"},{revision:"af7ae505a9eed503f8b8e6982036873e",url:"./music/fonts/fontawesome-webfont.woff2"},{revision:"4b375b62cf898b88e7d5feb2b834c777",url:"./music/index.html"},{revision:"f318fa1b12f6d5f475a863ee2bb728ee",url:"./music/js/APlayer.min.jam.js"},{revision:"568b8d55a202d7460629b80b77e02b8a",url:"./music/js/jamsetting.js"},{revision:"12b69d0ae6c6f0c42942ae6da2896e84",url:"./music/js/jquery.js"},{revision:"16530b39ad7e6d012f7e840446fc18e6",url:"./music/js/JustAddMusic.js"},{revision:"f3a86e82ec5d2eb807eab601c30681ac",url:"./music/js/Meting.min.js"},{revision:"72960aaadc9d65cf0616bfd345ee2e21",url:"./page/2/index.html"},{revision:"801b84a14f37e59b16bd8c30fa575dcc",url:"./play/index.html"},{revision:"ba2484a09f52cf3b1944234bcf30a5ba",url:"./posts/17931.html"},{revision:"64d9ac23fe17b937ab1b82d01813dea1",url:"./posts/22938.html"},{revision:"e54693f0654014faad0cbcc8019df086",url:"./posts/24179.html"},{revision:"b515951bc09eb8d0446701691a781e5c",url:"./posts/24549.html"},{revision:"a9505aaa2863beb561ee7646e8353468",url:"./posts/25909.html"},{revision:"c41e868789607364dc97c9124b0ca572",url:"./posts/27708.html"},{revision:"3acb13871b9f5bbf3afc01d25ffd50ea",url:"./posts/28146.html"},{revision:"91c1e888b4968e27434ec0f7896f8242",url:"./posts/32716.html"},{revision:"2638a4000402e053d5ff8aa3f287885e",url:"./posts/39479.html"},{revision:"c2d1c96ad453fbbb769d9bf9cf16e053",url:"./posts/4141.html"},{revision:"5f6eb99e38e8b28efe6593d92ea8fa05",url:"./posts/43359.html"},{revision:"3451949ecad387ee60c874913534c7e7",url:"./posts/47424.html"},{revision:"755590a14011879567c76a044478abe2",url:"./posts/49939.html"},{revision:"89c919c798f8fb075032d341c9a02256",url:"./posts/5913.html"},{revision:"210251f8c61fad1443ebaad844be3c34",url:"./posts/7578.html"},{revision:"fedaa55b3d3dcfb72ed296d252f09cc9",url:"./runner/index.html"},{revision:"b893aa418d1c4c250e28039d9d830cb9",url:"./say/index.html"},{revision:"bd2db22de54c6829ccbf0a5af764c52d",url:"./search.json"},{revision:"72ea333fc6c8abfc2630d2d6b6e3d231",url:"./search/index.html"},{revision:"935eb50b24d97a184ca9623a91c0f616",url:"./t-rex/assets/css/t-rex.css"},{revision:"01f2014886ea4de08147a231bebfd958",url:"./t-rex/assets/js/index.js"},{revision:"a10b0288b9d6b93b8b04de3351882514",url:"./t-rex/assets/js/t-rex.js"},{revision:"cad7798da0d84c8a6e55affb940bc76b",url:"./t-rex/index.html"},{revision:"971b459b229e0c4903eef9235ba630d5",url:"./tags/Bug/index.html"},{revision:"ee8b2edc093dbb536d3967d8af72f4ac",url:"./tags/Coding-Pages/index.html"},{revision:"af415b1ba6d7471d12f3b05fe3240d18",url:"./tags/Commands/index.html"},{revision:"cacf36836e5f8a67ec2fded29859806e",url:"./tags/Dev/index.html"},{revision:"51e97e450e80b8d9a506182c453ac5f5",url:"./tags/Dev/page/2/index.html"},{revision:"dedadbc3a938403455c3422ee83612f5",url:"./tags/Emoji/index.html"},{revision:"afcace0d33899c37906ed9f9cb92a86e",url:"./tags/GitHub-Actions/index.html"},{revision:"5d77ddeb997453a152b08b7cc8cd5f27",url:"./tags/GitHub/index.html"},{revision:"2ced753a47c2d7354e01221b778e7c20",url:"./tags/Hexo/index.html"},{revision:"bfe2d44e2a4a3c7eda87035d5cc11b1b",url:"./tags/index.html"},{revision:"8c18162a65071408d4cfe0700148c3a1",url:"./tags/issues/index.html"},{revision:"3aeb3978285b791eeb0088e373cbee12",url:"./tags/LeanCloud/index.html"},{revision:"8d089408f8996cc2109fb597f2e67ffa",url:"./tags/PicGo/index.html"},{revision:"01f4499c771f1774c755444e726e19cf",url:"./tags/UptimeRobot/index.html"},{revision:"41fd61889441a218c6f32a19a2addd90",url:"./tags/URL/index.html"},{revision:"7d70bbf575a270acbf718616cfe126e9",url:"./tags/Vercel/index.html"},{revision:"3e00a50a418d2b14669c4a9c2088a974",url:"./tags/wenyan-lang/index.html"},{revision:"42cf9e9a00a0123f94d5e717386149d4",url:"./tags/Windows/index.html"},{revision:"e29771dc8fd9bd25625680e2ecd97a69",url:"./tags/图床/index.html"},{revision:"22eeb0dc7ad7cb022878a81220f50e49",url:"./tags/文言文编程/index.html"},{revision:"f9453e7e741c3e4b501c6877fac9d57d",url:"./tags/浏览器/index.html"},{revision:"2204d1f5575f9e000b0caa191e424fe1",url:"./tags/炫酷文字/index.html"},{revision:"2d8a181d69ea873e754345325f0e076e",url:"./tags/网站存活监控/index.html"},{revision:"fabf7271fcada1bc1f03c6f2aa92f982",url:"./vercel.json"}],{directoryIndex:null}),workbox.precaching.cleanupOutdatedCaches(),workbox.routing.registerRoute(/\.(?:png|jpg|jpeg|gif|bmp|webp|svg|ico)$/,new workbox.strategies.CacheFirst({cacheName:"images",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:86400}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/\.(?:eot|ttf|woff|woff2)$/,new workbox.strategies.CacheFirst({cacheName:"fonts",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.googleAnalytics.initialize();