const fibonacci = function(num) {
    if (num < 0) return "OOPS";

    let limit = num;
    if (typeof num === 'string') limit = parseInt(num);
    if (limit === 0) return 0;

    let fib = 1;
    let [nMinus1, nMinus2] = [1, 1];
    console.log(nMinus1, nMinus2)

    for (let i = 2; i < limit; i++) {
        nMinus2 = nMinus1;
        nMinus1 = fib;
        fib = nMinus1 + nMinus2;
        //console.log(fib)
    }

    return fib;

};

// Do not edit below this line
module.exports = fibonacci;
