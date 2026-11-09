// Problem 1: Create a multiplyValue Function in TypeScript
// Create a function called `multiplyValue` that takes two parameters: `value` and an optional `multiplier`.

// Solution:
// function multiplyValue(value: number, multiplier?: number): number {
// }

// Here, ? represents an optional parameter.
// If `multiplier` is not provided, we use 2 as the default.

function multiplyValue(value: number, multiplier: number = 2): number {
  return value * multiplier;
}

console.log("\n========== Problem 1: Multiply Value ==========");

console.log(multiplyValue(15)); // Output: 30
console.log(multiplyValue(30, 3)); // Output: 90
console.log(multiplyValue(25, 0)); // Output: 0

// Alternative solution: uncomment to test

// function multiplyValue(value: number, multiplier?: number): number {
//   if (multiplier === undefined) {
//     multiplier = 2;
//   }
//   return value * multiplier;
// }

// =============
// Problem 2: Union Types and Type Narrowing in TypeScript
// Create a function called processInput that accepts
// a value of three possible types: "string", "number", or "boolean".

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

console.log(
  "\n========== Problem 2: Union Types and Type Narrowing ==========",
);

// Let's test the function
console.log(processInput("hello")); // Output: "HELLOW"
console.log(processInput(5)); // Output: 50
console.log(processInput(true)); // Output: "Active"
console.log(processInput(false)); // Output: "Inactive"

// =============
// Problem 3: Readonly Tuples in TypeScript
// Create a function called `formatCoordinate`
// that accepts a readonly tuple containing latitude,
// longitude, and location name.

// Definitions:
// Tuple: A fixed-length array where each position has a specific data type.
// Readonly Tuple: A modifier that prevents modification of the tuple's elements.

// Solution:
function formatCoordinate(
  coordinate: readonly [number, number, string],
): string {
  // Extract the tuple elements
  const latitude = coordinate[0];
  const longitude = coordinate[1];
  const locationName = coordinate[2];

  // Return the formatted location string
  return `Location: ${locationName} (Latitude: ${latitude}, Longitude: ${longitude})`;
}

console.log("\n========== Problem 3: Readonly Tuples ==========");

// Test the function
console.log(formatCoordinate([23.81, 90.41, "Dhaka"]));
// Output: Location: Dhaka (Latitude: 23.81, Longitude: 90.41)

console.log(formatCoordinate([22.35, 91.78, "Chittagong"]));
// Output: Location: Chittagong (Latitude: 22.35, Longitude: 91.78)

// ============
// Problem 4: Generics and Rest Parameters in TypeScript
// Create a generic function called concatenateArrays
// that accepts multiple arrays of the same type and combines them.

// Definitions:
// Generics (<T>): Allow a function to work with different data types while maintaining type safety.
// Rest parameters (...): Allow a function to accept multiple arguments.

// Solution:
function concatenateArrays<T>(...arrays: T[][]): T[] {
  // Combine all arrays into a single array
  return arrays.flat();
}

console.log("\n========== Problem 4: Generics and Rest Parameters ==========");

// Test the function with strings
console.log(concatenateArrays(["a", "b"], ["c", "d"]));
// Output: ["a", "b", "c", "d"]

// Test the function with numbers
console.log(concatenateArrays([1, 2], [3, 4], [5]));
// Output: [1, 2, 3, 4, 5]

// ============
// Problem 5: Interfaces and Array Filtering in TypeScript
// Create a function `getPopularCourses` that accepts an array of `Course` objects
// and a `minStudents` number. The function should return a new array containing
// only the courses where `isActive` is true and `students` is greater than or equal to `minStudents`.

// Definitions:
// Interface: An interface defines the structure of an object by specifying its required properties and their data types.
// Array Filtering: Array filtering is the process of selecting specific elements from an array that satisfy a given condition
// and returning them in a new array without modifying the original array.

interface Course {
  title: string;
  students: number;
  isActive: boolean;
}

// Create a function to filter popular courses
function getPopularCourses(courses: Course[], minStudents: number): Course[] {
  // Return a new array containing only courses
  // that satisfy both conditions

  return courses.filter(
    (course) => course.isActive === true && course.students >= minStudents,
  );
}

// Sample input
const courses: Course[] = [
  { title: "TypeScript Mastery", students: 120, isActive: true },
  { title: "Draft Course", students: 200, isActive: false },
  { title: "Basic HTML", students: 45, isActive: true },
  { title: "Next.js Pro", students: 85, isActive: true },
];

