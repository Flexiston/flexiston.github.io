const workboxVersion="5.1.3";importScripts("https://storage.googleapis.com/workbox-cdn/releases/5.1.3/workbox-sw.js"),workbox.setConfig({modulePathPrefix:"https://storage.googleapis.com/workbox-cdn/releases/5.1.3/"}),workbox.core.setCacheNameDetails({prefix:"Flexiston's Blog"}),workbox.core.skipWaiting(),workbox.core.clientsClaim(),workbox.precaching.precacheAndRoute([{revision:"7fef53dd125ad98780b4d2cad1bfa1d2",url:"./404.html"},{revision:"3afe1b02b1bb11cb6591ec9d274c9358",url:"./about/index.html"},{revision:"ba64fa9a54b6a44381798d730583d2a5",url:"./archives/2020/04/index.html"},{revision:"fe6ccd9bdbd526c1e6332d1cdebb09a4",url:"./archives/2020/05/index.html"},{revision:"901a6445d46a570de5c41741e3ac7ebb",url:"./archives/2020/06/index.html"},{revision:"21697d9f176bda153985b6bae1fd5405",url:"./archives/2020/07/index.html"},{revision:"ea8cbc159c5843ea75288c3d1c262be4",url:"./archives/2020/08/index.html"},{revision:"af4f08b88cc701767c478fb5024828c1",url:"./archives/2020/09/index.html"},{revision:"e9d735bf3e343f2cabd7c658ec37b154",url:"./archives/2020/index.html"},{revision:"06c50b4b4de513e89b2feba284503d95",url:"./archives/2020/page/2/index.html"},{revision:"65acdbf7eee4cc8acf00b675dbdd494c",url:"./archives/index.html"},{revision:"f2477dcfac41d50b4393e22958924438",url:"./archives/page/2/index.html"},{revision:"9fb351efc4b8a7db51d2d7325f60fb03",url:"./baidu_verify_spMQLbgc0m.html"},{revision:"6f79b93f3825b881f80a56b9c0fc6ff2",url:"./catch-cat.min.js"},{revision:"16fe7aabf230789d60f163dce10f4a38",url:"./catch-cat/index.html"},{revision:"9e63281db73a881c94cc6364752346b9",url:"./categories/Bug/index.html"},{revision:"d2aebd3c4b4e59526b0f0ebbbfa55223",url:"./categories/Dev/GitHub/index.html"},{revision:"8bd3ef4d72a189762330f8f22cd6e93f",url:"./categories/Dev/Hexo/index.html"},{revision:"4d5cac28fd21e88a59fde511abb0671d",url:"./categories/Dev/index.html"},{revision:"a3730392d9ba73a16cf448f8fa7a7bd0",url:"./categories/Dev/page/2/index.html"},{revision:"9b1926dea9c0ae4d480995a4cd205328",url:"./categories/Dev/Vercel/index.html"},{revision:"3a6cc87f49f9d31c2d2f20d93f3adb6f",url:"./categories/Dev/Windows/index.html"},{revision:"4016bf9930c222d280828aabed2ddbbf",url:"./categories/Dev/工具/index.html"},{revision:"3d03a5633378146dc44e645187049ae7",url:"./categories/Emoji/index.html"},{revision:"add08f4937a5c563d245abb7e3d75db3",url:"./categories/GitHub/index.html"},{revision:"f03fb3ccef40bac5482bf4737a75004c",url:"./categories/index.html"},{revision:"bcfafa21b5e2abb6abaf304c777ed921",url:"./categories/文言文编程/index.html"},{revision:"15410c94eaf3205b52aec565fb973ee4",url:"./categories/白嫖/index.html"},{revision:"7c0b2ea58df14b20c85f565fd0dfa85d",url:"./changelog/index.html"},{revision:"ad5e1a03c1c670b788e8749a64648112",url:"./css/style/darkmode.css"},{revision:"151d82bf8b36f00049f360a30b87a4ae",url:"./css/style/ii.css"},{revision:"ad92a9b3bbf67dc1f9649d065f1f1086",url:"./css/style/links.css"},{revision:"72622e54aac09aaa381730a70676a78f",url:"./favicon.ico"},{revision:"333606806a6baff8e7dc38ef0f1f880f",url:"./friends/index.html"},{revision:"1f6ce2a3e6be229e6d4eba67896c2c96",url:"./github-calendar.css"},{revision:"b7e7f9af145900e2024111c7bf1340b6",url:"./github-calendar.js"},{revision:"074d5ad7edf02ffa9fb5985402660336",url:"./index.html"},{revision:"05a107e94a1f191d6161800682ea33dc",url:"./js/bs2t.js"},{revision:"ae0be675f96610c4194a953de28b5c84",url:"./js/darkmod.js"},{revision:"d50ffb3b3ab368f74ca0580def1f2517",url:"./map/index.html"},{revision:"1b3819adb7fdc61d51e9784bcec93a0d",url:"./mikutap/css/mikutap.css"},{revision:"5279a09d7a75b44f3c35364ea2a8f08b",url:"./mikutap/data/main/main.json"},{revision:"d94b20e465ff7289142b647c1ac142ea",url:"./mikutap/data/track/track.json"},{revision:"4b63179db3c45dfd9078a252b2575cd1",url:"./mikutap/icon.png"},{revision:"56ba4222adad2322b0168981868bc934",url:"./mikutap/index.html"},{revision:"936ff3edd8373c243f56bf9c0fc66ec8",url:"./mikutap/js/mikutap.min.js"},{revision:"ee0a7ce469b3a15bd2c57ef76f38dbc6",url:"./mikutap/shared/css/common-1.css"},{revision:"a1aba3a1001e09230cbfdb18d522cdbc",url:"./mikutap/shared/css/index-1.css"},{revision:"43e49a61141c64bcf8d7981f7a6a26f5",url:"./mikutap/shared/js/common-2.min.js"},{revision:"b74c8c57d13ad72401b651f4128a2468",url:"./mikutap/shared/sp/css/common.css"},{revision:"fbe994054426fadb2dff69d824c5c67a",url:"./music/css/APlayer.min.css"},{revision:"269550530cc127b6aa5a35925a7de6ce",url:"./music/css/font-awesome.min.css"},{revision:"6482d5a2cc7efeeadbd599bbe0ac51bd",url:"./music/css/justaddmusic.css"},{revision:"674f50d287a8c48dc19ba404d20fe713",url:"./music/fonts/fontawesome-webfont.eot"},{revision:"912ec66d7572ff821749319396470bde",url:"./music/fonts/fontawesome-webfont.svg"},{revision:"b06871f281fee6b241d60582ae9369b9",url:"./music/fonts/fontawesome-webfont.ttf"},{revision:"fee66e712a8a08eef5805a46892932ad",url:"./music/fonts/fontawesome-webfont.woff"},{revision:"af7ae505a9eed503f8b8e6982036873e",url:"./music/fonts/fontawesome-webfont.woff2"},{revision:"55eaa85385ef09bd01df4a46b49d9165",url:"./music/index.html"},{revision:"f318fa1b12f6d5f475a863ee2bb728ee",url:"./music/js/APlayer.min.jam.js"},{revision:"568b8d55a202d7460629b80b77e02b8a",url:"./music/js/jamsetting.js"},{revision:"12b69d0ae6c6f0c42942ae6da2896e84",url:"./music/js/jquery.js"},{revision:"16530b39ad7e6d012f7e840446fc18e6",url:"./music/js/JustAddMusic.js"},{revision:"f3a86e82ec5d2eb807eab601c30681ac",url:"./music/js/Meting.min.js"},{revision:"5c6ae83cc500441f27f67d648bfc72c0",url:"./page/2/index.html"},{revision:"e98d3e6c97d12ffeee13ce848d17de33",url:"./play/index.html"},{revision:"f4f4b9c68cef493d39a78f3410bdd0fe",url:"./posts/17931.html"},{revision:"0c98131a48cf0eb54391a38e8421c8e9",url:"./posts/22938.html"},{revision:"6afce5a528da237f6c213042007d19fb",url:"./posts/24179.html"},{revision:"29a6ef4816abbece6e3886a06e35b72b",url:"./posts/24549.html"},{revision:"3b5de814b8e901375917ca1c2df5e60b",url:"./posts/25909.html"},{revision:"e3c3bd2ec5da8041872f0ce3ad17c980",url:"./posts/27708.html"},{revision:"e9ef9778fb94597576e9d38d2d80fe9f",url:"./posts/28146.html"},{revision:"9fbc01eeda98be4ce046dec81611cae3",url:"./posts/32716.html"},{revision:"6e5f8e00e52c0d2ed1f28c71f8ab3738",url:"./posts/39479.html"},{revision:"002ddef3b0565ba92e06cdb47c246a1c",url:"./posts/4141.html"},{revision:"d5a338e62f68eeb2aad3d184905adf25",url:"./posts/43359.html"},{revision:"844ca833c57dc1549d8859b03cd0343e",url:"./posts/47424.html"},{revision:"ec2ee484195622aa381f715f48868f44",url:"./posts/49939.html"},{revision:"2cc2234a87faf87f2f41c452deb559fb",url:"./posts/5913.html"},{revision:"0a91707bc3f60efc328bbdbc7c4def23",url:"./posts/7578.html"},{revision:"b20cca3339caa8cce854f49d70bacb5a",url:"./runner/index.html"},{revision:"062e257b1414aa16ae12f693e95a349a",url:"./say/index.html"},{revision:"8a7c2c58ca2330382011d331c7e6e070",url:"./search.json"},{revision:"b8d3bcef2c2d13256e72e4dd273946c9",url:"./search/index.html"},{revision:"935eb50b24d97a184ca9623a91c0f616",url:"./t-rex/assets/css/t-rex.css"},{revision:"01f2014886ea4de08147a231bebfd958",url:"./t-rex/assets/js/index.js"},{revision:"a10b0288b9d6b93b8b04de3351882514",url:"./t-rex/assets/js/t-rex.js"},{revision:"cad7798da0d84c8a6e55affb940bc76b",url:"./t-rex/index.html"},{revision:"1e3636cc4ae1511c785229de3924e2aa",url:"./tags/Bug/index.html"},{revision:"de7e45bfe2ff603021e0ea585db8779d",url:"./tags/Coding-Pages/index.html"},{revision:"b8846718c320241dbdac4d9db374e5e5",url:"./tags/Commands/index.html"},{revision:"46537dc28dc78a806c96880be9a220d5",url:"./tags/Dev/index.html"},{revision:"176fa48171390811dd734eacc31bb029",url:"./tags/Dev/page/2/index.html"},{revision:"cec7e43145829f4cf1f2d470ff3d208b",url:"./tags/Emoji/index.html"},{revision:"fb348b6003683cc119ce1a8b18788121",url:"./tags/GitHub-Actions/index.html"},{revision:"fb01d8a12a042a7c7a31331c8c471972",url:"./tags/GitHub/index.html"},{revision:"d0cfdcf903b24cac6e60d03eec860a73",url:"./tags/Hexo/index.html"},{revision:"4c83a6f8bae566fd14ec373650265496",url:"./tags/index.html"},{revision:"0142f2b6873ae9f03ebfdff728209b6a",url:"./tags/issues/index.html"},{revision:"9a23ee0583eefe18b8b72d84700a55e1",url:"./tags/LeanCloud/index.html"},{revision:"44e629f6911e3417877acb2003e8ecd3",url:"./tags/PicGo/index.html"},{revision:"7a2e50d816fc026871e892e3287e96a8",url:"./tags/UptimeRobot/index.html"},{revision:"dec84881ea08fd819f44ff9f3baba887",url:"./tags/URL/index.html"},{revision:"cc418fa1b08f8f8aee81fa5223259f64",url:"./tags/Vercel/index.html"},{revision:"e67bb614e94aef5283e071da88d3d000",url:"./tags/wenyan-lang/index.html"},{revision:"01c815af86cac9a8e7650521b7e96f23",url:"./tags/Windows/index.html"},{revision:"24d42df0771d7c2a7e891a2fd2ce6f81",url:"./tags/图床/index.html"},{revision:"b63cc13676476e90a3156296003f71ad",url:"./tags/文言文编程/index.html"},{revision:"5e2864d03493055f5cbcc1d626fea7e6",url:"./tags/浏览器/index.html"},{revision:"2e8a1485e0bd988546d7c7c48819c29b",url:"./tags/炫酷文字/index.html"},{revision:"df4af1d5577351e368892382d644c551",url:"./tags/网站存活监控/index.html"},{revision:"fabf7271fcada1bc1f03c6f2aa92f982",url:"./vercel.json"}],{directoryIndex:null}),workbox.precaching.cleanupOutdatedCaches(),workbox.routing.registerRoute(/\.(?:png|jpg|jpeg|gif|bmp|webp|svg|ico)$/,new workbox.strategies.CacheFirst({cacheName:"images",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:86400}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/\.(?:eot|ttf|woff|woff2)$/,new workbox.strategies.CacheFirst({cacheName:"fonts",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.googleAnalytics.initialize();