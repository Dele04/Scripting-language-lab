let numbers = [10, 40, 0, 20, 50];

function divide(a, b) {
  if (b === 0) {
    throw new Error("Division by zero is not allowed.");
  }
  return a / b;
}

for (let i = 0; i < numbers.length; i++) {
  try {
    let result = divide(1000, numbers[i]);
    console.log(`1000 / ${numbers[i]} = ${result}`);
  } catch (error) {
    //print the message from the exception and continue
    console.log(`Error: ${error.message}`);
  }
}
