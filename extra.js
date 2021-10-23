//displays UTC Time
$(document).ready(function () {
    startTime();
});

function startTime() {
    var today = new Date(); //-11 hrs
    globalThis.uMonths = today.getUTCMonth() + 1; // 1 for January, 2 for February, 3 for March, and so on
    globalThis.uDays = today.getUTCDay(); // 1 for Monday, 2 for Tuesday, and so on.
    globalThis.uDates = today.getUTCDate(); // ranging from 1 to 31
    globalThis.uHours = today.getUTCHours();
    globalThis.uMinutes = today.getUTCMinutes();
    globalThis.uSeconds = today.getUTCSeconds();

    // add a zero in front of numbers<10
    uMinutes = addZero(uMinutes);
    uSeconds = addZero(uSeconds);
    document.getElementById('utcTime').innerHTML = uHours + ":" + uMinutes + ":" + uSeconds;
    t = setTimeout(function () { startTime() }, 500);
}

function addZero(x) {
    if (x < 10) {
        x = "0" + x;
    }
    return x;
}