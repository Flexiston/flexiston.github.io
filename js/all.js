"use strict";var logCss=function(o){return"color: #fff; background: "+(0<arguments.length&&void 0!==o?o:"#49b1f5")+"; padding: 6px; border-radius: 5px; font-family: 'Product Sans', -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif;\n"};window.lazyLoadOptions={elements_selector:".ll",threshold:0},window.FPConfig={delay:0,ignoreKeywords:["#"],maxRPS:6,hoverDelay:0};var _hmt=_hmt||[];!function(){var o=document.createElement("script");o.src="https://hm.baidu.com/hm.js?5de191b42e8915ea644fc19a8bd460e7";var e=document.getElementsByTagName("script")[0];e.parentNode.insertBefore(o,e)}();var typStr="立即行动吧，未来要自己争取 ",i=0;function typing(){var o=$("#typing");o&&(i<=typStr.length?(o.html(typStr.slice(0,i++)+"_"),setTimeout("typing()",100)):o.html(typStr))}var requestAnimationFrame=window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||window.msRequestAnimationFrame;function showNotification(){var o=-1===getComputedStyle(document.documentElement).getPropertyValue("--color-mode").indexOf("dark")?"#0A73FF":"#1f1f1f";$("#app-refresh").css({top:"0",background:o})}$(function(){var o,e,n,t=$("#b2t"),s=$("#view-div"),c=$(window).height(),a=document.body.scrollTop,l=!1;function r(o){var e=$(window).scrollTop(),n=e-a;c<(a=e)?(t.fadeIn(350).addClass("show"),0<n?t.removeClass("hl"):t.addClass("hl"),s&&s.css("opacity",1),l=!1):(t.removeClass("show").removeClass("hl").fadeOut(350),s&&s.css("opacity",0),requestAnimationFrame(r))}t&&(t.click(function(){window.scrollTo({top:0,behavior:"smooth"})}),$(document,window).scroll(function(){l||(requestAnimationFrame(r),l=!0)}),typing(),o=$("header"),e=$(".rebar"),n=$(window).scrollTop(),$(window).scroll(function(){n=$(window).scrollTop(),e&&e.css("width",$(document).scrollTop()/($(document).height()-$(window).height())*100+"%"),0<n?o.addClass("show"):o.removeClass("show")}),o.hover(function(){s&&s.css("opacity",1),o.addClass("show")}),o.mouseout(function(){s&&s.css("opacity",0),0===n&&o.removeClass("show")}))}),"serviceWorker"in navigator&&(navigator.serviceWorker.controller&&navigator.serviceWorker.addEventListener("controllerchange",function(){console.log("\n\n%c 网站有更新啦！快刷新看看吧~",logCss("#49b1f5")),showNotification(),console.log("\n\n")}),window.addEventListener("load",function(){navigator.serviceWorker.register("/service-worker.js").then(function(){console.log("\n\n%c Service Worker 成功安装啦~",logCss("#49b1f5")),console.log("\n\n")})})),$(document.body).on("touchmove",function(o){o.preventDefault()}),$(window).on("load",function(){setTimeout(function(){$(document.body).unbind("touchmove")},750);var o,e,n,t=new Date;window.console&&window.console.log&&(localStorage.getItem("access")||localStorage.setItem("access",t.getTime()),o=new Date(parseInt(localStorage.getItem("access"))),e="".concat(o.getFullYear()," 年 ").concat(o.getMonth()+1," 月 ").concat(o.getDate()," 日"),n=0,localStorage.getItem("hit")?n=parseInt(localStorage.getItem("hit")):localStorage.setItem("hit",0),localStorage.setItem("hit",++n),console.log("\n\n%c 🌹 这是你自 ".concat(e," 以来第 ").concat(n," 次在本站打开控制台，🤣 你想知道什么秘密嘛~"),logCss("#734ae6")),console.log("\n\n"));var s=t.getHours();s<4?console.log("\n\n%c 凌晨了，记得早点休息！🛌 你爱人，和爱你的人都需要你！加油！ 👍",logCss("#00c4b6")):4<=s&&s<9?console.log("\n\n%c 早上好呀! 努力的人都会得到一颗糖 🍖",logCss("#00c4b6")):9<=s&&s<12?console.log("\n\n%c 上午好呀! 每一天都要活力满满！🍳",logCss("#00c4b6")):12<=s&&s<17?console.log("\n\n%c 下午好呀! 每个下午最快乐的就是一杯下午茶啦！😴",logCss("#00c4b6")):17<=s&&s<20?console.log("\n\n%c 下班了，陪家人健个身吧! 🚶‍♀️",logCss("#00c4b6")):20<=s&&s<22?console.log("\n\n%c 晚上好，忙碌了一天，该洗洗睡了! 😎",logCss("#00c4b6")):console.log("\n\n%c 今天也是美好的一天！成长，就是在有负面情绪的时候,总能一个人默默地消化,路还很长，微笑面对！🤪",logCss("#00c4b6")),console.log("\n\n")});