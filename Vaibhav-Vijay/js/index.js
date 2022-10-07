let flag = 0;

function setVisibility() {
    let viewMoreCards = document.getElementsByClassName('view-more');
    let viewBtn = document.getElementById('view-projects');
    if(viewMoreCards && viewMoreCards.length > 0) {
        if (flag == 0) {
            for (let i = 0; i < viewMoreCards.length; i++) {
                viewMoreCards[i].style.display = 'block';
            }
            viewBtn.innerHTML = 'VIEW LESS';
            flag = 1;
        } else {
            for (let i = 0; i < viewMoreCards.length; i++) {
                viewMoreCards[i].style.display = 'none';
            }
            viewBtn.innerHTML = 'VIEW MORE';
            flag = 0;
        }
    }
}