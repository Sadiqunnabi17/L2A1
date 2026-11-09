
import {
  multiplyValue,
  processInput,
  formatCoordinate,
  concatenateArrays,
  getPopularCourses,
  pluckValues,
  Employee,
  Manager,
  validateAgeAsync,
} from "./solutions.js";

console.log("========== Problem 1: Multiply Value ==========");
console.log("Default multiplier:", multiplyValue(25));
console.log("Custom multiplier:", multiplyValue(12, 4));

console.log("\n========== Problem 2: Type Narrowing ==========");
console.log("String:", processInput("  TypeScript  "));
console.log("Number:", processInput(8));
console.log("Boolean:", processInput(true));

console.log("\n========== Problem 3: Readonly Tuple ==========");
console.log(formatCoordinate([24.89, 91.87, "Sylhet"]));

console.log("\n========== Problem 4: Generics ==========");
console.log(concatenateArrays([10, 20], [30, 40]));

console.log("\n========== Problem 5: Course Filtering ==========");
const courses = [
  { title: "React Basics", students: 150, isPublished: true },
  { title: "Next.js Pro", students: 180, isPublished: false },
  { title: "TypeScript Mastery", students: 95, isPublished: true },
];

console.log(getPopularCourses(courses, 80));

console.log("\n========== Problem 6: Pluck Values ==========");
const users = [
  { id: 1, name: "Nadia", role: "Admin" },
  { id: 2, name: "Arif", role: "Editor" },
];

console.log("Names:", pluckValues(users, "name"));
console.log("IDs:", pluckValues(users, "id"));

console.log("\n========== Problem 7: Classes and Inheritance ==========");
const employee = new Employee("Robert", 65000);
const manager = new Manager("Nadia", 85000, "Finance");

console.log(employee.getDetails());
console.log(manager.getDetails());
console.log(manager.getRoleInfo());

console.log("\n========== Problem 8: Async Age Validation ==========");
validateAgeAsync(25)
  .then((result) => console.log("Age 25:", result))
  .catch((error: Error) => console.log(error.message));

validateAgeAsync(16)
  .then((result) => console.log(result))
  .catch((error: Error) => console.log("Age 16:", error.message));
