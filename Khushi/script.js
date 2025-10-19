// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Active nav link highlighting
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');

    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
});

// Portfolio card interaction
document.querySelectorAll('.portfolio-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.backgroundColor = 'var(--yellow)';
    });
    card.addEventListener('mouseleave', function() {
        this.style.backgroundColor = 'white';
    });
});

// Page load animation
window.addEventListener("load", () => {
  document.body.style.opacity = "1"
})
// Comment Section Logic
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("commentForm");
  const commentList = document.getElementById("commentList");
  let comments = JSON.parse(localStorage.getItem("comments")) || [];

  const displayComments = () => {
    commentList.innerHTML = comments.map(c => `
      <div class="comment-item">
        <h4>${c.name}</h4>
        <p>${c.message}</p>
      </div>
    `).join("");
  };

  displayComments();

  form.addEventListener("submit", e => {
    e.preventDefault();
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (!name || !email || !message) return;

    const newComment = { name, email, message };
    comments.push(newComment);
    localStorage.setItem("comments", JSON.stringify(comments));
    displayComments();
    form.reset();
  });
});
