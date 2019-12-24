import { expect } from 'chai'
import fizzBuzz from '../src/fizzBuzz.js'
/**
 * Challenge FizzBuzz
 * 
 * escreva uma lib que receba um numero e:
 * 
 * se o numero for divisivel por 3, no lugar do numero escreva Fizz
 * se o numero for divisivel por 5, no lugar do numero escreva Buzz
 * se o numero for divisivel por 3 e 5, no lugar do numero escreva FizzBuzz
 * se nao for multiplo de nada escreva o numero
 * 
 */

 describe.only("Challenge FizzBuzz", () => {

    it("should return Fizz when to multiple of 3", () => {
        expect(fizzBuzz(3)).to.be.equal('Fizz')
    })

    it("should return Buzz when to multiple of 5", () => {
        expect(fizzBuzz(5)).to.be.equal('Buzz')
    })

    it("should return FizzBuzz when to multiple of 3 and 5", () => {
        expect(fizzBuzz(15)).to.be.equal('FizzBuzz')
    })

    it("should return the number when non-multiple", () => {
        expect(fizzBuzz(7)).to.be.equal(7)
    })
 })