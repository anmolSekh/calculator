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

let a = undefined; //fill this

let b = undefined; //fill this

let total = 0;

let operator = "unupd";

// total = operate(a,b, " ");

const content = document.querySelector("#content");

// let digit = 9;
// const row = document.createElement("div");
const display = document.createElement("div");
display.id = "display";
display.value = "";
// display.textContent="123"; //instead maybe input box
// const nums = document.createElement("div");
// nums.textContent = "123";
// nums.id = "nums";
// display.appendChild(nums);
content.appendChild(display);
const btns = document.createElement("div");

//make display functional, and capable storing a value to variable
//make operators function on display
for(i = 9; i >= 0; i--) {
    // if(i == 9 | i == 6 | i == 3 | i == 0) {
        
    // }
    const digit = document.createElement("button");
    digit.id = i;
    digit.value = i;
    digit.textContent = i;
    digit.addEventListener("click", function (e) {
        //if display contains total do not append to total;
        let old = document.getElementById("display").value;
        // console.log(old);
        document.getElementById("display").value = parseInt("" + old + e.target.value);
        // console.log()
        document.getElementById("display").textContent = document.getElementById("display").value;
        // console.log(e.target.value);
    })
    btns.appendChild(digit);
}
const plus = document.createElement("button");
plus.textContent = "+";
plus.addEventListener("click", ()=> {
    a = document.getElementById("display").value;
    operator = "+";
    document.getElementById("display").value = "";
    document.getElementById("display").textContent = document.getElementById("display").value;
})
const minus = document.createElement("button");
minus.textContent = "-";
minus.addEventListener("click", ()=> {
    a = document.getElementById("display").value;
    operator = "-";
    document.getElementById("display").value = "";
    document.getElementById("display").textContent = document.getElementById("display").value;
    // console.log(a);
})
const mult = document.createElement("button");
mult.textContent = "x";
mult.addEventListener("click", ()=> {
    a = document.getElementById("display").value;
    operator = "x";
    document.getElementById("display").value = "";
    document.getElementById("display").textContent = document.getElementById("display").value;
})
const div = document.createElement("button");
div.textContent = "/";
div.addEventListener("click", ()=> {
    a = document.getElementById("display").value;
    operator = "/"; // this should also do equals functionality;
    document.getElementById("display").value = "";
    document.getElementById("display").textContent = document.getElementById("display").value;
})

const equal = document.createElement("button");
equal.textContent = "=";
equal.addEventListener("click", ()=> {
    b = document.getElementById("display").value; //value of display after operator press
    // operator = "/";
    console.log(a + " " + operator + " " + b + "=");
    total = operate(a,b, operator); //make sure operator changes value with above button presses
    document.getElementById("display").value = total;
    document.getElementById("display").textContent = document.getElementById("display").value;
    // a = total; //display total;
    console.log(total);
})

btns.appendChild(plus);
btns.appendChild(minus);
btns.appendChild(mult);
btns.appendChild(div);
btns.appendChild(equal);
content.appendChild(btns);

// const 
// content.
// total = operate(a,b);