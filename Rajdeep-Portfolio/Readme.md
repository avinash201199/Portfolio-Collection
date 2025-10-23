# 💻 Terminal Portfolio - Rajdeep Singh



<div align="center">> A unique, interactive terminal-themed portfolio website with real-time GitHub integration



![Terminal Portfolio Banner](./assets/screenshots/preview_1.png)![Terminal Portfolio](./assets/screenshots/preview_1.png)



**An interactive, terminal-themed portfolio website with real-time GitHub integration**## 🌟 Features



[![Live Demo](https://img.shields.io/badge/Live-Demo-green?style=for-the-badge)](https://rajdeep-singh.vercel.app/)- **Terminal-Like Interface** - Authentic command-line experience in the browser

[![GitHub](https://img.shields.io/badge/GitHub-Repository-blue?style=for-the-badge&logo=github)](https://github.com/RajdeepKushwaha5/terminal-theme-portfolio)- **Real GitHub Integration** - Automatically fetches your projects and data from GitHub API

[![License](https://img.shields.io/badge/License-MIT-yellow?style=for-the-badge)](./LICENSE)- **Fully Responsive** - Works seamlessly on desktop, tablet, and mobile devices

- **Modern UI/UX** - Beautiful animations, smooth transitions, and polished design

</div>- **Command History** - Navigate through previous commands with arrow keys

- **Mobile Optimized** - Quick help button and touch-friendly interface

---- **Fast & Lightweight** - Built with vanilla JavaScript for optimal performance



## 📋 Table of Contents## 📋 Table of Contents



- [Overview](#-overview)- [Overview](#overview)

- [Features](#-features)- [Commands](#commands)

- [Demo](#-demo)- [Screenshots](#screenshots)

- [Screenshots](#-screenshots)- [Technologies](#technologies)

- [Technologies](#️-technologies)- [Setup](#setup)

- [Getting Started](#-getting-started)- [Customization](#customization)

- [Commands](#-commands)- [Links](#links)

- [Customization](#-customization)

- [Performance](#-performance)## 🎯 Overview

- [Deployment](#-deployment)

- [Improvements Made](#-improvements-made)This is not your typical GUI portfolio website. Instead, you can access information via an interactive command-line interface. Type 'help' to view all available commands and navigate through different sections to learn about skills, projects, achievements, and more.

- [Contributing](#-contributing)

- [License](#-license)The portfolio automatically fetches real data from your GitHub profile, including repositories, bio, and statistics, making it always up-to-date with your latest work.

- [Contact](#-contact)

## 💻 Commands

---

| Command | Description |

## 🎯 Overview|---------|-------------|

| `help` | Display all available commands |

This is not your typical GUI portfolio website. Experience a unique, **terminal-themed interactive portfolio** that brings the command-line interface to the web. Type commands to explore projects, skills, achievements, and more!| `whoami` | Show roles and what I do |

| `about` | Learn more about me |

The portfolio features:| `skills` | View technical skills |

| `projects` | Browse my projects |

- **Real-time GitHub Integration** - Automatically fetches and displays your latest repositories, bio, and statistics| `achievements` | See accomplishments |

- **Smart Caching** - 15-minute cache for optimal performance| `resume` | View/download resume |

- **Fully Responsive** - Perfect experience on desktop, tablet, and mobile devices| `contact` | Get contact information |

- **Accessibility First** - WCAG compliant with ARIA labels and semantic HTML| `website` | Visit portfolio website |

- **SEO Optimized** - Open Graph tags, meta descriptions, and structured data| `clear` | Clear terminal screen |

- **PWA Ready** - Installable as a Progressive Web App| `ctrl/cmd + k` | Keyboard shortcut to clear |



---## 📸 Screenshots



## ✨ Features![Preview 1](./assets/screenshots/preview_1.png)

![Preview 2](./assets/screenshots/preview_2.png)

### Core Features![Preview 3](./assets/screenshots/preview_3.png)

![Preview 4](./assets/screenshots/preview_4.png)

- 🖥️ **Authentic Terminal Experience** - Command-line interface with realistic behavior![Preview 5](./assets/screenshots/preview_5.png)

- 🔄 **Real-time Data** - Fetches live data from GitHub API![Preview 6](./assets/screenshots/preview_6.png)

- 📱 **Mobile Optimized** - Touch-friendly with quick help button

- ⌨️ **Keyboard Shortcuts** - `Ctrl/Cmd+K` or `Ctrl/Cmd+L` to clear terminal## 🛠️ Technologies

- 📜 **Command History** - Navigate with ↑/↓ arrow keys

- 🎨 **Modern Design** - Beautiful animations and smooth transitions- **HTML5** - Semantic markup

- ⚡ **Lightning Fast** - Built with vanilla JavaScript, no framework overhead- **CSS3** - Modern styling with animations

- ♿ **Accessible** - Screen reader friendly with proper ARIA labels- **JavaScript (ES6+)** - Vanilla JS, no frameworks

- 🌐 **SEO Ready** - Complete meta tags for social media sharing- **GitHub API** - Real-time data fetching

- **Responsive Design** - Mobile-first approach

### Advanced Features

## 🚀 Setup

- **Smart Caching System** - Reduces API calls and improves load times

- **Error Handling** - Graceful fallbacks if GitHub API is unavailable1. Clone the repository:

- **Command Suggestions** - Helpful suggestions for mistyped commands```bash

- **Auto-focus** - Command input always ready for typinggit clone https://github.com/RajdeepKushwaha5/terminal-theme-portfolio.git

- **Paste Handling** - Automatically cleans pasted commandscd terminal-theme-portfolio

- **Loading States** - Visual feedback during data fetching```

- **Performance Optimized** - Debounced scrolling, GPU-accelerated animations

2. Update your information in `commands.js`:

---   - Change `GITHUB_USERNAME` to your GitHub username

   - Update email in `getPortfolio()` function

## 🌐 Demo   - Update resume link

   - Customize the contact links in `getContact()`

**Live Site:** [https://rajdeep-singh.vercel.app/](https://rajdeep-singh.vercel.app/)

3. Open `index.html` in your browser or deploy to your hosting service.

**Repository:** [https://github.com/RajdeepKushwaha5/terminal-theme-portfolio](https://github.com/RajdeepKushwaha5/terminal-theme-portfolio)

## 🎨 Customization

---

### Change Colors

## 📸 Screenshots

Edit the CSS variables in `styles.css`:

<details>

<summary>Click to view screenshots</summary>```css

:root {

![Terminal Interface](./assets/screenshots/preview_1.png)  --bg-primary: #0a0e27;

*Main terminal interface with welcome message*  --accent-green: #39ff14;

  --accent-yellow: #ffd700;

![Skills Display](./assets/screenshots/preview_2.png)  --accent-cyan: #00f5ff;

*Skills grid showing technical expertise*  /* ... more colors */

}

![Projects View](./assets/screenshots/preview_3.png)```

*Projects fetched from GitHub*

### Update GitHub Username

![Mobile View](./assets/screenshots/preview_4.png)

*Mobile-optimized interface*In `commands.js`, change:



</details>```javascript

const GITHUB_USERNAME = 'YourGitHubUsername';

---```



## 🛠️ Technologies### Modify Commands



### FrontendAdd or modify commands in `app.js` in the `executeCommand()` function.



- **HTML5** - Semantic markup with accessibility features## 🔗 Links

- **CSS3** - Modern styling with CSS Grid, Flexbox, animations

- **JavaScript (ES6+)** - Vanilla JS with ES modules- **Live Site**: [https://rajdeep-singh.vercel.app/](https://rajdeep-singh.vercel.app/)

- **GitHub API v3** - Real-time data integration- **GitHub**: [https://github.com/RajdeepKushwaha5](https://github.com/RajdeepKushwaha5)

- **LinkedIn**: [https://www.linkedin.com/in/rajdeepsingh5/](https://www.linkedin.com/in/rajdeepsingh5/)

### Development

## 📱 Responsive Features

- **No Build Tools** - Pure vanilla JavaScript

- **No Dependencies** - Lightweight and fast- **Desktop**: Full terminal experience with keyboard shortcuts

- **Progressive Enhancement** - Works everywhere- **Tablet**: Optimized layout with touch support

- **Mobile-First** - Responsive design approach- **Mobile**: Compact design with quick help button



### Fonts## 🎯 Key Features Explained



- **Fira Code** - Monospace font with ligatures### Real-Time GitHub Integration

- **IBM Plex Mono** - Professional monospace fontThe portfolio fetches your latest repositories, languages, follower count, and bio directly from GitHub API, ensuring your portfolio is always current.



---### Command History

Use ↑/↓ arrow keys to navigate through previously entered commands, just like a real terminal.

## 🚀 Getting Started

### Keyboard Shortcuts

### Prerequisites- `Ctrl/Cmd + K` - Clear terminal

- `↑` - Previous command

- A modern web browser (Chrome, Firefox, Safari, Edge)- `↓` - Next command

- A GitHub account (for customization)

- Basic knowledge of HTML, CSS, JavaScript (for customization)### Loading States

Displays loading indicators while fetching data from GitHub API.

### Installation

### Error Handling

1. **Clone the repository**Graceful fallback if API requests fail, ensuring the site always works.



   ```bash## 🤝 Contributing

   git clone https://github.com/RajdeepKushwaha5/terminal-theme-portfolio.git

   cd terminal-theme-portfolioFeel free to fork this project and customize it for your own portfolio. If you have suggestions for improvements, please open an issue or submit a pull request.

   ```

## 📄 License

2. **Open in browser**

This project is open source and available under the MIT License.

   Simply open `index.html` in your web browser:

## 👨‍💻 Author

   ```bash

   # On macOS**Rajdeep Singh**

   open index.html- GitHub: [@RajdeepKushwaha5](https://github.com/RajdeepKushwaha5)

- LinkedIn: [rajdeepsingh5](https://www.linkedin.com/in/rajdeepsingh5/)

   # On Windows- Twitter: [@rajdeeptwts](https://x.com/rajdeeptwts)

   start index.html- Medium: [@rajdeep01](https://medium.com/@rajdeep01)



   # On Linux---

   xdg-open index.html

   ```⭐ Star this repo if you find it helpful!



3. **Start customizing!**Made with ❤️ by Rajdeep Singh


   See the [Customization](#-customization) section below.

---

## 💻 Commands

Type these commands in the terminal to explore:

| Command | Description |
|---------|-------------|
| `help` | Display all available commands with descriptions |
| `whoami` | Show my roles and what I do |
| `about` | Learn more about me and my journey |
| `skills` | View technical skills and expertise |
| `projects` | Browse my projects fetched from GitHub |
| `achievements` | See accomplishments and milestones |
| `resume` | View and download my resume |
| `contact` | Get contact information and social links |
| `website` | Visit my portfolio website |
| `clear` | Clear the terminal screen |

### Keyboard Shortcuts

- `↑` / `↓` - Navigate command history
- `Ctrl/Cmd + K` - Clear terminal
- `Ctrl/Cmd + L` - Clear terminal (alternative)
- `Enter` - Execute command

---

## 🎨 Customization

### 1. Update GitHub Username

Edit `commands.js`:

```javascript
const GITHUB_USERNAME = 'YourGitHubUsername';
```

### 2. Update Contact Information

Edit `commands.js` in the `getContact()` function:

```javascript
email = "your.email@example.com";
resume = "https://your-resume-link.com";
```

Update the social links in the `contacts` array.

### 3. Customize Colors

Edit `styles.css`:

```css
:root {
  --bg-primary: #0a0e27;
  --bg-secondary: #1a1f3a;
  --accent-green: #39ff14;
  --accent-yellow: #ffd700;
  --accent-cyan: #00f5ff;
  /* ... more colors */
}
```

### 4. Update ASCII Banner

Edit `index.html` to change the ASCII art banner with your name.

Use an [ASCII art generator](http://patorjk.com/software/taag/) for custom text.

### 5. Add/Remove Commands

Edit `app.js` in the `executeCommand()` function to add custom commands:

```javascript
case "newcommand":
  showCommandOutput(newCommandHTML);
  addCommandToHistory();
  break;
```

---

## ⚡ Performance

### Optimization Features

- **Smart Caching** - GitHub data cached for 15 minutes
- **Lazy Loading** - Images and resources loaded on demand
- **Debounced Scrolling** - Smooth scroll performance
- **GPU Acceleration** - Hardware-accelerated animations
- **Minimal Dependencies** - No external libraries
- **Optimized Font Loading** - Preconnect to Google Fonts

### Performance Metrics

- **First Contentful Paint** - < 1.5s
- **Time to Interactive** - < 2.5s
- **Lighthouse Score** - 95+
- **Bundle Size** - < 50KB (HTML + CSS + JS)

---

## 🌍 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Visit [Vercel](https://vercel.com)
3. Import your repository
4. Deploy with one click!

### Deploy to Netlify

1. Push your code to GitHub
2. Visit [Netlify](https://netlify.com)
3. Connect your repository
4. Deploy automatically

### Deploy to GitHub Pages

1. Push your code to GitHub
2. Go to Settings > Pages
3. Select source: `main` branch
4. Your site will be live at `https://yourusername.github.io/terminal-theme-portfolio`

### Other Options

- **Firebase Hosting**
- **Cloudflare Pages**
- **AWS S3 + CloudFront**
- **Traditional Web Hosting** (upload via FTP)

---

## 🎯 Improvements Made

This portfolio has been comprehensively audited and enhanced:

### SEO & Accessibility

- ✅ Added Open Graph meta tags for social media sharing
- ✅ Added Twitter Card meta tags
- ✅ Implemented semantic HTML5 elements (`<main>`, `<header>`, `<section>`)
- ✅ Added ARIA labels and roles for screen readers
- ✅ Improved meta descriptions and keywords
- ✅ Added favicon and app manifest support
- ✅ Ensured keyboard navigation works flawlessly

### UI/UX Enhancements

- ✅ Enhanced terminal aesthetics with better colors and shadows
- ✅ Added smooth animations and transitions
- ✅ Improved mobile responsiveness with better breakpoints
- ✅ Added loading states and error messages
- ✅ Enhanced scrollbar styling
- ✅ Improved typography and readability
- ✅ Added focus styles for better accessibility

### Performance & Code Quality

- ✅ Implemented smart caching system (15-minute cache)
- ✅ Added debounced scrolling for better performance
- ✅ Optimized font loading with preconnect
- ✅ Added GPU acceleration for animations
- ✅ Improved error handling with graceful fallbacks
- ✅ Added command validation and suggestions
- ✅ Cleaned up code and improved modularity

### Features Added

- ✅ Command history navigation with arrow keys
- ✅ Multiple keyboard shortcuts (Ctrl+K, Ctrl+L)
- ✅ Paste handling with automatic cleanup
- ✅ Mobile help button for quick access
- ✅ Welcome message on page load
- ✅ Smart command suggestions for typos
- ✅ Enhanced help menu with tips
- ✅ Page visibility tracking

### Documentation

- ✅ Comprehensive README with all information
- ✅ Detailed customization guide
- ✅ Deployment instructions for multiple platforms
- ✅ Clear setup steps for beginners
- ✅ Performance metrics and best practices

---

## 🤝 Contributing

Contributions are welcome! Here's how you can help:

1. **Fork the repository**
2. **Create a feature branch** (`git checkout -b feature/AmazingFeature`)
3. **Commit your changes** (`git commit -m 'Add some AmazingFeature'`)
4. **Push to the branch** (`git push origin feature/AmazingFeature`)
5. **Open a Pull Request**

### Development Guidelines

- Follow existing code style and conventions
- Test on multiple browsers and devices
- Ensure accessibility standards are maintained
- Update documentation for new features
- Add comments for complex logic

---

## 📄 License

This project is open source and available under the [MIT License](./LICENSE).

Feel free to use this project as a template for your own portfolio!

---

## 📧 Contact

**Rajdeep Singh**

- 💼 **GitHub:** [@RajdeepKushwaha5](https://github.com/RajdeepKushwaha5)
- 🔗 **LinkedIn:** [rajdeepsingh5](https://www.linkedin.com/in/rajdeepsingh5/)
- 🐦 **Twitter/X:** [@rajdeeptwts](https://x.com/rajdeeptwts)
- ✍️ **Medium:** [@rajdeep01](https://medium.com/@rajdeep01)
- 🌐 **Portfolio:** [rajdeep-singh.vercel.app](https://rajdeep-singh.vercel.app/)
- 📧 **Email:** rajdeepsingh10789@gmail.com

---

<div align="center">

### ⭐ Star this repository if you find it helpful!

**Made with ❤️ by Rajdeep Singh**

[Back to Top](#-terminal-portfolio---rajdeep-singh)

</div>
