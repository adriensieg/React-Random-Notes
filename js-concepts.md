## 1. JavaScript Fundamentals

### 1.1 Syntax

Syntax is the set of rules for how you write code. It's like grammar for a language.

**Variables and Data Types**

Variables are containers for storing data.

```JavaScript
let name = "Alex"; // String
let age = 25;      // Number
let isHappy = true; // Boolean

console.log(name); // "Alex"
```
**Operators**

Symbols used to perform operations on values.

```JavaScript
let sum = 10 + 5;      // Arithmetic: 15
let isEqual = (10 == 10); // Comparison: true
let bothTrue = (true && false); // Logical: false
```

**Control Structures**

Logic that determines which path the code takes.

```JavaScript
if (age > 18) {
  console.log("Adult"); // "Adult"
}
```

**Functions**

Reusable blocks of code.

```JavaScript
function greet() {
  return "Hello!";
}
console.log(greet()); // "Hello!"
```

### 1.2 Variables

Modern JavaScript uses three ways to declare variables. Think of them as different types of storage boxes.

| Keyword | Re-assignable | Scope | Note |
| --- | --- | --- | --- |
| var | Yes | Function | Old school, avoid if possible. |
| let | Yes | Block | Your go-to for variables that change. |
| const | No | Block | Use this for values that stay the same. |

**Example: let vs const**

```JavaScript
let score = 10;
score = 11; // Works
console.log(score); // 11

const pi = 3.14;
// pi = 3.15; // Error: Assignment to constant variable.
```

**Variable Scope**
Scope is "where" a variable is accessible.

*   **Global:** Available everywhere.
    
*   **Block:** Only available inside curly braces `{}`.
    

```JavaScript
{
  let blockVar = "Hidden";
}
// console.log(blockVar); // Error: blockVar is not defined
```

### 1.3 Statements

A statement is an instruction for the computer to perform an action.

**Compound Statements**

A group of statements enclosed in `{ }`.

```JavaScript
{
  let x = 1;
  let y = 2;
  console.log(x + y); // 3
}
```
**Error Handling**

Preventing the app from crashing when something goes wrong.

```JavaScript
try {
  nonExistentFunction();
} catch (error) {
  console.log("Caught an error!"); // "Caught an error!"
}
```

### 1.4 Keywords

Keywords are reserved words that have special meanings.

#### 1.4.1 Declaration Keywords

Used to introduce new identifiers.

*   `var`, `let`, `const` (as discussed above).
    
#### 1.4.2 Control Flow Keywords

Direct the logic of the program.

```JavaScript
let fruit = "Apple";

switch(fruit) {
  case "Apple":
    console.log("Red"); // "Red"
    break; // Stops the switch
  default:
    console.log("Unknown");
    }
```
#### 1.4.3 Loop Keywords

Repeat actions.

```JavaScript
for (let i = 0; i < 3; i++) {
  if (i === 1) continue; // Skip this iteration
  console.log(i); 
}
// 0
// 2
```

#### 1.4.4 Function Keywords

*   `function`: Defines a set of instructions.
    
*   `return`: Stops the function and sends a value back.
    

```JavaScript
function add(a, b) {
  return a + b;
}
console.log(add(5, 5)); // 10
```

#### 1.4.5 Object-Oriented Keywords

Used for "Blueprints" (Classes).

```JavaScript
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
```

#### 1.4.6 Error Handling Keywords

*   `try`: Wrap code that might fail.
    
*   `catch`: Handle the failure.
    
*   `finally`: Runs no matter what.
    
*   `throw`: Create a custom error.
    
```JavaScript
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
```

## 2. Control Flow

### 2.1 Template Literals

Template literals allow you to create strings with embedded expressions. They use backticks (`` ` ``) instead of quotes.
*   **Syntax:** Use `${variable}` to insert values directly into a string.
*   **Benefit:** No more messy `+` signs for concatenation.

```JavaScript
let user = "Alice";
let items = 3;

// Old way
console.log("Hello " + user + ", you have " + items + " items."); // "Hello Alice, you have 3 items."

// Template Literal way
console.log(`Hello ${user}, you have ${items} items.`); // "Hello Alice, you have 3 items."
```

### 2.2 If–Else Statements

The most basic way to make a decision in code.

> **Metaphor:** It’s a fork in the road. If the sign says "Left," you go left; otherwise, you go right.

```JavaScript
let temperature = 25;

if (temperature > 30) {
  console.log("It is hot.");
} else if (temperature > 20) {
  console.log("It is pleasant."); // "It is pleasant."
} else {
  console.log("It is cold.");
}
```

### 2.3 Switch Statements
Used when you have many possible conditions for a single value. It is cleaner than multiple `if-else` blocks.

```JavaScript
let day = 2;

switch (day) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday"); // "Tuesday"
    break;
  default:
    console.log("Another day");
}
```

### 2.4 Loops
Loops repeat a block of code until a condition is met.

**For Loops** Best when you know exactly how many times you want to repeat.

```JavaScript
// for (start; condition; step)
for (let i = 1; i <= 3; i++) {
  console.log(`Count: ${i}`);
}
// Count: 1
// Count: 2
// Count: 3
```

**While Loops** Best when you want to repeat until a condition becomes false, regardless of how many turns it takes.

```JavaScript
let power = 1;
while (power < 10) {
  console.log(power);
  power *= 3;
}
// 1
// 3
// 9
```
**Break & Continue Statements**
*   **Break:** Stops the loop immediately.
*   **Continue:** Skips the rest of the current turn and jumps to the next one.
    
```JavaScript
for (let i = 0; i < 5; i++) {
  if (i === 2) continue; // Skip 2
  if (i === 4) break;    // Stop at 4
  console.log(i);
}
// 0
// 1
// 3
```

### 2.5 Exception Handling
This allows you to "catch" errors so your program doesn't crash completely.

**try…catch…finally**

1.  **Try:** The code you want to test.
    
2.  **Catch:** The code that runs if an error happens.
    
3.  **Finally:** The code that runs no matter what (cleanup).
    
```JavaScript
function parseData(json) {
  try {
    let result = JSON.parse(json); 
    console.log("Success!");
  } catch (error) {
    console.log("Error found: " + error.message); // "Error found: Unexpected token U in JSON..."
  } finally {
    console.log("Process finished."); // "Process finished."
  }
}

