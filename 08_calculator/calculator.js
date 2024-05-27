const add = function(x, y) {
	return x + y;
};

const subtract = function(x, y) {
	return x - y;
};

const sum = function(array) {
	let result = 0;
  array.forEach(element => {
    result += element;
  });

  return result;
};

const multiply = function(array) {
  return array.reduce((total, current) => total * current)
};

const power = function(x, y) {
	return x ** y;
};

const factorial = function(x) {
	let result = 1;
  for(let i = 2; i <= x; i++)
    result *= i;
  return result;
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
