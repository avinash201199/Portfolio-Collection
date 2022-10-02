let first = document.getElementById('hr1');
let second = document.getElementById('hr2');
let third = document.getElementById('hr3');
let menu = document.querySelector('.phoneMenu');
let count = 0;

document.querySelector('menu').addEventListener('click',()=>{
    if(count%2 === 0){
        showMenu();
    }else{
        hideMenu();
    }
    count++;
});
function showMenu() {
    disableScroll();
    first.classList.remove("revind1");
    second.classList.remove("revind2");
    third.classList.remove("revind3");
    first.classList.add("rotateDown");
    second.classList.add("remove");
    third.classList.add("rotateUp");

    menu.classList.remove("removePhoneMenu");
    menu.classList.add("showPhoneMenu");
}
function hideMenu() {
    first.classList.add("revind1");
    second.classList.add("revind2");
    third.classList.add("revind3");
    first.classList.remove("rotateDown");
    second.classList.remove("remove");
    third.classList.remove("rotateUp");

    menu.classList.remove("showPhoneMenu");
    menu.classList.add("removePhoneMenu");

    enableScroll();
}
function disableScroll() {
    document.body.classList.add("stop-scrolling");
}
  
function enableScroll() {
    document.body.classList.remove("stop-scrolling");
}

window.onresize = ()=>{
    if(window.innerWidth > 600){
        enableScroll();
    }else{
        if(Array.from(menu.classList).find(element => element == "showPhoneMenu") !== undefined){
            disableScroll();
        }
    }
}