parseData("Invalid JSON");
```

## 3. Functions

### 3.1 Function Types
There are several ways to define a function in JavaScript. Each has its own nuance in syntax and behavior.

**Function Declarations** The traditional way. These are "hoisted," meaning you can call them even before they appear in the code.

```JavaScript
function greet() {
  return "Hello!";
}
console.log(greet()); // "Hello!"
```

**Function Expressions** A function is stored inside a variable. It is not hoisted.

```JavaScript
const speak = function() {
  return "Hi there!";
};
console.log(speak()); // "Hi there!"
 ```   

**Arrow Functions** A shorter, modern syntax introduced in ES6. Great for quick operations.

```JavaScript
const multiply = (a, b) => a * b;

console.log(multiply(2, 5)); // 10
```

### 3.2 Function Behavior
This covers how data enters and leaves a function.

**Function Parameters** Parameters are the "placeholders" defined in the function. Arguments are the actual values you pass in.

```JavaScript
function welcome(name) { // 'name' is the parameter
  console.log(`Welcome, ${name}`);
}
welcome("Leo"); // "Leo" is the argument // "Welcome, Leo"
```  

**Default Parameters** If you don't provide an argument, the function uses a "safety" value.

```JavaScript
function setVolume(level = 50) {
  console.log(`Volume at: ${level}`);
}

setVolume(80); // "Volume at: 80"
setVolume();   // "Volume at: 50"
```

**Rest Parameters** Allows a function to accept an indefinite number of arguments as an **array**. Use the triple-dot `...` prefix.

> **Metaphor:** It's like an "and guests" invite. You know the main guest, but the rest are just grouped together in a list.

```JavaScript
function sumAll(...numbers) {
  return numbers.reduce((acc, curr) => acc + curr, 0);
}

console.log(sumAll(1, 2, 3, 4)); // 10
```

**Return Statements** The `return` keyword stops the function and sends a value back to where it was called. Without it, a function returns `undefined`.

```JavaScript
function getAge() {
  return 30;
  console.log("This will never run"); // Dead code
}

let myAge = getAge();
console.log(myAge); // 30
```

## 4. Scope & Closures

### 4.1 Types of Scope

Scope determines where variables can be accessed. If a variable is "out of scope," it is invisible to your code.

**Global Scope** Variables declared outside any function or block. They are accessible from anywhere in the script.

```JavaScript
let globalVar = "I am everywhere";

function test() {
  console.log(globalVar); // "I am everywhere"
}
```

**Local (Function) Scope** Variables declared inside a function. They cannot be accessed outside that function.

```JavaScript
function hello() {
  let secret = "shhh";
}
// console.log(secret); // Error: secret is not defined
```

**Block Scope** Variables declared with `let` or `const` inside `{ }` (like `if` statements or loops).

```JavaScript
if (true) {
  let blockScoped = "Locked in here";
}
// console.log(blockScoped); // Error: blockScoped is not defined
```

**Lexical Scope** A function's ability to access variables from its parent's scope based on where the function was physically written in the code.

**Scope Chain** If JavaScript can't find a variable in the current scope, it looks one level up, then the next, until it hits the Global scope.

```JavaScript
let top = "Global";

function outer() {
  let middle = "Outer";
  function inner() {
    console.log(`${top}, ${middle}`); 
  }
  inner();
}
outer(); // "Global, Outer"
```

### 4.2 Closures

A closure is a function that "remembers" its lexical scope even when the function is executed outside that scope.

> **Metaphor:** A closure is like a backpack. When a function is created, it packs up all the variables it can see and carries them wherever it goes.

```JavaScript
function createCounter() {
  let count = 0; // "Inside the backpack"
  return function() {
    count++;
    return count;
  };
}

