var expect = require('chai').expect
var isuc = require('is-upper-case')

var sc = require('../');

function analyze(str) {
    return str
        .split('')
        .reduce(function(carry, value) {
            if (isuc(value)) {
                carry[0]++
            } else {
                carry[1]++
            }

            return carry;
        }, [0, 0])
}

describe('strangecase', function() {
    describe('default', function() {
        var a = analyze(sc('foobar foobar foobar'));

        it('should case with weight 0.5', function() {
            expect(a[0]).to.be.within(7, 14)
            expect(a[1]).to.be.within(7, 14)
        })
    })

    describe('weighted', function() {
        var a = analyze(sc('foobarfoobarfoobar', 0.999));

        it('should case according to weight', function() {
            expect(a[0]).to.equal(0)
            expect(a[1]).to.equal(18)
        })
    })

    describe('weighted', function() {
        var a = analyze(sc('foobarfoobarfoobar', 0.00001));

        it('should case according to weight', function() {
            expect(a[0]).to.equal(18)
            expect(a[1]).to.equal(0)
        })
    })
})