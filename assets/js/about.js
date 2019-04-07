document.body.onload = init

function init(){

    // DECLARE VARIABLES
    let create = new createDOM("../../") // DECLARED CLASS CREATE
    let loadUsedCars = document.getElementById("loadUsedCars")
    let loadNewCars = document.getElementById("loadNewCars")
    let bannerSection = document.getElementById("bannerSection")
    
     // Create header
     create.header()

     // Create footer
     create.footer()

     // Create animate banner footer
     create.animationBannerAbout(bannerSection)

     loadUsedCars.querySelector(".load").style.width = "68%"
     loadNewCars.querySelector(".load").style.width = "83%"
     
     animateValue(loadUsedCars.querySelector(".end"), 0, 68, 2000)
     animateValue(loadNewCars.querySelector(".end"), 0, 83, 2000)
}

function animateValue(selector, start, end, duration) {
    let range = end - start;
    let current = start;
    let increment = end > start ? 1 : -1;
    let stepTime = Math.abs(Math.floor(duration / range));

    let timer = setInterval(function () {
        current += increment;
        selector.innerHTML = `${current}%`
        if (current >= end) clearInterval(timer);
    }, stepTime);
    return timer;
}