const counter = createCounter();
console.log(counter()); // 1
console.log(counter()); // 2
```

### 4.3 Callbacks

A callback is a function passed as an **argument** to another function, to be executed later.

> **Metaphor:** It's like leaving your phone number at a restaurant. You don't wait at the desk; they "call you back" when your table is ready.

```JavaScript
function processUser(name, callback) {
  console.log(`Processing ${name}...`);
  callback();
}

processUser("Sarah", function() {
  console.log("Done!"); 
});
// "Processing Sarah..."
// "Done!"
```

## 5. Data Structures

### 5.1 Objects
Objects store data in **key-value pairs**. They represent real-world entities.

**Object Properties**

Properties are the "characteristics" of the object.

```JavaScript
const car = {
  brand: "Toyota",
  color: "Red"
};
console.log(car.brand); // "Toyota"
```

**Object Methods**
A method is a function stored as a property.

```JavaScript
const user = {
  name: "Leo",
  greet: function() {
    return `Hello, I'm ${this.name}`;
  }
};
console.log(user.greet()); // "Hello, I'm Leo"
```

### 5.2 Arrays
Arrays are ordered lists of values.

**Array Methods**
Common tools to manipulate data:

```JavaScript
let fruits = ["Apple", "Banana"];

fruits.push("Orange");   // Add to end
fruits.pop();            // Remove from end
fruits.unshift("Kiwi");  // Add to start

console.log(fruits); // ["Kiwi", "Apple", "Banana"]
```

**Array Iteration**
Modern ways to loop through arrays:

```JavaScript
const nums = [1, 2, 3];

// .forEach: Just loops
nums.forEach(n => console.log(n * 2)); // 2, 4, 6

// .map: Creates a NEW array
const doubled = nums.map(n => n * 2);
console.log(doubled); // [2, 4, 6]
```

### 5.3 Destructuring
A shortcut to "unpack" values from arrays or objects into distinct variables.

```JavaScript
// Object Destructuring
const person = { firstName: "Jane", age: 22 };
const { firstName, age } = person;
console.log(firstName); // "Jane"

// Array Destructuring
const colors = ["red", "blue"];
const [firstColor] = colors;
console.log(firstColor); // "red"
```

### 5.4 JSON (JavaScript Object Notation)
JSON is a lightweight format for transporting data, often used between a server and a web page.

| Feature | JavaScript Object | JSON |
| --- | --- | --- |
| Keys | Can be unquoted | Must be double-quoted |
| Methods | Can contain functions | Data only (no functions) |
| Usage | Used in code | Used for data transfer |

**JSON.stringify() and JSON.parse()**

```JavaScript
const obj = { id: 1, active: true };

// Convert Object to JSON String
const jsonStr = JSON.stringify(obj);
console.log(jsonStr); // '{"id":1,"active":true}'

// Convert JSON String back to Object
const backToObj = JSON.parse(jsonStr);
console.log(backToObj.id); // 1
```

**JSON & AJAX**
AJAX (Asynchronous JavaScript and XML) is the technique of requesting data from a server. Today, we mostly use JSON instead of XML.

### 5.5 Map and Set
Newer, specialized collections.
*   **Set:** A collection of **unique** values. No duplicates allowed.
    
*   **Map:** Similar to objects, but keys can be **any data type** (even objects).

```JavaScript
// Set
const mySet = new Set([1, 2, 2, 3]);
console.log(mySet.size); // 3 (duplicate 2 is ignored)

// Map
const myMap = new Map();
myMap.set("status", "active");
console.log(myMap.get("status")); // "active"
```

### 5.6 Symbol

Symbols are a primitive data type that provides **completely unique** identifiers. Even if two symbols have the same description, they are not equal.

```JavaScript
const id1 = Symbol("id");
const id2 = Symbol("id");

console.log(id1 === id2); // false
```

## 6. DOM & Browser APIs

### 6.1 DOM (Document Object Model)
The DOM is a programming interface for web documents. It represents the page so that programs can change the document structure, style, and content.

> **Metaphor:** If HTML is the blueprint of a house, the DOM is the actual house where you can knock down walls or change the paint via JavaScript.

**DOM Selectors**
Finding elements in your HTML.
```JavaScript
const title = document.getElementById("main-title");
const items = document.querySelectorAll(".list-item"); // Returns a NodeList
```

**DOM Traversing**
Moving between parent, child, and sibling nodes.

```JavaScript
const parent = document.querySelector(".child").parentElement;
const next = document.querySelector(".item").nextElementSibling;
```

**DOM Manipulation**
Changing the content or style.

```JavaScript
const box = document.querySelector(".box");
box.textContent = "Hello World!"; // Change text
box.style.backgroundColor = "blue"; // Change CSS
box.classList.add("active"); // Add a CSS class
 ```   

### 6.2 Events
Events are "things" that happen to HTML elements (clicks, key presses, etc.).

**Event Listeners & Handling**

```JavaScript
const btn = document.querySelector("button");

