const backToTop = document.querySelector('.backtoTop')

// BACK TO TOP
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

