//Clock
function showTime() {
    var date = new Date();
    var h = date.getHours();
    var m = date.getMinutes();
    var d = String(date.getDate()).padStart(2, '0');
	weekday=week();
    var day = weekday[date.getDay()];

    if (h == 0) {
        h = 12;
    }

    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;

    var time = h + ":" + m;
    document.getElementById("time").innerText = time;
    document.getElementById("day").innerText = day;
    setTimeout(showTime, 1000);

}

showTime();

// Currently Working on Text Animation

const allElements = document.querySelectorAll('.animated-text');

if (allElements.length > 0) {
    allElements.forEach((element) => {
        const txtElement = element,
            wordsList = txtElement.getAttribute('words'),
            words = wordsList.split(', ');

        let wordsCount = 0;

        entry();

        function entry() {
            if (wordsCount < words.length) {
                let word = words[wordsCount] + '.',
                    txtArr = word.split(''),
                    count = 0;

                txtElement.textContent = '';

                txtArr.forEach((letter) => {
                    let _letter = letter === ' ' ? '&nbsp;' : letter;
                    txtElement.innerHTML += `<span>${_letter}</span>`;
                });

                let spans = txtElement.childNodes;

                const letterInterval = setInterval(activeLetter, 70);

                function activeLetter() {
                    spans[count].classList.add('active');
                    count++;

                    if (count === spans.length) {
                        clearInterval(letterInterval);
                        setTimeout(() => {
                            eraseText();
                        }, 600);
                    }
                }

                function eraseText() {
                    let removeInterval = setInterval(removeLetter, 40);
                    count--;

                    function removeLetter() {
                        spans[count].classList.remove('active');
                        count--;

                        if (count === -1) {
                            clearInterval(removeInterval);
                            wordsCount++;

                            entry();
                        }
                    }
                }
            } else {
                wordsCount = 0;
                entry();
            }
        }
    });
}

setTimeout(() => {
$(".profile").removeClass("profile_anim")
}, 400);