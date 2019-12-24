var expect = require('chai').expect

describe("Example Test", function() {
    var arr = []
    //Hooks
    before(function() {
        //run once time
        // start connection in database
        // create data set 
    })
    after(function() {
        //run once time
        // end connection in database
        // clear data set
    })

    beforeEach(function() {
        // run all time before each block
        arr = [1, 2, 3]
    })

    afterEach(function() {
        // run all time after each block
    })

    it("should be an array", function() {
        expect(arr).to.be.an('array')
    })

    it("should have a size of 4 when push another value to the array", function() {
        arr.push(4)
        expect(arr).to.have.length(4)
    })
    
    it("should have a size of 2 when pop a value from the array", function() {
        arr.pop()
        expect(arr).to.have.length(2)
    })

    it("should remove the value 3 when use pop the array", function() {
        arr.pop()
        expect(arr).to.not.include(3)
    })

    it("should return true when pop 3 from the array", function() {
        expect(arr.pop() === 3).to.be.true
    })
})