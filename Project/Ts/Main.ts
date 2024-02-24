let Icon : HTMLElement | null = document.getElementById("Icon")
let Bar : HTMLElement | null  = document.getElementById("NavBar")

Icon.addEventListener("click",()=>{
    Bar.classList.toggle("Show")
})
