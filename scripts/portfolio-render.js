// scripts/portfolio-render.js
(async function(){
  const container = document.getElementById('portfolio-container');
  if (!container) return;

  try {
    const res = await fetch('./data/portfolios.json');
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const data = await res.json();

    // Build HTML once (avoid repeated DOM writes)
    const html = data.map(user => `
      <article class="card">
        <img src="${user.image}" alt="${user.name} portfolio screenshot" loading="lazy" />
        <div class="card-body">
          <h3>${user.name}</h3>
          ${user.shortDescription ? `<p>${user.shortDescription}</p>` : ''}
          <p class="links">
            <a href="${user.liveLink}" target="_blank" rel="noopener">Live</a>
            |
            <a href="${user.repoLink}" target="_blank" rel="noopener">Repo</a>
          </p>
        </div>
      </article>
    `).join('');

    container.innerHTML = html;

  } catch (err) {
    console.error('Failed to load portfolios.json', err);
    container.innerHTML = '<p>Unable to load portfolio collection right now.</p>';
  }
})();
