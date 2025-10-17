// Smooth scrolling for navigation links
document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll("nav ul li a");
    
    navLinks.forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetSection = document.getElementById(targetId);
            
            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - 80,
                    behavior: "smooth"
                });
                
                // Close mobile menu after clicking
                const navLinksMenu = document.getElementById("nav-links");
                if (navLinksMenu.classList.contains("show")) {
                    navLinksMenu.classList.remove("show");
                }
            }
        });
    });
});

// Toggle mobile menu
function toggleMenu() {
    const menu = document.getElementById("nav-links");
    if (menu) {
        menu.classList.toggle("show");
    }
}

// Tab functionality
function opentab(tabname) {
    const tablinks = document.getElementsByClassName("tab-links");
    const tabcontents = document.getElementsByClassName("tab-contents");
    
    for (let tablink of tablinks) {
        tablink.classList.remove("active");
    }
    
    for (let tabcontent of tabcontents) {
        tabcontent.classList.remove("activetab");
    }
    
    event.currentTarget.classList.add("active");
    document.getElementById(tabname).classList.add("activetab");
}

// Typing effect for subtitle
const subtitles = [
    "Frontend Developer",
    "Problem Solver",
    "Tech Enthusiast",
    "MERN Stack Developer",
    "Competitive Programmer"
];

let subtitleIndex = 0;
let charIndex = 0;
let isDeleting = false;
const subtitleElement = document.getElementById("subtitle");
const typingSpeed = 100;
const deletingSpeed = 50;
const delayBetweenWords = 2000;

function typeSubtitle() {
    const currentText = subtitles[subtitleIndex];
    
    if (!isDeleting) {
        subtitleElement.textContent = currentText.substring(0, charIndex + 1);
        charIndex++;
        
        if (charIndex === currentText.length) {
            isDeleting = true;
            setTimeout(typeSubtitle, delayBetweenWords);
            return;
        }
    } else {
        subtitleElement.textContent = currentText.substring(0, charIndex - 1);
        charIndex--;
        
        if (charIndex === 0) {
            isDeleting = false;
            subtitleIndex = (subtitleIndex + 1) % subtitles.length;
        }
    }
    
    setTimeout(typeSubtitle, isDeleting ? deletingSpeed : typingSpeed);
}

// Start typing effect
typeSubtitle();

// Scroll to top button
window.onscroll = function() {
    const scrollTopBtn = document.getElementById("scrollTop");
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        scrollTopBtn.style.display = "flex";
    } else {
        scrollTopBtn.style.display = "none";
    }
    
    // Add shadow to navbar on scroll
    const nav = document.querySelector("nav");
    if (window.scrollY > 50) {
        nav.classList.add("scrolled");
    } else {
        nav.classList.remove("scrolled");
    }
};

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

// Animate elements on scroll (Simple AOS alternative)
function animateOnScroll() {
    const elements = document.querySelectorAll('[data-aos]');
    
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (elementTop < windowHeight - 100) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }
    });
}
// ========== Theme Toggle Functionality ==========
const themeToggle = document.getElementById('theme-checkbox');
const body = document.body;

// Check for saved theme preference or default to dark mode
const currentTheme = localStorage.getItem('theme') || 'dark';

// Apply saved theme on page load
if (currentTheme === 'light') {
    body.classList.add('light-mode');
    themeToggle.checked = true;
}

// Toggle theme on button click
themeToggle.addEventListener('change', function() {
    if (this.checked) {
        body.classList.add('light-mode');
        localStorage.setItem('theme', 'light');
        
        // Optional: Add celebration animation
        createThemeChangeEffect();
    } else {
        body.classList.remove('light-mode');
        localStorage.setItem('theme', 'dark');
        
        // Optional: Add celebration animation
        createThemeChangeEffect();
    }
});

// Optional: Create a visual effect when theme changes
function createThemeChangeEffect() {
    const effect = document.createElement('div');
    effect.style.position = 'fixed';
    effect.style.top = '0';
    effect.style.left = '0';
    effect.style.width = '100%';
    effect.style.height = '100%';
    effect.style.background = 'radial-gradient(circle, rgba(255,0,79,0.3) 0%, transparent 70%)';
    effect.style.pointerEvents = 'none';
    effect.style.zIndex = '9999';
    effect.style.opacity = '0';
    effect.style.transition = 'opacity 0.5s ease';
    
    document.body.appendChild(effect);
    
    setTimeout(() => {
        effect.style.opacity = '1';
    }, 10);
    
    setTimeout(() => {
        effect.style.opacity = '0';
    }, 300);
    
    setTimeout(() => {
        document.body.removeChild(effect);
    }, 800);
}

// Optional: Detect system theme preference
function detectSystemTheme() {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
        return 'light';
    }
    return 'dark';
}

// Optional: Listen for system theme changes
window.matchMedia('(prefers-color-scheme: light)').addEventListener('change', e => {
    if (!localStorage.getItem('theme')) {
        if (e.matches) {
            body.classList.add('light-mode');
            themeToggle.checked = true;
        } else {
            body.classList.remove('light-mode');
            themeToggle.checked = false;
        }
    }
});


// Initialize animation styles
document.addEventListener("DOMContentLoaded", function() {
    const elements = document.querySelectorAll('[data-aos]');
    elements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(50px)';
        element.style.transition = 'all 0.6s ease';
    });
});

window.addEventListener('scroll', animateOnScroll);
animateOnScroll(); // Initial check

// Form submission (you can connect to a backend)
document.querySelector('.contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Thank you for your message! I will get back to you soon.');
    this.reset();
});
