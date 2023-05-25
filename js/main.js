// ===== MENU SHOW =====
const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId),
        nav = document.getElementById(navId)

    if (toggle && nav) {
        toggle.addEventListener('click', () => {
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle', 'nav-menu')
// ===== ACTIVE AND REMOVE MENU =====
const navLink = document.querySelectorAll('.nav__link')

function linkAction() {
    //Active link
    navLink.forEach(n => n.classList.remove('active'))
    this.classList.add('active')
    //Remove menu mobile
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show')
}

navLink.forEach(n => n.addEventListener('click', linkAction))
// ===== SCROLL REVEAL ANIMATION =====
const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: true
})
// ===== SCROLL HOME =====
sr.reveal('.home__title', {})
sr.reveal('.button', { delay: 200 })
sr.reveal('.home__img', { delay: 400 })
sr.reveal('.home__social-icon', { interval: 200 })
// ===== SCROLL ABOUT =====
sr.reveal('.about__img', {})
sr.reveal('.about__subtitle', { delay: 200 })
sr.reveal('.about__text', { delay: 400 })
// ===== SCROLL SKILLS =====
//==============
const skillsContent = document.getElementsByClassName('skills__content'),
    skillsHeader = document.querySelectorAll('.skills__header')

function toggleSkills() {
    let itemClass = this.parentNode.className

    for (i = 0; i < skillsContent.length; i++) {
        skillsContent[i].className = 'skills__content skills__close'
    }

    if (itemClass === 'skills__content skills__close') {
        this.parentNode.className = 'skills__content skills__open'
    }
}

skillsHeader.forEach((el) => {
    el.addEventListener('click', toggleSkills)
})

sr.reveal('.skills__subtitle', {})
sr.reveal('.skills__text', { delay: 200 })
sr.reveal('.skills__data', { interval: 200 })
sr.reveal('.skills__img', { delay: 400 })
// ===== PROJECTS SWIPER =====
let swiper = new Swiper(".mySwiper", {
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});
// ===== SCROLL CONTACT =====
sr.reveal('.contact__input', { interval: 200 })