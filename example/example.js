var strangeCase = require('../index');

var testText = 'this is a very long test that should test.'

console.log(strangeCase(testText))
console.log(strangeCase(testText, 0.1))
console.log(strangeCase(testText, 0.6))
console.log(strangeCase(testText, 0.8))