const Earth = require('./Earth.js')
console.log(Earth);

const allData = Earth.getData()
console.log("allData:", allData)

const allGermany = Earth.getData("Germany");
console.log("allGermany:", allGermany);

const germanHDI = Earth.getData("Germany", "hdi");
console.log("germanHDI:", germanHDI);

const germanCurrencySymbol = Earth.getData("Germany", "currency").substr(-1)

console.log("germanCurrencySymbol:", germanCurrencySymbol)
