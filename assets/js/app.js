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

}