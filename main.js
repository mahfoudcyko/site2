
        const button = document.querySelector("button")
        const container = document.getElementById("container")
        const input = document.querySelector("input")
        const hi = document.getElementById("hi")
        
        container.addEventListener("click", (eo) => {
            if(eo.target.className == "icon-trash icon"){
                eo.target.parentElement.parentElement.remove()
            }else if (eo.target.className =="icon-star icon"){
                eo.target.classList.add("orange")
                container.prepend(eo.target.parentElement)
            }else if(eo.target.className =="icon-angry2 icon"){
                eo.target.classList.add("dn")
                const hart = 
                `
                <span class="icon-heart"></span>
                `
                eo.target.parentElement.parentElement.getElementsByClassName("text-text")[0].classList.add("finche")
                eo.target.parentElement.innerHTML += hart
                }else if(eo.target.className =="icon-heart"){
                    eo.target.classList.add("dn")
                    eo.target.parentElement.parentElement.getElementsByClassName("text-text")[0].classList.add("res")
                    const angry = `<span class="icon-angry2 icon"></span>`
                    eo.target.parentElement.innerHTML += angry
                }else if(eo.target.className =="icon-star icon orange"){
                    eo.target.classList.remove("orange")
                }
        })
            button.addEventListener("click", (eo) => {
                eo.preventDefault();
                const task = 
                `
                    <div class="task">
                    <span class="icon-star icon"></span>
                    <p lang="ar" class="text-text">${input.value}</p>
                    <div>
                    <span class="icon-trash icon"></span>
                    <span class="icon-angry2 icon"></span>
                    </div>
                    </div>
                `
                container.innerHTML += task ;
                input.value = ""
            })
