function div(a, b) {
    if (b === 0) {
        throw new RangeError("Division by zero is not allowed.");
    }
    return a / b;
}


//valid division
try {
    console.log("Result of 10 / 2:", div(10, 2));
} catch (error) {
    console.error(error.message);
}

//division by zero
try {
    console.log("Result of 10 / 0:", div(10, 0));
} catch (error) {
    console.error("Caught expected error:", error.name + ": " + error.message);
}
