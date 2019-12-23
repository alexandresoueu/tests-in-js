describe("Main", function() {
    //Hooks
    before(function() {
        //run once time
        console.log("BEGINNNNNNN BEFORE")
    })
    after(function() {
        //run once time
        console.log("ENDDDDDDDDDD AFTER")
    })

    beforeEach(function() {
        // run all time before each block
        console.log("********** BEACH")
    })

    afterEach(function() {
        // run all time after each block
        console.log("@@@@@@@@@ AFEACH")
    })

    it("CASE 1", function() {
        console.log("ONEEEE CASE BRO")
    })
    
    it("CASE 2", function() {
        console.log("TWO CASE BRAAAA")
    })
})