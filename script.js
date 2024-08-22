var crs=document.querySelector("#curser");
var crsb = document.querySelector("#curser-blur")
document.addEventListener("mousemove",function(dets){
   crs.style.left= dets.x + "px"
   crs.style.top = dets.y + "px"
   crsb.style.left = dets.x -140 +"px"
   crsb.style.top = dets.y -135 +"px"
})
var h4all = document.querySelectorAll("#nav h4");
 h4all.forEach(function(elm){
    elm.addEventListener("mouseenter",function(){
        crs.style.scale=3
        crs.style.border = "1px solid #fff"
        crs.style.backgroundColor = "transparent"
    })
    elm.addEventListener("mouseleave",function(){
        crs.style.scale=0
        crs.style.border = "0px solid  #95c11E"
        crs.style.backgroundColor = " #95c11E"
    })
    
 })
gsap.to("#nav",{
    backgroundColor:"#000",
    duration:0.5,
    height:"110px",
    scrollTrigger:{
        trigger:"#nav",
        scroller:"body",
       //markers:true,
        start:"top -10%",
        end:"top -11%",
        scrub:1
    }
})
gsap.to("#main",{
    backgroundColor:" #000",
    scrollTrigger:{
        trigger:"main",
        scrooler:"body",
     //   markers:true,
        start:"top -25%",
        end:"top -70%",
        scrub:2
    }
})
gsap.from("#left",{
    y:-70,
    x:-70,
    scrollTrigger:{
        trigger:"#left",
        scroller:"body",
      //  markers:true,
        start:"top 55%",
        end:"top 45%", 
        scrub:4
    }
})
gsap.from("#right",{
    y:70,
    x:70,
    scrollTrigger:{
        trigger:"#right",
        scroller:"body",
      //  markers:true,
        start:"top 55%",
        end:"top 45%", 
        scrub:4
    }
})