let nav = document.querySelector('nav'); // select navigation bar
let before = 0; // value of scroll before scrolling.
let pos = 0; // possion of navigation bar.
const navHeight = -nav.clientHeight; // to get height of navigation bar.

window.addEventListener('scroll',function(e){
    let after = this.scrollY; // value of scroll after scrolling.

    // add box shadow if final scrolling is equal to 0
    if(after != 0){
        nav.style.boxShadow = "0px 5px 15px black";
    }else{
        nav.style.boxShadow = "0px 0 0px black";
    }

    if(before < after){ // to hide nav bar.
        if(pos > navHeight){ // if nav bar is not completely hidden.
            pos -= after - before; // update pos by change in scrolling.
            if(pos < navHeight){ // to handel some bugs.
                pos = navHeight;
            }
            nav.style.top = pos + "px"; // update position by new pos.
        }
    }else{ // to show nav bar
        if(pos < 0){ // if nav bar is not completely appear.
            pos += before - after;
            if(pos > 0){
                pos = 0;
            }
            nav.style.top = pos + "px";
        }
    }
    before = after;
});