// Syntax: element.addEventListener(event, function)
btn.addEventListener("click", () => {
  console.log("Button was clicked!"); // "Button was clicked!"
});
```

**Forms and Validation**

Intercepting form submissions to check data before sending it to a server.

```JavaScript
const form = document.querySelector("#login");
form.addEventListener("submit", (e) => {
  e.preventDefault(); // Stop page refresh
  console.log("Form submitted!");
});
```

### 6.3 Storage APIs
Used to save data locally in the user's browser.

| API | Expiration | Capacity |
| --- | --- | --- |
| Local Storage | Never (until deleted) | ~5-10MB |
| Session Storage | When tab is closed | ~5MB |

**Example: Local Storage**

```JavaScript
localStorage.setItem("theme", "dark");
const currentTheme = localStorage.getItem("theme");
console.log(currentTheme); // "dark"
```

### 6.4 Browser Features
**Geolocation API**
Asks the user for their physical location.

```JavaScript
navigator.geolocation.getCurrentPosition((position) => {
  console.log(position.coords.latitude); // 41.8781 (example)
});
```    

**Web Workers**
Allows you to run heavy scripts in the background without freezing the UI (multithreading).

**Canvas API**
Used for drawing 2D graphics and animations via JavaScript.

```JavaScript
const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");
ctx.fillStyle = "green";
ctx.fillRect(10, 10, 150, 100); // Draws a rectangle
```

**History API**
Allows you to manipulate the browser session history (useful for Single Page Applications).

```JavaScript
window.history.back(); // Goes back to the previous page
window.history.pushState({page: 1}, "title", "/new-url"); // Changes URL without refresh
```

## 7. Object-Oriented JavaScript

### 7.1 Prototypes
Objects have a hidden link to another object called a **Prototype**.

> **Metaphor:** Think of a **Prototype** like a "DNA record." A baby doesn't have to learn how to have a heartbeat from scratch; they "inherit" that instruction from their human DNA.

If you ask an object for a property it doesn't have, JavaScript looks into its "DNA" (the prototype) to see if it’s there.

```JavaScript
const animal = {
  eats: true
};

const dog = {
  bark: true
};

// Setting dog's prototype to animal
Object.setPrototypeOf(dog, animal);

console.log(dog.bark); // true
console.log(dog.eats); // true (found in the prototype!) // true 
```

### 7.2 Classes
Introduced in ES6, Classes are "Syntactic Sugar." They don't change how JavaScript works (it’s still prototypes under the hood), but they make the code look much cleaner.

> **Metaphor:** A **Class** is an architect's blueprint. The **Object** is the actual house built from that blueprint.

```JavaScript
class User {
  // The constructor runs when you create a new object
  constructor(name) {
    this.name = name;
  }

  // This is a method
  sayHi() {
    console.log(`Hi, I'm ${this.name}`);
  }
}

const user1 = new User("Alice");
const user2 = new User("Bob");

user1.sayHi(); // "Hi, I'm Alice"
user2.sayHi(); // "Hi, I'm Bob"
```   

### 7.3 Inheritance
Inheritance allows one class to derive features from another. This helps you avoid repeating code.

**The `extends` and `super` keywords**

*   **`extends`**: Tells JavaScript "this class is a child of that class."
    
*   **`super`**: Calls the constructor of the parent class.
    
> **Metaphor:** If a "Vehicle" is a parent, a "Car" is a child. All Vehicles move, but only Cars have trunks. The Car inherits "moving" but adds its own "trunk."

```JavaScript
class Vehicle {
  constructor(brand) {
    this.brand = brand;
  }
  
  start() {
    return `${this.brand} engine started.`;
  }
}

// Inheritance
class ElectricCar extends Vehicle {
  constructor(brand, batteryLife) {
    super(brand); // Pass the brand to the Vehicle constructor
    this.batteryLife = batteryLife;
  }

  charge() {
    return `${this.brand} is charging...`;
  }
}

const myTesla = new ElectricCar("Tesla", "90%");

console.log(myTesla.start());  // "Tesla engine started." (Inherited)
console.log(myTesla.charge()); // "Tesla is charging..." (Own method)
```  

**Key OOP Concepts to Remember:**

*   **Encapsulation:** Keeping data and methods together in one unit (the class).
    
*   **Polymorphism:** A child class can change a method it inherited to behave differently (e.g., a `Bird` and `Plane` both inherit `fly()`, but they fly differently).


## 8. Modules

### 8.1 ES Modules (ESM)
This is the official, modern way to share code between JavaScript files using `export` and `import`.
This section covers how to organize your code into manageable, reusable pieces. As your project grows, you don't want one giant file; you want a system of organized components.

> **Metaphor:** Think of a module like a **Lego brick**. You build a specific shape in one place, and then you "snap" it into your main project wherever it’s needed.

**The Export (The Supplier)** You can export variables, functions, or classes.

```JavaScript
// mathUtils.js
export const pi = 3.14;

export function add(a, b) {
  return a + b;
}
```

**The Import (The Consumer)**

```JavaScript
// main.js
import { pi, add } from './mathUtils.js';

