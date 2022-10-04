var lightmode = document.documentElement.getAttribute('mode');
console.log(lightmode);

function week() {
	var weekday = new Array(7);
	weekday[0] = "Sun";
	weekday[1] = "Mon";
	weekday[2] = "Tue";
	weekday[3] = "Wed";
	weekday[4] = "Thu";
	weekday[5] = "Fri";
	weekday[6] = "Sat";
	return weekday;
}

function mon() {
	var month = new Array(13);
	month[0] = "Jan";
	month[1] = "Feb";
	month[2] = "Mar";
	month[3] = "Apr";
	month[4] = "May";
	month[5] = "Jun";
	month[6] = "Jul";
	month[7] = "Aug";
	month[8] = "Sept";
	month[9] = "Oct";
	month[10] = "Nov";
	month[11] = "Dec";
	return month;
};
// Dark Mode

$(".inner-switch").on("click", function() {
    if ($("body").hasClass("dark")) {
        $("body").removeClass("dark");
        $("html").removeClass("dark");
		$("#mode").removeClass("fa-sun-o");
		$("#mode").addClass("fa-moon-o");
        document.documentElement.setAttribute('mode', 'light');
        localStorage.setItem('mode', 'light');
    } else {
        $("body").addClass("dark");
        $("html").addClass("dark");
		$("#mode").removeClass("fa-moon-o");
		$("#mode").addClass("fa-sun-o");
        document.documentElement.setAttribute('mode', 'dark');
        localStorage.setItem('mode', 'dark');
    }
});

if (!localStorage.hasOwnProperty('mode')) {
    localStorage.setItem('mode', lightmode);
}

if (localStorage.hasOwnProperty('theme')) {
    document.documentElement.setAttribute('theme', localStorage.getItem('theme'));
}

if (localStorage.getItem('mode') == 'light') {
    $("body").removeClass("dark");
    $("html").removeClass("dark");
	$("#mode").removeClass("fa-sun-o");
	$("#mode").addClass("fa-moon-o");
    document.documentElement.setAttribute('mode', 'light');
} else {
    document.documentElement.setAttribute('mode', 'dark');
	$("body").addClass("dark");
	$("html").addClass("dark");
	$("#mode").removeClass("fa-moon-o");
	$("#mode").addClass("fa-sun-o");
}

var theme = document.documentElement.getAttribute('theme');

var s=document.getElementsByClassName(theme);
for(var i=0, len=s.length; i<len; i++) {
	s[i].style["border"] = "solid black 3px";
}

function themes() {
    if (theme == "lily") {
        monet = "#3c4219";
    } else if (theme == "pin") {
        monet = "#54320f";
    } else if (theme == "helle") {
        monet = "#452739";
    } else if (theme == "orchid") {
        monet = "#521F16";
    } else if (theme == "moth") {
        monet = "#3D3C46";
    }
}

themes();

// Navbar

$('.menu-icon').click(function() {
	$(this).parent().toggleClass('is-tapped');
	$('#hamburger').toggleClass('open');
	$('#themes_bar').removeClass('open');
});

$('#navclose').click(function() {
	$("#anim").addClass('down');
	var wait = window.setTimeout(function() {
    $("#anim").removeClass('down');
    $("#nav").removeClass('is-tapped');
	$("#hamburger").removeClass('open');
  }, 1000);
});

// Nav Bar Phone Clock
function showNavTime() {
    var date = new Date();
    var h = date.getHours();
    var m = date.getMinutes();
    var d = String(date.getDate()).padStart(2, '0');
	month=mon();
	weekday=week();
    var mm = month[date.getMonth()];
    var day = weekday[date.getDay()];

    if (h == 0) {
        h = 12;
    }

    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;

    var t = h + ":" + m + '\n\n' + day + ', ' + mm + ' ' + d
    document.getElementById("time1").innerText = t;
    setTimeout(showNavTime, 1000);
}

showNavTime();

if (screen.width < 501) {
	onclick_on=false;
} else {
	onclick_on=true;
}

// Background Animation
animation = {
    "particles": {
        "number": {
            "value": 200,
            "density": {
                "enable": true,
                "value_area": 1000
            }
        },
        "color": {
            "value": monet
        },
        "shape": {
            "type": "triangle",
            "stroke": {
                "width": 0,
                "color": monet
            },
            "polygon": {
                "nb_sides": 10
            }
        },
        "opacity": {
            "value": 0.5,
            "random": false,
            "anim": {
                "enable": false,
                "speed": 1,
                "opacity_min": 0.1,
                "sync": false
            }
        },
        "size": {
            "value": 3,
            "random": true,
            "anim": {
                "enable": false,
                "speed": 40,
                "size_min": 0.1,
                "sync": false
            }
        },
        "line_linked": {
            "enable": true,
            "distance": 150,
            "color": monet,
            "opacity": 0.4,
            "width": 1
        },
        "move": {
            "enable": true,
            "speed": 6,
            "direction": "none",
            "random": true,
            "straight": false,
            "out_mode": "out",
            "bounce": true,
            "attract": {
                "enable": true,
                "rotateX": 600,
                "rotateY": 1200
            }
        }
    },
    "interactivity": {
        "detect_on": "window",
        "events": {
            "onhover": {
                "enable": true,
                "mode": "repulse"
            },
            "onclick": {
                "enable": onclick_on,
                "mode": "push"
            },
            "resize": true
        },
        "modes": {
            "grab": {
                "distance": 140,
                "line_linked": {
                    "opacity": 1
                }
            },
            "bubble": {
                "distance": 400,
                "size": 100,
                "duration": 2,
                "opacity": 8,
                "speed": 3
            },
            "repulse": {
                "distance": 100,
                "duration": 0.4
            },
            "push": {
                "particles_nb": 4
            },
            "remove": {
                "particles_nb": 2
            }
        }
    },
    "retina_detect": true
}

function set_theme(x) {
    document.documentElement.setAttribute('theme', x);
    if (x == "lily") {
        monet = "#3c4219";
    } else if (x == "pin") {
        monet = "#54320f";
    } else if (x == "helle") {
        monet = "#452739";
    } else if (x == "orchid") {
        monet = "#521F16";
    } else if (x == "moth") {
        monet = "#3D3C46";
    }
	s=document.getElementsByClassName(x);
	for(var i=0, len=s.length; i<len; i++) {
        s[i].style["border"] = "solid black 3px";
    }
	s1=['lily','pin','helle','orchid','moth'];
	s1.forEach(function (item, index) {
		if (item != x) {
			k=document.getElementsByClassName(item);
			for(var l=0, len=k.length; l<len; l++) {
				k[l].style["border"] = "solid black 1px";
			}
		}
    });
    localStorage.setItem('theme', x);
    $.each(pJSDom[0].pJS.particles.array, function(i, p) {
        pJSDom[0].pJS.particles.array[i].color.value = monet;
        pJSDom[0].pJS.particles.array[i].color.rgb = hexToRgb(monet);
        pJSDom[0].pJS.particles.line_linked.color_rgb_line = hexToRgb(monet);
    });

}

function open_theme(x) {
	if (!$('.sitenavigation').hasClass('is-tapped')) {
		if ($(x).hasClass('open')) {
		$('#anim2').addClass('fadeInUp2');
			var wait = window.setTimeout(function() {
				$(x).removeClass('open');
				$('#anim2').removeClass('fadeInUp2');
			}, 250);
		} else {
			$(x).addClass('open');
		}
	}
}

particlesJS("particles-js", animation);