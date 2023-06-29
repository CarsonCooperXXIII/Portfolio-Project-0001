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

btnEqual.addEventListener('click', function(){
    form1.answer.value = eval(form1.answer.value);
})

btnClear.addEventListener('click', function(){
    form1.answer.value = '';
})