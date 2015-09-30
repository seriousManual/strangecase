# sTraNGECaSe

Formats a given strings casing probabilistic by a given weight:

````
var sc = require('strangecase')

console.log(sc('strangecase')) //yields 'sTraNGECaSe'
console.log(sc('strangecase'), 0.3) //yields 'sTraNGECaSe'
console.log(sc('strangecase'), 0.7) //yields 'stranGeCase'
````