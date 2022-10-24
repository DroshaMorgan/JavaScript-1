const menuIcon = document.querySelector('.menu-icon');
const menu = document.querySelector('.menu');
const cartIcon = document.querySelector('.cart-icon');
const cartIconCount = document.querySelector('.cart-icon-count');
const cartPopup = document.querySelector('.cart-popup-block');

menuIcon.addEventListener('click', (e) => {
    if (e.target.classList.contains('menu-icon')) {
        menu.classList.toggle('hidden');
    }
})
cartIcon.addEventListener('click', (e) => {
    if (e.target.classList.contains('cart-icon')) {
        cartPopup.classList.toggle('hidden');
    }
})

const itemsAdd = document.querySelector('.items-add-button');
const cartProductsBlock = document.querySelector('.cart-popup-block__products');
const cartTotalSum = document.querySelector('.cart-popup-block__price-number');
const allItems = document.querySelector('.items-cards-container');

class Cart {
    constructor(productId, productName, productPrice) {
        this.productId = productId;
        this.productName = productName;
        this.productPrice = +productPrice;
        this.productCountNum = 0;
        this.productPriceSum = 1;
    }
    productCount() {
        return (this
            .productCountNum++);
    }
    priceSum() {
        return (this
            .productPriceSum = this.productPrice * this.productCountNum);
    }
    renderCart() {
        return `
            <div class="renderProductEl">${this.productName}</div>
            <div class="renderProductEl">${this.productCountNum}</div>
            <div class="renderProductEl">${this.productPrice}</div>
            <div class="renderProductEl">${this.productPriceSum}</div>
        `;
    }
}

const arrProductsData = {
    arrTotalCount: 0,
    arrTotalEl: 0,
    1: new Cart(1, 'Product1', '10'),
    2: new Cart(2, 'Product2', '20'),
    3: new Cart(3, 'Product3', '30'),
    4: new Cart(4, 'Product4', '40'),
    5: new Cart(5, 'Product5', '50'),
    6: new Cart(6, 'Product6', '60'),
};

allItems.addEventListener('click', (e) => {
    if (!e.target.classList.contains('items-add-button')) {
        return;
    }
    if (arrProductsData[e.target.dataset.id].productCountNum === 0) {
        const renderProductDiv = document.createElement('div');
        renderProductDiv
            .className = `renderProduct renderProduct${e.target.dataset.id}`;
        // объявили div с классами
        cartProductsBlock.append(renderProductDiv); // создали div с классами
        arrProductsData[e.target.dataset.id]
            .productCount();  // счетчик +1
        arrProductsData[e.target.dataset.id].priceSum();
        // посчитали сумму одного товара
        renderProductDiv.innerHTML = arrProductsData[e.target.dataset.id]
            .renderCart(); // создали строку товара
    } else {
        const renderProductId = cartProductsBlock
            .querySelector(`.renderProduct${e.target.dataset.id}`);
        // нашли div с классами
        arrProductsData[e.target.dataset.id]
            .productCount(); // счетчик +1
        arrProductsData[e.target.dataset.id].priceSum();
        // создали строку товара
        renderProductId
            .innerHTML = arrProductsData[e.target.dataset.id].renderCart();
    }
    // считаем тотал товаров
    arrProductsData.arrTotalEl += arrProductsData[e.target.dataset.id].productPrice;
    // создали тотал товаров
    cartTotalSum.innerHTML = arrProductsData
        .arrTotalEl;
    // считаем общее количество покупок
    cartIconCount.innerHTML = ++arrProductsData.arrTotalCount;
})