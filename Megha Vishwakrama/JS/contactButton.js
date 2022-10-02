let contact = document.querySelector('.contactButton');
let firstPlatform = document.querySelector('.first');
let secondPlatform = document.querySelector('.second');
let thirdPlatform = document.querySelector('.third');
let fourthPlatform = document.querySelector('.fourth');
let contactIcon = document.querySelector('.contactIcon');
let closeIcon = document.querySelector('.closeIcon');

contact.addEventListener('click',()=>{
    if(Array.from(secondPlatform.classList).find(element => element == "show") == undefined){
        show();
    }else{
        hide();
    }
    console.log(contactIcon.classList);
    console.log(closeIcon.classList);
});
function show() {
    firstPlatform.classList.remove("hideFirst");
    secondPlatform.classList.remove("hide");
    thirdPlatform.classList.remove("hide");
    fourthPlatform.classList.remove("hide");
    contactIcon.classList.remove("showIcon");
    closeIcon.classList.remove("hideIcon");
    
    firstPlatform.classList.add("showFirst");
    secondPlatform.classList.add("show");
    thirdPlatform.classList.add("show");
    fourthPlatform.classList.add("show");
    contactIcon.classList.add("hideIcon");
    closeIcon.classList.add("showIcon");
}
function hide() {
    firstPlatform.classList.remove("showFirst");
    secondPlatform.classList.remove("show");
    thirdPlatform.classList.remove("show");
    fourthPlatform.classList.remove("show");
    closeIcon.classList.remove("showIcon");
    contactIcon.classList.remove("hideIcon");
    
    firstPlatform.classList.add("hideFirst");
    secondPlatform.classList.add("hide");
    thirdPlatform.classList.add("hide");
    fourthPlatform.classList.add("hide");
    closeIcon.classList.add("hideIcon");
    contactIcon.classList.add("showIcon");
}
firstPlatform.addEventListener('click',()=>{
    window.open("https://twitter.com/manvar_prit");
});
secondPlatform.addEventListener('click',()=>{
    window.open("mailto:pritmanvar1109@gmail.com");
});
thirdPlatform.addEventListener('click',()=>{
    window.open("https://github.com/pritmanvar");
});
fourthPlatform.addEventListener('click',()=>{
    window.open("https://www.linkedin.com/in/prit-manvar-36ab97204/");
});