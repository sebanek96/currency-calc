let resultElement = document.querySelector(".js-result");
let formElement = document.querySelector(".js-form");
let wantGetElement = document.querySelector(".js-wantGet");
let amountElement = document.querySelector(".js-amount");

document.addEventListener("submit", (event) => {
    event.preventDefault();


    let amount = amountElement.value;
    let wantGet = wantGetElement.value;

    let result = amount / wantGet;

    resultElement.innerText = result.toFixed(2);
});