console.log(pi); // 3.14
console.log(add(10, 5)); // 15
```

### 8.2 Module Pattern
Before JavaScript had a built-in module system, developers used functions to create "private" and "public" parts of their code. This relies on **Closures**.

> **Metaphor:** It’s like a **Restaurant Kitchen**. The customers (public) can see the menu and order, but they cannot see or touch the ingredients in the pantry (private).

```JavaScript
const CounterModule = (function() {
  let privateCounter = 0; // Private: Cannot be accessed from outside

  return {
    increment: function() {
      privateCounter++;
      return privateCounter;
    },
    getValue: function() {
      return privateCounter;
    }
  };
})();

console.log(CounterModule.increment()); // 1
console.log(CounterModule.getValue());   // 1
// console.log(CounterModule.privateCounter); // undefined (Safe!)
```
### 8.3 Singleton Pattern
A Singleton is a design pattern that restricts a class to **one single instance**. Every time you try to access it, you get the exact same object.

> **Metaphor:** It’s like a **Government**. A country only has one "Federal Government" instance. If you ask for the government in different cities, you're still talking to the same central entity.

```JavaScript
class DatabaseConnection {
  constructor() {
    if (DatabaseConnection.instance) {
      return DatabaseConnection.instance; // Return the existing one
    }
    this.connectionString = "Connected to DB";
    DatabaseConnection.instance = this; 
  }
}

const conn1 = new DatabaseConnection();
const conn2 = new DatabaseConnection();

console.log(conn1 === conn2); // true (They are the exact same object)
```
**Why use this?**

*   **Consistency:** You don't want five different versions of "User Settings" running at once.
    
*   **Resources:** Creating new objects takes memory; a Singleton saves space if only one is needed.

## 9. Asynchronous JavaScript
This section covers how JavaScript handles tasks that take time (like fetching data or loading a file) without freezing the entire browser.
### 9.1 Promises
A **Promise** is an object representing the eventual completion (or failure) of an asynchronous operation.

> **Metaphor:** It's like ordering a pizza. You get a **receipt** (the Promise). The pizza is currently **Pending**. Eventually, it's either **Fulfilled** (delivered) or **Rejected** (they ran out of dough).

```JavaScript
const pizzaPromise = new Promise((resolve, reject) => {
  let success = true;
  if (success) {
    resolve("Pizza is here!");
  } else {
    reject("No pizza today.");
  }
});

pizzaPromise
  .then(data => console.log(data))  // "Pizza is here!"
  .catch(err => console.log(err));
```

### 9.2 Async/Await
Introduced in ES2017, this is "syntactic sugar" built on top of Promises. It makes asynchronous code look and behave like synchronous (linear) code.

*   `async`: Declares a function as asynchronous.
    
*   `await`: Pauses the code execution until the Promise resolves.
    

```JavaScript
async function getOrder() {
  try {
    const status = await pizzaPromise; 
    console.log(status); // "Pizza is here!"
  } catch (error) {
    console.log(error);
  }
}

getOrder();
```    

### 9.3 AJAX (Asynchronous JavaScript and XML)
AJAX is the concept of exchanging data with a server and updating parts of a web page—without reloading the whole page.

**XMLHttpRequest (XHR)**

The "old" way. It’s verbose and relies on events.

```JavaScript
const xhr = new XMLHttpRequest();
xhr.open("GET", "https://api.example.com/data");
xhr.onload = function() {
  console.log(xhr.responseText); // Logs data from server
};
xhr.send();
```    

**fetch()**

The modern, built-in browser API. It returns a Promise and is much cleaner.

```JavaScript
fetch("https://api.example.com/data")
  .then(response => response.json()) // Convert to JSON
  .then(data => console.log(data))   // { id: 1, name: "Item" }
  .catch(error => console.error("Error:", error));
```

**Axios**

A popular third-party library. It’s often preferred over `fetch` because it handles JSON conversion automatically and works better in older browsers.

```JavaScript
// Note: Requires library installation
axios.get("https://api.example.com/data")
  .then(res => console.log(res.data)) // // { id: 1, name: "Item" }
  .catch(err => console.log(err));
```
### Comparison Table

| Method | Syntax | Built-in? | Error Handling |
| --- | --- | --- | --- |
| XHR | Complex | Yes | Event-based |
| Fetch | Clean (Promises) | Yes | Manual check for response.ok |
| Axios | Very Clean | No | Automatic |

## 10. Application Patterns

### 10.1 Design Patterns
Design patterns are proven solutions to common software problems.

**Module & Singleton Patterns** _(Covered in Section 8, but here is a quick recap: Modules encapsulate code; Singletons ensure only one instance of an object exists.)_

**Observer Pattern** One object (the Subject) maintains a list of dependents (Observers) and notifies them automatically of any state changes.

> **Metaphor:** This is like a **YouTube Channel**. The channel (Subject) doesn't know what every subscriber is doing, but when a new video is uploaded, it sends a notification to all subscribers (Observers) at once.

```JavaScript
class Subject {
  constructor() {
    this.observers = [];
  }
  subscribe(fn) {
    this.observers.push(fn);
  }
  notify(data) {
    this.observers.forEach(fn => fn(data));
  }
}

const newsFeed = new Subject();
newsFeed.subscribe(data => console.log(`User A received: ${data}`));
newsFeed.subscribe(data => console.log(`User B received: ${data}`));

