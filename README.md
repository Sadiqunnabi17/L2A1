# TypeScript Assignment 1

## Introduction

This project contains solutions to eight TypeScript programming problems. The exercises cover functions, data types, generics, interfaces, classes, inheritance, access modifiers, and asynchronous operations.

## Project Structure

```text
Assignment1/
│
├── src/
│   ├── solutions.ts
│   └── practice.ts
│
├── dist/
│   ├── solutions.js
│   └── practice.js
│
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

| Problem | Topic |
| ------- | ------------------------------------------ |
| 1 | Functions and Default Parameters |
| 2 | Union Types and Type Narrowing |
| 3 | Readonly Tuples |
| 4 | Generics and Rest Parameters |
| 5 | Interfaces and Array Filtering |
| 6 | Generics, `keyof` and Indexed Access Types |
| 7 | Classes, Inheritance and Access Modifiers |
| 8 | Asynchronous Functions and Promises |

The final solutions and sample outputs are available in `src/solutions.ts`. The `src/practice.ts` file contains practice examples and additional notes.

## Additional Blog Posts

Two blog posts explore selected topics from the assignment in more detail:

1. [Type Narrowing in TypeScript](./type-narrowing.md)
2. [Access Modifiers in TypeScript](./access-modifiers.md)

## How to Run

**1. Install dependencies**

```bash
npm install
```

**2. Compile the TypeScript files**

```bash
npx tsc
```

**3. Run the final solutions**

```bash
node dist/solutions.js
```

## Browser Demonstration

The project also includes an `index.html` file for viewing the TypeScript examples in a browser.

After compiling the files, start a local server from the project directory:

```bash
py -m http.server 8000
```

Then open:

```text
http://localhost:8000
```

## TypeScript Configuration

The `tsconfig.json` file contains the compiler settings. The source files are stored in `src`, and the compiled JavaScript files are generated in `dist`. Both `solutions.ts` and `practice.ts` are included in the compilation.