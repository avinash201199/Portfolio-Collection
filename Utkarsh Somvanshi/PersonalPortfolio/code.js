var menuIconBtn = document.getElementById('menuIcon');
var navList = document.getElementById('navigationList');

function togglebutton() {
    navList.classList.toggle('show');
}
menuIconBtn.addEventListener('click', togglebutton);
console.log("code is running...");