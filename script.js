let startTime;
let elapsedTime = 0;
let timerInterval;
const lapsList = document.getElementById("lapsList");
const display = document.getElementById("display");

function timeToString(time) {
    let diffInHrs = time / 3600000;
    let hh = Math.floor(diffInHrs);

    let diffInMin = (diffInHrs - hh) * 60;
    let mm = Math.floor(diffInMin);

    let diffInSec = (diffInMin - mm) * 60;
    let ss = Math.floor(diffInSec);

    let ms = Math.floor((time % 1000) / 10);

    let formattedMM = mm.toString().padStart(2, "0");
    let formattedSS = ss.toString().padStart(2, "0");
    let formattedMS = ms.toString().padStart(2, "0");

    return `${formattedMM}:${formattedSS}:${formattedMS}`;
}

function start() {
    clearInterval(timerInterval); // Avoid double-speed timers
    startTime = Date.now() - elapsedTime;
    timerInterval = setInterval(() => {
        elapsedTime = Date.now() - startTime;
        display.innerHTML = timeToString(elapsedTime);
    }, 10);
}

function pause() {
    clearInterval(timerInterval);
}

function reset() {
    clearInterval(timerInterval);
    elapsedTime = 0;
    display.innerHTML = "00:00:00";
    lapsList.innerHTML = "";
}

function lap() {
    if (elapsedTime > 0) {
        const li = document.createElement("li");
        const lapNumber = lapsList.childElementCount + 1;
        li.innerHTML = `
            <span style="color: #94a3b8">LAP ${lapNumber}</span>
            <span style="font-weight: bold">${timeToString(elapsedTime)}</span>
        `;
        lapsList.prepend(li);
    }
}