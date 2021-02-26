// Задание 1

let n = 20;

for (let i = 2; i <= n; i++) {
    for (let j = 2; j <= i; j++) {
        if ((i % j == 0) && (j != i)) {
            break;
        } else {
            console.log(i);
            break;
        }
    }
}

// Задание 2

let basket = [{
        product: 'Meat',
        num: 5,
        price: 60
    },
    {
        product: 'Tomatoes',
        num: 20,
        price: 30
    },
    {
        product: 'Pineapple',
        num: 3,
        price: 40
    },
    {
        product: 'Milk',
        num: 2,
        price: 50
    },
];

function countBasketPrice(n) {
    let sum = 1;
    for (let i = 0; i < n.length; i++) {
        sum += n[i].num * n[i].price;
    }
    return sum;
}

console.log(basket);
console.log("Сумма " + countBasketPrice(basket) + " рублей");

// Задание 3

for (let i = 0; i < 10; i++, console.log(i)) {

}

// Задание 4

for (var x = 0; x < 20; x++) {
    var str = " "
    for (let y = 0; y <= x; y++) {
        str += "x";
    }
    console.log(str);
}