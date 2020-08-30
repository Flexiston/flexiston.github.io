const workboxVersion="5.1.3";importScripts("https://storage.googleapis.com/workbox-cdn/releases/5.1.3/workbox-sw.js"),workbox?console.log("Yay! Workbox is loaded 🎉"):console.log("Boo! Workbox didn't load 😬"),workbox.setConfig({modulePathPrefix:"https://storage.googleapis.com/workbox-cdn/releases/5.1.3/"}),workbox.core.setCacheNameDetails({prefix:"Flexiston's Blog"}),workbox.core.skipWaiting(),workbox.core.clientsClaim(),workbox.precaching.precacheAndRoute([{revision:"187f9d9b369a7373101e1b4fba2f08b8",url:"./404.html"},{revision:"04fcc5da4fc5a328de9e7290301807af",url:"./about/index.html"},{revision:"23327edf1a3d11dac69945f41851e590",url:"./apply-link/index.html"},{revision:"df093240c5d012598f051b13637b81e0",url:"./archives/2020/04/index.html"},{revision:"5ff03d681ffcf0c7c77528ab8aa8a7f8",url:"./archives/2020/05/index.html"},{revision:"466a57f3f210e7d8cc707969dca508ec",url:"./archives/2020/06/index.html"},{revision:"a25da6e0c2db3eebbe3ccd18e76c978d",url:"./archives/2020/07/index.html"},{revision:"43ba18c243cca593d63b180132b19420",url:"./archives/2020/08/index.html"},{revision:"a83bce9ac2c4198348396e471857e5c3",url:"./archives/2020/index.html"},{revision:"ba2977970775654bdaa1c57b63fea3cc",url:"./archives/2020/page/2/index.html"},{revision:"e5cbf6c331a7eccabdd6711605ced638",url:"./archives/index.html"},{revision:"b2f8280304b21df87eef74be9b7b211a",url:"./archives/page/2/index.html"},{revision:"493321397a4dfcce00d15d06cc0c6762",url:"./catch-cat.min.js"},{revision:"671391787982d6874602940fe6c88a7e",url:"./catch-cat/index.html"},{revision:"079aac7e222af1d56f7a5d222fb486de",url:"./categories/Bug/index.html"},{revision:"06a069be362e4904d0ae4cdbb9b3f5bf",url:"./categories/Dev/GitHub/index.html"},{revision:"b44ceb8ecd2fd97929549969ee6e5d4a",url:"./categories/Dev/Hexo/index.html"},{revision:"b986455114222837ffe47a5c8e04219b",url:"./categories/Dev/index.html"},{revision:"b0574a352a5012441769f116ced7febb",url:"./categories/Dev/page/2/index.html"},{revision:"a155a495e3e947b1ad42c0a16a9304f2",url:"./categories/Dev/Vercel/index.html"},{revision:"3e554673473d13c737f3224e42db6310",url:"./categories/Dev/Windows/index.html"},{revision:"4e55df2f98646c18b9baaaf0882d75a5",url:"./categories/Dev/工具/index.html"},{revision:"c7118608e7cb64ef6bde88920b7a0b0c",url:"./categories/Emoji/index.html"},{revision:"9918b50c268c28d63d232f20ba4b2665",url:"./categories/GitHub/index.html"},{revision:"2003976a3b963b44d0b369c7f7dc6083",url:"./categories/index.html"},{revision:"5f94dd9ac94b7192ed775254f93204f6",url:"./categories/文言文编程/index.html"},{revision:"fb1ee6ba3de16b3e10fd41de5b13d482",url:"./css/highlight/a11y-dark.css"},{revision:"a4bbdcb0f314108c993f2a7967eae860",url:"./css/highlight/a11y-light.css"},{revision:"6b9c2b9cf112e93a705d81677b7a6416",url:"./css/highlight/agate.css"},{revision:"1710916f30fb1520fafa7d8a6789c905",url:"./css/highlight/an-old-hope.css"},{revision:"117dd6e2e0b0c35fa211928a8d7a72da",url:"./css/highlight/androidstudio.css"},{revision:"b1bfe3dc95dd6313024033f59d6d4961",url:"./css/highlight/arduino-light.css"},{revision:"52fd67aad280a4c88bc39027faa39418",url:"./css/highlight/arta.css"},{revision:"f776fca290991622f72e9f7df5f1da2d",url:"./css/highlight/ascetic.css"},{revision:"2ef8f889b233d30e8dc5e7eb6d96b4a9",url:"./css/highlight/atelier-cave-dark.css"},{revision:"a436d776975b226a223f75ac986150a1",url:"./css/highlight/atelier-cave-light.css"},{revision:"b83f48fb06d61b38bb05f8fc740652f3",url:"./css/highlight/atelier-dune-dark.css"},{revision:"83dc67a9d1680f9e1aae0544faace329",url:"./css/highlight/atelier-dune-light.css"},{revision:"ef33c2b56f148e9e944e3a0e81627dce",url:"./css/highlight/atelier-estuary-dark.css"},{revision:"f3824787251c024546a186a4f28066a7",url:"./css/highlight/atelier-estuary-light.css"},{revision:"21b10235b03e432c7bb38552780320db",url:"./css/highlight/atelier-forest-dark.css"},{revision:"fb4ad1a2a21e111f93119fa070cc6775",url:"./css/highlight/atelier-forest-light.css"},{revision:"879c466f07dfeac7ded9a3fdbd16c52b",url:"./css/highlight/atelier-heath-dark.css"},{revision:"4d9e9ab2cde130f05cbec2ae630d672a",url:"./css/highlight/atelier-heath-light.css"},{revision:"c34cb6be8453e1a60ac02298c4d02d36",url:"./css/highlight/atelier-lakeside-dark.css"},{revision:"2c5074f121c19e29abf9731b18117e98",url:"./css/highlight/atelier-lakeside-light.css"},{revision:"2ff1438f6a6fce2bca4ca581320465a5",url:"./css/highlight/atelier-plateau-dark.css"},{revision:"e82ab939f298bfdd5092264a230213d5",url:"./css/highlight/atelier-plateau-light.css"},{revision:"aaba71e99c6871b6f9c3109bac0caff6",url:"./css/highlight/atelier-savanna-dark.css"},{revision:"76098c0e745a7586a2651fa447ab1180",url:"./css/highlight/atelier-savanna-light.css"},{revision:"97a0f22aa1d65126866bc53478c6d096",url:"./css/highlight/atelier-seaside-dark.css"},{revision:"dc904b5966a6cb5d94b41cf8b4b57f25",url:"./css/highlight/atelier-seaside-light.css"},{revision:"6eb82cf673b95013962abfd756b567b1",url:"./css/highlight/atelier-sulphurpool-dark.css"},{revision:"0faea9c0b040677439bda304abcd72f3",url:"./css/highlight/atelier-sulphurpool-light.css"},{revision:"860a3476159d197b0bafd53f28961f7d",url:"./css/highlight/atom-one-dark-reasonable.css"},{revision:"9dcc707ef10b8db3029eecdfc1cafcbe",url:"./css/highlight/atom-one-dark.css"},{revision:"21179401fc3432afba7b99824ca06058",url:"./css/highlight/atom-one-light.css"},{revision:"7f4405cea2d33007b3310cb00eaf969b",url:"./css/highlight/brown-paper.css"},{revision:"20ee0276e3fa58572b078b76444813c3",url:"./css/highlight/codepen-embed.css"},{revision:"78a0f07fcba85867d3bd3256e68d89ee",url:"./css/highlight/color-brewer.css"},{revision:"26b03a1315e4deef40f636365f5dd472",url:"./css/highlight/darcula.css"},{revision:"3d2468561591f37e1a7948026dc00e84",url:"./css/highlight/dark.css"},{revision:"d8adbc628b31b76f72783dd66406e745",url:"./css/highlight/default.css"},{revision:"0259c1fe4be9b5f9e2cba4b5d499c4ce",url:"./css/highlight/docco.css"},{revision:"c2bb70c15a6611a951b218722697c044",url:"./css/highlight/dracula.css"},{revision:"59ec5714653599ff0dfb8f1dfcda3664",url:"./css/highlight/far.css"},{revision:"c1523f048e83ec1f05c9f1ac7ee9e338",url:"./css/highlight/foundation.css"},{revision:"b857d880f5d56b2ca982c7f6025eda3d",url:"./css/highlight/github-gist.css"},{revision:"0ecc3d974e3a5c6e59b08294e482c1c5",url:"./css/highlight/github.css"},{revision:"d5a29128f9218f34eb678a7eb88121eb",url:"./css/highlight/gml.css"},{revision:"e8081516799fa6df8deeff65386c249e",url:"./css/highlight/googlecode.css"},{revision:"a247be81b6e3c021c8fef0aa15e06371",url:"./css/highlight/gradient-dark.css"},{revision:"7212963017f0feff40e9012f8f6b2638",url:"./css/highlight/grayscale.css"},{revision:"95134784001cf4d09743d8efd50f35b4",url:"./css/highlight/gruvbox-dark.css"},{revision:"343cbb057ba5adf0381716ab78d08421",url:"./css/highlight/gruvbox-light.css"},{revision:"f253d81e60f54cf57580ff97983e6107",url:"./css/highlight/hopscotch.css"},{revision:"6961865b9305301e766fd17e8e748bfe",url:"./css/highlight/hybrid.css"},{revision:"d12bb9e57487e5b8e86c6849253b3449",url:"./css/highlight/idea.css"},{revision:"64062116ea01c9db06f3cd38331025bd",url:"./css/highlight/ir-black.css"},{revision:"8c966bbed33fbf1d48a4f0dc34e645eb",url:"./css/highlight/isbl-editor-dark.css"},{revision:"6e3763a95589f5efe36429dd418a8477",url:"./css/highlight/isbl-editor-light.css"},{revision:"d9cb8943631ac1dae54e2b19e021fbcd",url:"./css/highlight/kimbie.dark.css"},{revision:"d6901a6d66d6f1cd3f1d4275b21fb6be",url:"./css/highlight/kimbie.light.css"},{revision:"04f0aa1492d2e2a21af159c70f8d7535",url:"./css/highlight/lightfair.css"},{revision:"29a9bcd5773a1db8faa30d0ae4257503",url:"./css/highlight/lioshi.css"},{revision:"571d70d59e3fe7abc3919e589e327bab",url:"./css/highlight/magula.css"},{revision:"2f527e8813ad7fb8da55832a9b6b419f",url:"./css/highlight/mono-blue.css"},{revision:"542230a7ec1dc6951b390e3fe406017a",url:"./css/highlight/monokai-sublime.css"},{revision:"fae335ab22d936a1121b8dae003986c1",url:"./css/highlight/monokai.css"},{revision:"d2f2b08646667d5adb0b150fea5d3175",url:"./css/highlight/night-owl.css"},{revision:"2b339de5420c73656926d2daf62edf79",url:"./css/highlight/nnfx-dark.css"},{revision:"e4419b3277324665b0beb553dbc43076",url:"./css/highlight/nnfx.css"},{revision:"d7f7930a0dfd6375e52b4090e2316845",url:"./css/highlight/nord.css"},{revision:"fb336881237a6935226b1a115ef7c10d",url:"./css/highlight/obsidian.css"},{revision:"b0ace9a384cb42ff5872b9041e5269e5",url:"./css/highlight/ocean.css"},{revision:"9f20e4b0012e7bae996fdd89ad508d50",url:"./css/highlight/paraiso-dark.css"},{revision:"fa044c4026e6be0881d928623b4f115b",url:"./css/highlight/paraiso-light.css"},{revision:"8abfb9840376fa1f17697a5bd7ac6302",url:"./css/highlight/pojoaque.css"},{revision:"71907eed4c479a9ff2f71e4c1e87486f",url:"./css/highlight/purebasic.css"},{revision:"3dd68f2e28d0231ede0cc4054d8628ce",url:"./css/highlight/qtcreator_dark.css"},{revision:"037cfa746e507ccde8f10aa088a6b357",url:"./css/highlight/qtcreator_light.css"},{revision:"1dd9fc31b38d88ea1a273adccd4cbc1c",url:"./css/highlight/railscasts.css"},{revision:"5654f561f87dbb7ec45007af385bed97",url:"./css/highlight/rainbow.css"},{revision:"fcf5c3e1b0c8b9c3e63ce4a4d85ba5ca",url:"./css/highlight/routeros.css"},{revision:"e2f3f052c16460aed8a069e73d45923b",url:"./css/highlight/school-book.css"},{revision:"1734f3d7ead639b6836ddd87b6e19aa6",url:"./css/highlight/shades-of-purple.css"},{revision:"d70f29d14f8a4d386ad71a1bff013442",url:"./css/highlight/solarized-dark.css"},{revision:"bab1bb7459ccf3cb38f49d94e1bd368b",url:"./css/highlight/solarized-light.css"},{revision:"fd73cc2ef3052bf929f497b6690acdfe",url:"./css/highlight/srcery.css"},{revision:"59eb481d460793e0c24b93d3d81c5541",url:"./css/highlight/sunburst.css"},{revision:"2820514493d29aaa8431b6275e524cec",url:"./css/highlight/tomorrow-night-blue.css"},{revision:"251db3e8ff254e62fb87be5ad01b5277",url:"./css/highlight/tomorrow-night-bright.css"},{revision:"1a1124b716880f6b27c37c7a6a86e47d",url:"./css/highlight/tomorrow-night-eighties.css"},{revision:"38530a05040ef301593dd4e3ae48f190",url:"./css/highlight/tomorrow-night.css"},{revision:"86a3105d9f757afb6dc2e36a6e8658f7",url:"./css/highlight/tomorrow.css"},{revision:"4f1c7c7edb1ff40bf9b14b93febd0aa1",url:"./css/highlight/vs.css"},{revision:"b5361b966ca54ad224d07094e74b729e",url:"./css/highlight/vs2015.css"},{revision:"f0fc32f19aede1ad1feae44aabf2ab98",url:"./css/highlight/xcode.css"},{revision:"554f05d9f0e060bb87cfa4095b82519a",url:"./css/highlight/xt256.css"},{revision:"ae5a2f08f77e1a43c87e19b9f0e6c0f7",url:"./css/highlight/zenburn.css"},{revision:"d4a394fa617ec35f59f1481822f08b80",url:"./css/style/archives.css"},{revision:"80e9e037b7d3d4b98b0d63b5de5ba196",url:"./css/style/categories.css"},{revision:"b9a754cafbf045542f99f140ebccfbe8",url:"./css/style/dark.css"},{revision:"5fe35f2b658dd0b03713bae2638245ec",url:"./css/style/links.css"},{revision:"3e59364a5269b27821404aa155ae0a31",url:"./css/style/main.css"},{revision:"d6c76b534ee32d35a3126abe5fc84b77",url:"./css/style/note.css"},{revision:"70711af8f2f3feceeaec3f180542e4d1",url:"./css/style/timeline.css"},{revision:"d1b268bca552a5e87a50da979013e348",url:"./css/style/valine.css"},{revision:"f7f608fd15660d17c1cf5ab389e3ca9a",url:"./friends/index.html"},{revision:"652a26f9fedca0dc8491bb7ac3911783",url:"./images/avatar.png"},{revision:"0593ceea6e8022d0f7763f1f6f4cafae",url:"./images/banner/22938.jpg"},{revision:"4e3514c31e1ccb64cd31a4b002b4e3ae",url:"./images/banner/24179.jpg"},{revision:"33f13b20c3b5517203bab95fd2e8f57c",url:"./images/banner/24549.jpg"},{revision:"e8272284b28132a3dbd9241d5190e026",url:"./images/banner/25909-icons8.jpg"},{revision:"45f5cbe12f774a7df469da1a31d3bc03",url:"./images/banner/28146.jpg"},{revision:"517d20fc33b10235d667392941fd3d12",url:"./images/banner/39479.jpg"},{revision:"ddc7cdbcea900972aedd6df2228d2f76",url:"./images/banner/4141.png"},{revision:"7293d7074bfd8afad0a047540e97ed9d",url:"./images/banner/49939.jpg"},{revision:"4e17450a5136b02a2a65bda914b41095",url:"./images/banner/57807.jpg"},{revision:"c25dfa32d8f013d72791349591d7bf58",url:"./images/banner/5913.jpg"},{revision:"78e0841c57c7e10cac733ed884c12a55",url:"./images/covers/1.jpg"},{revision:"4c0bad35703940cad0cb65c6e172d563",url:"./images/covers/10.jpg"},{revision:"b2c24d58ac8a22e9eb7eed7993adc498",url:"./images/covers/11.png"},{revision:"ee16bbf8c7d1bdf3e6f26850bf066033",url:"./images/covers/12.jpg"},{revision:"84b7e09d4d0d4e6e7a9639460c6ed58f",url:"./images/covers/13.jpg"},{revision:"269a6f11c0c7fb96872ebd88e93e2d92",url:"./images/covers/2.jpg"},{revision:"cfaf8724f792f5acc4c9e0d729724688",url:"./images/covers/3.jpg"},{revision:"380977cfc588d270aa6dfa3116fef2e4",url:"./images/covers/4.jpg"},{revision:"f31e798fd3df8bc86b951beac16bfb9e",url:"./images/covers/5.jpg"},{revision:"7a46131b349a4c9aac3b477520610e53",url:"./images/covers/6.jpg"},{revision:"a851d3386d017105b4d7ad1e1f5d0721",url:"./images/covers/7.jpg"},{revision:"c63dfa6101d2b6e6f2584801e61838cc",url:"./images/covers/8.png"},{revision:"e7f347e766de42146c64f1b0e47b20b4",url:"./images/covers/9.jpg"},{revision:"d3de17bd1fcb24e4f5dbda6f27c4a174",url:"./images/favicon.ico"},{revision:"17596a317e1eda1999b980235868b326",url:"./images/logoooo.png"},{revision:"e6ef24685716bdd91865ed16b8cf0d0e",url:"./images/newyear-fireworks.gif"},{revision:"1b241971fe3ac353855de92b4ea37e88",url:"./images/plbj.gif"},{revision:"4090ef43e7791f9d1bd3dde7e0b66e09",url:"./images/post/ga-devsettings.png"},{revision:"bc79d6bba003bd712df582233874370f",url:"./images/post/ga-newrepo.png"},{revision:"c6fd104e557634e6d0d568ec7fdf9a89",url:"./images/post/ga-push.png"},{revision:"e0541aa77e810b81de49d60dc6dfb17d",url:"./images/post/ga-reposuccess.png"},{revision:"7d7e52eff8253cec9c3b53b1be8ae4ad",url:"./images/post/ga-settings.png"},{revision:"fdebd8ae01245e34454663aeeff43b13",url:"./images/post/ga-token.png"},{revision:"f310d88c6608e01a281544d66dacde90",url:"./images/post/ga-tokensuccess.png"},{revision:"85c92d15c572a2a7fec111d64a5462d2",url:"./images/post/ga-workflows.png"},{revision:"5dff02adac8d9c3ec56e0b1f57430542",url:"./images/post/ver-accessaccount.png"},{revision:"94c41cc3888a8f3f2d9670268da24c7c",url:"./images/post/ver-arecord.png"},{revision:"8c34adfc93d7dbebb16d8a7848df3f6b",url:"./images/post/ver-cloning.png"},{revision:"51a42809f63bf935add68fd416430602",url:"./images/post/ver-config.png"},{revision:"f3fe0e5d3934ca41178143a6b73006d4",url:"./images/post/ver-domain.png"},{revision:"278d04202a9241fa688d8b0b56fc1af5",url:"./images/post/ver-domains.png"},{revision:"8cf86e36b1a6cd280e7082d16ec211a8",url:"./images/post/ver-import.png"},{revision:"3a6ba51c9ae8f4887cff5f647c22c7a1",url:"./images/post/ver-importrepo.png"},{revision:"b638932ceb036e24f3bf65560a22821c",url:"./images/post/ver-importroot.png"},{revision:"11a7b323675bc4c642c434266605d0ac",url:"./images/post/ver-install.png"},{revision:"3078732e532df65f8a8bbd1285a2a694",url:"./images/post/ver-signup.png"},{revision:"c51c1dde60874403992360df8ea1c61c",url:"./images/post/ver-success.png"},{revision:"8d3e6517b067abc04ed5aeb523883033",url:"./index.html"},{revision:"cd0f8ec03fec335251ac9c0c051f7cbf",url:"./js/b2t.js"},{revision:"c94de29e565881ecc4572e87d6eded9d",url:"./js/darkmode.js"},{revision:"7f3663c4d375f124e0fcfced37029466",url:"./js/local-search.js"},{revision:"f24c3d0e262fb41c08de23a8fdc78811",url:"./js/menu.js"},{revision:"f564bbb092181f20953084c3ed507461",url:"./manifest.json"},{revision:"2ea5e68552fda45fa4e8e2672ef1e66d",url:"./map/index.html"},{revision:"bb6c259e16cb9044243d8e83dfcd7efd",url:"./page/2/index.html"},{revision:"787f174d7cf0701834ce342ce8673c48",url:"./play/index.html"},{revision:"8793106b3fc719d11bfa3c8cc0940582",url:"./posts/17931.html"},{revision:"7b278f0878cbb7ee3961a926e4cded5c",url:"./posts/22938.html"},{revision:"cce3fd029e45533804b62831f2c410f1",url:"./posts/24179.html"},{revision:"59332ae5b45803f7f5e6ca2ad3f16e09",url:"./posts/24549.html"},{revision:"322f228de543b9987c0ca975a949736e",url:"./posts/25909.html"},{revision:"9c5b71b6984a73f3f97df82d4be7f20b",url:"./posts/28146.html"},{revision:"dfa0b8c5bbf633f88942baff3aa438ed",url:"./posts/32716.html"},{revision:"028ddb7c9ed014c43d02f20b5ac6c0cd",url:"./posts/39479.html"},{revision:"e5f3f0a9d2adb0290575780bb42db0bd",url:"./posts/4141.html"},{revision:"b5fb78c73cf9e814605684742cd8ff22",url:"./posts/43359.html"},{revision:"14dec440873876d498c4f75f18ad6caa",url:"./posts/47424.html"},{revision:"148884e8af1ec808b3b047762fdf8dac",url:"./posts/49939.html"},{revision:"3942d35ae2cfbbe1fc1c661ca9206a94",url:"./posts/57807.html"},{revision:"b3bad90c19082a4a13a8043db0eb3a85",url:"./posts/5913.html"},{revision:"fac95be434474b67dc4c7ff24ad6a95b",url:"./posts/7578.html"},{revision:"b321d3e4e717920e9fa48b6d5064b57d",url:"./runner/index.html"},{revision:"1bcc95fbc02dabd22377eb05276f3b84",url:"./say/index.html"},{revision:"1b6a86c83b12c6dbd6f49e8c89e7c707",url:"./search.json"},{revision:"6177852ed70d1fbdf07a1231b4b04a9e",url:"./search/index.html"},{revision:"935eb50b24d97a184ca9623a91c0f616",url:"./t-rex/assets/css/t-rex.css"},{revision:"01f2014886ea4de08147a231bebfd958",url:"./t-rex/assets/js/index.js"},{revision:"7bc8783256a189ab13556a4f89a9b96c",url:"./t-rex/assets/js/t-rex.js"},{revision:"b23d0321aaa779beece14c072e74e60f",url:"./t-rex/index.html"},{revision:"ec15d1fef42a2b8cdb997856c1748139",url:"./tags/Bug/index.html"},{revision:"ac9b8b3774b0e2259aa6adf421dddbcf",url:"./tags/Coding-Pages/index.html"},{revision:"440ec7b80e9966ac2729b5079214ab67",url:"./tags/Commands/index.html"},{revision:"0350cd945ac2184f662e3adeb4cdfa55",url:"./tags/Dev/index.html"},{revision:"37f10eaae574866d7f6568ea13edfc68",url:"./tags/Dev/page/2/index.html"},{revision:"b58e54dc270e6b900949dedf28b11fe4",url:"./tags/Emoji/index.html"},{revision:"46aa86453405e54a0522ca33b2777510",url:"./tags/GitHub-Actions/index.html"},{revision:"2f68fd43a345b747d66d525dc5dff2e8",url:"./tags/GitHub/index.html"},{revision:"e67d6f8cbd83dd0774359e6fbfb006df",url:"./tags/Hexo/index.html"},{revision:"0ab1bd8a43a415d684556858cf3f61e6",url:"./tags/index.html"},{revision:"6207dc4c2332d9fcc6d563601cb61b4f",url:"./tags/issues/index.html"},{revision:"d1fcfffd35bb84fc59e5c808b2e4aad1",url:"./tags/LeanCloud/index.html"},{revision:"ad0abfa0c21e393b7fc77cc915642076",url:"./tags/UptimeRobot/index.html"},{revision:"1105a75f18676bde7a67f2199153c891",url:"./tags/URL/index.html"},{revision:"e126a936280db267faef3ba0619897a4",url:"./tags/Vercel/index.html"},{revision:"42429108098baa5a896e864a7cbdb188",url:"./tags/wenyan-lang/index.html"},{revision:"cc10037a50d8de5b51183569adda5932",url:"./tags/Windows/index.html"},{revision:"851d0ceea0f532e5f4d022c99ffdadf4",url:"./tags/文言文编程/index.html"},{revision:"30c5ba04333ebc0c5de770d334903f2d",url:"./tags/浏览器/index.html"},{revision:"3a7d08afd71d243172eff0bc6a8762e2",url:"./tags/炫酷文字/index.html"},{revision:"59489935a80dfd6a3d23c847a51637d5",url:"./tags/网站存活监控/index.html"},{revision:"a48e85fbbe91affff9a778a10725c30e",url:"./timeline/index.html"},{revision:"fabf7271fcada1bc1f03c6f2aa92f982",url:"./vercel.json"}],{directoryIndex:null}),workbox.precaching.cleanupOutdatedCaches(),workbox.routing.registerRoute(/\.(?:html|js|css|png|jpg|jpeg|gif|ico|webp|bmp|svg|json)$/,new workbox.strategies.CacheFirst({cacheName:"static-files",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:604800}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/\.(?:eot|ttf|woff|woff2)$/,new workbox.strategies.CacheFirst({cacheName:"fonts",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/^https:\/\/fonts\.googleapis\.com/,new workbox.strategies.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets"})),workbox.routing.registerRoute(/^https:\/\/fonts\.gstatic\.com/,new workbox.strategies.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.googleAnalytics.initialize();