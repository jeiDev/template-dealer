document.body.onload = init

function ejecutViewCard(id) {
    let create = new createDOM("../") // DECLARED CLASS CREATE
    let selectPageContent = document.querySelectorAll(".content-page") // SELECT ALL PAGE CONTENT

    //SCROLL TOP
    window.scrollTo({ top: 0, behavior: 'smooth' });

    selectPageContent.forEach((page, i) => {
        page.classList.add("fade-out")
        setTimeout(() => {
            page.style.display = "none"
            page.classList.remove("fade-out")
            if ((i + 1) == selectPageContent.length) {
                sessionStorage.viewCard = id
                create.showCar(id, true)
            }
        }, 500)
    })
}

function init() {
    // DECLARE VARIABLES
    let create = new createDOM("../") // DECLARED CLASS CREATE
    let itemsClick = document.querySelectorAll("#recentCardClick>.car") // SELECT ITEM RECENT CARS
    let btnBannerCar = document.querySelectorAll(".btn-banner-card") // SELECT BTN BANNER CARS

    // Create header
    create.header()

    // Animation banner
    create.animationBanner()

    // Create footer
    create.footer()


    // RECENT CARD CLICK
    itemsClick.forEach(item => {
        item.addEventListener("click", () => {  ejecutViewCard(+item.getAttribute("typeId")) })
    })

    // RECENT CARD CLICK
    btnBannerCar.forEach(btn => {
        btn.addEventListener("click", () => {  ejecutViewCard(+btn.getAttribute("typeId")) })
    })

    //IF ISSET (sessionStorage.viewCard)
    // if(sessionStorage.viewCard) ejecutViewCard(+sessionStorage.viewCard)  

}