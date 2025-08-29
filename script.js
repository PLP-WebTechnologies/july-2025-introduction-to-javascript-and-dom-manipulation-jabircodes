
// Part 1: JS Basics (Variables & Conditionals)

let userName = prompt("Enter your name:");
let userAge = parseInt(prompt("Enter your age:"));

// Conditional Logic for age capturing and display
let greetingMessage = "";
if (userAge >= 18) {
  greetingMessage = `Hello ${userName}, you are an adult.`;
} else {
  greetingMessage = `Hello ${userName}, you are a minor. Be careful on the Internet!!`;
}

// Output to DOM
document.getElementById("greeting").textContent = greetingMessage;


// Part 2: JS Functions


// Function 1: Sum of two numbers
function calculateSum(a, b) {
  return a + b;
}

// Function 2: Format a string
function formatString(str) {
  return str.toUpperCase();
}

// Event Listener for sum button
document.getElementById("sumBtn").addEventListener("click", () => {
  let num1 = parseInt(prompt("Enter first number:"));
  let num2 = parseInt(prompt("Enter second number:"));
  let sum = calculateSum(num1, num2);
  document.getElementById("sumResult").textContent = `Sum is: ${sum}`;
});

// Part 3: JS Loops

// Example 1: For loop
function displayNumbers() {
  let list = document.getElementById("numberList");
  list.innerHTML = ""; // clear previous content
  for (let i = 1; i <= 5; i++) {
    let li = document.createElement("li");
    li.textContent = `Number: ${i}`;
    list.appendChild(li);
  }
}

// Example 2: While loop (log countdown)
function countdown(start) {
  while (start >= 0) {
    console.log(`Countdown: ${start}`);
    start--;
  }
}

// Event listener for loop button
document.getElementById("loopBtn").addEventListener("click", () => {
  displayNumbers();
  countdown(5);
});


// Part 4: DOM Manipulation


// Example 1: Toggle class on click
document.getElementById("toggleBtn").addEventListener("click", () => {
  let text = document.getElementById("toggleText");
  text.classList.toggle("color-change");
});

// Example 2: Change text on hover
document.getElementById("toggleText").addEventListener("mouseover", () => {
  document.getElementById("toggleText").textContent = "You hovered over me!";
});

document.getElementById("toggleText").addEventListener("mouseout", () => {
  document.getElementById("toggleText").textContent = "Clicking the button changes my color!";
});

// Example 3: Creating element dynamically
let newPara = document.createElement("p");
newPara.textContent = formatString("This is a new paragraph created with JavaScript!");
document.body.appendChild(newPara);
