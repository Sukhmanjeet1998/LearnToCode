// node ChaiAurCode/Javascript/Code/24_iife.js
// Immediately invoked function expression IIFE

// ()()  function defination + function invoke

// named IIFE
// function declaration
(function connectDB() {
    console.log("Database Connected successfully!");
})();

// unnamed IIFE
// Arrow function
( (name) => {
    console.log("Database Connected successfully! "+name);
})("Sir");

/*
IIFE stands for Immediately Invoked Function Expression. It's a design pattern in JavaScript where a function is declared and invoked immediately after being defined. Here are a few reasons why IIFE is commonly used:

Encapsulation: IIFE helps to encapsulate variables within its scope, preventing them from polluting the global namespace. This is particularly useful in preventing naming conflicts and unintended interactions between different parts of the code.

Data Privacy: Variables declared within an IIFE are scoped to the function and are not accessible from outside the function. This provides a level of data privacy, as the variables cannot be modified or accessed from other parts of the codebase.

Isolation: By creating a new scope for each IIFE, you can isolate parts of your code from the rest of the application. This can be helpful in scenarios where you want to protect certain variables or functions from being modified by other parts of the code.

Module Pattern: IIFE is often used in conjunction with the module pattern to create modular and reusable code. By wrapping related functionality within an IIFE, you can create self-contained modules that expose only the necessary interface to the outside world.

Initialization: IIFE can be used to initialize variables, set up event listeners, or perform any other one-time setup tasks when the script is loaded. This ensures that the initialization code runs immediately and doesn't need to be explicitly called from elsewhere in the code.
*/