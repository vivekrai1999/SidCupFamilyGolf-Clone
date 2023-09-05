window.addEventListener("mousemove",function(dets){
    document.querySelector("#mini-circle").style.transform = `translate(${dets.clientX}px,${dets.clientY}px)`
})

gsap.to("#nav",{
    backgroundColor: "#000",
    height: "110px",
    duration: 0.5,
    scrollTrigger:{
        trigger: "#nav",
        scroller: "body",
        markers: true,
        start: "top -10%",
        end: "top -11%",
        scrub: 1
    }
    
})
