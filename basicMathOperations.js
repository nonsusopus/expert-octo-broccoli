// Basic math operations exported as funtions 

// Function to add two numbers 
function add(a, b) {
    return a + b;
}

// Function to subtract two numbers 
function subtract(a, b) {
    return a - b;
}

// Function to multiply two numbers 
function multiply(a, b) {
    return a * b;
}

// Function to divide two numbers 
function divide(a, b) {
    return a / b; 
}

// Exporting the functions 
module.exports = {
  add, 
  subtract,
  multiply,
  divide,
};
