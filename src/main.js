import "../style.css";

const app = document.getElementById("app");
app.innerHTML = `<div>Solving!</div>`;

const button = document.getElementById("solve-button");
button.addEventListener("click", () => {
    let myString = "Solving all your problems :)";
    app.innerHTML = `${myString}`;
});

let timerInterval;
let seconds = 0;

function startTimer() {
    clearInterval(timerInterval);
    seconds = 0;
    timerInterval = setInterval(updateTimer, 1000); // Update the timer every second (1000 milliseconds)

    // Automatically stop the timer after 60 seconds (1 minute)
    setTimeout(stopTimer, 60000); // 60,000 milliseconds = 60 seconds
}

function updateTimer() {
    seconds++;
    timer.innerHTML = `Timer: ${seconds} seconds`;
}

function stopTimer() {
    clearInterval(timerInterval);
}

const buttonStart = document.getElementById("start-button");
buttonStart.addEventListener("click", startTimer);

const buttonStop = document.getElementById("stop-button");
buttonStop.addEventListener("click", stopTimer);
