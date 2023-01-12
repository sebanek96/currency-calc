{
    const welcome = () => {
        console.log('Welcome to my currency converter')
    }



    const calculateResult = (amount, currency) => {

        const rateEUR = 4.69;
        const rateUSD = 4.36;
        const rateGBP = 5.28;

        switch (amount, currency) {
            case "EUR":
                return amount / rateEUR;

            case "USD":
                return amount / rateUSD;


            case "GBP":
                return amount / rateGBP;
        }
    };

    const onFormSubmit = (event) => {
        event.preventDefault();

        const resultElement = document.querySelector(".js-result");
        const currencyElement = document.querySelector(".js-currency");
        const amountElement = document.querySelector(".js-amount");

        const amount = +amountElement.value;
        const currency = currencyElement.value;

        const result = calculateResult(amount, currency);

        resultElement.innerHTML = `${amount.toFixed(2)} PLN = <strong>${result.toFixed(2)} ${currency}</strong>`;
    }

    const init = () => {
        const formElement = document.querySelector(".js-form");

        formElement.addEventListener("submit", onFormSubmit);
        welcome();
    }
    init();
}