const buttonsDigit = document.querySelectorAll(".button-digit");
const buttonsOperator = document.querySelectorAll(".button-operator");
const buttonDelete = document.getElementsByClassName("button-delete");
const buttonsDigitArray = Array.from(buttonsDigit);
const buttonsOperatorArray = Array.from(buttonsOperator);
const buttonDeleteArray = Array.from(buttonDelete);

const displayScreen = document.getElementById("display-screen");
const displayScreenArray = Array.from(displayScreen);

let count = 0;
displayScreen.innerText = "0";
let firstValue = ["0"];
let secondValue = ["0"];
let currentOperator;
let result = 0;

function reset() {
    firstValue = ["0"];
    secondValue = ["0"];
    currentOperator = undefined;
    result = 0;
    displayScreen.innerText = "0";
    return;
}


function equals(a, b, ope) {
    if (ope === "+") {
        console.log(a + b)
        result = a + b;
        if (isNaN(result) === true) {
            return;
        }
        return firstValue = result;
    } else if (ope === "-") {
        console.log(a - b)
        result = a - b;
        if (isNaN(result) === true) {
            return;
        }
        return firstValue = result;
    } else if (ope === "*") {
        console.log(a * b)
        result = a * b;
        if (isNaN(result) === true) {
            return;
        }
        return firstValue = result;
    } else if (ope === "÷") {
        console.log(a / b)
        result = a / b;
        if (isNaN(result) === true) {
            return;
        }
        return firstValue = result;
    } else if (ope === "=") {
        if (currentOperator = "+") {
            console.log(a + b)
            result = a + b;
            if (isNaN(result) === true) {
                return;
            }
            return firstValue = result;
        } else if (currentOperator === "-") {
            console.log(a - b)
            result = a - b;
            if (isNaN(result) === true) {
                return;
            }
            return firstValue = result;
        } else if (currentOperator === "*") {
            console.log(a * b)
            result = a * b;
            if (isNaN(result) === true) {
                return;
            }
            return firstValue = result;
        } else if (currentOperator === "÷") {
            console.log(a / b)
            result = a / b;
            if (isNaN(result) === true) {
                return;
            }
            return firstValue = result;
        }
    }
}

buttonsDigit.forEach((element) =>  {
    element.addEventListener("click", () => {
        if (typeof(firstValue) === "object" && currentOperator === undefined) {
            if (element.value === ".") {
                if (firstValue.includes(".", 0)) {
                    return;
                }
            }
        } if (currentOperator != undefined && typeof(secondValue) === "object") {
            if (element.value === ".") {
                if (secondValue.includes(".", 0)) {
                    return;
                }
            }
        }
        if (currentOperator === undefined) {
            firstValue.push(element.value);
            if (displayScreen.textContent === "0" && typeof(firstValue) === "object" && secondValue.length < 2) {
                return displayScreen.textContent = element.value;
            }
            if (firstValue.includes(element.value, 0) && typeof(firstValue) === "object" && secondValue.length < 2) {
                displayScreen.textContent += element.value;
            }
        } if (currentOperator != undefined) {
            secondValue.push(element.value);
            if (secondValue.length === 2 && typeof(firstValue) === "object") {
                return displayScreen.textContent = element.value;
            }
            if (secondValue.includes(element.value, 0) && typeof(firstValue) === "object") {
                displayScreen.textContent += element.value;
            }
        } 
    });
});

buttonsOperatorArray.forEach((element => {
    element.addEventListener("click", () => {
        if (currentOperator === undefined) {
            return currentOperator = element.value;
        }
        if (element.value === "clear") {
            return reset();
        }
        if (firstValue.length === 0 && secondValue.length === 0 && currentOperator === undefined) {
            return;
        } else if (currentOperator != undefined && typeof(firstValue) === "object") {
            firstValue = firstValue.join("");
            secondValue = secondValue.join("");
            firstValue = parseFloat(firstValue);
            secondValue = parseFloat(secondValue);
            equals(firstValue, secondValue, currentOperator);
            currentOperator = element.value;
            secondValue = [];
        } else if (typeof(firstValue) === "number" && typeof(secondValue) === "object") {
            secondValue = secondValue.join("");
            secondValue = parseFloat(secondValue);
            equals(firstValue, secondValue, currentOperator);
            currentOperator = element.value;
            secondValue = [];
        }

    });
}))

