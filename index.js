



gsap.to("#nav",{
    backgroundColor: "#333333",
    height: "70px",
    opacity: 0.8,
    duration: 0.5,
    scrollTrigger:{
        star: "top -10%",
        end: "top -11p%",
        scrub:1
    }
})


// Dark Animation for darkening the video and first section,

gsap.to("#main",{
    backgroundColor: "#E5DAC2",
    scrollTrigger:{
        trigger: "#main",
        scroll: "body",
        start: "top -30%",
        end: "top -60%",
        scrub: 2
    }
})

gsap.from("#page2, .offers, .offers img",{
    y: 100,
    opacity:0,
    duration: 0.5,
    scrollTrigger:{
        trigger: ".offers",
        scroll: "body",
        start: "top 700px",
        end: "top 500px",
        scrub: 3
    }
})

gsap.from(".about-us img, .about-us-text",{
    y: 50,
    opacity:0,
    duration: 2,
    stagger: 0.4,
    scrollTrigger:{
        trigger: ".about-us",
        scroll: "body",
        start: "top 60%",
        end: "top 50%",
        scrub: 3
    }
})
