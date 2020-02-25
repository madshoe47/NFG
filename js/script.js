window.onscroll = function () {
    myFunction()
};

function myFunction() {
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrolled = (winScroll / height) * 100;
    document.getElementById("progressbar").style.height = scrolled + "%";
}

//autoplay frontpage video
var vid = document.getElementById("reelVideo");
vid.autoplay = true;
vid.load();

document.getElementById('eu').addEventListener('click', function () {
    document.querySelector('.bg-modal').style.display = 'flex';
});

document.querySelector('.close').addEventListener('click', function () {
    document.querySelector('.bg-modal').style.display = 'none';
});


document.getElementById('NA').addEventListener('click', function () {
    document.querySelector('.bg-modal2').style.display = 'flex';
});

document.querySelector('.close2').addEventListener('click', function () {
    document.querySelector('.bg-modal2').style.display = 'none';
});


document.getElementById('SA').addEventListener('click', function () {
    document.querySelector('.bg-modal3').style.display = 'flex';
});

document.querySelector('.close3').addEventListener('click', function () {
    document.querySelector('.bg-modal3').style.display = 'none';
});


document.getElementById('af').addEventListener('click', function () {
    document.querySelector('.bg-modal4').style.display = 'flex';
});

document.querySelector('.close4').addEventListener('click', function () {
    document.querySelector('.bg-modal4').style.display = 'none';
});


document.getElementById('as').addEventListener('click', function () {
    document.querySelector('.bg-modal5').style.display = 'flex';
});

document.querySelector('.close5').addEventListener('click', function () {
    document.querySelector('.bg-modal5').style.display = 'none';
});

document.getElementById('au').addEventListener('click', function () {
    document.querySelector('.bg-modal6').style.display = 'flex';
});

document.querySelector('.close6').addEventListener('click', function () {
    document.querySelector('.bg-modal6').style.display = 'none';
});


document.getElementById("play").onclick = function () {
    var audio = document.getElementById("audio");
    if (audio.paused == false) {
        audio.pause();
    } else {
        audio.play();
    }
};

var video1 = document.getElementById("mapVideo");
video1.autoplay = true;
video1.load();



function gaaFremad() {
    if (billedIndeks < billedliste.length - 1) {
        billedIndeks++;
    } else {
        billedIndeks = 0;
    }

    document.getElementById("slidebillede").src = billedliste[billedIndeks];
}

function gaaTilbage() {
    if (billedIndeks > 0) {
        billedIndeks--;
    } else {
        billedIndeks = 5;
    }

    document.getElementById("slidebillede").src = billedliste[billedIndeks];
}

// ------- Hovedprogram ---------
const billedliste = ["../images/butikken.png", "../images/billede1.png", "../images/billede2.png", "../images/billede3.png", "../images/billede4.png", "../images/billede5.png"];
let billedIndeks = 0;

document.getElementById("frem").addEventListener("click", function () {
    gaaFremad();
})

document.getElementById("tilbage").addEventListener("click", function () {
    gaaTilbage();
})
