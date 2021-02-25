/*
var goodsCount = 10;


if (goodsCount > 0) {
    console.log("Кол-во товара в корзине: " + goodsCount)
} else {
    console.log("Корзина пуста")
}
*/






/*
условие ? да : нет

goodsCount > 0 условие
console.log("Кол-во товара в корзине: " + goodsCount) да
    console.log("Корзина пуста") нет
*/








/*
const result = goodsCount > 0 ?
    "Кол-во товара в корзине: " + goodsCount :
    "Корзина пуста"
console.log(result);
*/










/*
var good = "Яблоки";

if (good == "Бананы") {
    console.log("Стоимость бананов: 50 рублей")
} else if (good == "Манго") {
    console.log("Стоимость манго: 80 рублей")
} else if (good == "Яблоки" || good == "Груши") {
    console.log("Стоимость манго: 40 рублей")
} else {
    console.log("Неизвестный продукт")
}
*/










/*
const good = "бананы";

function sayPrice(good) {
    switch (good) {
        case "бананы":
            console.log("Стоимость бананов: 50 рублей");
            break;
        case "манго":
            console.log("Стоимость манго: 80 рублей");
            break;
        case "яблоки":
        case "груши":
            console.log("Стоимость яблок и груш: 40 рублей");
            break;
        default:
            console.log("Неизвестный продукт");
    }
}

sayPrice(good);
*/







/*
function getGoodPrice(good) {
    switch (good.toLowerCase()) {
        case "бананы":
            return 50;
        case "манго":
            return 80;
        case "яблоки":
        case "груши":
            return 40;
        default:
            return null;
    }
}


function getPriceByCount(good, count = 1) {
    const price = getGoodPrice(good);
    if (typeof price !== 'number') return null;
    return price * count;
}

console.log(getPriceByCount(good, 4));
console.log(getPriceByCount(good));
console.log(getPriceByCount());
console.log(getPriceByCount('МаНгО', 1, 2));
*/

/*
function recursion(x) {
    if (x <= 0 || !Number.isInteger(x)) return
    if (x === 1) return 1;
    return recursion(x - 1) + ' ' + x;
}

console.log(recursion(20));
*/

let number;
let attemps;

function resetGame() {
    attemps = 0;
    number = Math.floor(Math.random() * 100);
}

function tryGuessNumber() {
    const userAnswer = parseInt(+prompt('Введите число от 0 до 100 или -1 для выхода'))

    if (userAnswer === -1) return alert('До свидания');

    if (isNaN(userAnswer)) {
        alert('Неободимо ввести число от 0 до 100');
    }

    attemps++;

    if (userAnswer > number) {
        alert("Введенное вами число больше заданного");
    } else if (userAnswer < number) {
        alert("Введенное вами число меньше заданного");
    } else {
        alert("Поздравляем! Вы угадали c " + attemps + " попытки(ок)!");

        if (!confirm('Хотите сыграть еще раз?')) return alert('До свидания');

        resetGame();
    }

    tryGuessNumber();
}

resetGame();
tryGuessNumber();