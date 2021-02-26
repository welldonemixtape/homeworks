// Задание 1

var a = 1,
    b = 1,
    c, d;

c = ++a;
alert(c); // a=2, c=2
d = b++;
alert(d); // d=1 b=2

c = (2 + ++a);
alert(c); // c=2+3=5; a=3
d = (2 + b++);
alert(d); // d=2+2=4; b=3;

alert(a); // 3
alert(b); // 3

// ++a сперва прибавляет к a единицу, затем возвращает значение а.А а++добавляет единицу и возвращает старое значение а.

// Задание 2

var a = 2;
var x = 1 + (a *= 2);

alert(x); //5

// Задание 3

var a = 5;
var b = -3;
if (a && b > 0) { //если a и b положительные, вывести их разность;
    x = a - b;
    alert(x);
} else if (a || b > 0) { //если а и b разных знаков, вывести их сумму; ноль можно считать положительным числом.
    x = a + b;
    alert(x);
} else if (a && b < 0) { //если а и b отрицательные, вывести их произведение;
    x = a * b;
    alert(x);
}

// Задание 4

a = +prompt('Введите число от 1 до 15');
switch (a) {
    case 1:
        alert('Ваше число 1');
        break;
    case 2:
        alert('Ваше число 2');
        break;
    case 3:
        alert('Ваше число 3');
        break;
    case 4:
        alert('Ваше число 4');
        break;
    case 5:
        alert('Ваше число 5');
        break;
    case 6:
        alert('Ваше число 6');
        break;
    case 7:
        alert('Ваше число 7');
        break;
    case 8:
        alert('Ваше число 8');
        break;
    case 9:
        alert('Ваше число 9');
        break;
    case 10:
        alert('Ваше число 10');
        break;
    case 11:
        alert('Ваше число 11');
        break;
    case 12:
        alert('Ваше число 12');
        break;
    case 13:
        alert('Ваше число 13');
        break;
    case 14:
        alert('Ваше число 14');
        break;
    case 15:
        alert('Ваше число 15');
        break;
}

// Задание 5

var a = 2;
var b = 3;

function plus(a, b) {
    return a + b;
}

function minus(a, b) {
    return a - b;
}

function div(a, b) {
    return a / b;
}

function mult(a, b) {
    return a * b;
}

// Задание 6

const operation = 'вычитание';

let arg1 = 3;
let arg2 = 4;

function mathOperation(arg1, arg2, operation) {
    switch (operation) {
        case 'сложение':
            return arg1 + arg2;
        case 'вычитание':
            return arg1 - arg2;
        case 'деление':
            return arg1 / arg2;
        case 'умножение':
            return arg1 * arg2;
    }
}

alert(mathOperation(arg1, arg2, operation));

// Задание 7

null > 0; // false
null == 0; // false
null >= 0; // true

// Математически, если у нас есть два числа, x и y, если x не меньше y, то x больше либо равно y.


// Я предполагаю, что это сделано, чтобы оптимизировать оценку утверждения.Пожалуй если проверить что x больше y, и если это не так, если x равно y, тогда вы можете выполнить только одну оценку - ? это x меньше чем y, а затем использовать этот результат для оценки.

// Задание 8

let val = +prompt("Введите число, которое надо возвести в степень");
pow = +prompt("Введите степень");

function power(val, pow) {
    return val ** pow;
}

alert(power(val, pow));