class createDOM {
    constructor(url){
        this.url = url
    }

    header() {
        let header = document.querySelector("header")
        let center = document.createElement("div")
        for (let i = 0; i < 3; i++) {
            let section = document.createElement("div")

            if (i == 0) {
                let img = document.createElement("img")
                img.setAttribute("src", `${this.url}assets/img/logotipo.png`)
                section.appendChild(img)
            } else if (i == 1) {
                let menuActive = location.pathname
                let menus = {
                    "HOME": "/",
                    "CARS": "/cars",
                    "SHIPPING": "/shipping",
                    "ABOUT": "/about",
                    "CONTACT US": "/contact"
                }

                section.setAttribute("class", "menu-center")

                menuActive = menuActive.split("/")
                menuActive = menuActive[menuActive.length - 2]
                menuActive = menuActive == "" ? "HOME" : menuActive

                Object.keys(menus).forEach(key => {
                    let a = document.createElement("a")

                    a.innerText = key
                    a.setAttribute("href", menus[key])
                    console.log(menuActive.toUpperCase())
                    if(menuActive.toUpperCase() == key) a.style.fontWeight = "bold"

                    section.appendChild(a)
                })


            } else {
                let iconPhone = document.createElement("div")
                let phone = document.createElement("div")
                let bar1 = document.createElement("div")
                let lenguage = document.createElement("div")
                let bar2 = document.createElement("div")
                let login = document.createElement("i")

                iconPhone.style.marginRight = "5px"
                phone.style.marginRight = "10px"
                bar1.style.marginRight = "10px"
                lenguage.style.marginRight = "10px"
                bar2.style.marginRight = "10px"

                iconPhone.setAttribute("class", "fas fa-phone")
                bar1.setAttribute("class", "bar-menu")
                bar2.setAttribute("class", "bar-menu")
                section.setAttribute("class", "menu-right")
                login.setAttribute("class", "fas fa-user-alt")

                phone.innerText = "(809) 000-0000"
                lenguage.innerText = "ENG"

                section.appendChild(iconPhone)
                section.appendChild(phone)
                section.appendChild(bar1)
                section.appendChild(lenguage)
                section.appendChild(bar2)
                section.appendChild(login)
            }
            center.appendChild(section)
        }

        center.setAttribute('class', 'max-width')
        header.appendChild(center)
    }

    animationBanner() {
        var time = null
        let parent = document.getElementById("bannerAnimation");
        let items = document.querySelectorAll(".item-banner");
        let num = 0;
        let active = true;
        let pag = document.querySelectorAll("#paginationBanner>.pag")

        interval()
        function interval() {
            time = setInterval(() => {
                if (num < (items.length - 1) && active) {
                    num += 1
                    document.querySelector(".banner-active").classList.remove("banner-active")
                    document.getElementById(`banner${num}`).classList.add("banner-active")
                    document.querySelector(".page-active").classList.remove("page-active")
                    document.getElementById(`pag${num}`).classList.add("page-active")
                    parent.style.left = `-${num * 100}vw`
                } else if (active) {
                    num = 0
                    document.querySelector(".banner-active").classList.remove("banner-active")
                    document.getElementById(`banner${num}`).classList.add("banner-active")
                    document.querySelector(".page-active").classList.remove("page-active")
                    document.getElementById(`pag${num}`).classList.add("page-active")
                    parent.style.left = `-${0}vw`
                }
            }, 5000)
        }

        for (let i = 0; i < pag.length; i++) {
            pag[i].addEventListener("click", () => {
                clearInterval(time)
                num = +pag[i].getAttribute("pag")
                document.querySelector(".banner-active").classList.remove("banner-active")
                document.getElementById(`banner${num}`).classList.add("banner-active")
                document.querySelector(".page-active").classList.remove("page-active")
                document.getElementById(`pag${num}`).classList.add("page-active")
                parent.style.left = `-${num * 100}vw`
                interval()
            })
        }

    }

    footer() {
        let footer = document.querySelector("footer")
        let max_width = document.createElement("div")
        let column1 = document.createElement("div")
        let column2 = document.createElement("div")

        max_width.setAttribute("class", "max-width")
        column1.setAttribute("class", "column1")
        column2.setAttribute("class", "column2")


        column1.innerHTML = ` <div class="left"><h2>SIGN UP FOR AMAZING OFFERS</h2><p>EXCLUSIVE ACCESS FOR OFFERS AND PROMOTIONS</p></div><div class="right"><div class="box-input"><input type="text" placeholder="Start typing your e-mail address..."><div>SEND</div></div></div>`
        column2.innerHTML = ` <div class="left"><p>Copyright © 2019</p><p>All Rights Reserved</p></div><div class="right"><p>FOLLOW US:</p><div><i class="fab fa-facebook-f"></i><i class="fab fa-linkedin-in"></i><i class="fab fa-twitter"></i></div></div>`

        max_width.appendChild(column1)
        max_width.appendChild(column2)
        footer.appendChild(max_width)
    }

