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



const content = document.querySelector("#content");


const display = document.createElement("div");
display.id = "display";
display.value = "";
content.appendChild(display);
const btns = document.createElement("div");

//make display functional, and capable storing a value to variable
//make operators function on display
//add a clear button
for(i = 9; i >= 0; i--) {
    // if(i == 9 | i == 6 | i == 3 | i == 0) {
        
    // }
    const digit = document.createElement("button");
    digit.id = i;
    digit.value = i;
    digit.textContent = i;
    digit.addEventListener("click", function (e) {
        if(operator == "=") {
            //reset display
            document.getElementById("display").value = "";
            document.getElementById("display").textContent = document.getElementById("display").value;
            a = undefined;
            operator = "unupd";
        }
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
    if(["+", "-", "x", "/"].includes(operator)) {
        //do equals functionality
        b = document.getElementById("display").value; //value of display after operator press
        // operator = "/";
        console.log(a + " " + operator + " " + b + "=");
        total = operate(a,b, operator); //make sure operator changes value with above button presses
        //display value
        a = total;
        document.getElementById("display").value = "";
        document.getElementById("display").textContent = a;
    } else {
        // if(a == undefined) {
            
        // }
        a = document.getElementById("display").value;
        operator = "+";
        //empty display
        document.getElementById("display").value = "";
        document.getElementById("display").textContent = document.getElementById("display").value;
    }
    
    //fill b if pressed again
})
const minus = document.createElement("button");
minus.textContent = "-";
minus.addEventListener("click", ()=> {
    if(["+", "-", "x", "/"].includes(operator)) {
        //do equals functionality
        b = document.getElementById("display").value; //value of display after operator press
        // operator = "/";
        console.log(a + " " + operator + " " + b + "=");
        total = operate(a,b, operator); //make sure operator changes value with above button presses
        //display value
        a = total;
        document.getElementById("display").value = "";
        document.getElementById("display").textContent = a;
    } else {
        // if(a == undefined) {
            
        // }
        a = document.getElementById("display").value;
        operator = "-";
        //empty display
        document.getElementById("display").value = "";
        document.getElementById("display").textContent = document.getElementById("display").value;
    }
})
const mult = document.createElement("button");
mult.textContent = "x";
mult.addEventListener("click", ()=> {
    if(["+", "-", "x", "/"].includes(operator)) {
        //do equals functionality
        b = document.getElementById("display").value; //value of display after operator press
        // operator = "/";
        console.log(a + " " + operator + " " + b + "=");
        total = operate(a,b, operator); //make sure operator changes value with above button presses
        //display value
        a = total;
        document.getElementById("display").value = "";
        document.getElementById("display").textContent = a;
    } else {
        // if(a == undefined) {
            
        // }
        a = document.getElementById("display").value;
        operator = "x";
        //empty display
        document.getElementById("display").value = "";
        document.getElementById("display").textContent = document.getElementById("display").value;
    }
})
const div = document.createElement("button");
div.textContent = "/";
div.addEventListener("click", ()=> {
    if(["+", "-", "x", "/"].includes(operator)) {
        //do equals functionality
        b = document.getElementById("display").value; //value of display after operator press
        // operator = "/";
        console.log(a + " " + operator + " " + b + "=");
        total = operate(a,b, operator); //make sure operator changes value with above button presses
        //display value
        a = total;
        document.getElementById("display").value = "";
        document.getElementById("display").textContent = a;
    } else {
        // if(a == undefined) {
            
        // }
        a = document.getElementById("display").value;
        operator = "/";
        //empty display
        document.getElementById("display").value = "";
        document.getElementById("display").textContent = document.getElementById("display").value;
    }
})

const equal = document.createElement("button");
equal.textContent = "=";
equal.addEventListener("click", ()=> {
    if(operator == "=") {
        total = document.getElementById("display").value;
    } else {
        b = document.getElementById("display").value; //value of display after operator press
        // operator = "/";
        console.log(a + " " + operator + " " + b + "=");
        total = operate(a,b, operator);
    }
    operator = "=";
    document.getElementById("display").value = total;
    document.getElementById("display").textContent = total;
    // a = total; //reset values after pressing, add functionality where pressing an operator after equals will keep the total as a;
    b = undefined;
    // a = total;
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