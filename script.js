document.addEventListener("mousemove",function(dets){
    document.querySelector("#mini-circle").style.transform = `translate(${dets.clientX}px,${dets.clientY}px)`
    document.querySelector("#circle-blur").style.transform = `translate(${dets.clientX-150}px,${dets.clientY-150}px)`
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
        markers: true
    }
})
