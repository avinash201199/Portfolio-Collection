document.addEventListener('DOMContentLoaded', () => {
  const navLinks = document.querySelectorAll('.nav-links a[href]');

  // Normalize current path (treat "/" as "/index.html")
  const currentPath = (location.pathname === '/' ? '/index.html' : location.pathname);

  navLinks.forEach(link => {
    const rawHref = link.getAttribute('href');            // e.g. "blog.html"
    const linkPath = new URL(rawHref, location.origin).pathname; // -> "/blog.html"

    // Active state
    if (linkPath === currentPath) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }

    // Force navigation for relative same-origin links (protect against global preventDefault)
    link.addEventListener('click', (e) => {
      // Ignore external links and hash links
      if (!rawHref || rawHref.startsWith('#') || /^https?:\/\//i.test(rawHref)) return;

      // If another script called preventDefault, we still navigate explicitly
      e.preventDefault();
      window.location.assign(rawHref);
    });
  });
});