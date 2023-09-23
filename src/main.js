import "../style.css";

const app = document.getElementById("app");
app.innerHTML = `<div>Solving!</div>`;


function generateString() {
    let myString = "Solving all your problems :)";
    app.innerHTML = `${myString}`;
}
const button = document.getElementById("solve-button");
button.addEventListener("click", generateString);
