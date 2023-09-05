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
