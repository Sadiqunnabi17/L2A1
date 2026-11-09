// Problem 1: Multiply Value
// Returns the product of a value and an optional multiplier.
// The default multiplier is 2.

// Solution:
function multiplyValue(value: number, multiplier: number = 2): number {
  return value * multiplier;
}

console.log("\n========== Problem 1: Multiply Value ==========");
console.log(multiplyValue(20)); // Output: 40
console.log(multiplyValue(50, 5)); // Output: 250
console.log(multiplyValue(40, 0)); // Output: 0

// =============

// Problem 2: Union Types and Type Narrowing
// Processing a string, number, or boolean using typed narrowing

// Solution:
function processInput(input: string | number | boolean): string | number {
  if (typeof input === "string") {
    return input.trim().toUpperCase();
  } else if (typeof input === "number") {
    return input * 10;
  } else {
    return input ? "Active" : "Inactive";
  }
}

// Test cases
console.log(
  "\n========== Problem 2: Union Types and Type Narrowing ==========",
);
console.log(processInput("TypeScript")); // "TYPESCRIPT"
console.log(processInput(8)); // 80
console.log(processInput(false)); // "Inactive"
console.log(processInput(true)); // "Active"

// =============

// Problem 3: Readonly Tuples
// Formats latitude, longitude, and location name from a readonly tuple.

// Solution:
function formatCoordinate(
  coordinate: readonly [number, number, string],
): string {
  const [latitude, longitude, locationName] = coordinate;

  return `Location: ${locationName} (Latitude: ${latitude}, Longitude: ${longitude})`;
}

// Test cases
console.log("\n========== Problem 3: Readonly Tuples ==========");
console.log(formatCoordinate([24.89, 91.87, "Sylhet"]));
// Location: Sylhet (Latitude: 24.89, Longitude: 91.87)

console.log(formatCoordinate([24.37, 88.6, "Rajshahi"]));
// Location: Rajshahi (Latitude: 24.37, Longitude: 88.6)

// ============

// Problem 4: Generics and Rest Parameters
// Combines multiple arrays of the same type into a single array.

// Solution:
function concatenateArrays<T>(...arrays: T[][]): T[] {
  return arrays.flat();
}

// Test cases
console.log("\n========== Problem 4: Generics and Rest Parameters ==========");
console.log(concatenateArrays(["red", "blue"], ["green", "yellow"]));
// ["red", "blue", "green", "yellow"]

console.log(concatenateArrays([10, 20], [30, 40], [50]));
// [10, 20, 30, 40, 50]

// ============
// Problem 5: Interfaces and Array Filtering
// Returns published courses with at least the specified number of students.

// Solution:
interface Course {
  title: string;
  students: number;
  isPublished: boolean;
}

function getPopularCourses(courses: Course[], minStudents: number): Course[] {
  return courses.filter(
    (course) => course.isPublished === true && course.students >= minStudents,
  );
}

const courses: Course[] = [
  { title: "React Basics", students: 150, isPublished: true },
  { title: "Next.js Pro", students: 180, isPublished: false },
  { title: "JavaScript Essentials", students: 65, isPublished: true },
  { title: "TypeScript Mastery", students: 95, isPublished: true },
];

// Test the function

console.log(
  "\n========== Problem 5: Interfaces and Array Filtering ==========",
);
console.log(getPopularCourses(courses, 80));

// ===========

// Problem 6: Generics, keyof and Indexed Access Types
// Extracts the values of a specified property from an array of objects.

// Solution:
function pluckValues<T, K extends keyof T>(items: T[], key: K): T[K][] {
  return items.map((item) => item[key]);
}

const users = [
  { id: 1, name: "Nadia", role: "Admin" },
  { id: 2, name: "Arif", role: "Editor" },
  { id: 3, name: "Mehedi", role: "Subscriber" },
];

// Test cases

console.log(
  "\n========== Problem 6: Generics, keyof and Indexed Access Types ==========",
);
console.log(pluckValues(users, "name"));
// ["Nadia", "Arif", "Mehedi"]

console.log(pluckValues(users, "id"));
// [1, 2, 3]

console.log(pluckValues(users, "role"));
// Output: ["Admin", "Editor", "Subscriber"]

// ===========
// Problem 7: Classes, Inheritance and Access Modifiers
// Demonstrates inheritance and protected/private access modifiers.

// Solution:
class Employee {
  protected name: string;
  private baseSalary: number;

  constructor(name: string, baseSalary: number) {
    this.name = name;
    this.baseSalary = baseSalary;
  }

  getDetails(): string {
    return `Employee: ${this.name}, Base Salary: ${this.baseSalary}`;
  }
}
class Manager extends Employee {
  private department: string;

  constructor(name: string, baseSalary: number, department: string) {
    super(name, baseSalary);
    this.department = department;
  }

  getRoleInfo(): string {
    return `Manager of ${this.department}: ${this.name}`;
  }
}

// Test cases

console.log(
  "\n========== Problem 7: Classes, Inheritance and Access Modifiers ==========",
);

const manager = new Manager("Robert", 65000, "Finance");

console.log(manager.getDetails());
console.log(manager.getRoleInfo());

// ===========

// Problem 8: Asynchronous Function – validateAgeAsync
// Resolves after 1 second for ages 18 or above; otherwise rejects immediately.

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

// test cases

console.log("\n========== Problem 8: Asynchronous Age Validation ==========");

validateAgeAsync(25)
  .then((result) => console.log(result))
  .catch((error) => console.log(error.message));

validateAgeAsync(16)
  .then((result) => console.log(result))
  .catch((error) => console.log(error.message));

export {};
