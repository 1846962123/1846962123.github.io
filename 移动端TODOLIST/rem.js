(function(){
       var designWidth=750;
       var fontSize=100;
       function resize(){
           var width=document.documentElement.clientWidth;
           var size=width/750*100;
           document.querySelector("html").style.fontSize=size+"px";
       }
       resize();
       window.onresize=resize;
   })();
// (function(){
//     var designWidth=750;
//     var fontSize=100;
//     function resize(){
//       var width=document.documentElement.clientWidth;
//       var bili=width/designWidth>1?1:width/designWidth;
//       document.querySelector("html").style.fontSize=fontSize*bili+"px";
//     }
//      resize();
//      window.onresize=resize;
//      window.addEventListener("orientation",resize,false);// 屏幕自动旋转得时候
// })();