    showCar(id, animation = false) {
        let car = this.getCars()[id]
        let parent = document.querySelector("main")
        let section = document.createElement("section")
        let maxWidth = document.createElement("div")
        let title = document.createElement("div")
        let contentCard = document.createElement("div")
        let left = document.createElement("div")
        let right = document.createElement("div")
        let leftColumn1 = document.createElement("div")
        let leftColumn2 = document.createElement("div")
        let contentText = document.createElement("div")
        let readMore = document.createElement("div")
        let bar = document.createElement("div")
        let circleMore = document.createElement("div")
        let spanMode = document.createElement("span")
        let class2 = ["title", "price", "color", "call-to-action", "info"]


        title.innerText = "INVENTORY"
        contentText.innerHTML = `<p>${car.description}</p>`
        circleMore.innerHTML = '<i class="fas fa-angle-down"></i>'
        spanMode.innerText = "READ MORE"

        /****************************************
         *** COLUMN 1
         ****************************************/
        for (let i = 0; i < 3; i++) {
            let dom = document.createElement("div")

            if (i == 0) {
                let minus = document.createElement("i")
                let plus = document.createElement("i")

                dom.setAttribute("class", "zoon")
                minus.setAttribute("class", "fas fa-search-minus")
                plus.setAttribute("class", "fas fa-search-plus")

                dom.appendChild(minus)
                dom.appendChild(plus)
            } else if (i == 1) {
                let animation = document.createElement("div")

                dom.setAttribute("class", "content-img")
                animation.setAttribute("class", "animation")
                animation.setAttribute("id", "animation")

                car.imgs.forEach((e, z) => {
                    let boxImg = document.createElement("div")
                    let img = document.createElement("img")

                    img.src = `${this.url}assets/img/cars/${car.brand.toLowerCase()}-${car.general.model.toLowerCase()}-${car.features.year.toLowerCase()}/${e}-${car.selectColor}.${car.typeImg}`

                    boxImg.setAttribute("class", "box-img")

                    animation.appendChild(boxImg)
                    boxImg.appendChild(img)
                })

                dom.appendChild(animation)
            } else if (i == 2) {
                setTimeout(() => {
                    let animation = document.getElementById("animation")
                    let active = 0

                    dom.setAttribute("class", "pagination-img")

                    car.imgs.forEach((e, z) => {
                        let pag = document.createElement("div")
                        let circle = document.createElement("div")

                        pag.setAttribute("class", `pag${z == 0 ? " pag-active-show" : ""}`)

                        if (z == 0) circle.setAttribute("class", `pag-active-show`)

                        dom.appendChild(pag)
                        pag.appendChild(circle)

                        pag.addEventListener("click", () => {
                            if(z == active) return
                            let pagActiveShow = document.querySelectorAll(".pag-active-show")
                            let parentActive = document.querySelector(".pag.pag-active-show")
                            let childActive = document.querySelector(".pag.pag-active-show>.pag-active-show")
                            let newCircle = pag.querySelector("div")
                            animation.style.top = `-${z * 300}px`
                            
                            if (active < z) {
                                active = z
                                newCircle.classList.remove("top0")
                                newCircle.classList.remove("hheight0")
                                parentActive.style.background = "transparent"
                                childActive.style.height = "0"
                                newCircle.classList.add("top0")
                                setTimeout(() => {
                                    newCircle.classList.add("pag-active-show")
                                    pag.classList.add("pag-active-show")
                                }, 10)

                                setTimeout(()=>{
                                    newCircle.classList.remove("top0")
                                },500)

                                for (let i = 0; i < pagActiveShow.length; i++)  pagActiveShow[i].classList.remove("pag-active-show")
                                return
                            }
    
                            active = z
                            parentActive.style.background = "transparent"
                            childActive.classList.add("top0")
                            childActive.classList.add("hheight0")

                            setTimeout(() => {
                                newCircle.classList.add("pag-active-show")
                                pag.classList.add("pag-active-show")
                                pag.style.background = "#4b7db8"
                            }, 10)


                        })
                    })
                })

            }
            leftColumn1.appendChild(dom)

        }

        /****************************************
         *** COLUMN 2
         ****************************************/
        for (let i = 0; i < class2.length; i++) {
            let dom = document.createElement("div")
            dom.setAttribute("class", class2[i])

            if(i==0) dom.innerHTML = `<h2>${car.brand}</h2><span>${car.class}-CLASS</span>`
            else if(i==1) dom.innerHTML = `<span>${car.price}</span>`
            else if(i==2){
                let text = document.createElement("div")
                let circleColor = document.createElement("div")
                
                text.setAttribute("class", "text")
                circleColor.setAttribute("class", "circle-color")
                text.innerHTML = ` <span>Selected color: </span><b>${this.firstCapitalLetter(car.selectColor)}</b>`
                
                car.color.forEach(e => {
                    let color = document.createElement("div")

                    color.setAttribute("class", `c-circle c-circle-${e}${e==car.selectColor ? " c-circle-active" : ""}`)
                    circleColor.appendChild(color)
                })

                dom.appendChild(text)
                dom.appendChild(circleColor)
            }else if(i==3){
                let btn = document.createElement("div")

                btn.innerText = "CALL NOW FOR DISCOUNT"
                btn.setAttribute("class", "btn")
                
                dom.appendChild(btn)
            }else if(i==4){
                let titles = ["general", "features", "tearms"]

                titles.forEach(e => {
                    let select = car[e]
                    let menu = document.createElement("div")
                    let titleInfo = document.createElement("div")
                    let contentInfo  = document.createElement("div")

                    titleInfo.innerHTML = `<div>${e.toUpperCase()}</div><i class="fas fa-caret-down"></i>`

                    menu.setAttribute("class", "menus")
                    titleInfo.setAttribute("class", "title-info")
                    contentInfo.setAttribute("class", "content-info")

                    Object.keys(select).forEach(key => {
                        let div = document.createElement("div")

                        div.innerHTML = `<div>${key.toUpperCase()}</div><span>${select[key]}</span>`
                        
                        contentInfo.appendChild(div)
                    })

                    dom.appendChild(menu)
                    menu.appendChild(titleInfo)
                    menu.appendChild(contentInfo)
            
                })
            }

            right.appendChild(dom)
            
        }

        section.setAttribute("class", "view-car")
        maxWidth.setAttribute("class", "max-width")
        title.setAttribute("class", "title")
        contentCard.setAttribute("class", "content-car")
        left.setAttribute("class", "left")
        right.setAttribute("class", "right")
        leftColumn1.setAttribute("class", "column1")
        leftColumn2.setAttribute("class", "column2")
        contentText.setAttribute("class", "content-text")
        readMore.setAttribute("class", "read-more")
        bar.setAttribute("class", "bar")
        circleMore.setAttribute("class", "circle")

        parent.appendChild(section)
        section.appendChild(maxWidth)
        maxWidth.appendChild(title)
        maxWidth.appendChild(contentCard)
        contentCard.appendChild(left)
        contentCard.appendChild(right)
        left.appendChild(leftColumn1)
        left.appendChild(leftColumn2)
        leftColumn2.appendChild(contentText)
        leftColumn2.appendChild(readMore)
        readMore.appendChild(bar)
        readMore.appendChild(spanMode)
        bar.appendChild(circleMore)
    }

