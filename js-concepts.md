## 1\. JavaScript Fundamentals

### 1.1 Syntax

Syntax is the set of rules for how you write code. It's like grammar for a language.

**Variables and Data Types**

Variables are containers for storing data.

JavaScript

    let name = "Alex"; // String
    let age = 25;      // Number
    let isHappy = true; // Boolean
    
    console.log(name); // "Alex"

**Operators**

Symbols used to perform operations on values.

JavaScript

    let sum = 10 + 5;      // Arithmetic: 15
    let isEqual = (10 == 10); // Comparison: true
    let bothTrue = (true && false); // Logical: false

**Control Structures**

Logic that determines which path the code takes.

JavaScript

    if (age > 18) {
      console.log("Adult"); // "Adult"
    }

**Functions**

Reusable blocks of code.

JavaScript

    function greet() {
      return "Hello!";
    }
    console.log(greet()); // "Hello!"

* * *

### 1.2 Variables

Modern JavaScript uses three ways to declare variables. Think of them as different types of storage boxes.

| Keyword | Re-assignable | Scope | Note |
| --- | --- | --- | --- |
| var | Yes | Function | Old school, avoid if possible. |
| let | Yes | Block | Your go-to for variables that change. |
| const | No | Block | Use this for values that stay the same. |

**Example: let vs const**

JavaScript

    let score = 10;
    score = 11; // Works
    console.log(score); // 11
    
    const pi = 3.14;
    // pi = 3.15; // Error: Assignment to constant variable.

**Variable Scope**

Scope is "where" a variable is accessible.

*   **Global:** Available everywhere.
    
*   **Block:** Only available inside curly braces `{}`.
    

JavaScript

    {
      let blockVar = "Hidden";
    }
    // console.log(blockVar); // Error: blockVar is not defined

* * *

### 1.3 Statements

A statement is an instruction for the computer to perform an action.

**Compound Statements**

A group of statements enclosed in `{ }`.

JavaScript

    {
      let x = 1;
      let y = 2;
      console.log(x + y); // 3
    }

**Error Handling**

Preventing the app from crashing when something goes wrong.

JavaScript

    try {
      nonExistentFunction();
    } catch (error) {
      console.log("Caught an error!"); // "Caught an error!"
    }

* * *

### 1.4 Keywords

Keywords are reserved words that have special meanings.

#### 1.4.1 Declaration Keywords

Used to introduce new identifiers.

*   `var`, `let`, `const` (as discussed above).
    

#### 1.4.2 Control Flow Keywords

Direct the logic of the program.

JavaScript

    let fruit = "Apple";
    
    switch(fruit) {
      case "Apple":
        console.log("Red"); // "Red"
        break; // Stops the switch
      default:
        console.log("Unknown");
    }

#### 1.4.3 Loop Keywords

Repeat actions.

JavaScript

    for (let i = 0; i < 3; i++) {
      if (i === 1) continue; // Skip this iteration
      console.log(i); 
    }
    // 0
    // 2

#### 1.4.4 Function Keywords

*   `function`: Defines a set of instructions.
    
*   `return`: Stops the function and sends a value back.
    

JavaScript

    function add(a, b) {
      return a + b;
    }
    console.log(add(5, 5)); // 10

#### 1.4.5 Object-Oriented Keywords

Used for "Blueprints" (Classes).

JavaScript

    class Animal {
      constructor(name) {å
        this.name = name;
      }
    }
    
    class Dog extends Animal { // Inherit from Animal
      speak() {
        console.log("Woof!");
      }
    }
    
    const myDog = new Dog("Buddy");
    myDog.speak(); // "Woof!"

#### 1.4.6 Error Handling Keywords

*   `try`: Wrap code that might fail.
    
*   `catch`: Handle the failure.
    
*   `finally`: Runs no matter what.
    
*   `throw`: Create a custom error.
    

JavaScript

    function checkAge(age) {
      if (age < 0) throw "Age can't be negative";
    }
    
    try {
      checkAge(-1);
    } catch (e) {
      console.log(e); // "Age can't be negative"
    } finally {
      console.log("Check complete"); // "Check complete"
    }
