import {
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
} from "./commands.js";

const command = document.getElementById("command");
const commandOutput = document.getElementById("command-output");
const loadingScreen = document.getElementById("loading-screen");
const mobileHelpBtn = document.getElementById("mobile-help");

const commandHistory = [];
let historyIndex = 0;

// Available commands for auto-complete
const availableCommands = [
  'help', 'whoami', 'about', 'skills', 'projects',
  'achievements', 'resume', 'contact', 'website', 'clear'
];

// Hide loading screen after page loads
window.addEventListener('load', () => {
  setTimeout(() => {
    loadingScreen.classList.add('hidden');
    // Add welcome message
    showWelcomeMessage();
  }, 1000);
});

// Show welcome message
const showWelcomeMessage = () => {
  const welcomeMsg = `<div class="command-result info-message">
    <p>✨ Welcome to Rajdeep Singh's Terminal Portfolio!</p>
    <p>Type <code>help</code> to see available commands.</p>
  </div>`;
  commandOutput.innerHTML += welcomeMsg;
};

const focusOnCommandInput = () => {
  command.focus();
};

document.addEventListener("keydown", focusOnCommandInput);

const downKeyIsPressed = (event) => {
  return event.which == 38 && historyIndex > 0;
};

const upKeyIsPressed = (event) => {
  return event.which == 40 && historyIndex < commandHistory.length - 1;
};

const clearKeyIsPressed = (event) => {
  return (event.metaKey || event.ctrlKey) && event.which == 75;
};

const getPreviouslyExecutedCommand = () => {
  historyIndex--;
  command.value = commandHistory[historyIndex];
};

const getNextExecutedCommand = () => {
  historyIndex++;
  command.value = commandHistory[historyIndex];
};

const enterKeyIsPressed = (event) => {
  return event.which == 13;
};

// Command validation
const isValidCommand = (cmd) => {
  return availableCommands.includes(cmd.trim().toLowerCase()) || cmd.trim() === '';
};

// Get command suggestions
const getCommandSuggestions = (input) => {
  if (!input) return [];
  return availableCommands.filter(cmd =>
    cmd.toLowerCase().startsWith(input.toLowerCase())
  );
};

const showExecutedCommand = () => {
  const typedCommand = `<div class="input-container">
        <span class="input-label">></span>
        <span class="input-command">${command.value}</span>
      </div>`;

  commandOutput.innerHTML += typedCommand;
};

const redirectToGUIWebsite = () => {
  setTimeout(() => {
    const anchor = document.createElement("a");
    anchor.href = website;
    anchor.target = "_blank";
    anchor.rel = "noopener noreferrer";
    anchor.click();
  }, 1500);
};

const showCommandNotFound = () => {
  const suggestions = getCommandSuggestions(command.value);
  let suggestionText = '';

  if (suggestions.length > 0) {
    suggestionText = `<p class="mt-10">Did you mean: <code>${suggestions.join('</code>, <code>')}</code>?</p>`;
  }

  return `<div class="command-result error-message">
          <p><span class="command-not-found">${command.value}</span>: command not found</p>
          <p>Type <code>help</code> to view a list of available commands.</p>
          ${suggestionText}
        </div>`;
};

const emptyCommandInput = () => {
  command.value = "";
};

// Performance: Debounce scroll
let scrollTimeout;
const scrollToBottomEnd = () => {
  if (scrollTimeout) {
    clearTimeout(scrollTimeout);
  }
  scrollTimeout = setTimeout(() => {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: 'smooth'
    });
  }, 100);
};

const showCommandOutput = (output) => {
  commandOutput.innerHTML += output;
};

const executeCommand = () => {
  const userEnteredCommand = command.value.trim().toLowerCase();

  // Track command execution
  if (userEnteredCommand) {
    console.log(`Executing command: ${userEnteredCommand}`);
  }

  switch (userEnteredCommand) {
    case "help":
      showCommandOutput(helpSectionHTML);
      addCommandToHistory();
      break;

    case "whoami":
      showCommandOutput(whoAmISectionHTML);
      addCommandToHistory();
      break;

    case "about":
      showCommandOutput(aboutSectionHTML);
      addCommandToHistory();
      break;

    case "skills":
      showCommandOutput(skillsSectionHTML);
      addCommandToHistory();
      break;

    case "projects":
      showCommandOutput(projectsSectionHTML);
      addCommandToHistory();
      break;

    case "achievements":
      showCommandOutput(achievementsSectionHTML);
      addCommandToHistory();
      break;

    case "resume":
      showCommandOutput(resumeSectionHTML);
      addCommandToHistory();
      break;

    case "website":
      showCommandOutput(websiteSectionHTML);
      addCommandToHistory();
      redirectToGUIWebsite();
      break;

    case "contact":
      showCommandOutput(contactSectionHTML);
      addCommandToHistory();
      break;

    case "clear":
      emptyTerminal();
      addCommandToHistory();
      break;

    case "":
      // Do nothing for empty command
      break;

    default:
      commandOutput.innerHTML += showCommandNotFound();
      addCommandToHistory();
  }
  resetHistoryIndex();
  emptyCommandInput();
  scrollToBottomEnd();
  return;
};

const evaluateCommandInput = (event) => {
  if (downKeyIsPressed(event)) {
    event.preventDefault();
    getPreviouslyExecutedCommand();
    return;
  }

  if (upKeyIsPressed(event)) {
    event.preventDefault();
    getNextExecutedCommand();
    return;
  }

  if (enterKeyIsPressed(event)) {
    event.preventDefault();
    showExecutedCommand();
    executeCommand();
    return;
  }

  if (clearKeyIsPressed(event)) {
    event.preventDefault();
    resetHistoryIndex();
    emptyTerminal();
  }
};

command.addEventListener("keydown", evaluateCommandInput);

const addCommandToHistory = () => {
  if (command.value.trim()) {
    commandHistory.push(command.value);
  }
};

const resetHistoryIndex = () => {
  historyIndex = commandHistory.length;
};

const emptyTerminal = () => {
  commandOutput.innerHTML = "";
};

// Mobile help button functionality
if (mobileHelpBtn) {
  mobileHelpBtn.addEventListener('click', () => {
    command.value = 'help';
    const event = new KeyboardEvent('keydown', { which: 13, keyCode: 13 });
    evaluateCommandInput(event);
    showExecutedCommand();
    executeCommand();
  });
}

// Add welcome message on load
window.addEventListener('DOMContentLoaded', () => {
  // Auto-focus on command input
  command.focus();
});

// Analytics: Track page visibility
document.addEventListener('visibilitychange', () => {
  if (document.hidden) {
    console.log('User left the page');
  } else {
    console.log('User returned to the page');
    command.focus();
  }
});

// Handle paste events
command.addEventListener('paste', (e) => {
  e.preventDefault();
  const pastedText = (e.clipboardData || window.clipboardData).getData('text');
  const cleanedText = pastedText.replace(/\n/g, '').trim();
  command.value = cleanedText;
});

// Keyboard shortcut: Ctrl/Cmd + L to clear (alternative to Ctrl+K)
document.addEventListener('keydown', (e) => {
  if ((e.ctrlKey || e.metaKey) && e.key === 'l') {
    e.preventDefault();
    emptyTerminal();
    resetHistoryIndex();
  }
});
