// smooth scroll locomotive --------------------------------
// function init(){
//     gsap.registerPlugin(ScrollTrigger);


// const locoScroll = new LocomotiveScroll({
//   el: document.querySelector(".main"),
//   smooth: true
// });

// locoScroll.on("scroll", ScrollTrigger.update);

// ScrollTrigger.scrollerProxy(".main", {
//   scrollTop(value) {
//     return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
//   }, 
//   getBoundingClientRect() {
//     return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
//   },
  
//   pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
// });

// ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// ScrollTrigger.refresh();
// }


// custom code ---------------------------------------------

let menu = document.querySelector("#login-btn");
let navbar = document.querySelector(".nav");

menu.onclick = () => {
    menu.classList.toggle("fa-times");
    navbar.classList.toggle("active");
}

window.onscroll = () => {
    menu.classList.remove("fa-times");
    navbar.classList.remove("active");
}


// gsap ----------------------------------------------------

// var tl = gsap.timeline({
//     ScrollTrigger:{
//         trigger:".home-img img",
//         scroller:".main",
//         markers:true,
//         start:"top 27%",
//         end:"top 0",
//         scrub:3,
//     }
// })

// tl.from(".home-img img",{
//     opacity:0,
//     duration:1,
//     x:-100,
// },"a")


// velocity tilt -------------------------------------------

VanillaTilt.init(document.querySelectorAll(".icons") ,{
    glare: true,
    reverse: true,
    "max-glare": 0.5
});


// fuction calls -------------------------------------------

init()