// Task 2
const numbers = [10, 20, 30, 40, 50];

const calculateSumAndAverage = (numbers) => {
  const sum = numbers.reduce((acc, num) => acc + num, 0);
  const average = sum / numbers.length;
  return { sum, average };
};

console.log(calculateSumAndAverage(numbers));

// To run this script:
// 1. Include it in an HTML file and open it in a browser.
// 2. Or run it in the terminal using Node.js: `node script.js`
