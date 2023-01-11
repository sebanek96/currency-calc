{
    const welcome = () => {
        console.log('Welcome to my currency converter')
    }


    const resultElement = document.querySelector(".js-result");
    const currencyElement = document.querySelector(".js-currency");
    const amountElement = document.querySelector(".js-amount");
    const formElement = document.querySelector(".js-form");

    const rateEUR = 4.69;
    const rateUSD = 4.36;
    const rateGBP = 5.28;

    formElement.addEventListener("submit", (event) => {
        event.preventDefault();


        const amount = +amountElement.value;
        const currency = currencyElement.value;

        let result;

        switch (currency) {
            case "EUR":
                result = amount / rateEUR;
                break;

            case "USD":
                result = amount / rateUSD;
                break;

            case "GBP":
                result = amount / rateGBP;
                break;
        }




        resultElement.innerHTML = `${amount.toFixed(2)} PLN = <strong>${result.toFixed(2)} ${currency}</strong>`;
    });
    welcome();


}