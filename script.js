const exchangeRates = {
    USD: {
        USD: 1,
        EUR: 1.11,
        UZS: 12700
    },
    EUR: {
        USD: 0.90,
        EUR: 1,
        UZS: 14140
    },
    UZS: {
        USD: 0.71,
        EUR: 0.78,
        UZS: 1
    }
};

document.getElementById('convert').addEventListener('click', function() {
    const amount = parseFloat(document.getElementById('amount').value);
    const fromCurrency = document.getElementById('fromCurrency').value;
    const toCurrency = document.getElementById('toCurrency').value;

    if (amount === '' || isNaN(amount)) {
        alert('Enter an amount');
        return;
    }

    const rate = exchangeRates[fromCurrency][toCurrency];
    const result = amount * rate;

    document.getElementById('result').textContent = `${amount} ${fromCurrency} = ${result.toFixed(2)} ${toCurrency}`;
});
