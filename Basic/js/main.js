const open = document.querySelector('.open')
const close = document.querySelector('.close')
const menuMobile = document.querySelector('.header__menu-mobile-content')

open.onclick = function () {
    menuMobile.classList.add('open')
}
close.onclick = function () {
    menuMobile.classList.remove('open')
}

// Sroll Navbar
const headers = document.querySelector('.header__nav')
const logoBlack = document.querySelector('.logo-black')
const logoWhite = document.querySelector('.logo-white')

window.addEventListener('scroll', fixNav)

function fixNav() {
    if (window.scrollY > headers.offsetHeight + 40) {
        headers.classList.add('active')
        logoBlack.style.display = 'block'
        logoWhite.style.display = 'none'
    }else{
        headers.classList.remove('active')
        logoBlack.style.display = 'none'
        logoWhite.style.display = 'block'
    }
}


// // BACK TO TOP
const backToTop = document.querySelector('.backtoTop')

document.querySelector('.backtoTop').addEventListener('click' , scrollToTop)
window.addEventListener('scroll', () =>{
    backToTop.classList.toggle('active' , window.scrollY > 100)
})
function scrollToTop() {
    window.scrollTo ({
        top: 0,
        behavior: "smooth",
    })
}