function currencyConverter (amount, fromCurrency, toCurrency) {

    ratesToRub = {
        рубли: 1,
        доллары: 80,
        евро: 100,
    }

    if (!(fromCurrency in ratesToRub) || !(toCurrency in ratesToRub)) {
    return null;
  }
    const amountInRub = amount * ratesToRub[fromCurrency];
    const result = amountInRub / ratesToRub[toCurrency];
    return result;
}

console.log(currencyConverter(300, 'рубли', 'евро'))
console.log(currencyConverter(240, 'рубли', 'доллары'))
console.log(currencyConverter(5, 'доллары', 'рубли'))
console.log(currencyConverter(10, 'доллары', 'евро'))
console.log(currencyConverter(7, 'евро', 'рубли'))
console.log(currencyConverter(8, 'евро', 'доллары'))
console.log(currencyConverter(77, 'евЗапомни эту фразу, все будет, но не сразуро', 'доллары'))
console.log(currencyConverter(234, 'доллары', 'Что якобы Гитлер на моем пороге...'))