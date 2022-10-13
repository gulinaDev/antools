const menu = document.querySelector(".navbar--menu")
menu.addEventListener("click",() => {
    document.querySelector(".navbar--modal").style.display = "block"
})
const menuClose = document.querySelector(".navbar--modal__block--nav__x")
menuClose.addEventListener("click",() => {
    document.querySelector(".navbar--modal").style.display = "none"
})