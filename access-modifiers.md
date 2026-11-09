# Access Modifiers in TypeScript: Who Can Access What?

## Introduction

When learning Object-Oriented Programming, we often create classes with properties and methods. But should every part of a class be accessible from everywhere? Probably not. For example, an employee's name may be visible to a manager, while salary information should remain restricted. TypeScript solves this problem through **Access Modifiers**.

## Understanding the Four Access Modifiers

TypeScript provides four important access modifiers: `public`, `private`, `protected`, and `readonly`.

Let's understand the first three through an example based on Problem 7 of this assignment.

```ts
class Employee {
  public id: number;
  protected name: string;
  private salary: number;

  constructor(id: number, name: string, salary: number) {
    this.id = id;
    this.name = name;
    this.salary = salary;
  }
}

class Manager extends Employee {
  showName(): string {
    return this.name;
  }
}
```

Here is what happens:

- **Public:** The `id` property can be accessed from inside or outside the class. It is also the default access modifier.
- **Protected:** The `name` property can be accessed inside Employee and its child classes, such as Manager. However, it cannot be accessed directly through an external object.
- **Private:** The `salary` property can only be accessed inside Employee. Even Manager cannot access it directly.

The fourth modifier, **readonly**, is slightly different. It allows a property to be assigned a value when declared or inside the constructor, but prevents reassignment afterward.

```ts
class Product {
  readonly productId: number;

  constructor(id: number) {
    this.productId = id;
  }
}
```

Once the constructor assigns `productId`, we cannot change it later.

## Conclusion

Access modifiers help us decide which parts of a class should be visible and which should remain restricted. Understanding them makes it easier to write organised code and apply encapsulation, an important principle of Object-Oriented Programming.