newsFeed.notify("New Article Published!"); 
// "User A received: New Article Published!"
// "User B received: New Article Published!"
```

### 10.2 Functional Programming (FP)
FP is a style of programming where you build software by composing **pure functions**, avoiding shared state and mutable data.

**Pure Functions** A function is "pure" if:

1.  It always returns the same output for the same input.
    
2.  It has no side effects (it doesn't change variables outside itself).
    

```JavaScript
// Impure: Depends on outside variable
let tax = 0.5;
const calculateTax = (price) => price + tax; 

// Pure: Self-contained
const addTax = (price, taxRate) => price + taxRate;
console.log(addTax(100, 5)); // 105
```    

**Immutability** Instead of changing (mutating) data, you create a copy with the changes.

> **Metaphor:** It's like **Architectural Versioning**. You don't erase the original blueprint to make a change; you print a "Version 2" so you can always go back to the original if needed.

```JavaScript
const user = { name: "Leo", age: 30 };

// Instead of user.age = 31...
const updatedUser = { ...user, age: 31 }; // Spread operator creates a copy

console.log(user.age);        // 30
console.log(updatedUser.age); // 31
 ```   

**Higher-Order Functions** Functions that take other functions as arguments or return them as results (e.g., `map`, `filter`, `reduce`).

```JavaScript
const numbers = [1, 2, 3];
const square = n => n * n;

const squaredNumbers = numbers.map(square); 
console.log(squaredNumbers); // [1, 4, 9]
```

**Function Composition** The process of combining two or more functions to produce a new function.

```JavaScript
const trim = str => str.trim();
const capitalize = str => str.toUpperCase();

// Composition: applying one after the other
const result = capitalize(trim("  hello  "));
console.log(result); // "HELLO"
```

## 11. Web Development Concepts

### 11.1 SPAs (Single Page Applications)
An SPA is a website that interacts with the user by dynamically rewriting the current web page rather than loading entire new pages from a server.

- **Client-Side Rendering (CSR)**: The browser downloads a minimal HTML file and a large JavaScript file. JavaScript then builds the UI on the fly.
  
- **Routing**: Since there is only one physical HTML file, "Routing" is the logic that decides which component to show based on the URL (e.g., `/profile` vs `/settings`).
  
- **State Management**: As apps grow, keeping track of data (is the user logged in? what's in the cart?) becomes hard. State management creates a "Single Source of Truth."Metaphor: It's like a Control Tower at an airport. Instead of every pilot talking to each other, they all talk to the tower to keep the "state" of the runways organized.

### 11.2 RESTful APIs
A standardized way for two computers to communicate over HTTP.Handling Responses
APIs usually return a Status Code:

- `200`: OK (Success)
- `201`: Created
- `404`: Not Found (Client Error)
- `500`: Server Error

(Note: Examples for fetch, XHR, and Axios are in Section 9.3)

### 11.3 Responsive Design & Performance
Making sure the site works on phones, tablets, and desktops.

**Lazy Loading**: Delaying the loading of non-critical resources (like images at the bottom of a page) until they are actually needed.

> Metaphor: It's like a Buffet. They don't cook all 500 trays of food at 8:00 AM. They wait until a tray is almost empty before bringing out the next one to keep it fresh and save space.

```JavaScript
// Lazy loading an image in HTML
// <img src="huge-photo.jpg" loading="lazy" /> 
```

### 11.4 HTTP (HyperText Transfer Protocol)
The foundation of any data exchange on the Web. It is a request-response protocol.

- `GET`: Retrieve data.
- `POST`: Send new data.
- `PUT/PATCH`: Update existing data.
- `DELETE`: Remove data.

### 11.5 WebSocket
Unlike HTTP (where the client must ask for data), WebSockets allow a persistent, two-way connection.Metaphor: HTTP is like a Letter (you send one, wait for a reply). 

WebSocket is like a Phone Call (the line stays open, and both can talk at once).

```JavaScript
const socket = new WebSocket('ws://example.com/socket');
socket.onopen = () => socket.send('Hello Server!');
socket.onmessage = (event) => console.log(`Message: ${event.data}`);
 ```   

### 11.6 Interaction with Python FastAPI

FastAPI is a modern Python framework for building APIs. JavaScript "talks" to FastAPI using fetch or axios.

Python (The Backend):

```Python
# main.py
from fastapi import FastAPI
app = FastAPI()

@app.get("/items/{id}")
def read_item(id: int):
    return {"item_id": id, "status": "active"}
```

JavaScript (The Frontend):
```JavaScript

async function getData(id) {
  const response = await fetch(`http://localhost:8000/items/${id}`);
  const data = await response.json();
  console.log(data.status); // "active"
}

getData(42);
```

## 12. Operators & Advanced Syntax

### 12.1 Spread Operator (`...`)
The spread operator "unpacks" the contents of an array or object into a new one.

> **Metaphor:** Think of a **deck of cards**. Spreading is like taking the cards out of the box and laying them all out individually on the table.

```JavaScript
// Arrays
const fruits = ["Apple", "Banana"];
const moreFruits = [...fruits, "Orange", "Kiwi"]; 
console.log(moreFruits); // ["Apple", "Banana", "Orange", "Kiwi"]

