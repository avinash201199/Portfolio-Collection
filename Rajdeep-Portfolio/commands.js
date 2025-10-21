// ===== Data Variables =====
let about, roles, skills, projects, achievements, email, resume;
let isLoading = true;

let aboutSectionHTML,
  whoAmISectionHTML,
  skillsSectionHTML,
  projectsSectionHTML,
  achievementsSectionHTML,
  contactSectionHTML,
  helpSectionHTML,
  websiteSectionHTML,
  resumeSectionHTML;

// ===== GitHub API Configuration =====
const GITHUB_USERNAME = 'RajdeepKushwaha5';
const GITHUB_API_URL = `https://api.github.com/users/${GITHUB_USERNAME}`;
const GITHUB_REPOS_URL = `https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=10`;

// ===== Cache Configuration =====
const CACHE_DURATION = 15 * 60 * 1000; // 15 minutes
const CACHE_KEYS = {
  USER_DATA: 'github_user_data',
  REPOS_DATA: 'github_repos_data',
  TIMESTAMP: 'cache_timestamp'
};

// ===== Cache Utility Functions =====
const isCacheValid = () => {
  const timestamp = localStorage.getItem(CACHE_KEYS.TIMESTAMP);
  if (!timestamp) return false;

  const now = Date.now();
  return (now - parseInt(timestamp)) < CACHE_DURATION;
};

const saveToCache = (key, data) => {
  try {
    localStorage.setItem(key, JSON.stringify(data));
    localStorage.setItem(CACHE_KEYS.TIMESTAMP, Date.now().toString());
  } catch (error) {
    console.warn('Failed to save to cache:', error);
  }
};

const getFromCache = (key) => {
  try {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : null;
  } catch (error) {
    console.warn('Failed to read from cache:', error);
    return null;
  }
};

const clearCache = () => {
  localStorage.removeItem(CACHE_KEYS.USER_DATA);
  localStorage.removeItem(CACHE_KEYS.REPOS_DATA);
  localStorage.removeItem(CACHE_KEYS.TIMESTAMP);
};

// ===== Utility Functions =====
const createLoadingHTML = () => {
  return `<div class="command-result">
    <p class="loading-text">⏳ Loading data from GitHub...</p>
  </div>`;
};

const createErrorHTML = (message) => {
  return `<div class="command-result">
    <p class="command-not-found">❌ Error: ${message}</p>
  </div>`;
};

// ===== Content Generation Functions =====
const getAbout = () => {
  if (isLoading) return createLoadingHTML();
  const renderData = `<div class="command-result">
    <p class="about-text">${about}</p>
  </div>`;
  return renderData;
};

const getRoles = () => {
  if (isLoading) return createLoadingHTML();
  let renderData = `<div class="command-result"><ul>`;
  roles.forEach((role) => {
    renderData += `<li class="data-li">✨ ${role}</li>`;
  });
  renderData += "</ul></div>";
  return renderData;
};

const getSkills = () => {
  if (isLoading) return createLoadingHTML();
  let renderData = `<div class="command-result"><div class="skills-grid">`;
  skills.forEach((skill, index) => {
    const icons = ['🚀', '💻', '⚡', '🔧', '📦', '🎨', '🛠️', '📊', '🔐', '☁️'];
    const icon = icons[index % icons.length];
    renderData += `<div class="skill-item">${icon} ${skill.title}</div>`;
  });
  renderData += "</div></div>";
  return renderData;
};

const getProjects = () => {
  if (isLoading) return createLoadingHTML();
  let renderData = `<div class="command-result"><table class="data-table">`;
  projects.forEach((project, index) => {
    renderData += `<tr>
      <th class="data-name-th">${index + 1}. <a href="${project.url}" target="_blank" rel="noopener noreferrer" class="data-link">${project.title}</a></th>
      <td class="data-description-td">${project.description || 'No description available'}</td>
    </tr>`;
  });
  renderData += "</table></div>";
  return renderData;
};

