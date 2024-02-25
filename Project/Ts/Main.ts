let Icon : HTMLElement | null = document.getElementById("Icon")
let Bar : HTMLElement | null  = document.getElementById("NavBar")

Icon.addEventListener("click",()=>{
    Bar.classList.toggle("Show")
})


let LoginText : HTMLElement= document.getElementById("LogIn")
let LoginTextCont : HTMLElement  = document.getElementById("LogInCont")
let LoginIcon : HTMLElement  = document.getElementById("LogInIcon")
let SignInText : HTMLElement  = document.getElementById("SignIn")
let SignInTextCont : HTMLElement  = document.getElementById("SignInCont")
let SignIcon : HTMLElement  = document.getElementById("SignInIcon")
let LogoutIcon : HTMLElement = document.createElement("i")
LogoutIcon.classList.add("fa-solid")
LogoutIcon.classList.add("fa-1x")
LogoutIcon.classList.add("fa-right-from-bracket")
let CartIcon : HTMLElement = document.createElement("i")
CartIcon.classList.add("fa-solid")
CartIcon.classList.add("fa-1x")
CartIcon.classList.add("fa-cart-shopping")
let ChangeState :HTMLElement = document.getElementById("ChangeState")

function Change(){
    if(window.localStorage.getItem("Status")){
        console.log(3)
        LoginText.innerText = "LogOut"
        SignInText.innerText = "Cart"
        SignInText?.setAttribute("href","/Library-System-/dist/html/Reader/Cart.html")
        LoginIcon.remove();
        SignIcon.remove();
        LoginTextCont?.prepend(LogoutIcon)
        SignInTextCont?.prepend(CartIcon)
        LoginText?.setAttribute("href","/Library-System-/dist/html/Fixed/Home.html")
    }
    else{
        console.log(4)
        LoginText?.setAttribute("href","/Library-System-/dist/html/Fixed/Login.html")
        SignInText?.setAttribute("href","/Library-System-/dist/html/Reader/Register.html")
    }
}

LoginText?.addEventListener("click",()=>{
    if(LoginText.innerText.toLocaleLowerCase() === "logout"){
        console.log(1)
        window.localStorage.setItem("Status" , "false")
        Change()
    }else{
        console.log(5)
    }
})

ChangeState?.addEventListener("click",()=>{
    console.log(2)
    window.localStorage.setItem("Status" , "ture")
    Change()
})