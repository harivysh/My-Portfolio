/*========================= Menu show hidden ===============================*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/*======= menu show =====*/
/* validate if constant exists */
if(navToggle){
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
}

/*======= menu hidden =====*/
/* validate if constant exists */
if(navClose){
    navClose.addEventListener('click' , () => {
        navMenu.classList.remove('show-menu')
    })
}

/*========================= Remove Menu Mobile  ===============================*/
const navLink = document.querySelectorAll('.nav-link')

function linkAction() {
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction)) 

/*========================= According Skills  ===============================*/
const skillsContent = document.getElementsByClassName('skills__content'),
      skillsHeader = document.querySelectorAll('.skills__header')

function toggleSkills(){
    let itemClass =this.parentNode.className

    for(i = 0; i < skillsHeader.length; i++){
        skillsContent[i].className= 'skills__content skills__close'
    }
    if(itemClass === 'skills__content skills__close'){
        this.parentNode.className = 'skills__content skills__open'
    }
}

skillsHeader.forEach((el) => {
    el.addEventListener('click', toggleSkills)
})

/*========================= Qualification tabs  ===============================*/
const tabs = document.querySelectorAll('[data-target]'),
      tabContents = document.querySelectorAll('[data-content]')

tabs.forEach(tab =>{
    tab.addEventListener('click', () =>{
        const target = document.querySelector(tab.dataset.target)

        tabContents.forEach(tabContent =>{
            tabContent.classList.remove('qualification__active')
        })
        target.classList.add('qualification__active')

        tabs.forEach(tab =>{
            tab.classList.remove('qualification__active')
        })
        tab.classList.add('qualification__active')
    })
})

/*========================= Services modal ===============================*/
const modalViews = document.querySelectorAll('.services__modal'),
      modalBtns = document.querySelectorAll('.services__button'),
      modalCloses = document.querySelectorAll('.services__modal-close')

let modal = function (modalClick){
    modalViews[modalClick].classList.add('active-modal')
}

modalBtns.forEach((modalBtn, i) => {
    modalBtn.addEventListener('click', () => {
        modal(i)
    })
})

modalCloses.forEach((modalCloses) =>{
    modalCloses.addEventListener('click', () => {
        modalViews.forEach((modalView) =>{
            modalView.classList.remove('active-modal')
        })
    })
}) 

/*========================= Project Swiper ===============================*/
let swiper = new Swiper('.project__container', {
    cssMode: true,
    loop: true,

    navigation: {
      nextE1: '.swiper-button-next',
      prevE1: '.swiper-button-prev',
    },
    pagination: {
      e1: '.swiper-pagination',
      clickable: true,
    },
    mousewheel: true,
    keyboard: true,
});

/*========================= Scroll section active link ===============================*/
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelectorAll('nav__menu a[href=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelectorAll('nav__menu a[href=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll',scrollActive)

/*========================= Change background header ===============================*/
function scrollHeader(){
    const nav = document.getElementById('header')
    if(this.scrollY >= 80) nav.classList.add('scroll-header'); else nav.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

/*========================= Show scroll up ===============================*/
function scrollUp(){
    const scrollUp = document.getElementById('scroll-up');
    if(this.scrollY >= 560) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

/*========================= Dark light theme ===============================*/
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'uil-sun'

const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'uil-moon' : 'uil-sun'

if(selectedTheme) {
    document.body.classList[selectedTheme == 'dark' ? 'add' : 'remove'](darkTheme)
    themeButton.classList[selectedTheme == 'uil-moon' ? 'add' : 'remove'](iconTheme)
}

themeButton.addEventListener('click', () => { 
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    localStorage.setItem('selected-theme', getCurrentIcon())
    localStorage.setItem('selected-icon', getCurrentIcon())
})

/*========================= Submit button ito mail ===============================*/
function sendMail(){
    var params = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        message: document.getElementById('message').value,
    };

    const serviceID = "service_kmpxq2i";
    const templateID = "template_yz16mw8";

   emailjs
     .send(serviceID, templateID, params)
     .then((res) => { 
        document.getElementById('name').value = "";
        document.getElementById('email').value = "";
        document.getElementById('message').value = "";
        console.log(res);
     })
     .catch((err) => console.log(err)); 
}








