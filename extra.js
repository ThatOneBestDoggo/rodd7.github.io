//displays UTC Time
function liveTime() {
    setTimeout(function () {
        const d = new Date();
        const n = d.toLocaleTimeString();
        document.getElementById("utcTime").innerHTML = n;
        liveTime();
    }, 1000)
}
liveTime();