const getAchievements = () => {
  if (isLoading) return createLoadingHTML();
  let renderData = `<div class="command-result"><table class="data-table">`;
  achievements.forEach((achievement, index) => {
    renderData += `<tr>
      <th class="data-name-th">🏆 <a href="${achievement.url}" target="_blank" rel="noopener noreferrer" class="data-link">${achievement.title}</a></th>
      <td class="data-description-td">${achievement.description}</td>
    </tr>`;
  });
  renderData += "</table></div>";
  return renderData;
};

const getContact = () => {
  const contacts = [
    {
      contactTitle: "📧 Email",
      contactPlace: email,
      link: `mailto:${email}`
    },
    {
      contactTitle: "💼 GitHub",
      contactPlace: "https://github.com/RajdeepKushwaha5",
      link: "https://github.com/RajdeepKushwaha5"
    },
    {
      contactTitle: "🔗 LinkedIn",
      contactPlace: "https://www.linkedin.com/in/rajdeepsingh5/",
      link: "https://www.linkedin.com/in/rajdeepsingh5/"
    },
    {
      contactTitle: "🐦 Twitter/X",
      contactPlace: "https://x.com/rajdeeptwts",
      link: "https://x.com/rajdeeptwts"
    },
    {
      contactTitle: "✍️ Medium",
      contactPlace: "https://medium.com/@rajdeep01",
      link: "https://medium.com/@rajdeep01"
    },
    {
      contactTitle: "🌐 Website",
      contactPlace: "https://rajdeep-singh.vercel.app/",
      link: "https://rajdeep-singh.vercel.app/"
    },
  ];

  let renderData = `<div class="command-result"><dl>`;
  contacts.forEach((item) => {
    renderData += `<dt class="data-dt">${item.contactTitle}</dt><dd class="data-dd"><a href="${item.link}" target="_blank" rel="noopener noreferrer" class="data-link">${item.contactPlace}</a></dd>`;
  });
  renderData += "</dl></div>";
  return renderData;
};

const getResume = () => {
  const renderData = `<div class="command-result">
    <p class="about-text">📄 Opening resume in a new tab...</p>
    <p class="about-text mt-10">Resume link: <a href="${resume}" target="_blank" rel="noopener noreferrer" class="data-link">${resume}</a></p>
  </div>`;

  // Open resume in new tab
  setTimeout(() => {
    window.open(resume, '_blank');
  }, 1000);

  return renderData;
};

const getHelp = () => {
  let renderData = `<div class="command-result"><dl>`;

  const availableCommands = [
    {
      command: "whoami",
      description: "👤 Display my roles and what I do"
    },
    {
      command: "about",
      description: "📖 Learn more about me and my journey"
    },
    {
      command: "skills",
      description: "💻 View my technical skills and expertise"
    },
    {
      command: "projects",
      description: "🚀 Check out my projects and work"
    },
    {
      command: "achievements",
      description: "🏆 See my accomplishments and milestones"
    },
    {
      command: "resume",
      description: "📄 View and download my resume"
    },
    {
      command: "contact",
      description: "📧 Get my contact information and social links"
    },
    {
      command: "website",
      description: "🌐 Visit my portfolio website"
    },
    {
      command: "clear",
      description: "🗑️ Clear the terminal screen"
    },
    {
      command: "ctrl/cmd + k",
      description: "⌨️ Keyboard shortcut to clear terminal"
    },
    {
      command: "ctrl/cmd + l",
      description: "⌨️ Alternative keyboard shortcut to clear terminal"
    },
  ];

  availableCommands.forEach((cmd) => {
    renderData += `<dt class="data-dt">${cmd.command}</dt><dd class="data-dd">${cmd.description}</dd>`;
  });
  renderData += `</dl>
  <p class="about-text mt-10">💡 <strong>Tips:</strong></p>
  <ul>
    <li class="data-li">Press ↑/↓ arrow keys to navigate command history</li>
    <li class="data-li">Use Tab for command auto-completion (coming soon!)</li>
    <li class="data-li">Paste commands directly - newlines are automatically cleaned</li>
    <li class="data-li">Data is cached for 15 minutes for better performance</li>
  </ul>
  </div>`;

  return renderData;
};

