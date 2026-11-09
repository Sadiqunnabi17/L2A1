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

// Let's test the function
console.log(processInput("TypeScript")); // Output: "TYPESCRIPT"
console.log(processInput(8)); // Output: 80
console.log(processInput(false)); // Output: "Inactive"
console.log(processInput(true)); // Output: "Active"

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

// Test the function
console.log(formatCoordinate([24.89, 91.87, "Sylhet"]));
// Output: Location: Sylhet (Latitude: 24.89, Longitude: 91.87)

console.log(formatCoordinate([24.37, 88.6, "Rajshahi"]));
// Output: Location: Rajshahi (Latitude: 24.37, Longitude: 88.6)

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

// Test the function with strings
console.log(concatenateArrays(["red", "blue"], ["green", "yellow"]));
// Output: ["red", "blue", "green", "yellow"]

// Test the function with numbers
console.log(concatenateArrays([10, 20], [30, 40], [50]));
// Output: [10, 20, 30, 40, 50]

// ============
// Problem 5: Interfaces and Array Filtering in TypeScript
// Create a function `getPopularCourses` that accepts an array of `Course` objects
// and a `minStudents` number. The function should return a new array containing
// only the courses where `isPublished` is true and `students` is greater than or equal to `minStudents`.

// Definitions:
// Interface: An interface defines the structure of an object by specifying its required properties and their data types.
// Array Filtering: Array filtering is the process of selecting specific elements from an array that satisfy a given condition
// and returning them in a new array without modifying the original array.

interface Course {
  title: string;
  students: number;
  isPublished: boolean;
}

// Create a function to filter popular courses
function getPopularCourses(courses: Course[], minStudents: number): Course[] {
  // Return a new array containing only courses
  // that satisfy both conditions

  return courses.filter(
    (course) => course.isPublished === true && course.students >= minStudents,
  );
}

// Sample input
const courses: Course[] = [
  { title: "React Basics", students: 95, isPublished: true },
  { title: "Draft Node.js", students: 150, isPublished: false },
  { title: "JavaScript Essentials", students: 65, isPublished: true },
  { title: "Python Fundamentals", students: 110, isPublished: true },
];

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

// Sample input
const users = [
  { id: 11, name: "Nadia", role: "Developer" },
  { id: 12, name: "Arif", role: "Designer" },
  { id: 13, name: "Mehedi", role: "Tester" },
];

// Test the function
console.log(pluckValues(users, "name"));
// Output: ["Nadia", "Arif", "Mehedi"]

console.log(pluckValues(users, "id"));
// Output: [11, 12, 13]

console.log(pluckValues(users, "role"));
// Output: ["Developer", "Designer", "Tester"]

// ===========
// Problem 7: Classes, Inheritance and Access Modifiers in TypeScript
// Create an Employee class and a Manager subclass that demonstrates
// object-oriented programming (OOP) concepts in TypeScript.

// Definitions:
// Class: A class is a blueprint or template for creating objects. It defines the properties
// and methods that its objects will have.
// Constructor: A constructor is a special method that runs automatically when we create an
// object from a class.
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

// Create a Manager object
const manager = new Manager("Robert", 65000, "Finance");

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

// Test 1: Age is 25
validateAgeAsync(25)
  .then((result) => console.log(result))
  .catch((error) => console.log(error.message));

// Test 2: Age is 16
validateAgeAsync(16)
  .then((result) => console.log(result))
  .catch((error) => console.log(error.message));
