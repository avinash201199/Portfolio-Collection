const menu = document.querySelector(".menu");
const menuItems = menu.querySelectorAll("li");
const showContactsBtn = document.getElementById("showContacts");
const aside = document.querySelector(".aside");
const main = document.querySelector("main");
const section = main.querySelectorAll("section");

const formInput = document.querySelectorAll("[data-form-input]");
const form = document.querySelector("[data-form]");
const formBtn = document.querySelector(".formBtn");
console.log(formBtn);
console.log(form);
console.log(formInput);

menuItems.forEach((item, index) => {
	item.addEventListener("click", () => {
		const activeItem = menu.querySelector(".active");
		activeItem.classList.remove("active");
		item.classList.add("active");

		const activeSection = main.querySelector("section.active");
		activeSection.classList.toggle("active");
		section[index].classList.toggle("active");
	});
});

showContactsBtn.addEventListener("click", () => {
	aside.classList.toggle("active");
});

formInput.forEach((element) => {
	element.addEventListener("input", () => {
		if (form.checkValidity()) {
			formBtn.removeAttribute("disabled");
		} else {
			formBtn.setAttribute("disabled", "");
		}

		console.log('hi')
	});
});
