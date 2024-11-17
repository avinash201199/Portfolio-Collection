window.onload = () => {
  if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark");
    document.getElementById("dark-mode").innerHTML = "Light mode";
  }
  fetchData();
}

function changeTheme() {
  document.body.classList.toggle("dark");
  document.getElementById("dark-mode").innerHTML = document.body.classList.contains("dark") ? "Light mode" : "Dark mode";
  localStorage.setItem("theme", document.body.classList.contains("dark") ? "dark" : "light");
}

function fetchData() {
  fetch("https://portfolio-cf5a6-default-rtdb.europe-west1.firebasedatabase.app/.json")
  .then(response => response.json())
  .then(data => {
    document.getElementById("banner-image").src = data.about.bannerImage;
    document.getElementById("profile-image").src = data.about.profileImage;
    document.getElementById("name").innerHTML = data.about.name;
    document.getElementById("description").innerHTML = data.about.description;
    document.getElementById("about-me").innerHTML = data.about.aboutMe;

    const workExperienceList = document.getElementById("work-experience-list");
    data.workExperience.forEach(x => {
      const listItem = document.createElement("li");
      listItem.innerHTML = `
        <p>${x.company} - ${x.role}</p>
        <p>${x.technologies}</p>
        <p>${x.dates}</p>
      `;
      workExperienceList.appendChild(listItem);
    });

    const educationList = document.getElementById("education-list");
    data.education.forEach(x => {
      const listItem = document.createElement("li");
      listItem.innerHTML = `
        <p>${x.institution}</p>
        <p>${x.degree}</p>
        <p>${x.dates}</p>
      `;
      educationList.appendChild(listItem);
    });

    const toolsList = document.getElementById("favorite-tools-list");
    data.favoriteTools.forEach(x => {
      const listItem = document.createElement("li");
      listItem.innerHTML = `<p>${x}</p>`;
      toolsList.appendChild(listItem);
    });

    const skillsList = document.getElementById("skills-list");
    data.skills.forEach(x => {
      const listItem = document.createElement("li");
      listItem.innerHTML = `<p>${x}</p>`;
      skillsList.appendChild(listItem);
    });

    const projectsList = document.getElementById("projects-list");
    data.projects.forEach(x => {
      const listItem = document.createElement("li");
      listItem.innerHTML = `
        <p>${x.name}</p>
        <p>${x.description}</p>
        <p><a href="${x.link}" target="_blank">${x.link}</a></p>
      `;
      projectsList.appendChild(listItem);
    });

    const languagesList = document.getElementById("languages-list");
    data.languages.forEach(x => {
      const listItem = document.createElement("li");
      listItem.innerHTML = `<p>${x}</p>`;
      languagesList.appendChild(listItem);
    });

    const contactList = document.getElementById("contact-list");
    contactList.innerHTML = `
      <li><p>Email: <a href="mailto:${data.contact.email}" target="_blank">${data.contact.email}</a></p></li>
      <li><p>Location: ${data.contact.location}</p></li>
    `;

    const linksList = document.getElementById("links-list");
    linksList.innerHTML = `
      <li><p>Linkedin: <a href="${data.links.linkedin}" target="_blank">${data.links.linkedin}</a></p></li>
      <li><p>Github: <a href="${data.links.github}" target="_blank">${data.links.github}</a></p></li>
    `;
  });
}
