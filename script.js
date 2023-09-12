let display = document.querySelector('#display');
let num;
let num2;
let clear = false;
let operator;
let result;
function numberClicked(number) {
    display.value = display.value + number;
}

function operator_clicked(opp) {
    clear = true
    if (clear == true) {
        num = display.value
        num = Number(num)
        display.value = ''
        clear = false;
        operator = opp;
    }
}
function Delete(opp2) {
    if (opp2 == 'C') {
        display.value = ''
    } else if (opp2 == 'backspace') {
        display.value = display.value.slice(0, -1)
    }
}

function equal_clicked() {
    if (operator == '+') {
        num2 = display.value;
        num2 = Number(num2);
        result = num + num2;
        display.value = result
    } else if (operator == '-') {
        num2 = display.value;
        num2 = Number(num2);
        result = num - num2;
        display.value = result
    } else if (operator == '/') {
        num2 = display.value;
        num2 = Number(num2);
        result = num / num2;
        display.value = result
    } else if (operator == '*') {
        num2 = display.value;
        num2 = Number(num2);
        result = num * num2;
        display.value = result
    } else if(operator == '%') {
        num2 = display.value;
        num2 = Number(num2);
        result = num % num2;
        display.value = result
    } else if (operator == '**') {
        num2 = display.value;
        num2 = Number(num2);
        result = num ** num2;
        display.value = result
    } else if (operator == 'R') {
        result = Math.sqrt(num)
        display.value = result
    }
}


