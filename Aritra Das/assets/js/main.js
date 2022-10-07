/*======= Menu bar hide =======*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}
/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*==================== SKILLS Arrow down button ====================*/
const skillsContent = document.getElementsByClassName('skills__content'),
      skillHeader = document.querySelectorAll('.skills__header')
    
function toogleSkills(){
    let itemClass = this.parentNode.className

    for(i=0;i<skillsContent.length;i++){
        skillsContent[i].className = 'skills__content skills__close'
    }
    if(itemClass == 'skills__content skills__close'){
        this.parentNode.className = 'skills__content skills__open'
    }
}

skillHeader.forEach((el) =>{
    el.addEventListener('click',toogleSkills)
})

// QUALIFICATION TABS
let education = document.getElementById("education");
let work = document.getElementById("work");
let educationheader = document.getElementById("educationheader");
let workheader = document.getElementById("workheader");
workheader.style.color = "var(--first-color)";
educationheader.style.color = "var(--text-color)";

educationheader.addEventListener("click", () => {
  let condition1 = work.classList.contains("qualification-inactive");
  if (!condition1) {
    education.classList.remove("qualification-inactive");
    work.classList.add("qualification-inactive");
    workheader.style.color = "var(--text-color)";
    educationheader.style.color = "var(--first-color)";
  }
});
workheader.addEventListener("click", () => {
  let condition2 = education.classList.contains("qualification-inactive");
  if (!condition2) {
    work.classList.remove("qualification-inactive");
    education.classList.add("qualification-inactive");
    educationheader.style.color = "var(--text-color)";
    workheader.style.color = "var(--first-color)";
  }
});

// Change Background Header
function scrollHeader(){
    const nav = document.getElementById('header')
    if(this.scrollY >=80) nav.classList.add('scroll-header'); else nav.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

// Projects Swiper

let swiper = new Swiper('.portfolio__container', {
    cssMode: true,
    loop: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
});
