const hamburger = document.querySelector("header.myheader nav.mynav div.hamburger");
const navbar = document.querySelector("header.myheader nav.mynav ul.navbar");

hamburger.addEventListener("click",()=> {
    hamburger.classList.toggle("active");
    navbar.classList.toggle("active");
})

document.querySelectorAll(".nav-link").forEach(n=> n.addEventListener("click",()=>

{
    hamburger.classList.remove("active");
    navbar.classList.remove("active");
}))