const buttonsDigit = document.querySelectorAll(".button-digit");
const buttonsOperator = document.querySelectorAll(".button-operator");
const buttonDelete = document.getElementsByClassName("button-delete");
const buttonsDigitArray = Array.from(buttonsDigit);
const buttonsOperatorArray = Array.from(buttonsOperator);
const buttonDeleteArray = Array.from(buttonDelete);

const limit = document.getElementsByClassName("limit");
const displayScreen = document.getElementById("display-screen");

displayScreen.innerText = "0";
let firstValue = ["0"];
let secondValue = ["0"];
let currentOperator;
let result = 0;
let displayToNumber;

function reset() {
    firstValue = ["0"];
    secondValue = ["0"];
    currentOperator = undefined;
    displayToNumber = undefined;
    result = 0;
    displayScreen.innerText = "0";
    return;
}

function equals(a, b, ope) {
    if (ope === "+") {
        console.log(a + b)
        result = a + b;
        if (isNaN(result)) {
            return;
        }
        return firstValue = result;
    } else if (ope === "-") {
        console.log(a - b)
        result = a - b;
        if (isNaN(result)) {
            return;
        }
        return firstValue = result;
    } else if (ope === "*") {
        console.log(a * b)
        result = a * b;
        if (isNaN(result)) {
            return;
        }
        return firstValue = result;
    } else if (ope === "÷") {
        console.log(a / b)
        result = a / b;
        if (isNaN(result)) {
            return;
        }
        return firstValue = result;
    } else if (ope === "=") {
        if (currentOperator = "+") {
            console.log(a + b)
            result = a + b;
            if (isNaN(result)) {
                return;
            }
            return firstValue = result;
        } else if (currentOperator === "-") {
            console.log(a - b)
            result = a - b;
            if (isNaN(result)) {
                return;
            }
            return firstValue = result;
        } else if (currentOperator === "*") {
            console.log(a * b)
            result = a * b;
            if (isNaN(result)) {
                return;
            }
            return firstValue = result;
        } else if (currentOperator === "÷") {
            console.log(a / b)
            result = a / b;
            if (isNaN(result)) {
                return;
            }
            return firstValue = result;
        }
    }
}

buttonsDigit.forEach((element) =>  {
    element.addEventListener("click", () => {
        for (let i = 0; i < limit.length; i++) {
            if (limit[i].className == "limit") {
                limit[i].innerHTML = limit[i].innerHTML.substring(0,14)
            }
        }
        if (displayScreen.textContent === ":)") {
            reset();
        }
        if (element.value === "0" && typeof(firstValue) != "object" && currentOperator != undefined && secondValue.length === 0){
            return;
        }
        if (element.value === "0" && typeof(firstValue) === "object" && currentOperator === undefined && firstValue.length === 1) {
            return;
        }
        if (element.value === "0" && typeof(firstValue) === "object" && currentOperator != undefined && secondValue.length === 1) {
            return;
        }
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
            if (firstValue.length === 14) {
                return;
            }
            firstValue.push(element.value);
            if (element.value === "." && displayScreen.textContent === "0" && typeof(firstValue) === "object" && secondValue.length < 2 && currentOperator === undefined) {
                return displayScreen.textContent = "0.";
            }
            if (displayScreen.textContent === "0" && typeof(firstValue) === "object" && secondValue.length < 2) {
                return displayScreen.textContent = element.value;
            }
            if (firstValue.includes(element.value, 0) && typeof(firstValue) === "object" && secondValue.length < 2) {
                displayScreen.textContent += element.value;
            }
        } if (currentOperator != undefined) {
            if (secondValue.length === 14) {
                return;
            }
            secondValue.push(element.value);
            if (element.value === "." && currentOperator != undefined && result != 0 && secondValue.length === 1 && displayToNumber != displayScreen.textContent) {
                return displayScreen.textContent = "0.";
            }
            if (element.value === "." && currentOperator != undefined && result === 0 && secondValue.length === 2) {
               return displayScreen.textContent = "0.";
            }
            if (secondValue.length === 2 && typeof(firstValue) === "object") {
                return displayScreen.textContent = element.value;
            }
            if (secondValue.includes(element.value, 0) && typeof(firstValue) === "object") {
                displayScreen.textContent += element.value;
            }
        }  
        if (+displayScreen.textContent === result || result != 0) {
            if (secondValue.length <= 1) {
                return displayScreen.textContent = element.value;
            }
            if (secondValue.length >= 1) {
                displayScreen.textContent += element.value;
            }
        }
    });
});

buttonsOperatorArray.forEach((element => {
    element.addEventListener("click", () => {
        if (typeof(firstValue) === "object" && firstValue.length === 1 && element.value === "-") {
            currentOperator = undefined;
            firstValue = firstValue.splice(1, 0, "-")
            displayScreen.textContent = element.value;
            return firstValue.push(element.value)
        }
        if (currentOperator === "÷" && typeof(firstValue) === "object" && secondValue.length === 1 || +displayScreen.textContent === 0) {
            reset()
            displayScreen.textContent = ":)";
        }
        if (element.value === "clear" && element.value != "delete") {
            return reset();
        }
        if (firstValue.length === 1 && currentOperator === undefined) {
            return;
        }
        if (secondValue.length === 0) {
            if (element.value === "=") {
                return;
            } else {
                return currentOperator = element.value;
            }
        }
        if (element.value === "delete") {
            if (firstValue.length > 1 && typeof(firstValue) === "object" && secondValue.length === 1 && currentOperator === undefined) {
                displayScreen.textContent = displayScreen.innerText.slice(0, -1);
                if (displayScreen.textContent === "") {
                    firstValue.pop();
                    return displayScreen.textContent = "0";
                }
                return firstValue.pop();
            } if (currentOperator != undefined && secondValue.length > 1) {
                displayScreen.textContent = displayScreen.innerText.slice(0, -1);
                if (displayScreen.textContent === "") {
                    secondValue.pop();
                    return displayScreen.textContent = "0";
                }
                return secondValue.pop(); 
            } if (+displayScreen.textContent === result || result != 0) {
                displayScreen.textContent = displayScreen.innerText.slice(0, -1);
                if (displayScreen.textContent === "") {
                    secondValue.pop();
                    return displayScreen.textContent = "0";
                }
            }
        }
        if (currentOperator === undefined && element.value != "delete") {
            return currentOperator = element.value;
        }
        if (firstValue.length === 0 && secondValue.length === 0 && currentOperator === undefined && element.value != "delete") {
            return;
        } else if (currentOperator != undefined && typeof(firstValue) === "object" && element.value != "delete") {
            firstValue = firstValue.join("");
            secondValue = secondValue.join("");
            firstValue = parseFloat(firstValue);
            secondValue = parseFloat(secondValue);
            equals(firstValue, secondValue, currentOperator);
            secondValue = [];
            displayScreen.textContent = result;
            for (let i = 0; i < limit.length; i++) {
                if (limit[i].className == "limit") {
                    limit[i].innerHTML = limit[i].innerHTML.substring(0,14)
                }
            }
        } else if (typeof(firstValue) === "number" && typeof(secondValue) === "object" && element.value != "delete") {
            secondValue = secondValue.join("");
            secondValue = parseFloat(secondValue);
            equals(firstValue, secondValue, currentOperator);
            currentOperator = element.value;
            secondValue = [];  
            displayScreen.textContent = result;
            for (let i = 0; i < limit.length; i++) {
                if (limit[i].className == "limit") {
                    limit[i].innerHTML = limit[i].innerHTML.substring(0,14)
                }
            }
        }
    });
}))