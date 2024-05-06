gsap.to("#box1", {
    x: 1000,
    duration: 5,
    delay: 1,
    repeat: -1,
})

gsap.from("#box2", {
    x: 1000,
    duration: 5,
    delay: 1,
    repeat: -1,
})

gsap.to("#box3", {
    x: 1000,
    duration: 3,
    delay: 1,
    rotate: 360,
    backgroundColor: "blue",
    repeat: -1,
})

gsap.to("#box4", {
    x: 1000,
    duration: 6,
    delay: 1,
    rotate: 360,
    backgroundColor: "gold",
    borderRadius: "60%",
    repeat: -1,
})

gsap.from("#box5", {
    x: 1000,
    duration: 6,
    delay: 1,
    rotate: 360,
    backgroundColor: "gold",
    borderRadius: "60%",
    scale: 0.2,
    repeat: -1,
})

gsap.from("#box6", {
    x: 1000,
    duration: 1,
    delay: 1,
    rotate: 360,
    repeat: -1,
    yoyo: true
})

gsap.from(".heading-container h1", {
    duration: 3,
    delay: 1,
    y: 50,
    repeat: -1,
})

gsap.from(".heading-container-1 h1", {
    duration: 1,
    delay: 1,
    y: 50,
    stagger: 0.3,
    repeat: -1,
})

//gsap timeline

var tl = gsap.timeline();

tl.to(".timeline-container #box7", {
    x: 1000,
    duration: 3,
    delay: 2,
})

tl.to(".timeline-container #box8", {
    x: 1000,
    duration: 3,
})

tl.to(".timeline-container #box9", {
    x: 1000,
    duration: 3,
})