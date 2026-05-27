function add() {
    makeOperation("+");
}

function sub() {
    makeOperation("-");
}

function mul() {
    makeOperation("*");
}

function div() {
    makeOperation("/");
}

function pow() {
    makeOperation("^");
}

function makeOperation(operationKind) {
    const num1Str = document.getElementById("num1").value;
    const num2Str = document.getElementById("num2").value;
    const num1 = parseInt(num1Str);
    const num2 = parseInt(num2Str);

    let result = 0;

    if (operationKind === "+") {
        result = num1 + num2;
    } else if (operationKind === "-") {
        result = num1 - num2;
    } else if (operationKind === "*") {
        result = num1 * num2;
    } else if (operationKind === "/") {
        if (num2 === 0) {
            result = "Error";
        } else {
            result = num1 / num2;
        }
    } else if (operationKind === "^") {
        result = Math.pow(num1, num2);
    }

    document.getElementById("display").value = result;
}
