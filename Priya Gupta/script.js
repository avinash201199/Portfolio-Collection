const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry) 
        if (entry.isIntersecting ) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    });
});

const hiddenElements = document.querySelectorAll('.hidden1');
hiddenElements.forEach((el) => observer.observe(el));



const observer1 = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry) 
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    });
});

const hiddenElements1 = document.querySelectorAll('.hidden2');
hiddenElements1.forEach((el) => observer1.observe(el));


const observer2 = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry) 
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    });
});

const hiddenElements2 = document.querySelectorAll('.hidden3');
hiddenElements2.forEach((el) => observer2.observe(el));


let scrollContainer = document.querySelector(".gallery"); 
        let backBtn = document.getElementById("backbutton");
        let nextBtn = document.getElementById("nextbutton");

        scrollContainer.addEventListener("wheel", (evt)=>{
            // evt.preventDefault();
            scrollContainer.scrollleft += evt.deltaY;
        });

        nextBtn.addEventListener("click", ()=>{

            scrollContainer.style.scrollBehavior = "smooth";
            scrollContainer.scrollLeft += 370;
        });
        backBtn.addEventListener("click", ()=>{

            scrollContainer.style.scrollBehavior = "smooth";
            scrollContainer.scrollLeft -= 370;
        });