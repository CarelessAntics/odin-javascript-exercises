const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(arr) {
	return arr.reduce((sum, num) => sum + num, 0);
};

const multiply = function(arr) {
  return arr.reduce((product, num) => product * num, 1);
};

const power = function(base, exp) {
	return base ** exp;
};

const factorial = function(num) {
	// Create an array of sequential numbers
  const arr = Array(num).keys().map(n => n + 1)
  return multiply(arr);
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
