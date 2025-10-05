// This file contains JavaScript functionality for the personal portfolio website.
// It includes smooth scrolling for the navbar, active link highlighting, and other interactive features.

document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for navbar links
    const links = document.querySelectorAll('nav a');

    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            targetSection.scrollIntoView({ behavior: 'smooth' });
        });
    });

    // Active link highlighting
    const sections = document.querySelectorAll('section');

    window.addEventListener('scroll', () => {
        let current = '';

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;

            if (pageYOffset >= sectionTop - sectionHeight / 3) {
                current = section.getAttribute('id');
            }
        });

        links.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });

    // Highlight active nav link based on current page
    const navLinks = document.querySelectorAll('.nav-links a');
    const currentPath = window.location.pathname;
    const currentPage = currentPath.split('/').pop() || 'index.html';

    navLinks.forEach(link => {
        link.classList.remove('active');
        const linkHref = link.getAttribute('href');
        
        // Check if current page matches the link
        if (linkHref === currentPage || 
            (currentPage === '' && linkHref === 'index.html') ||
            (currentPage === 'index.html' && linkHref === 'index.html') ||
            linkHref.endsWith(currentPage)) {
            link.classList.add('active');
        }
    });

    // Smooth scroll for anchor links (if any)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
});

const titles = [
  "Aspiring AI Cloud Engineer",
  "ML & Web-3 Enthusiast",
  "Front-End Developer",
  "Data Analyst"
];
let idx = 0;
const el = document.querySelector('.animated-title');

function updateTitle() {
  el.textContent = titles[idx];
  
  // Re-apply the animation
  el.classList.remove('reanimate');
  void el.offsetWidth; // Force reflow
  el.classList.add('reanimate');
  
  idx = (idx + 1) % titles.length;
}

setInterval(updateTitle, 3300);
updateTitle();