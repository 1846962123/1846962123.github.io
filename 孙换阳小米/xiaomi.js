{
	const banners=document.querySelectorAll(".bannertu");
	const lunbo=document.querySelectorAll(".lunbo .dian");
	lunbo.forEach(function(ele,index){
		ele.onclick=function(){
			for(var i=0;i<lunbo.length;i++){
				lunbo[i].classList.remove("dian1");
				banners[i].classList.remove("active");
			}
			this.classList.add("dian1");
			banners[index].classList.add("active");
		}
	});
	let num=0;
	let move=function(){
		num++;
		if(num==lunbo.length){
			num=0;
		}
		for(var i=0;i<lunbo.length;i++){
			lunbo[i].classList.remove("dian1");
			banners[i].classList.remove("active");
		};
		lunbo[num].classList.add("dian1");
		banners[num].classList.add("active");
	}
	setInterval(move,3000);
}


{
	const prev=document.querySelector(".dpr1");
	const next=document.querySelector(".dpr2");
	const dptbox=document.querySelector(".dpt-box");
	prev.onclick=function(){
		dptbox.style.marginLeft=0;
	};
	next.onclick=function(){
		dptbox.style.marginLeft="-1226px";
	};
	let num=0;
	setInterval(function(){
		num++;
		if(num==2){
			num=0;
		}
		dptbox.style.marginLeft=-num*1226+"px";
	},3500);
}


{
    const content=document.querySelectorAll(".neir");
    content.forEach(function (ele) {
        xiaomi(ele);
    });
    function xiaomi(content) {
        const prev = content.querySelector(".tushujt1");
        const next = content.querySelector(".tushujt2");
        const lunbo = content.querySelectorAll(".tushud2");
        const tushu=content.querySelector(".tushuchang");
        let num = 0;
        lunbo.forEach(function (ele, index) {
            ele.onclick = function () {
                tushu.style.marginLeft = -296 * index + "px";
                lunbo[num].classList.remove("tushud1");
                lunbo[index].classList.add("tushud1");
                num = index;
            }
        });
        next.onclick = function () {
            if (num === lunbo.length-1) {
                return;
            };
            lunbo[num].classList.remove("tushud1");
            num++;
            tushu.style.marginLeft = -296 * num + "px";
            lunbo[num].classList.add("tushud1");
        };
        prev.onclick = function () {
            if (num === 0) {
                return;
            };
            lunbo[num].classList.remove("tushud1");
            num--;
            tushu.style.marginLeft = -296 * num + "px";
            lunbo[num].classList.add("tushud1");
        };
    }
}