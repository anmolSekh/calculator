function add(x, y) {
    return x + y;
}

function subtract(x, y) {
    return x - y;
}

function multiply(x, y) {
    return x * y
}

function divide(x, y) {
    return x/y;
}

function operate(x,y, op) {
    
    switch (op) {
        case ("+"):
            return(add(x,y));
            break;
        case ("-"):
            return(subtract(x,y));
            break;
        case ("x"):
            return(multiply(x,y));
            break;
        case ("/"):
            return(divide(x,y));
            break;
        default:
            return "ERROR";
        
    }
        
}

let a = 5;

let b = 3;

let total = 0;

let operator = "unupd";

// total = operate(a,b, " ");

const content = document.querySelector("#content");

// let digit = 9;
// const row = document.createElement("div");
const display = document.createElement("div");
display.id = "display";
display.textContent="123"; //instead maybe input box
// const nums = document.createElement("div");
// nums.textContent = "123";
// nums.id = "nums";
// display.appendChild(nums);
content.appendChild(display);
const btns = document.createElement("div");
for(i = 9; i >= 0; i--) {
    // if(i == 9 | i == 6 | i == 3 | i == 0) {
        
    // }
    const digit = document.createElement("button");
    digit.id = i;
    digit.value = i;
    digit.textContent = i;
    digit.addEventListener("click", function (e) {
        console.log(e.target.value);
    })
    btns.appendChild(digit);
}
const plus = document.createElement("button");
plus.textContent = "+";
plus.addEventListener("click", ()=> {
    operator = "+";
})
const minus = document.createElement("button");
minus.textContent = "-";
minus.addEventListener("click", ()=> {
    operator = "-";
})
const mult = document.createElement("button");
mult.textContent = "x";
mult.addEventListener("click", ()=> {
    operator = "x";
})
const div = document.createElement("button");
div.textContent = "/";
div.addEventListener("click", ()=> {
    operator = "/";
})

const equal = document.createElement("button");
equal.textContent = "=";
equal.addEventListener("click", ()=> {
    // operator = "/";
    console.log(operator);
    total = operate(a,b, operator); //make sure operator changes value with above button presses
})
console.log(total);
btns.appendChild(plus);
btns.appendChild(minus);
btns.appendChild(mult);
btns.appendChild(div);
btns.appendChild(equal);
content.appendChild(btns);

// const 
// content.
// total = operate(a,b);