const website = "https://rajdeep-singh.vercel.app";

const getWebsite = () => {
  const renderData = `<div class="command-result">
    <p class="about-text">🌐 Redirecting you to my portfolio website...</p>
    <p class="about-text mt-10">
      <a href="${website}" target="_blank" rel="noopener noreferrer" class="data-link">${website}</a>
    </p>
  </div>`;
  return renderData;
};

// Initialize static sections
helpSectionHTML = getHelp();
websiteSectionHTML = getWebsite();

// ===== Fetch Real Data from GitHub API =====
const fetchGitHubData = async () => {
  try {
    // Check cache first
    if (isCacheValid()) {
      const cachedUserData = getFromCache(CACHE_KEYS.USER_DATA);
      const cachedReposData = getFromCache(CACHE_KEYS.REPOS_DATA);

      if (cachedUserData && cachedReposData) {
        console.log('✅ Using cached GitHub data');
        return { userData: cachedUserData, reposData: cachedReposData };
      }
    }

    console.log('⏳ Fetching fresh data from GitHub API...');

    // Fetch user profile with error handling
    const userResponse = await fetch(GITHUB_API_URL, {
      headers: {
        'Accept': 'application/vnd.github.v3+json'
      }
    });

    if (!userResponse.ok) {
      throw new Error(`GitHub API error: ${userResponse.status} ${userResponse.statusText}`);
    }

    const userData = await userResponse.json();

    // Fetch repositories with error handling
    const reposResponse = await fetch(GITHUB_REPOS_URL, {
      headers: {
        'Accept': 'application/vnd.github.v3+json'
      }
    });

    if (!reposResponse.ok) {
      throw new Error(`GitHub API error: ${reposResponse.status} ${reposResponse.statusText}`);
    }

    const reposData = await reposResponse.json();

    // Save to cache
    saveToCache(CACHE_KEYS.USER_DATA, userData);
    saveToCache(CACHE_KEYS.REPOS_DATA, reposData);

    console.log('✅ Fresh data fetched and cached');
    return { userData, reposData };
  } catch (error) {
    console.error('❌ Error fetching GitHub data:', error);

    // Try to use expired cache as fallback
    const cachedUserData = getFromCache(CACHE_KEYS.USER_DATA);
    const cachedReposData = getFromCache(CACHE_KEYS.REPOS_DATA);

    if (cachedUserData && cachedReposData) {
      console.log('⚠️ Using expired cache due to API error');
      return { userData: cachedUserData, reposData: cachedReposData };
    }

    throw error;
  }
};

