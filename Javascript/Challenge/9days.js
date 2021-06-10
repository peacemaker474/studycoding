const form = document.querySelector("form");
const h2 = document.querySelector("h2");
const h4 = document.querySelector(".results");
const contents = document.querySelector(".contents");
const inputRange = document.querySelector("#jsRange");
const inputNumber = form.querySelector("#jsNumber");
const button = form.querySelector("#jsSubmit");

const handleSubmit = (event) => {
    event.preventDefault();
    const randomNumber = Math.round(Math.random() * inputRange.value);
    const newNumber = parseInt(inputNumber.value);
    
    // html 상에 있는 value값을 가지고 올 때는 string 형식임.

    contents.innerText = `You chose ${newNumber}, the machine chose: ${randomNumber}.`;


    if(newNumber === randomNumber) {
        h4.innerText = `Draw! again!`;
    } else if (newNumber > randomNumber) {
        h4.innerText = `You Win!`
    } else {
        h4.innerText = `You lost!`
    }
};

const handleRange = (event) => {
    const currentValue = event.target.value;
    inputRange.value = currentValue;
    h2.innerText = `Generate a number between 0 and ${currentValue}`;

    // real time으로 하고 싶을 시 addEventListener에서 input을 활용하면 됩니다.
};

function init () {
    h2.innerText = `Generate a number between 0 and ${inputRange.value}`;
    inputRange.addEventListener("change", handleRange);
    form.addEventListener("submit", handleSubmit);
}

init();
