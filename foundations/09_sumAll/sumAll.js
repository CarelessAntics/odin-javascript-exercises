const sumAll = function(a, b) {
    isNum = typeof a === 'number' && typeof b === 'number';
    isPos = a >= 0 && b >= 0;
    isInt = Number.isInteger(a) && Number.isInteger(b);
    
    if (!isNum || !isPos || !isInt) return "ERROR";

    let start = a;
    let end = b;

    // Make sure we're going always in the positive direction
    if (b < a) {
        [start, end] = [end, start];
    }

    let length = end - start + 1;
    let result = Array(length).keys()
                .map(n => n + start)
                .reduce((sum, n) => sum + n, 0);
    
    console.log(result)
    return result;
};

// Do not edit below this line
module.exports = sumAll;
