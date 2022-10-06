var allProjectsVisible = false;

document.getElementById("show-all-projects-button").onclick = showHideMinimizedProjects;

function showHideMinimizedProjects() {
  if (areAllProjectsVisible()) {
    hideMinimizeProjects();
    allProjectsVisible = false;
  } else
  {
    showMinimizeProjects();
    allProjectsVisible = true;
  }
}
function hideMinimizeProjects() {
  let minimizedProjects = document.getElementsByClassName("minimized-project");

  for (let i = 0; i < minimizedProjects.length; i++) {
    minimizedProjects[i].style.display = 'none';
  }

}

function showMinimizeProjects() {
  let minimizedProjects = document.getElementsByClassName("minimized-project");

  for (let i = 0; i < minimizedProjects.length; i++) {
    minimizedProjects[i].style.display = 'grid';
  }
}

function areAllProjectsVisible() {
  if (allProjectsVisible === true) {
    return true;
  }
  return false;
}