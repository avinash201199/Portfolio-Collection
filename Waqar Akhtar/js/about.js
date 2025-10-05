// Simple AOS (Animate On Scroll) implementation
document.addEventListener('DOMContentLoaded', function() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('aos-animate');
            }
        });
    }, observerOptions);

    // Observe all elements with data-aos attribute
    document.querySelectorAll('[data-aos]').forEach(el => {
        observer.observe(el);
    });
});

// Minimal modal logic: populate and open modal from .cert-card buttons
document.addEventListener('DOMContentLoaded', function () {
  const modal = document.getElementById('certModal');
  const modalTitle = modal.querySelector('#certModalTitle');
  const modalMeta  = modal.querySelector('.cert-modal__meta');
  const modalDesc  = modal.querySelector('.cert-modal__desc');
  const modalVerify = modal.querySelector('.cert-modal__verify');
  let lastFocus = null;

  function openModal(card) {
    lastFocus = document.activeElement;
    modalTitle.textContent = card.querySelector('h3')?.textContent || card.getAttribute('data-cert-title') || '';
    modalMeta.textContent  = card.getAttribute('data-cert-meta') || (card.querySelector('.cert-meta')?.textContent || '');
    modalDesc.textContent  = card.getAttribute('data-cert-desc') || (card.querySelector('p')?.textContent || '');
    const verifyUrl = card.getAttribute('data-verify') || '#';
    modalVerify.href = verifyUrl;
    modal.classList.add('open');
    modal.setAttribute('aria-hidden', 'false');
    modal.querySelector('.cert-modal__close').focus();
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    modal.classList.remove('open');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    if (lastFocus) lastFocus.focus();
  }

  document.querySelectorAll('.cert-card').forEach(card => {
    card.addEventListener('click', () => openModal(card));
    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); openModal(card); }
    });
  });

  modal.querySelector('[data-close]')?.addEventListener('click', closeModal);
  modal.querySelector('.cert-modal__close')?.addEventListener('click', closeModal);

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('open')) closeModal();
  });

  // close when backdrop clicked
  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
  });
});