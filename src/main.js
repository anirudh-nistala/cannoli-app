import "../style.css";

const app = document.getElementById("app");
app.innerHTML = `<div>Solving!</div>`;

const button = document.getElementById("solve-button");
button.addEventListener("click", () => {
    let myString = "Solving all your problems :)";
    app.innerHTML = `${myString}`;
});
