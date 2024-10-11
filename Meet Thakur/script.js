var trailer = document.querySelector('#trailer');
var x,y,scrol;
var tl = gsap.timeline();
gsap.registerPlugin(ScrollTrigger) 


tl.to(".load",{
	delay: 1,
	opacity: 0,
	display: "none",
});

tl.to("html",{
	overflowY:"scroll",
})

tl.from("#navbar",{
	duration: 1,
	opacity: 0,
	y: -50,
});


tl.from("#main",{
	duration: 1,
	opacity: 0,
	ease: "expo",
	y: -50,
});


gsap.from('#s1', {
	scrollTrigger: {
		trigger: '#s1',
		start: 'top 70%',
		end: 'top 30%',
		scrub: 2,
	},
	opacity:0,
	y:-100,
})

gsap.from('#s2', {
	scrollTrigger: {
		trigger: '#s2',
		start: 'top 70%',
		end: 'top 30%',
		scrub: 2,
	},
	opacity:0,
	y:-100,
})

gsap.from('.cards', {
	scrollTrigger: {
		trigger: '.cards',
		start: 'top 70%',
		end: 'top 30%',
		scrub:2,
	},
	duration: 1,
	x: -window.innerWidth,
	ease: "expo",
});

function mouseTrailer() {
	window.addEventListener('mousemove', function(event) {;
	scrol = window.scrollY;
	x = event.clientX;
	y = event.clientY;
	trailer.style.transform = `translate(${event.clientX - 10}px, ${event.clientY -10 + scrol}px)`;
	if (event.clientX > window.innerWidth - 50 || event.clientY > window.innerHeight - 50 || event.clientX < 50 || event.clientY < 50) {
		trailer.style.opacity = 0;
	}
	else{
		trailer.style.opacity = 1;
	}
})
}


function scrollTrailer() {
	window.addEventListener('scroll', function(event) {
		scrol = window.scrollY;
		trailer.style.transform = `translate(${x - 15}px, ${y -15 + scrol}px)`;
	})
}

scrollTrailer()
mouseTrailer();