    getCars() {
        return {
            1: {
                brand: "Ford",
                imgs: ["ford-1", "ford-2", "ford-3", "ford-4"],
                typeImg: "png",
                color: ["red", "black", "white", "green"],
                class: "S",
                selectColor: "black",
                price: "$ 150 000",
                description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis totam distinctio dolorum natus quidem iste, tenetur quibusdam temporibus consectetur ex facere eos quaerat nobis exercitationem hic quas. Eum, nulla nisi!Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis totam distinctio dolorum natus quidem iste, tenetur quibusdam temporibus consectetur ex facere eos quaerat nobis exercitationem hic quas. Eum, nulla nisi!Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis totam distinctio dolorum natus quidem iste, tenetur quibusdam temporibus consectetur ex facere eos quaerat nobis exercitationem hic quas. Eum, nulla nisi!Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis totam distinctio dolorum natus quidem iste, tenetur quibusdam temporibus consectetur ex facere eos quaerat nobis exercitationem hic quas. Eum, nulla nisi!Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis totam distinctio dolorums",
                general: {
                    model: "Explorer",
                    doors: "5",
                    seats: "5",
                    luggage: "2",
                    transmission: "Auto",
                    "air aconditioning": "Yes"
                },
                features:{
                    status: "New",
                    year: "2019",
                    rubber: "16"
                },tearms:{
                    "years of use": "0",
                    km: "0"
                }
            },
            2:{
                brand: "Hyundai",
                imgs: ["hyundai-1", "hyundai-2"],
                typeImg: "jpg",
                color: ["red", "black", "white", "green"],
                class: "C",
                selectColor: "white",
                price: "$ 50 000",
                description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis totam distinctio dolorum natus quidem iste, tenetur quibusdam temporibus consectetur ex facere eos quaerat nobis exercitationem hic quas. Eum, nulla nisi!Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis totam distinctio dolorum natus quidem iste, tenetur quibusdam temporibus consectetur ex facere eos quaerat nobis exercitationem hic quas. Eum, nulla nisi!Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis totam distinctio dolorum natus quidem iste, tenetur quibusdam temporibus consectetur ex facere eos quaerat nobis exercitationem hic quas. Eum, nulla nisi!Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis totam distinctio dolorum natus quidem iste, tenetur quibusdam temporibus consectetur ex facere eos quaerat nobis exercitationem hic quas. Eum, nulla nisi!Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis totam distinctio dolorums",
                general: {
                    model: "Elantra",
                    doors: "4",
                    seats: "4",
                    luggage: "2",
                    transmission: "Auto",
                    "air aconditioning": "Yes"
                },
                features:{
                    status: "Used",
                    year: "2017",
                    rubber: "16"
                },tearms:{
                    "years of use": 2,
                    km: "125"
                }
            },
            3: {
                brand: "Honda",
                imgs: ["honda-1", "honda-2"],
                typeImg: "png",
                color: ["red", "black", "white", "green"],
                class: "A",
                selectColor: "white",
                price: "$ 90 000",
                description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis totam distinctio dolorum natus quidem iste, tenetur quibusdam temporibus consectetur ex facere eos quaerat nobis exercitationem hic quas. Eum, nulla nisi!Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis totam distinctio dolorum natus quidem iste, tenetur quibusdam temporibus consectetur ex facere eos quaerat nobis exercitationem hic quas. Eum, nulla nisi!Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis totam distinctio dolorum natus quidem iste, tenetur quibusdam temporibus consectetur ex facere eos quaerat nobis exercitationem hic quas. Eum, nulla nisi!Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis totam distinctio dolorum natus quidem iste, tenetur quibusdam temporibus consectetur ex facere eos quaerat nobis exercitationem hic quas. Eum, nulla nisi!Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis totam distinctio dolorums",
                general: {
                    model: "Civic",
                    doors: "4",
                    seats: "4",
                    luggage: "2",
                    transmission: "Auto",
                    "air aconditioning": "Yes"
                },
                features: {
                    status: "New",
                    year: "2016",
                    rubber: "16"
                }, tearms: {
                    "years of use": "0",
                    km: "0"
                }
            },
            4:{
                brand: "Audi",
                imgs: ["audi-1"],
                typeImg: "png",
                color: ["red", "black", "white", "green", "gray"],
                class: "A",
                selectColor: "gray",
                price: "$ 300 000",
                description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis totam distinctio dolorum natus quidem iste, tenetur quibusdam temporibus consectetur ex facere eos quaerat nobis exercitationem hic quas. Eum, nulla nisi!Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis totam distinctio dolorum natus quidem iste, tenetur quibusdam temporibus consectetur ex facere eos quaerat nobis exercitationem hic quas. Eum, nulla nisi!Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis totam distinctio dolorum natus quidem iste, tenetur quibusdam temporibus consectetur ex facere eos quaerat nobis exercitationem hic quas. Eum, nulla nisi!Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis totam distinctio dolorum natus quidem iste, tenetur quibusdam temporibus consectetur ex facere eos quaerat nobis exercitationem hic quas. Eum, nulla nisi!Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis totam distinctio dolorums",
                general: {
                    model: "Motorsan",
                    doors: "4",
                    seats: "4",
                    luggage: "2",
                    transmission: "Auto",
                    "air aconditioning": "Yes"
                },
                features:{
                    status: "New",
                    year: "2017",
                    rubber: "16"
                },tearms:{
                    "years of use": "0",
                    km: "0"
                }
            }
        }
    }

    firstCapitalLetter(text){
        return text.charAt(0).toUpperCase() + text.slice(1);
    }

    animationBannerAbout(parent){
        let items = parent.querySelectorAll(".item")
        let circleP = document.querySelectorAll(".circle-p") 
        let i = -1
        var interval1 = null
        var interval2 = null 

        interval1 = setTimeout(()=>{
            ejecut()
        },5000)

        function ejecut(){
            if(i + 1 < items.length){
                i += 1
                items[i].classList.add("section-active")
                circleP[i].classList.add("circle-p-active")

                interval2 = setTimeout(()=>{
                    items[i].classList.remove("section-active")
                    circleP[i].classList.remove("circle-p-active")
                    ejecut()
                },5500)
            }else{
                i = -1  
                ejecut()
            }
        }

        for (let e = 0; e < circleP.length; e++) {
            circleP[e].addEventListener("click", () => {
                items[i].classList.remove("section-active")
                circleP[i].classList.remove("circle-p-active")
                i = e - 1
                clearInterval(interval1)
                clearInterval(interval2)
                ejecut()
            })
        }
    }
}