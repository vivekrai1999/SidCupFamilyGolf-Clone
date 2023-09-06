var crsr = document.querySelector("#mini-circle")
document.addEventListener("mousemove",function(dets){
    crsr.style.transform = `translate(${dets.clientX}px,${dets.clientY}px)`
    document.querySelector("#circle-blur").style.transform = `translate(${dets.clientX-150}px,${dets.clientY-150}px)`   
})

var a = document.querySelectorAll("#nav h4")
    a.forEach(function(elem){
    elem.addEventListener("mouseenter",function(dets){
        crsr.style.transform = `translate(${dets.clientX-20}px,${dets.clientY-20}px)`
        crsr.style.height = "50px"
        crsr.style.width = "50px"
        crsr.style.border="0.5px solid #fff"
        crsr.style.backgroundColor="transparent"
    })
    elem.addEventListener("mouseleave",function(dets){
        crsr.style.height = "15px"
        crsr.style.width = "15px"
        crsr.style.transform = "scale(5,5)"
        crsr.style.border="1px solid #95C11E"
        crsr.style.backgroundColor="#95C11E"
    })
})




gsap.to("#nav",{
    backgroundColor: "#000",
    height: "100px",
    duration: 0.5,
    scrollTrigger:{
        trigger: "#nav",
        scroller: "body",
        start: "top -10%",
        end: "top -11%",
        scrub: 1
    }
})

gsap.to("#main",{
    backgroundColor: "#000",
    scrollTrigger:{
        trigger: "#main",
        scroller: "body",
        start: "top -30%",
        end: "top -80%",
        scrub: 2,
        // markers: true
    }
})

gsap.from(".quote-img-1",{
    y:-40,
    x:-40,
    duration: 1.5,
    scrollTrigger: {
        trigger: "#quote",
        scroll: "body",
        // markers: true,
        start: "top 70%",
        end: "top 68%",
        scrub: 3
    }
})

gsap.from(".quote-img-2",{
    y:40,
    x:40,
    duration: 1.5,
    scrollTrigger: {
        trigger: "#quote",
        scroll: "body",
        // markers: true,
        start: "top 70%",
        end: "top 68%",
        scrub: 3
    }
})

gsap.from("#about-container img, #about-content",{
    y:80,
    opacity:0,
    duration: 3,
    scrollTrigger:{
        trigger: "#about-container",
        scroller: "body",
        scrub: 3,
        // markers: true,
        start: "top 70%",
        end: "top 68%"
    }
})

// const scroll = new LocomotiveScroll({
//     el: document.querySelector('body'),
//     smooth: true
// });

function cardModify(){
    document.querySelector(".card-1").addEventListener("mouseover",function(dets){
         document.querySelector(".card-heading-1").style.display = "none"

})
document.querySelector(".card-2").addEventListener("mouseover",function(dets){
    document.querySelector(".card-heading-2").style.display = "none"

})
document.querySelector(".card-3").addEventListener("mouseover",function(dets){
    document.querySelector(".card-heading-3").style.display = "none"

})
}



cardModify()
