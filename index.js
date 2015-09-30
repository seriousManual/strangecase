function strangeCase(text, probability) {
    probability = probability || 0.5
    probability = Math.max(Math.min(probability, 1), 0)

    return text
        .split('')
        .map(function(letter) {
            return Math.random() > probability ? letter.toUpperCase() : letter.toLowerCase()
        })
        .join('')
}

module.exports = strangeCase;