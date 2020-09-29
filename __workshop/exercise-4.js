// Exercise 4
//
// Write a function that accepts 5 grades (positive numerical values) and returns the average.
// The returned average should also be rounded to the nearest unit. (no decimals, please!)
//
// Edit only the code between the lines (below)
// -----------------------------------------------------------------
function calculateAverage(...nums) {
  // code here
  let avg = nums.reduce((a, b) => (a + b)) / nums.length;
  return Math.round(avg)
}
// -----------------------------------------------------------------
// Edit only the code between the lines (above)
//
//
// Call the function to test your code.
console.log(calculateAverage(3, 1, 1, 1, 1));

// Create more test cases.

// This is needed for automated testing (more on that later)
module.exports = calculateAverage;
