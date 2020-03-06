/* ********************* Counter UP of Project Work Script****************************/
$('.count').counterUp({
    delay: 10,
    time: 3000
});

/* ***************** Timing Script ************************* */
function updateTimer(deadline) {
    var time = deadline - new Date();
    return {
        'days': Math.floor(time / (1000 * 60 * 60 * 24) % 7),
        'hours': Math.floor((time / (1000 * 60 * 60)) % 24),
        'minutes': Math.floor(((time / 1000 / 60) % 60) + 1),
        'seconds': Math.floor(((time / 1000) % 60) + 1),
        'total': time
    };
}
function animateClock(span) {
    span.className = "turn";
    setTimeout(function () {
        span.className = "";
    }, 700);
}
function startTimer(id, deadline) {
    var timerInterval = setInterval(function () {
        var clock = document.getElementById(id);
        var timer = updateTimer(deadline);

        clock.innerHTML = '<span>' + timer.days + '</span>' +
            '<span>' + timer.hours + '</span>' +
            '<span>' + timer.minutes + '</span>' +
            '<span>' + timer.seconds + '</span>';
        var spans = clock.getElementByTagName("span");
        animateClock(spans[3]);

        if (timer.seconds == 59) animateClock(spans[2]);
        if (timer.minutes == 59 && timer.seconds == 59) animateClock(spans[1]);
        if (timer.hours == 23 && timer.minutes == 59 && timer.seconds == 59) animateClock(spans[0]);
        if (timer.total < 1) {
            clearInterval(timerInterval);
            clock.innerHTML = '<span>0</span><span>0</span><span>0</span><span>0</span>';
        }
    }, 1000);
}
window.onload = function () {
    var deadline = new Date("April 25,2016 17:15:00");
    startTimer("clock", deadline);
};

/*******************************Footer Scroll Top Script********************/
mybutton = document.getElementById("myBtn");
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}