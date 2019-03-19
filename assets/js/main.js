document.body.onload = init


function init(){
    // DECLARE VARIABLES
    let create = new createDOM() // DECLARED CLASS CREATE
    let itemsClick =  document.querySelectorAll("#recentCardClick>.car") // SELECT ITEM RECENT CARS
    let selectPageContent = document.querySelectorAll(".content-page") // SELECT ALL PAGE CONTENT

    // Create header
    create.header()

    // Animation banner
    create.animationBanner()

    // Create footer
    create.footer()


    // RECENT CARD CLICK
    itemsClick.forEach(item => {
        item.addEventListener("click", () => {

            //SCROLL TOP
            window.scrollTo({ top: 0, behavior: 'smooth'});

            selectPageContent.forEach((page, i) => {
                page.classList.add("fade-out")
                setTimeout(()=>{
                    page.style.display = "none"
                    page.classList.remove("fade-out")
                    if( (i+1) == selectPageContent.length){
                        
                        create.showCar(+item.getAttribute("typeId"), true)
                    } 
                },500)
            })

        })
    })
  
}