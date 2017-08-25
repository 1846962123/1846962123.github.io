{
	const masks=document.querySelectorAll(".zhibo .bottom li .mask");
	const small=document.querySelectorAll(".zhibo .bottom li");
	const big=document.querySelectorAll(".zhibo .top li");
    const prev=document.querySelector(".prev");
    const next=document.querySelector(".next");
    const botlenght=document.querySelector(".zhibo .bottom");
	small.forEach(function(ele,index){
		ele.onmouseover=function(){
			for(var i=0;i<masks.length;i++){
				big[i].style.display="none";
				masks[i].style.display="none";
			}
			big[index].style.display="block";
			masks[index].style.display="block";
		}
	});
    next.onclick=function(){
        botlenght.style.marginLeft="-488px";
       
    }
    prev.onclick=function(){
        botlenght.style.marginLeft=0;
        
    }
}


{
	const masks=document.querySelectorAll(".con2r-mask");
	masks.forEach(function(ele,index){
		ele.onmouseover=function(){
			masks[index].style.opacity="1";
		}
		ele.onmouseout=function(){
			masks[index].style.opacity="0";
		}
	})
}


{
    const bannerList=document.querySelectorAll(".banner-cen .banner-imgs li");
    const dianList=document.querySelectorAll(".dianbox li");
    const bannerbox=document.querySelector(".banner");
    var colorarr=["#95CDEE","#BF3AFC","#DDDDDD","#2191EF","#95CDEE"];
    dianList.forEach(function (ele,index) {
        ele.onmouseover=function () {
            for(var i=0;i<dianList.length;i++){
                dianList[i].classList.remove("active");
                bannerList[i].classList.remove("active");
            }
            this.classList.add("active");
            bannerList[index].classList.add("active");
            bannerbox.style.background=colorarr[index];
            num=index;
        }
    })
    let num=0;
    let move=function () {
        num++;
        if(num==dianList.length){
            num=0;
        };
        if(num==-1){
            num=dianList.length-1;
        };
        for(var i=0;i<dianList.length;i++){
            dianList[i].classList.remove("active");
            bannerList[i].classList.remove("active");
        }
        dianList[num].classList.add("active");
        bannerList[num].classList.add("active");
        bannerbox.style.background=colorarr[num];
    }
    let st=setInterval(move,3000);
    bannerbox.onmouseover=function () {
        clearInterval(st);
    };
    bannerbox.onmouseout=function () {
        st=setInterval(move,3000);
    };
}


 {
    const zhibo=document.querySelector(".live-list");
    const length=document.querySelectorAll(".live-list li").length;
    let num=0;
    setInterval(function () {
        num++;
        if(num==length){
            num=0;
        }
        zhibo.style.marginTop=-num*47+"px";
   },2000);
}

{
    const div=document.querySelectorAll(".con-navright a ");
    const hongmao=document.querySelectorAll(".hongmao");
    div.forEach(function(ele,index){
        ele.onmouseover=function(){
            for(var i=0;i<div.length;i++){
                hongmao[i].style.display="none";
                hongmao[i].style.transition="none";
            }
            hongmao[index].style.display="block";
            hongmao[index].style.marginTop="-12px";
            hongmao[index].style.transition="all 1s";
        }
        ele.onmouseout=function(){
            hongmao[index].style.display="none";
        }
    })
}

{
    const contentinner=document.querySelectorAll(".con4-bot-l-con-inner");
    // const length=document.querySelectorAll(".con4-bot-l-con").length;
    // console.log(length);
    contentinner.forEach(function(ele,index){
let num=0;
    function move(){
        num++;
        // if(num==length){
        //     num=0;
        // }
        if(num==1){
            contentinner[index].style.transition="all 1s";
        }
        contentinner[index].style.marginTop=-num*30+"px";
    }
    setInterval(move,3000);
    contentinner[index].addEventListener("transitionend",function(){
        if(num==3){
            contentinner[index].style.marginTop=0;
            contentinner[index].style.transition="none";
            num=0;
        }
    })      
    })
}


{
    const ttop=document.querySelector(".top-box");
    const leftnav=document.querySelector(".left-nav-box");
    let obj;
    window.addEventListener("scroll",function(){
        obj=document.body==0?document.documentElement:document.body;
        if(obj.scrollTop>500){
            ttop.style.top=0;
            leftnav.style.cssText="width:36px;height:333px";
            // leftnav.style.transition="all 1s";
        }
        else{
            ttop.style.top="-50px";
            leftnav.style.cssText="width:0;height:0";
            // leftnav.style.transition="none";
        }
    })
   
}


// {
//     const leftbtns=document.querySelectorAll(".left-nav-box li");
//     const floors=document.querySelectorAll(".content4");
//     let obj=document.body.scrollTop==0?document.documentElement:document.body;
//     leftbtns.forEach(function(ele,index){
//         ele.onclick=function(){
//             let floortop=floors[index].offsetTop;
//             animate(obj,{scrollTop:floortop},50);
//         }
//     })

// }






 {
        let totop=document.querySelector(".totop");
        let totopbox=document.querySelector(".totop-box");
        let lefttotop=document.querySelector(".left-nav-box div:nth-child(9)");

        function top() {
            var obj=document.body.scrollTop==0
                ?document.documentElement:document.body;
            let time=500;
            let scrollt=obj.scrollTop;
            let speed=scrollt/time*50;
            let st=setInterval(function () {
                scrollt-=speed;
                obj.scrollTop=scrollt;
                if(scrollt<=0){
                    obj.scrollTop=0;
                    clearInterval(st);
                }
            },50)
        }
        totop.onclick=top;
        lefttotop.onclick=top;
       
    }

//按序加载问题
{
    let imgs=document.images;
    // console.log(imgs);
    let st=document.body.scrollTop;
    Array.from(imgs).forEach(function (ele) {
        if(window.innerHeight>getPosition(ele)){
            ele.src=ele.getAttributeNode("data-src");
        }
    });
    window.addEventListener("scroll",function () {
        let st=document.body.scrollTop;
        Array.from(imgs).forEach(function (ele) {
            if(st+window.innerHeight>getPosition(ele)){
                ele.src=ele.getAttribute("data-src");
            }
        })
    });
    function getPosition(obj) {
        let ot=obj.offsetTop;
        let parent=obj.offsetParent;
        while (parent!==null&&parent.nodeName!=="BODY"){
            ot+=parent.offsetTop;
            parent=parent.offsetParent;
        }
        return ot;
    }
}

//天猫右侧
//
// {
//     let items=document.querySelectorAll(".items");
//     let tips=document.querySelectorAll(".tips");
//     let st;
//     items.forEach(function (ele,index) {
//         hover(ele,function () {
//             clearTimeout(st);
//             st=setTimeout(function () {
//                 tips[index].classList.add("flyIn");
//             },1000);
//         },function () {
//             clearTimeout(st);
//             if(tips[index].classList.contains("flyIn")){
//                 tips[index].classList.add("flyOut");
//             }
//         });
//     });
//     tips.forEach(function (ele) {
//         ele.addEventListener("animationend",function () {
//             if(ele.classList.contains("flyOut")){
//                 ele.classList.remove("flyIn");
//                 ele.classList.remove("flyOut");
//             }
//         })
//     })
// }


{
    $(".banner-cen .banner-li li").each(function (index,val) {
        $(this).mouseover(function () {
            $(".yincang").each(function (index,val) {
                $(this).css("display","block").siblings().css("display","none")
            })
        })
    })
}