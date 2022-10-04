const experience = [
    {
        img: "images/kle.png",
        shortname: 'KLE Tech',
        name: 'KLE Technological University',
        year: '2021-2025',
        type: 'Graduation',
        did: 'B.Tech Computer Science',
        id: 'college',
    },
    {
        img: "images/sss10.png",
        shortname: 'BSP SSS X',
        type: 'High School',
        did: 'PCM, Computer Science',
        year: '2017-2021',
        id: 'bspsss10',
        name: 'BSP Senior Secondary Sector X',
    },
    {
        img: "images/emms9.png",
        shortname: 'BSP EMMS IX',
        name: 'BSP EMMS IX',
        did: 'Middle School',
        type: 'Middle School',
        year: '2013-2016',
        id: 'emms9',
    },
    {
        img: "images/dps.png",
        shortname: 'DPS DURG',
        name: 'Dehli Public School Durg',
        year: '2008-2012',
        type: 'Primary School',
        did: 'Primary School',
        id: 'dpsdurg',
    },
];


$.each(experience, function(x, y) {
    var dat = ""
    dat += '<div onclick="set(this.id,' + x + ')" id="' + experience[x]['id'] + '" class="info ' + experience[x]['id'] + '">';
    dat += '<div class="info_type">' + experience[x]['type'] + '</div>';
    dat += '<div class="close">';
    dat += '<div class="info_name">' + experience[x]['name'] + '</div>';
    dat += '<div class="info_did">' + experience[x]['did'] + '</div>';
    dat += '<div class="info_year">Year: ' + experience[x]['year'] + '</div>';
    dat += '</div></div>';
    $('#exper').append(dat);
});

$.each(experience, function(x, y) {
    var dat = ""
    dat += '<div  class="info1">';
    dat += '<img src="' + experience[x]['img'] + '" style="width: 100px; height:100px; position:absolute; margin-top: 15px;">';
    dat += '<br><div class="text" ><div class="text1" >' + experience[x]['type'] + '</div>';
    dat += '<div class="text2">' + experience[x]['name'] + '</div>';
    dat += '<div class="text2">' + experience[x]['did'] + '</div>';
    dat += '<div class="text2">Year: ' + experience[x]['year'] + '</div>';
    dat += '</div></div>';
    $('#main').append(dat);
});

var num = 0;
var paused = 0;
var ep = experience.length - 1;
exp();

function exp() {
    if (paused == 0) {
        if (!$("#player").hasClass('player_anim')) {
            add_anim()
        } else {
            $("#player").removeClass('player_anim');
            setTimeout(add_anim, 50);
        }
    }

    $("#name").empty().append(experience[num]['shortname']);
    $("#year").empty().append(experience[num]['type']);
    change(experience[num]['id']);
    var classes = document.getElementsByClassName('music_image');
    for (var i = 0; i < classes.length; i++) {
        classes[i].style.backgroundImage = "url(" + experience[num]['img'] + ")";
    }
    short_name = experience[num]['shortname'];
}

function add() {
    if (num == ep) {
        num = 0;
    } else {
        num = num + 1;
    }
};

function sub() {
    if (num == 0) {
        num = ep;
    } else {
        num = num - 1;
    }
};

function remove_anim() {
    add();
    $("#player").removeClass('player_anim');
};

function add_anim() {
    $("#player").addClass('player_anim');
}

function controls(x) {
    if (x == 1) {
        add();
    } else {
        sub();
    }
    exp();
    if (paused == 0) {
        clearInterval(interval);
        clearInterval(interval1);
        interval = setInterval(exp, 20000);
        interval1 = setInterval(remove_anim, 19900);
    }
}

function pause(x) {
    if ($(x).hasClass('fa-pause')) {
        paused = 1;
        $(x).removeClass('fa-pause');
        $(x).addClass('fa-play');
        $("#player").removeClass('player_anim');
        clearInterval(interval);
        clearInterval(interval1);
    } else {
        paused = 0;
        $(x).removeClass('fa-play');
        $(x).addClass('fa-pause');
        exp();
        clearInterval(interval);
        clearInterval(interval1);
        interval = setInterval(exp, 20000);
        interval1 = setInterval(remove_anim, 19900);
    }
}

var interval = setInterval(exp, 20000);
var interval1 = setInterval(remove_anim, 19900);

function set(x, y) {
    num = y;
    sub();
    controls(1);
    change(x);
}

function change(a) {
    var classes = document.getElementsByClassName('info');
    for (var i = 0; i < classes.length; i++) {
        classes[i].classList.remove("open");
        classes[i].classList.remove("full");
    }
    $('.' + a).addClass('full');
    $('.' + a).addClass("open_anim");
    $('.' + a).addClass("open");
    var wait = window.setTimeout(function() {
        $('.' + a).removeClass("open_anim");
    }, 1000);
}

//Clock
function showTime() {
    var date = new Date();
    var h = date.getHours();
    var m = date.getMinutes();
    var d = String(date.getDate()).padStart(2, '0');
    month = mon();
    weekday = week();
    var mm = month[date.getMonth()];
    var day = weekday[date.getDay()];

    if (h == 0) {
        h = 12;
    }

    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;


    if (screen.width <= 500) {
        var t = day + ', ' + d + ' ' + mm + '<br><i class="fas fa-music"></i> ' + short_name + ' <i class="fas fa-music"></i>'
    } else {
        var t = day + ', ' + d + ' ' + mm
    }
    var time = h + '\n' + m
    //document.getElementById("day").innerText = t;
    $('#day').empty().append(t)
    document.getElementById("time").innerText = time;
    setTimeout(showTime, 1000);
}

showTime();