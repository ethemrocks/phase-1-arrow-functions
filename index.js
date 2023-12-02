
// Function expression called divide
const divide = function(a, b) {
    return a / b;
  };
  
  // Arrow function called square
  const square = (x) => {
    return x * x;
  };
  
  // Arrow function called add
  const add = (a, b) => {
    return a + b;
  };
  
  // Export functions if needed (assuming you are using CommonJS modules)
  module.exports = {
    divide,
    square,
    add,
  };
  