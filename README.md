# sTraNGECaSe [![Build Status](https://travis-ci.org/seriousManual/strangecase.png)](https://travis-ci.org/seriousManual/strangecase)

Formats a given strings casing probabilistic by a given weight:

````javascript
var sc = require('strangecase')

console.log(sc('strangecase')) //yields 'sTraNGECaSe'
console.log(sc('strangecase'), 0.3) //yields 'sTraNGECaSe'
console.log(sc('strangecase'), 0.7) //yields 'stranGeCase'
````