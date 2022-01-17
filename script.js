
let operator = "";
let num1 = 0;
let num2 = 0;
function add(a, b) {
    
    return a + b;
}
function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a,b) {
    return a/b;
}
displayText = document.querySelector(".display")
function operate(operator, a, b){
    let number;
    switch (operator) {
        case "+":
            number = add(a,b);
            break;
        case "-":
            number = subtract(a, b);
            break;
        case "*":
            number = multiply(a, b);
            break;
        case "/":
            number = divide(a,b);
            break;
    }

    return number;

}
let text = displayText.textContent;
function populateDisplay(num) {
    if (text == "0"){
        text = num;
    } else {
        text = text + num;
    }
        displayText.textContent = text;
}

const DigitButtons = document.querySelectorAll(".digits");

DigitButtons.forEach(element => {
    element.addEventListener("click", () => populateDisplay(element.textContent));
});

const clearButton = document.querySelector(".clear");
const operatorButton = document.querySelectorAll(".operator");

clearButton.addEventListener("click", () => {
    operator = "";
    text = "0";
    displayText.textContent = "0";
})

operatorButton.forEach(element =>{
    element.addEventListener("click", () => {
        
        if (operator == ""){
            operator = element.textContent;
            num1 = parseInt(text);
            text = "0";
        } else { 
            num2 = parseInt(text);
            text = operate(operator,num1,num2);
            console.log(operate(operator,num1,num2));  
            displayText.textContent =  text;
            num1 = text;
            text = "0";
            operator = element.textContent;

            
        }
    })
    
})

equal = document.querySelector(".equal");

equal.addEventListener("click", () => {

    num2 = parseInt(text);
    text = operate(operator,num1,num2);
    console.log(operate(operator,num1,num2));  
    displayText.textContent =  text;
    operator = "";
})