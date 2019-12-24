import { expect } from 'chai'
import { sum, sub, div, multi } from '../src/calculator.js'

describe("Calculator", () => {
    describe("Smoke test to methods", () => {

        it("should exist the method sum", () => {
            expect(sum).to.exist
            expect(sum).to.be.a('function')
        })

        it("should exist the method subtraction", () => {
            expect(sub).to.exist
            expect(sub).to.be.a('function')
        })

        it("should exist the method multiplication", () => {
            expect(multi).to.exist
            expect(multi).to.be.a('function')
        })

        it("should exist the method division", () => {
            expect(div).to.exist
            expect(div).to.be.a('function')
        })
    })

    describe("Calculator sum", () => {
        it("should return 2 when sum 1 + 1", () => {
            expect(sum(1, 1)).to.be.equal(2)
        })
    })

    describe("Calculator subtraction", () => {
        it("should return 5 when subtraction 10 - 5", () => {
            expect(sub(10, 5)).to.be.equal(5)
        })
    })

    describe("Calculator division", () => {
        it("should return 10 when division 100 / 10", () => {
            expect(div(100, 10)).to.be.equal(10)
        })

        it("Don`t is divisible to zero", () => {
            expect(div(3, 0)).to.be.equal('Zero is not divisible!')
        })
    })

    describe("Calculator multiplication", () => {
        it("should return 50 when mutliplication 5 * 10", () => {
            expect(multi(5, 10)).to.be.equal(50)
        })
    })
})