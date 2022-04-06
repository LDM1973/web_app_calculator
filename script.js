const display = document.querySelector("#display");
const buttons = document.querySelectorAll("button");

buttons.forEach((item) => {
    item.onclick = () => {
        if (item.id == "limpar") {
        display.innerText = "";
        } else if (item.id == "apagar") {
        let string = display.innerText.toString();
        display.innerText = string.substr(0, string.length - 1);
        } else if (display.innerText != "" && item.id == "igual") {
        display.innerText = eval(display.innerText);
        } else if (display.innerText == "" && item.id == "igual") {
        display.innerText = "Está vazio!";
        setTimeout(() => (display.innerText = ""), 2000);
        } else {
        display.innerText += item.id;
        }
    };
});

const themeToggleBtn = document.querySelector(".theme-toggler");
const calculator = document.querySelector(".calculadora");
const body = document.querySelector(".body");
const toggleIcon = document.querySelector(".toggler-icon");
let isDark = true;
themeToggleBtn.onclick = () => {
    calculator.classList.toggle("dark");
    body.classList.toggle("dark");
    themeToggleBtn.classList.toggle("active");
    isDark = !isDark;
};
