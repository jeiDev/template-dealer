document.body.onload = init


function init(){
    /*DECLARED CLASS CREATE*/
    let create = new createDOM()

    //Create header
    create.header()

    //Animation banner
    create.animationBanner()

    //Create footer
    create.footer()
}