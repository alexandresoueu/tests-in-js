describe("Main", function() {
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

    it("should have a size of 4 when push another value to the array", function() {
        arr.push(4)
        console.log('size array: ', arr.length)
    })
    
    it("should have a size of 2 when pop a value from the array", function() {
        arr.pop()
        console.log('size array: ', arr.length)
    })

    it("should remove the value 3 when use pop the array", function() {
        console.log(arr.pop() === 3)
    })
})