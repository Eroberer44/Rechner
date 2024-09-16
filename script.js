const exchangeRates = {
    USD: {
        USD: 1,
        EUR: 1.11,
        UZS: 12.700
    },
    EUR: {
        USD: 1.11,
        EUR: 1,
        UZS: 14.140
    },
    UZS: {
        USD: 0.71,
        EUR: 0.78,
        UZS: 1
    }
};

document.getElementById('convert').addEventListener('click', function() {
    const amount = document.getElementById('amount').value;
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
