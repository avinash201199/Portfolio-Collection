function Page(evt, tabName) {
  // Declare all variables
  let i, SlideContent, Btn;

  // Get all elements with class="tabcontent" and hide them
  SlideContent = document.getElementsByClassName("SlideContent");
  for (i = 0; i < SlideContent.length; i++) {
    SlideContent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  Btn = document.getElementsByClassName("Btn");
  for (i = 0; i < Btn.length; i++) {
    Btn[i].className = Btn[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(tabName).style.display = "";
  evt.currentTarget.className += " active";
}

document.getElementById("DefaultOpen").click();

//Disables right click
document.addEventListener(
  "contextmenu",
  function (event) {
    event.preventDefault();
  },
  false
);

// NAVIGATION MENU JS
const mainMenu = document.querySelector('.mainMenu');
const closeMenu = document.querySelector('.closeMenu');
const openMenu = document.querySelector('.openMenu');
const NavBtn = document.querySelectorAll('.Btn');

openMenu.addEventListener('click', show);
closeMenu.addEventListener('click', close);
// NavBtn.addEventListener('click' , close);

// close menu when you click on a menu item 
NavBtn.forEach(item => {
    item.addEventListener('click',function(){
        close();
    })
})

function show(){
    mainMenu.style.display = 'flex';
    mainMenu.style.top = '-2px';
}
function close(){
    mainMenu.style.top = '-113%';
}
