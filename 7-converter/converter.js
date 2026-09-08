function currencyConverter (amount, fromCurrency, toCurrency) {

    switch (fromCurrency) {
        case 'рубли': 
            if (toCurrency === 'доллары') {
                return amount / 80;
            } else if (toCurrency === 'евро') {
                return amount / 100;
            } else {
                return 'Некорректная значение валюты';
            }
        case 'доллары': 
                if (toCurrency === 'рубли') {
                    return amount * 80;
                } else if (toCurrency === 'евро') {
                    return amount * 0.8;
                } else {
                    return 'Некорректная значение валюты';
                }
        case 'евро': 
                if (toCurrency === 'рубли') {
                    return amount * 100;
                } else if (toCurrency === 'доллары') {
                    return amount * 1.25;
                } else {
                    return 'Некорректная значение валюты';
                }
        default: return 'Некорретные входные данные';
    }
}

console.log(currencyConverter(300, 'рубли', 'евро'))
console.log(currencyConverter(240, 'рубли', 'доллары'))
console.log(currencyConverter(5, 'доллары', 'рубли'))
console.log(currencyConverter(10, 'доллары', 'евро'))
console.log(currencyConverter(7, 'евро', 'рубли'))
console.log(currencyConverter(8, 'евро', 'доллары'))