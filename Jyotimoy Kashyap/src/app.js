const hamburgerButton = document.getElementById("hamburger")
const navIcons = document.getElementById("nav-list")

function toggleButton(){
   navIcons.classList.toggle('show')
}

hamburgerButton.addEventListener('click', toggleButton)