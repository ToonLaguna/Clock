function currentTime() {
    var date = new Date();
    var hour = date.getHours();
    var min = date.getMinutes();
    var sec = date.getSeconds();
    var midday = "AM";
    midday = (hour >= 12) ? "PM" : "AM";
    hour = (hour == 0) ? 12 : ((hour > 12) ? (hour - 12): hour);
    hour = updateTime(hour);
    min = updateTime(min);
    sec = updateTime(sec);
    document.getElementById("clock").innerText = hour + " : " + min + " : " + sec + " " + midday;
    var t = setTimeout(currentTime, 1000);
}

function currentTime12() {
    var date = new Date();
    var hour = date.getHours();
    var min = date.getMinutes();
    var sec = date.getSeconds();

    hour = updateTime(hour);
    min = updateTime(min);
    sec = updateTime(sec);

    document.getElementById("clock12").innerText = hour + " : " + min + " : " + sec + " ";
    var t = setTimeout(function(){ currentTime12() }, 1000);
}

function updateTime(k) {
    if (k < 10) {
    return "0" + k;
    }
    else {
    return k;
    }
}

currentTime();
currentTime12();