const getPortfolio = async () => {
  try {
    isLoading = true;

    // Fetch data from GitHub
    const { userData, reposData } = await fetchGitHubData();

    // Set basic info
    about = userData.bio || "Hi, I'm RAJDEEP SINGH, a passionate full-stack software developer specializing in modern web technologies. I love building innovative applications and contributing to open-source projects. My journey in tech is driven by curiosity and a commitment to creating impactful digital solutions.";

    roles = [
      "Full-Stack Developer",
      "Software Engineer",
      "Open Source Contributor",
      "Tech Enthusiast"
    ];

    email = "rajdeepsingh10789@gmail.com";
    resume = "https://drive.google.com/file/d/1dWRhT2GSx4StZk2kqGU2UpJLNZCVnuoA/view";

    // Extract skills from repositories (languages used)
    const languagesSet = new Set();
    reposData.forEach(repo => {
      if (repo.language) {
        languagesSet.add(repo.language);
      }
    });

    // Add additional skills
    const additionalSkills = [
      "JavaScript", "TypeScript", "Python", "React", "Next.js",
      "Node.js", "Express", "MongoDB", "PostgreSQL", "Git",
      "Docker", "AWS", "HTML5", "CSS3", "Tailwind CSS"
    ];

    const allSkills = [...new Set([...languagesSet, ...additionalSkills])];
    skills = allSkills.map((skill, index) => ({ id: index + 1, title: skill }));

    // Get top repositories as projects
    const topRepos = reposData
      .filter(repo => !repo.fork) // Exclude forked repos
      .sort((a, b) => b.stargazers_count - a.stargazers_count)
      .slice(0, 6);

    projects = topRepos.map((repo, index) => ({
      id: index + 1,
      title: repo.name.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()),
      description: repo.description || 'A project showcasing my development skills',
      url: repo.html_url,
      stars: repo.stargazers_count,
      language: repo.language
    }));

    // Set achievements
    achievements = [
      {
        id: 1,
        title: `${userData.public_repos} Public Repositories`,
        description: `Actively maintaining ${userData.public_repos} open-source repositories on GitHub`,
        url: `https://github.com/${GITHUB_USERNAME}?tab=repositories`
      },
      {
        id: 2,
        title: `${userData.followers} GitHub Followers`,
        description: "Building a community of developers and tech enthusiasts",
        url: `https://github.com/${GITHUB_USERNAME}?tab=followers`
      },
      {
        id: 3,
        title: "Open Source Contributor",
        description: "Contributing to various open-source projects and helping the developer community",
        url: `https://github.com/${GITHUB_USERNAME}`
      },
      {
        id: 4,
        title: "Continuous Learner",
        description: "Always exploring new technologies and best practices in software development",
        url: website
      }
    ];

    // If user has gists, add it to achievements
    if (userData.public_gists > 0) {
      achievements.push({
        id: 5,
        title: `${userData.public_gists} Public Gists`,
        description: "Sharing code snippets and solutions with the community",
        url: `https://gist.github.com/${GITHUB_USERNAME}`
      });
    }

    isLoading = false;

    // Generate HTML sections
    aboutSectionHTML = getAbout();
    whoAmISectionHTML = getRoles();
    skillsSectionHTML = getSkills();
    projectsSectionHTML = getProjects();
    achievementsSectionHTML = getAchievements();
    contactSectionHTML = getContact();
    resumeSectionHTML = getResume();

    console.log('✅ Portfolio data loaded successfully');
    return true;
  } catch (error) {
    console.error('❌ Error loading portfolio data:', error);
    isLoading = false;

    // Fallback data if API fails
    about = "Hi, I'm RAJDEEP SINGH, a passionate full-stack software developer specializing in modern web technologies.";
    roles = ["Full-Stack Developer", "Software Engineer"];
    email = "rajdeepsingh10789@gmail.com";
    resume = "https://drive.google.com/file/d/1dWRhT2GSx4StZk2kqGU2UpJLNZCVnuoA/view";

    skills = [
      { id: 1, title: "JavaScript" },
      { id: 2, title: "TypeScript" },
      { id: 3, title: "React" },
      { id: 4, title: "Node.js" },
      { id: 5, title: "Python" }
    ];

    projects = [
      {
        id: 1,
        title: "Portfolio Website",
        description: "A terminal-themed portfolio website",
        url: website
      }
    ];

    achievements = [
      {
        id: 1,
        title: "GitHub Profile",
        description: "Check out my GitHub profile",
        url: `https://github.com/${GITHUB_USERNAME}`
      }
    ];

    aboutSectionHTML = getAbout();
    whoAmISectionHTML = getRoles();
    skillsSectionHTML = getSkills();
    projectsSectionHTML = getProjects();
    achievementsSectionHTML = getAchievements();
    contactSectionHTML = getContact();
    resumeSectionHTML = getResume();

    return false;
  }
};

// Load portfolio data
getPortfolio();

export {
  aboutSectionHTML,
  whoAmISectionHTML,
  skillsSectionHTML,
  projectsSectionHTML,
  achievementsSectionHTML,
  contactSectionHTML,
  helpSectionHTML,
  website,
  websiteSectionHTML,
  resumeSectionHTML,
};