// Objects
const user = { name: "Leo", age: 25 };
const updatedUser = { ...user, city: "NY" };
console.log(updatedUser); // { name: "Leo", age: 25, city: "NY" }
```

### 12.2 Rest Parameters (`...`)

Though it uses the same `...` syntax as spread, **Rest** does the opposite: it gathers multiple individual elements into a single array.

> **Metaphor:** It is the **"and others"** at the end of a guest list. You name the VIPs, and everyone else gets put into a single group.

```JavaScript
function orderPizza(size, ...toppings) {
  console.log(`Size: ${size}`);
  console.log(`Toppings: ${toppings}`); // toppings is an array
}

orderPizza("Large", "Pepperoni", "Mushrooms", "Onions");
// Size: Large
// Toppings: ["Pepperoni", "Mushrooms", "Onions"]

```

### 12.3 Default Parameters
Allows you to set a fallback value for function arguments if they are missing or `undefined`.

```JavaScript
function greet(name = "Guest") {
  return `Hello, ${name}!`;
}

console.log(greet("Alice")); // "Hello, Alice!"
console.log(greet());        // "Hello, Guest!"
```

### 12.4 Iterators & Generators

These are advanced tools for controlling how you loop through data.

**Iterators** An object that knows how to access items from a collection one at a time. It uses a `.next()` method.

**Generators** Special functions that can be **paused** and **resumed**. They are defined with an asterisk `function*` and use the `yield` keyword.

> **Metaphor:** A Generator is like a **Vending Machine**. It doesn't give you all the snacks at once. You press a button (call `.next()`), it gives you one item, and then it waits until you press the button again.

```JavaScript
function* numberGenerator() {
  yield 1;
  yield 2;
  yield 3;
}

const gen = numberGenerator();

console.log(gen.next().value); // 1
console.log(gen.next().value); // 2
console.log(gen.next().value); // 3
console.log(gen.next().done);  // true
```

**Why use Generators?**
*   **Memory Efficiency:** You can represent an infinite sequence without storing it all in memory.
*   **Custom Iteration:** You can define exactly how a loop should behave.


## 13. Performance & Security

### 13.1 Performance Optimization
Performance is about minimizing the time it takes for your code to execute and for the user to see the result.
*   **Minification:** Removing whitespace and comments from code files to reduce file size.
    
*   **Debouncing & Throttling:** Limiting how often a function runs (e.g., don't run a search query on every single keystroke).
    
*   **Tree Shaking:** Removing unused code from your final bundle during the build process.
    

> **Metaphor:** Optimization is like **Backpacking**. You don't bring the whole house; you only pack exactly what you need, and you pack it as tightly as possible to move faster.


### 13.2 Security Best Practices

Security in JavaScript is primarily about preventing unauthorized data access and malicious code execution.

**Input Validation**

Never trust user input. Always check data on both the client and the server.

```JavaScript
function processAge(input) {
  const age = parseInt(input);
  if (isNaN(age) || age < 0) {
    throw new Error("Invalid input!");
  }
  return age;
}
```

**Avoid `eval()` / Function Constructor**

`eval()` executes a string as code. This is extremely dangerous because it can allow hackers to run "injected" scripts.

```JavaScript

    // BAD:
    // eval("console.log('Hacked!')"); 
    
    // GOOD:
    // Use standard functions and logic instead.
```

**Content Security Policy (CSP)**

A security layer that helps detect and mitigate certain types of attacks, including Cross-Site Scripting (XSS). It tells the browser which sources of scripts are "trusted."

**Use HTTPS**

Always serve your site over HTTPS. It encrypts the data moving between the browser and the server.

**CSRF (Cross-Site Request Forgery) Protection**

This prevents attackers from tricking a logged-in user into performing actions they didn't intend to. This usually involves using "CSRF Tokens" that the server verifies.

**Secure Cookie Usage**

When saving cookies, use flags to protect them:

*   `HttpOnly`: Prevents JavaScript from reading the cookie (stops XSS).
    
*   `Secure`: Only sends the cookie over HTTPS.
    
*   `SameSite`: Prevents the cookie from being sent with cross-site requests.
    

**Avoid Inline JavaScript**

Don't put JavaScript inside HTML tags (like `onclick="..."`). Use `addEventListener` in a separate file. This makes it easier to apply security policies.

**Use Strict Mode**

Adding `"use strict";` at the top of your script helps catch common coding mistakes and prevents the use of "unsafe" features.

```JavaScript

