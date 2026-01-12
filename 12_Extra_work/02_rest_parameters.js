// Rest parameters allow a function to accept any number of arguments 
// and store them in an array.

function sum(...numbers) { // we can add so many numbers
  let total = 0;
  for (let num of numbers) {
    total += num;
  }
  return total;
}

console.log(sum(1, 2));        // 3
console.log(sum(1, 2, 3, 4));  // 10


// Example with fixed + rest parameters

function showDetails(name, ...skills) {
  console.log(name);
  console.log(skills);
}

showDetails("Atharv", "JS", "React", "Flutter");

// rest parameters in array function

const multiply = (...nums) => nums.reduce((a, b) => a * b, 1);

console.log(multiply(2, 3, 4)); // 24

// Rest parameters are always an array.
// typeof for arrays returns "object" (JavaScript behavior)
// Correct way to check is Array.isArray()