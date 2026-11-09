# TypeScript Assignment 1

## Introduction

This project contains solutions to eight TypeScript programming problems. The exercises demonstrate fundamental TypeScript concepts, including functions, data types, union types, generics, interfaces, tuples, classes, inheritance, access modifiers, and asynchronous programming.

The project also includes separate practice examples and a browser-based demonstration of the solutions.

## Project Structure

```text
Assignment1/
│
├── src/
│   └── practice.ts
│
├── dist/
│   ├── solutions.js
│   ├── solutions-demo.js
│   └── src/
│       └── practice.js
│
├── solutions.ts
├── solutions-demo.ts
├── index.html
├── type-narrowing.md
├── access-modifiers.md
├── README.md
├── package.json
├── package-lock.json
├── tsconfig.json
└── .gitignore
```

## Problems and Topics

| Problem | Topic                                      |
| ------- | ------------------------------------------ |
| 1       | Functions and Default Parameters           |
| 2       | Union Types and Type Narrowing             |
| 3       | Readonly Tuples                            |
| 4       | Generics and Rest Parameters               |
| 5       | Interfaces and Array Filtering             |
| 6       | Generics, `keyof` and Indexed Access Types |
| 7       | Classes, Inheritance and Access Modifiers  |
| 8       | Asynchronous Functions and Promises        |

## Project Files

- **solutions.ts:** Contains the eight final TypeScript implementations without test calls or console output.
- **solutions-demo.ts:** Imports the final implementations and demonstrates them using sample inputs and outputs.
- **src/practice.ts:** Contains practice examples and additional learning exercises.
- **index.html:** Provides a browser interface for viewing the practice examples and final solution demonstrations.

## Additional Blog Posts

Two blog posts explore selected TypeScript topics in more detail:

1. [Type Narrowing in TypeScript](./type-narrowing.md)
2. [Access Modifiers in TypeScript](./access-modifiers.md)

## How to Run

### 1. Install dependencies

```bash
npm install
```

### 2. Compile the TypeScript files

```bash
npx tsc
```

### 3. Start the local web server

From the project directory, run:

```bash
py -m http.server 8000
```

### 4. Open the browser demonstration

Visit:

```text
http://localhost:8000
```

The browser provides two options:

- **Practice Examples:** Displays the examples from `src/practice.ts`.
- **Final Solutions:** Demonstrates all eight implementations from `solutions.ts` through `solutions-demo.ts`.

## TypeScript Configuration

The `tsconfig.json` file defines the compiler settings, including strict type checking, ES2020 target and module settings, and the output directory.

The compiler includes the root-level solution and demonstration files, as well as the practice file in `src/`. Compiled JavaScript files are generated in `dist/`.
