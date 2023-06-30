// Add keyboard event handlers to process any keys the user might press in the calculator display. Did the user enter a number, a letter, or an operator? If the user presses Enter, run the calculation.

document.addEventListener('keydown', function(event) {
    var key = event.key;
    var display = form1.answer;

    if (isNumeric(key)) {
        display.value += key;
    } else if (isOperator(key)) {
        display.value += key;
    } else if (key === 'Enter') {
        display.value = eval(display.value);
    }
});

function isNumeric(key){
    return !isNaN(parseFloat(key)) && isFinite(key);
}

function isOperator(key){
    return key === '+' || key === '-' || key === '*' || key === '/' || key === '%';
}

// Select the button element using its id 
var btn1 = document.getElementById('btn1');
var btn2 = document.getElementById('btn2');
var btn3 = document.getElementById('btn3');
var btnPlus = document.getElementById('btnPlus');

var btn4 = document.getElementById('btn4');
var btn5 = document.getElementById('btn5');
var btn6 = document.getElementById('btn6');
var btnMinus = document.getElementById('btnMinus');

var btn7 = document.getElementById('btn7');
var btn8 = document.getElementById('btn8');
var btn9 = document.getElementById('btn9');
var btnMultiply = document.getElementById('btnMultiply');

var btnDivide = document.getElementById('btnDivide');
var btn0 = document.getElementById('btn0');
var btnDot = document.getElementById('btnDot');

var btnEqual = document.getElementById('btnEqual');
var btnClear = document.getElementById('btnClear');



// Add event listener to the button
btn1.addEventListener('click', function(){
    form1.answer.value += '1';
});

btn2.addEventListener('click', function(){
    form1.answer.value += '2';
});

btn3.addEventListener('click', function(){
    form1.answer.value += '3';
});

btnPlus.addEventListener('click', function(){
    form1.answer.value += '+';
});

btn4.addEventListener('click', function(){
    form1.answer.value += '4';
});

btn5.addEventListener('click', function(){
    form1.answer.value += '5';
});

btn6.addEventListener('click', function(){
    form1.answer.value += '6';
});

btnMinus.addEventListener('click', function(){
    form1.answer.value += '-';
})

btn7.addEventListener('click', function(){
    form1.answer.value += '7';
})

btn8.addEventListener('click', function(){
    form1.answer.value += '8';
})

btn9.addEventListener('click', function(){
    form1.answer.value += '9';
})

btnMultiply.addEventListener('click', function(){
    form1.answer.value += '*';
})

btnDivide.addEventListener('click', function(){
    form1.answer.value += '/';
})

btn0.addEventListener('click', function(){
    form1.answer.value += '0';
})

btnDot.addEventListener('click', function(){
    form1.answer.value += '.';
})

// btnEqual.addEventListener('click', function(){
//     form1.answer.value = eval(form1.answer.value);
// })

btnEqual.addEventListener('click', function(){
    try {
        var result = math.evaluate(form1.answer.value);
        form1.answer.value = result;
    } catch (error){
        console.log('Error', error);
    }
});

btnClear.addEventListener('click', function(){
    form1.answer.value = '';
})