"use strict";
// x = 10; // Error: x is not defined (prevents accidental global variables)
```
**Regular Updates & Dependency Management**

If you use libraries (like React or Axios), check them for vulnerabilities regularly using tools like `npm audit`.

### Summary Checklist

| Practice | Purpose |
| --- | --- |
| Debouncing | Performance: Reduce function calls |
| Input Validation | Security: Prevent bad data/injection |
| HttpOnly Cookies | Security: Protect against session theft |
| Minification | Performance: Smaller file downloads |


## 14. Testing & Debugging

### 14.1 Testing
Testing is the process of verifying that your code behaves as expected.

**Test-Driven Development (TDD)**
TDD is a workflow where you write the test **before** you write the actual code.

> **Metaphor:** TDD is like building a **Shape Sorter** toy. You create the hole (the test) first, then you carve the block (the code) until it fits perfectly through the hole.

**The TDD Cycle:**

1.  **Red:** Write a test for a small bit of functionality and watch it fail.
    
2.  **Green:** Write just enough code to make the test pass.
    
3.  **Refactor:** Clean up the code while ensuring the test stays green.
    

**Example (using a hypothetical testing syntax):**

```JavaScript

// 1. The Test (Red)
test('adds 1 + 2 to equal 3', () => {
  expect(add(1, 2)).toBe(3);
}); // Result: FAIL (add is not defined)

// 2. The Code (Green)
function add(a, b) {
  return a + b;
} // Result: PASS

// 3. Refactor
// Code is already simple/clean.

```

### 14.2 Debugging
Debugging is the art of finding and squashing "bugs" (errors) in your code.

**Tools & Techniques**

**1. Console Methods**

Beyond `console.log()`, there are specialized tools:

```JavaScript
console.table([{name: "Leo", age: 30}, {name: "Sara", age: 25}]); // Displays data in a nice table
console.time("Timer"); // Starts a timer
// ... some code
console.timeEnd("Timer"); // Stops timer and shows elapsed time // Timer: 0.12ms
```

**2. The `debugger` Keyword**

If you place `debugger;` in your code, the browser will automatically pause execution at that line, allowing you to inspect variables.

```JavaScript
function complexMath(x) {
  let result = x * 2;
  debugger; // Browser pauses here!
  return result;
}
```

**3. Browser DevTools**

Most modern browsers (Chrome, Firefox, Edge) have a "Sources" or "Debugger" tab.

*   **Breakpoints:** Click a line number to pause code there.
    
*   **Watch Expressions:** Monitor specific variables as they change.
    
*   **Call Stack:** See the history of function calls that led to the current point.
    

**4. Error Types**

Understanding the error message is half the battle:

*   **ReferenceError:** You’re using a variable that hasn't been declared.
    
*   **TypeError:** You’re trying to do something impossible (like calling a string as a function).
    
*   **SyntaxError:** You made a typo in the code structure.
  

### Debugging Checklist

## | Step | Action |
| --- | --- |
| Reproduce | Find the exact steps that cause the bug. |
| Isolate | Comment out code to find the specific failing line. |
| Inspect | Use console.log or debugger to check variable values. |
| Fix & Verify | Apply the fix and run your tests to ensure nothing else broke. |

## 15. Error Handling

### 15.1 The Error Object

When an error occurs, JavaScript creates an object containing details about what happened.

*   **name:** The type of error (e.g., `ReferenceError`).
    
*   **message:** A human-readable description.
    
*   **stack:** The "paper trail" of which functions were called leading up to the crash.
    

```JavaScript
try {
  let x = y + 10; // y is not defined
} catch (err) {
  console.log(err.name);    // "ReferenceError"
  console.log(err.message); // "y is not defined"
}
```

### 15.2 Implementing Proper Error Handling

**1. Anticipate Failures (The "Defensive" approach)** Don't wait for JavaScript to throw an error. Use `throw` to create your own when logic requirements aren't met.

> **Metaphor:** It’s like a **Bouncer at a club**. The bouncer doesn't wait for someone to break a glass inside; they check the ID at the door and "throw" them out immediately if they aren't of age.

```JavaScript
function withdrawMoney(amount, balance) {
  if (amount > balance) {
    throw new Error("Insufficient funds"); // Custom error
  }
  return balance - amount;
}

try {
  withdrawMoney(1000, 500);
} catch (e) {
  console.error(e.message); // "Insufficient funds"
}
```

**2. Asynchronous Error Handling** Errors inside Promises or `async` functions won't be caught by a standard `try...catch` unless you use `await`.

```JavaScript

// WRONG: try/catch around the promise without await
try {
  Promise.reject("Fail!");
} catch (e) {
  // This will NOT run
}

// RIGHT: Using async/await
async function fetchData() {
  try {
    let response = await fetch("https://invalid-url.com");
  } catch (err) {
    console.log("Caught network error!"); // "Caught network error!"
  }
}
```

**3. Global Error Handlers** For the errors you forget to catch, the browser provides a "last line of defense."

```JavaScript
window.onerror = function(message, source, lineno) {
  console.log(`Global error caught: ${message}`);
  return true; // Prevents the default browser error log
};
```

### 15.3 Error Handling Best Practices

*   **Be Specific:** Catch specific errors rather than a "catch-all" if you can.
    
*   **Don't Swallow Errors:** Never leave a `catch` block empty (`catch (e) {}`). At the very least, log the error so you know it happened.
    
*   **Clean Up:** Use the `finally` block to close database connections or hide "Loading" spinners, regardless of whether the task succeeded or failed.
    
*   **Provide Feedback:** Instead of showing the user a technical error code, show a friendly message like _"Oops! Something went wrong with the connection. Please try again."_
    
