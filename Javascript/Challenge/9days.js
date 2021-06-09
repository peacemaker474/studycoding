const form = document.querySelector("form");
const h2 = document.querySelector("h2");
const h4 = document.querySelector("h4");
const p = form.querySelector("p");
const inputRange = document.querySelector("#jsRange");
const inputNumber = form.querySelector("#jsNumber");
const button = form.querySelector("#jsSubmit");

h2.innerText = `Generate a number between 0 and ${inputRange.value}`;

const handleMyNumber = (event) => {
    inputNumber.value = event.target.value;
}

const handleRandomNumber = () => {
    const randomNumber = Math.round(Math.random() * inputRange.value);
    button.value = randomNumber;
}

const handleForm = (event) => {
    event.preventDefault();
    p.innerText = `You chose: ${inputNumber.value}, the machince chose: ${button.value}`;
    if (parseInt(inputNumber.value) > parseInt(button.value)){
        h4.innerText = "You Win!"
    } else {
        h4.innerText = "You lost!"
    }
}

const handleRange = (event) => {
    const currentValue = event.target.value;
    console.log(event.target.min);
    h2.innerText = `Generate a number between 0 and ${currentValue}`;
}

inputRange.addEventListener("input", handleRange);
inputNumber.addEventListener("change", handleMyNumber);
button.addEventListener("click", handleRandomNumber);
form.addEventListener("submit", handleForm);