// Problem 1: create a function called `multiplyValue` that takes two parameters: `value` and an optional `multiplier`.

// Solution:
// function multiplyValue(value: number, multiplier?: number): number {

// }

// Here, ? represents optional parameter.

// If `multiplier` is not provided we use 2 as the default

function multiplyValue(value: number, multiplier: number = 2): number {
  return value * multiplier;
}

console.log(multiplyValue(20)); // Output: 40
console.log(multiplyValue(50, 5)); // Output: 250
console.log(multiplyValue(40, 0)); // Output: 0

// alternative solution: uncomment to test

// function multiplyValue(value: number, multiplier?: number): number {
//   if (multiplier === undefined) {
//     multiplier = 2;
//   }
//   return value * multiplier;
// }

// =============
// Problem 2: create a function called processInput that accepts
// a value of three possible types "string", "number", or "boolean"

// Solution:
function processInput(input: string | number | boolean): string | number {
  // When input is a string
  if (typeof input === "string") {
    return input.trim().toUpperCase();
  }

  // When input is a number
  else if (typeof input === "number") {
    return input * 10;
  }

  // When input is a boolean
  else {
    return input ? "Active" : "Inactive";
  }
}

// Let's Test the function
console.log(processInput("hello")); // Output: "HELLO"
console.log(processInput(5)); // Output: 50
console.log(processInput(true)); // Output: "Active"
console.log(processInput(false)); // Output: "Inactive"

// =============
// Problem 3: Create a function called `formatCoordinate`
// that accepts a readonly tuple containing latitude,
// longitude, and location name.

// definitions:
// Tuple: A fixed-length array where each position has a specific data type.
// Readonly Tuple: A modifier that prevents modification of the tuple's elements.

// Solution:
function formatCordinate(
  coordinate: readonly [number, number, string],
): string {
  // Extract the tuple elements
  const latitude = coordinate[0];
  const longitude = coordinate[1];
  const locationName = coordinate[2];

  // Return the formatted Location string
  return `Location: ${locationName} (Latitude: ${latitude}, Longitude: ${longitude})`;
}
// Test the function
console.log(formatCordinate([23.81, 90.41, "Dhaka"]));
// Output: Location: Dhaka (23.81: 90.41)

console.log(formatCordinate([22.35, 91.78, "Chittagong"]));
// Output: Location: Chittagong (22.35: 91.78)

// ============
// Problem 4: Create a generic function called concatenateArrays
// that accepts multiple arrays of the same type and combines them.

// definitions:
// Generics (<T>): Allow a function to work with different data types while maintaining type safety.
// Rest parameters (...): Allow a function to accept multiple arguments

// Solution:
// Problem 4: Create a generic function called concatenateArrays
// that accepts multiple arrays of the same type and combines them.

function concatenateArrays<T>(...arrays: T[][]): T[] {
  // Combine all arrays into a single array
  return arrays.flat();
}

// Test the function with strings
console.log(concatenateArrays(["a", "b"], ["c", "d"]));
// Output: ["a", "b", "c", "d"]

// Test the function with numbers
console.log(concatenateArrays([1, 2], [3, 4], [5]));
// Output: [1, 2, 3, 4, 5]
