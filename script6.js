const cartItem = {
    render(good) {
        return `<div class="good">
                    <div><b>Наименование</b>: ${good.product}</div>
                    <div><b>Цена за шт.</b>: ${good.price}</div>
                    <div><b>Количество</b>: ${good.num}</div>
                    <div><b>Стоимость</b>: ${good.num * good.price}</div>
                </div>`;
    }
}

const cart = {
    cartListBlock: null,
    cartButton: null,
    addCart: null,
    cartItem,
    goods: [{
        //     id: 007,
        //     product: 'iMac',
        //     price: 126000,
        //     num: 0,
        // },
        // {
        //     id: 022,
        //     product: 'iPhone 12 256GB',
        //     price: 89000,
        //     num: 0,
        // },
        // {
        //     id: 017,
        //     product: 'AirPods',
        //     price: 11900,
        //     num: 0,
        // },
        // {
        id: 089,
        product: 'MacBook Pro',
        price: 2990,
        num: 0,
    }, ],

    init() {
        this.cartListBlock = document.querySelector('.cart-list');
        this.cartButton = document.querySelector('.cart-btn');
        this.cartButton.addEventListener('click', this.clearCart.bind(this));
        this.addCart = document.querySelector('.add-cart');
        this.addCart.addEventListener('click', this.addToCart.bind(this));

        this.render();
    },

    addToCart() {
        return this.goods.num + 1;
    },

    render() {
        if (this.goods.length) {
            this.goods.forEach(good => {
                this.cartListBlock.insertAdjacentHTML('beforeend', this.cartItem.render(good));
            });
            this.cartListBlock.insertAdjacentHTML('beforeend', `В корзине <b>${this.goods.length}</b> позиция(й) стоимостью <b>${this.getCartPrice()}</b> рублей`);
        } else {
            this.cartListBlock.textContent = 'Корзина пуста';
        }
    },

    getCartPrice() {
        return this.goods.reduce(function(price, good) {
            return price + good.price * good.num;
        }, 0);
    },

    clearCart() {
        this.goods = [];
        this.render();
    },

};

cart.init();