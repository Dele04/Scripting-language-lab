function eurToUsd(eur, rate) {
    return eur * rate;
}

function usdToEur(usd, rate) {
    return usd / rate;
}

function currencyConverter() {
    let resultDiv = document.getElementById("result");

    //Get user input for amount and currency type
    let amount = parseFloat(prompt("Enter amount: "));

    let typeInput = prompt("Enter source currency type (EUR or USD): ");
    if (typeInput === null)
    return;

    let type = typeInput.toUpperCase();

    if (isNaN(amount) || amount < 0) {
        resultDiv.textContent = "Please enter a valid positive number for the amount.";
        return;
    }

    const exchangeRate = 1.16;

    if (type === "EUR" || type === "USD") {
        let convertedAmount;

        if (type === "EUR") {
            convertedAmount = eurToUsd(amount, exchangeRate);
        } else {
            convertedAmount = usdToEur(amount, exchangeRate);
        }

        let targetUnit = (type === "EUR" ? "USD" : "EUR");
        let sourceSymbol = (type === "EUR" ? "€" : "$");
        let targetSymbol = (targetUnit === "EUR" ? "€" : "$");

        //results
        resultDiv.textContent = `${sourceSymbol}${amount.toFixed(2)} ${type} is equal to ${targetSymbol}${convertedAmount.toFixed(2)} ${targetUnit}`;
    } else {
        resultDiv.textContent = "Invalid currency type. Please enter 'EUR' or 'USD'.";
    }
}
