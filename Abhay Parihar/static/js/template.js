let pageName = window.location.href.split('/').at(-1).trim();

if (pageName === '') {
	pageName = 'home';
}

document
	.querySelector(`.nav__button--${pageName}`)
	.classList.add('nav__button--active');
