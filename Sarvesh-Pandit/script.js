window.onscroll = function() { addBorderOnScroll() };

var navbar = document.getElementById("navbar");

function addBorderOnScroll() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50 ) {
        navbar.classList.add("border-visible");
    } else {
        navbar.classList.remove("border-visible");
    }
}

function resumeDownload() {
    // Create an anchor element
    var link = document.createElement('a');
    
    // Set the href attribute to the file URL
    link.href = "https://drive.google.com/file/d/1NWJowB2HNYZ1YzZKud8KDcuFyDIzjHW-/view?usp=sharing";
    
    // Set the download attribute with the desired filename (optional)
    link.download = "Sarvesh-Pandit_Resume.pdf";
    
    // Append the link to the document
    document.body.appendChild(link);
    
    // Trigger a click on the link to start the download
    link.click();
    
    // Remove the link from the document (optional)
    document.body.removeChild(link);
}