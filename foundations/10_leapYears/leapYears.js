const leapYears = function(year) {
    isDivisibleBy4 = year % 4 === 0;
    isDivisibleBy400 = year % 400 === 0;
    isDivisibleBy100 = year % 100 === 0;

    return isDivisibleBy4 && !(isDivisibleBy100 && !isDivisibleBy400);
};

// Do not edit below this line
module.exports = leapYears;
