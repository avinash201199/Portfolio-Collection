/*=============== SHOW MENU ===============*/
const navMenu=document.getElementById('nav-menu'),
    navToggle=document.getElementById('nav-toggle'),
    navClose=document.getElementById('nav-close')
/*=====MENU SHOW====*/
/* Validate if constant exists*/
if(navToggle){
    navToggle.addEventListener('click',()=>{
        navMenu.classList.add('show-menu')
    })
}
/*====== MENU HIDDEN =====*/
/* validate if constant exists*/
if(navClose){
    navClose.addEventListener('click',()=>{
        navMenu.classList.remove('show-menu')
    })
}
/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link')

const linkAction = () =>{
    const navMenu=document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*=============== ADD BLUR TO HEADER ===============*/
const blurHeader=()=>{
    const header=document.getElementById('header')
    this.scrollY>=50 ? header.classList.add('blur-header')
                     : header.classList.remove('blur-header')
}
window.addEventListener('scroll',blurHeader)

/*=============== EMAIL JS ===============*/
const contactForm = document.getElementById('contact-form')
      contactMessage = document.getElementById('contact-message')
const sendEmail = (e) =>{
    e.preventDefault()

    //ServiceID - templateID - #form -publickey
    emailjs.sendForm('service_k786uqv', 'template_jk4xdni', '#contact-form', 'SWKk70UAd1BFskAgX')
    .then(() =>{
        // show sent message
        contactMessage.textContent = 'Message sent successfully ✔✔'

        // Remove message after five seconds
        setTimeout(() =>{
        contactMessage.textContent = ''
    }, 5000)
    // Clear input fields
    contactForm.reset()


    }, () =>{
        //Show error message
        contactMessage.textContent = 'Message not sent (service error) ❌'
    })
}
contactForm.addEventListener('submit',sendEmail)      
/*===========Blocking Inspect Element============*/
window.addEventListener('contextmenu', function (e) {
    e.preventDefault();
});

// Disable F12 key and Ctrl+Shift+I
window.addEventListener('keydown', function (e) {
    if (e.key === 'F12' || (e.ctrlKey && e.shiftKey && e.key === 'I')) {
        e.preventDefault();
    }
});
/*=============== SHOW SCROLL UP ===============*/ 
const scrollUp = () =>{
	const scrollUp = document.getElementById('scroll-up')
    // When the scroll is higher than 350 viewport height, add the show-scroll class to the a tag with the scrollup class
	this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
						: scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')
    
const scrollActive = () =>{
  	const scrollDown = window.scrollY

	sections.forEach(current =>{
		const sectionHeight = current.offsetHeight,
			  sectionTop = current.offsetTop - 58,
			  sectionId = current.getAttribute('id'),
			  sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')

		if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
			sectionsClass.classList.add('active-link')
		}else{
			sectionsClass.classList.remove('active-link')
		}                                                    
	})
}
window.addEventListener('scroll', scrollActive)

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr= ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400.
   // reset: true // Animation repeat
})
sr.reveal('.home__data, .home__social, .contact__container, .footer__container')
sr.reveal('.home__image', {origin:'bottom'})
sr.reveal('.about__data, .skills__data', {origin:'left'})
sr.reveal('.about__image, .skills__content', {origin:'right'})
sr.reveal('.projects__card', {interval:100})