console.log(
  "\n========== Problem 5: Interfaces and Array Filtering ==========",
);

// Test the function
console.log(getPopularCourses(courses, 80));

// ===========
// Problem 6: Generics, keyof and Indexed Access Types in TypeScript
// Create a generic function named pluckValues that extracts the values of a specified property from an array of objects and returns those values in a new array.

// Definitions:
// Generics: Allow a function to work with different object types.
// keyof: Obtains the property names (keys) of an object type.
// Indexed access types (T[K]): Obtains the data type of a particular property.

// Solution:
function pluckValues<T, K extends keyof T>(items: T[], key: K): T[K][] {
  // Extract the selected property from each object
  return items.map((item) => item[key]);
}

interface User {
  id: number;
  name: string;
  role: string;
}

// Sample input
const users: User[] = [
  { id: 1, name: "Rakib", role: "Admin" },
  { id: 2, name: "Sadia", role: "Editor" },
  { id: 3, name: "Tariq", role: "Subscriber" },
];

console.log(
  "\n========== Problem 6: Generics, keyof and Indexed Access Types ==========",
);

// Test the function
console.log(pluckValues(users, "name"));
// Output: ["Rakib", "Sadia", "Tariq"]

console.log(pluckValues(users, "id"));
// Output: [1, 2, 3]

console.log(pluckValues(users, "role"));
// Output: ["Admin", "Editor", "Subscriber"]

// ===========
// Problem 7: Classes, Inheritance and Access Modifiers in TypeScript
// Create an Employee class and a Manager subclass that demonstrates
// object-oriented programming (OOP) concepts in TypeScript.

// Definitions:
// Class: A class is a blueprint or template for creating objects. It defines the properties
// and methods that its objects will have.
//
// Constructor: A constructor is a special method that runs automatically when we create an
// object from a class.
//
// Inheritance: Inheritance is a mechanism that allows a class to inherit properties and methods
// from another class. The class that inherits is called the subclass or derived class, and the
// class being inherited from is called the superclass or base class.

// Solution:
class Employee {
  protected name: string;
  private baseSalary: number;

  // Employee constructor
  constructor(name: string, baseSalary: number) {
    this.name = name;
    this.baseSalary = baseSalary;
  }

  // Return employee details
  getDetails(): string {
    return `Employee: ${this.name}, Base Salary: ${this.baseSalary}`;
  }
}

// Create a Manager subclass that extends Employee
class Manager extends Employee {
  private department: string;

  // Manager constructor
  constructor(name: string, baseSalary: number, department: string) {
    super(name, baseSalary);
    this.department = department;
  }

  // Return manager role information
  getRoleInfo(): string {
    return `Manager of ${this.department}: ${this.name}`;
  }
}

console.log(
  "\n========== Problem 7: Classes, Inheritance and Access Modifiers ==========",
);

// Create a Manager object
const manager = new Manager("Alice", 50000, "Engineering");

// Test the methods
console.log(manager.getDetails());
console.log(manager.getRoleInfo());

// ===========
// Problem 8: Asynchronous Function - validateAgeAsync
// Create an async function `validateAgeAsync` that accepts a number `age`
// and returns a `Promise<string>`:
//
// If age is 18 or above, resolve after 1 second (1000 ms) with the string "Access Granted".
// If age is less than 18, reject immediately with new Error("Access Denied: Must be 18 or older").

// Definitions:
// Promise: A Promise represents the eventual completion or failure of an asynchronous operation.
// It has three possible states:
// Pending: The operation is still in progress.
// Fulfilled: The operation completed successfully.
// Rejected: The operation failed.

// Solution:
function validateAgeAsync(age: number): Promise<string> {
  return new Promise((resolve, reject) => {
    if (age >= 18) {
      setTimeout(() => {
        resolve("Access Granted");
      }, 1000);
    } else {
      reject(new Error("Access Denied: Must be 18 or older"));
    }
  });
}

console.log("\n========== Problem 8: Asynchronous Age Validation ==========");

// Test 1: Age is 20
validateAgeAsync(20)
  .then((result) => console.log(result))
  .catch((error) => console.log(error.message));

// Test 2: Age is 15
validateAgeAsync(15)
  .then((result) => console.log(result))
  .catch((error) => console.log(error.message));

export {};
