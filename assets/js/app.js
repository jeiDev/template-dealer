class createDOM {
    header() {
        let header = document.querySelector("header")
        let center = document.createElement("div")
        for (let i = 0; i < 3; i++) {
            let section = document.createElement("div")

            if (i == 0) {
                let img = document.createElement("img")
                img.setAttribute("src", "./assets/img/logotipo.png")
                section.appendChild(img)
            } else if (i == 1) {
                let menus = {
                    "HOME": "/",
                    "CARS": "card.html",
                    "SHIPPING": "shipping.html",
                    "ABOUT": "about.html",
                    "CONTACT US": "contact.html"
                }

                section.setAttribute("class", "menu-center")

                Object.keys(menus).forEach(key => {
                    let a = document.createElement("a")

                    a.innerText = key
                    a.setAttribute("href", menus[key])

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

    animationBanner(){
        var time = null
        let parent = document.getElementById("bannerAnimation");
        let items = document.querySelectorAll(".item-banner");
        let num = 0;
        let active = true;
        let pag = document.querySelectorAll("#paginationBanner>.pag")

        interval()
        function interval(){
            time = setInterval(()=>{
                if(num < (items.length-1) && active){
                    num += 1
                    console.log(num)
                    document.querySelector(".page-active").classList.remove("page-active")
                    document.getElementById(`pag${num}`).classList.add("page-active")
                    parent.style.left = `-${num * 100}vw`
                }else if(active){
                    num = 0
                    document.querySelector(".page-active").classList.remove("page-active")
                    document.getElementById(`pag${num}`).classList.add("page-active")
                    parent.style.left = `-${0}vw`
                }
            },5000)
        }

        for (let i = 0; i < pag.length; i++) {
            pag[i].addEventListener("click", () => {
                clearInterval(time)
                num = +pag[i].getAttribute("pag")
                document.querySelector(".page-active").classList.remove("page-active")
                document.getElementById(`pag${num}`).classList.add("page-active")
                parent.style.left = `-${num * 100}vw`
                interval()
            })
        }

    }

    footer(){
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

    showCar(id){

    }

}