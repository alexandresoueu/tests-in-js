var expect = require('chai').expect
var calc = require('../src/calculator.js')

describe("Calculator", function() {
    describe("Smoke test to methods", function() {

        it("should exist the calculator lib", function() {
            expect(calc).to.exist
        })

        it("should exist the method sum", function() {
            expect(calc.sum).to.exist
            expect(calc.sum).to.be.a('function')
        })

        it("should exist the method subtraction", function() {
            expect(calc.sub).to.exist
            expect(calc.sub).to.be.a('function')
        })

        it("should exist the method multiplication", function() {
            expect(calc.multi).to.exist
            expect(calc.multi).to.be.a('function')
        })

        it("should exist the method division", function() {
            expect(calc.div).to.exist
            expect(calc.div).to.be.a('function')
        })
    })

    describe("Calculator sum", function() {
        it("should return 2 when sum 1 + 1", function() {
            expect(calc.sum(1, 1)).to.be.equal(2)
        })
    })

    describe("Calculator subtraction", function() {
        it("should return 5 when subtraction 10 - 5", function() {
            expect(calc.sub(10, 5)).to.be.equal(5)
        })
    })

    describe("Calculator division", function() {
        it("should return 10 when division 100 / 10", function() {
            expect(calc.div(100, 10)).to.be.equal(10)
        })

        it("Don`t is divisible to zero", function() {
            expect(calc.div(3, 0)).to.be.equal('Zero is not divisible!')
        })
    })

    describe("Calculator multiplication", function() {
        it("should return 50 when mutliplication 5 * 10", function() {
            expect(calc.multi(5, 10)).to.be.equal(50)
        })
    })
})