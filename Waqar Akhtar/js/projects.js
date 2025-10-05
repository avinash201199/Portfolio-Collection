const projects = [
 {
    title: "PrepPal AI",
    image: "assets/images/project1.png",
    short: "PrepPal is an AI-powered web app designed to enhance student's learning experience.",
    tech: "HTML, CSS, JavaScript",
    github: "https://github.com/Waqar080206/PrepPal",
    live: "https://preppal-pi.vercel.app/",
    details: `
      PrepPal is a smart web app built to supercharge students' learning experience using AI. It includes powerful tools like note summarization, chatbot assistance, quiz and flashcard generation, and more — all in one sleek interface with dark mode support.<br><br>
      <strong>🚀 Features</strong>
      <ul>
        <li><strong>📝 Note Summarizer</strong><br>Turn lengthy notes into clear, concise summaries — instantly.</li>
        <li><strong>🤖 Study Chatbot</strong><br>Get instant help on any topic — like having a tutor in your pocket.</li>
        <li><strong>📚 Flashcard Generator</strong><br>Create smart flashcards from PDFs, notes, or text — ready for review.</li>
        <li><strong>❓ Quiz Generator</strong><br>Test your knowledge automatically — no manual setup needed.</li>
        <li><strong>📄 PDF Processor</strong><br>Extract, summarize, annotate, and convert PDFs into study-ready formats.</li>
        <li><strong>🌙 Dark Mode Support</strong><br>Study comfortably at night with a clean, eye-friendly interface.</li>
        <li><strong>🔄 Export & Sync</strong><br>Export flashcards, summaries, and quizzes to Anki, Notion, Google Docs, and more.</li>
      </ul>
    `,
    images: ["assets/images/project1.png"]
  },
  {
    title: "Hydro Heroes",
    image: "assets/images/project2.png",
    short: "This website serves as a dashboard to monitor real-time water usage and quality data collected from IoT sensors (YSF water flow meter and pH sensor). It was built as part of the Smart Delhi Ideathon 2025 to address Delhi's water efficiency challenges.",
    tech: "Node.js, Node-Red, WebSocket, HTML, CSS, JavaScript",
    github: "https://github.com/Waqar080206/Hydro-Heroes",
    live: "https://live-demo.com/project2",
    details: `The Hydro Heroes Website is part of an innovative solution to tackle Delhi's water crisis by maximizing water efficiency. It integrates real-time data from IoT sensors into a user-friendly dashboard, enabling users to monitor water usage and quality in real time. This project was developed during the Smart Delhi Ideathon 2025 , where our team, Hydro Heroes , secured 4th place and received recognition from the Lieutenant Governor of Delhi.<br><br>
<strong>🚀 Features</strong>
 <ul>
 <li><strong>Real-Time Monitoring</strong><br> Displays live water flow rate and pH values. 
 <li><strong>Data Visualization</strong><br> Graphs and charts to visualize trends in water usage and quality. 
 <li><strong>User-Friendly Interface</strong><br> Clean and intuitive design for easy navigation. 
 <li><strong>Responsive Design</strong><br> Optimized for both desktop and mobile devices. 
 <li><strong>Integration with Backend</strong><br> Connects seamlessly with Node-RED backend for real-time data updates. 
 <li><strong>Tech Stack Frontend</strong><br> HTML, CSS, JavaScript 
 <li><strong>Visualization</strong><br> Chart.js (for graphs and charts)
 </ul>`,
    images: ["assets/images/project2.jpg"]
  },
  /*{
    title: "Project Title 3",
    image: "assets/images/project3.jpg",
    short: "A brief description of project 3.",
    tech: "Python, Flask",
    github: "https://github.com/username/project3",
    live: "https://live-demo.com/project3",
    details: "A detailed description of project 3 goes here. You can add more paragraphs, images, or even a list of features.",
    images: ["assets/images/project3.jpg"]
  }
  // Add more projects as needed*/
];

// Render project cards
const grid = document.getElementById('projectGrid');
projects.forEach((proj, idx) => {
  const card = document.createElement('div');
  card.className = 'project-card';
  card.tabIndex = 0;
  card.innerHTML = `
    <img src="${proj.image}" alt="${proj.title}">
    <div class="project-info">
      <div class="project-title">${proj.title}</div>
    </div>
    <div class="project-hover">
      <div class="project-title">${proj.title}</div>
      <div class="project-description">${proj.short}</div>
      <div class="project-tech">${proj.tech}</div>
    </div>
  `;
  card.addEventListener('click', () => openModal(idx));
  card.addEventListener('keypress', e => { if (e.key === 'Enter') openModal(idx); });
  grid.appendChild(card);
});

// Modal logic
const modal = document.getElementById('projectModal');
function openModal(idx) {
  const proj = projects[idx];
  modal.innerHTML = `
    <div class="project-modal-content">
      <button class="close-modal" aria-label="Close" onclick="closeModal()">&times;</button>
      <h1>${proj.title}</h1>
      <div class="project-tech">${proj.tech}</div>
      <div class="project-desc">${proj.details}</div>
      <div class="modal-links">
        <a href="${proj.github}" target="_blank" aria-label="GitHub">
          <img src="assets/images/github.png" alt="GitHub" style="height:45px;width:45px;vertical-align:middle;">
        </a>
        <a href="${proj.live}" target="_blank" aria-label="Live Link">
          Live Link<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="0.42857142857142855" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-up-right-icon lucide-arrow-up-right"><path d="M7 7h10v10"/><path d="M7 17 17 7"/></svg>
        </a>
      </div>
    </div>
  `;
  modal.style.display = 'flex';
  document.body.style.overflow = 'hidden';

  // Render Lucide icons in the modal
  if (window.createIcons) {
    createIcons();
  }
}
window.closeModal = function() {
  modal.style.display = 'none';
  document.body.style.overflow = '';
};
// Close modal on background click
modal.addEventListener('click', e => {
  if (e.target === modal) closeModal();
});
// Close modal on ESC
window.addEventListener('keydown', e => {
  if (modal.style.display === 'flex' && e.key === 'Escape') closeModal();
});
