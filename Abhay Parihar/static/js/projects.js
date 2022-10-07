const projectTemplate = (project) => {
	const html = `
        <div class="project">
            <div class="project__details">
                <img class="project__img" src="./../static/img/projects/${project.image}" alt="">
                <div class="overlay">
                    <div class="project__discription"> 
                        <p>${project.discription}</p>
                    </div>
                    <div class="project__links">
                        <a class="project__link--github" href="${project.github}" target="_blank">GitHub Link </a>
                        <a class="project__link--website" href="${project.website}" target="_blank">Website Link </a>
                    </div>
                </div>
            </div>
            <p class="project__name">${project.name}</p>
        </div>
    `;

	return html;
};

const renderProjects = (data) => {
	const projects = data.data.projects;
	console.log(projects);
	let projectsHtml = '';
	projects.forEach((project) => {
		projectsHtml += projectTemplate(project);
	});
	document
		.querySelector('.projects__section')
		.insertAdjacentHTML('beforeend', projectsHtml);

	document.querySelector('.projects__section').classList.remove('hidden');
	document.querySelector('.spinner').classList.add('hidden');
};

const projectData = fetch('/projects-data')
	.then((data) => {
		return data.json();
	})
	.then((data) => {
		renderProjects(data);
	});
