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
























