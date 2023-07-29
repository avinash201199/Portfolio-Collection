let menu = document.querySelector('.menu-icon');

window.onscroll = function() {
    scroll()
};

//navbar animation while scroll window
function scroll() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("navbar-default").classList.add('modified');
    }
    else {
        document.getElementById("navbar-default").classList.remove('modified');
    }
}

let about = document.querySelector('.about');
let heading = document.getElementById('heading');
let heading1 = document.getElementById('heading1');
let heading2 = document.getElementById('heading2');
let heading3 = document.getElementById('heading3');

about.addEventListener('mouseover', (e) => {
    e.preventDefault();
    heading.style.color = "#ff0080";
});
about.addEventListener('mouseout', (e) => {
    e.preventDefault();
    heading.style.color = "white";
});

let projects = document.querySelector('.projects');
projects.addEventListener('mouseover', () => {
    heading1.style.color = "#ff0080";
});
projects.addEventListener('mouseout', () => {
    heading1.style.color = "white";
});

let coding = document.querySelector('.coding');
coding.addEventListener('mouseover', () => {
    heading2.style.color = "#ff0080";
});
coding.addEventListener('mouseout', () => {
    heading2.style.color = "white";
});

let contact = document.querySelector('.contact');
contact.addEventListener('mouseover', () => {
    heading3.style.color = "#ff0080";
});
contact.addEventListener('mouseout', () => {
    heading3.style.color = "white";
});


menu.onclick = () => {
    menu.classList.toggle('move');
}

function validate() {
    let name = document.querySelector('.yourname');
    let email = document.querySelector('.email');
    let msg = document.querySelector('.message');
    let sendBtn = document.querySelector('.send-btn');

    sendBtn.addEventListener('click', (e) => {
        e.preventDefault();
        if (name.value == "" || email.value == "" || msg.value == "") {
            error();
        }
        else {
            sendEmail(name.value, email.value, msg.value);
            name.value = "";
            email.value = "";
            msg.value = "";
            success();
        }
    });
}

function sendEmail(name, email, msg) {
    emailjs.send("service_lmxnney", "template_mivpm48", {
        from_name: name,
        to_name: email,
        message: msg,
    });
}

validate();

function error() {
    swal({
        title: "Oh no...",
        text: "Fields are empty...",
        icon: "error",
    });
}

function success() {
    swal({
        title: "Good job!",
        text: "Email sent successfully!",
        icon: "success",
    });
}
