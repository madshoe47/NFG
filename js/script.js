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