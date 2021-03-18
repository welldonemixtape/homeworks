"use strict";

const catalog = {
    catalogBlock: null,
    cart: {},
    list: [{
            id_product: 123,
            product: 'Apple iMac Pro',
            price: 219000,
        },
        {
            id_product: 456,
            product: 'Apple iPhone 12 256GB',
            price: 89000,
        },
        {
            id_product: 245,
            product: 'AirPods',
            price: 11999,
        }
    ],

    init(catalogBlockClass, cart) {
        this.catalogBlock = document.querySelector(`.${catalogBlockClass}`);
        this.cart = cart;
        this.render();
        this.addEventHandlers();
    },

    render() {
        if (this.getCatalogListLength() > 0) {
            this.renderCatalogList();
        } else {
            this.renderEmptyCatalog();
        }
    },

    addEventHandlers() {
        this.catalogBlock.addEventListener('click', event => this.addToBasket(event));
    },

    addToBasket(event) {
        if (!event.target.classList.contains('product__add-to-cart')) return;
        const id_product = +event.target.dataset.id_product;
        this.cart.addToBasket(id_product);
    },

    getCatalogListLength() {
        return this.list.length;
    },

    renderCatalogList() {
        this.catalogBlock.innerHTML = '';
        this.list.forEach(item => {
            this.catalogBlock.insertAdjacentHTML('beforeend', this.renderCatalogItem(item));
        });
    },

    renderCatalogItem(item) {
        return `<div class="product text-light bg-secondary rounded my-3 px-2 pt-3 w-25">
                <h3>${item.product}</h3>
                <p>${item.price} руб.</p>
                <button class="product__add-to-cart btn btn-primary mb-3" data-id_product="${item.id_product}">В корзину</button>
            </div>`;
    },

    renderEmptyCatalog() {
        this.catalogBlock.innerHTML = '';
        this.catalogBlock.insertAdjacentHTML('beforeend', `Каталог товаров пуст.`);
    },
};

const cart = {
    cartBlock: null,
    clrCartButton: null,
    catalogList: [],
    goods: [{
        id_product: 999,
        product: 'Бесплатные EarPods',
        price: 0,
        num: 1,
    }, ],

    init(cartBlockClass, clrCartButton, catalogList) {
        this.cartBlock = document.querySelector(`.${cartBlockClass}`);
        this.clrCartButton = document.querySelector(`.${clrCartButton}`);
        this.catalogList = catalogList;

        this.addEventHandlers();
        this.render();
    },

    addEventHandlers() {
        this.clrCartButton.addEventListener('click', this.dropCart.bind(this));
    },

    dropCart() {
        this.goods = [];
        this.render();
    },

    render() {
        if (this.getCartGoodsLength() > 0) {
            this.renderCartList();
        } else {
            this.renderEmptyCart();
        }
    },

    findProductInCatalog(id_product) {
        return this.catalogList.find(product => product.id_product === id_product);
    },

    addToBasket(id_product) {
        const product = this.findProductInCatalog(id_product);

        if (product) {
            const findInBasket = this.goods.find(({ id_product }) => product.id_product === id_product);
            if (findInBasket) {
                findInBasket.num++;
            } else {
                this.goods.push({...product, num: 1 });
            }
            this.render();
        } else {
            alert('Ошибка добавления!');
        }
    },

    getCartGoodsLength() {
        return this.goods.length;
    },

    renderEmptyCart() {
        this.cartBlock.innerHTML = '';
        this.cartBlock.insertAdjacentHTML('beforeend', 'Корзина пуста.');
    },

    renderCartList() {
        this.cartBlock.innerHTML = '';
        this.goods.forEach(item => {
            this.cartBlock.insertAdjacentHTML('beforeend', this.renderCartItem(item));
        });
    },

    renderCartItem(item) {
        return `<div class="bg-secondary rounded my-3 px-2 pt-3 pb-1 text-light w-25">
                <h3>${item.product}</h3>
                <p>${item.price * item.num} руб. (1 шт. = ${item.price} руб.)</p>
                <p>${item.num} шт.</p>
                </div>`

    },
};

/**
 * Подключение каталога и корзины
 */

catalog.init('catalog', cart);
cart.init('cart', 'clr-cart', catalog.list);