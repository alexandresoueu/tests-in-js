
module.exports = {
    sum: function(a, b) { return a + b },
    sub: function(a, b) { return a - b },
    multi: function(a, b) { return a * b },
    div: function(a, b) { 
        return (b === 0) ? 'Zero is not divisible!' : a / b 
    }
}

