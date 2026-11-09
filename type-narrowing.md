# Type Narrowing in TypeScript: Making Sense of Different Data Types

## Introduction

When I first started learning TypeScript, I found union types quite interesting. They allow a variable to hold more than one type of value. But I soon realised that this flexibility comes with a small challenge: how do we safely work with a value when we are not sure which type it currently holds? This is where **Type Narrowing** becomes useful.

## Understanding Type Narrowing

Type narrowing means checking a variable's actual type and allowing TypeScript to treat it as a more specific type. Let's look at a simple example inspired by Problem 2 of this assignment.

```ts
function processInput(input: string | number | boolean): string | number {
  if (typeof input === "string") {
    return input.trim().toLowerCase();
  } else if (typeof input === "number") {
    return input * 10;
  } else {
    return input ? "Active" : "Inactive";
  }
}
```

Here, `input` can be a string, number, or boolean. The `typeof` operator helps TypeScript identify which type is being used. As a result, we can safely apply string methods, perform mathematical operations, or check a boolean value.

There are other useful ways to narrow types.

- **`typeof`** checks primitive types such as strings and numbers.
- **`instanceof`** checks whether an object belongs to a particular class.
- **`in`** checks whether an object contains a particular property.

For example, `if (animal instanceof Dog)` can help identify a Dog object, while `"name" in person` can check whether an object has a `name` property.

## Conclusion

I see type narrowing as a way of helping TypeScript understand what we already know about a value. It makes our code safer, clearer, and easier to manage, especially when working with union types.
