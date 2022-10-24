const menuIcon = document.querySelector('.menu-icon');
const menu = document.querySelector('.menu');

menuIcon.addEventListener('click', (e) => {
    if (e.target.classList.contains('menu-icon')) {
        menu.classList.toggle('hidden');
    }
})

const cartIcon = document.querySelector('.cart-icon');
const cartPopup = document.querySelector('.cart-popup-block');

cartIcon.addEventListener('click', (e) => {
    if (e.target.classList.contains('cart-icon')) {
        cartPopup.classList.toggle('hidden');
    }
})



const itemsAdd = document.querySelector('.items-add-button');

const cartProductsBlock = document.querySelector('.cart-popup-block__products');
// const cartProductName = document.querySelector('.cart-productName');
// const cartProductAmount = document.querySelector('.cart-amount');
// const cartProductProductPrice = document.querySelector('.cart-productPrice');
// const cartProductPriceResult = document.querySelector('.cart-priceResult');

class Cart {
    constructor(productId, productName, productPrice) {
        this.productId = productId;
        this.productName = productName;
        this.productPrice = productPrice;
        this.productCountNum = 0;
    }

    productCount() {
        return (this.productCountNum = this.productCountNum + 1);
    }

    renderCart() {
        return `
        <div class="renderProduct renderProduct${this.productId}">
            <div class="renderProductEl">${this.productName}</div>
            <div class="renderProductEl">${this.productCountNum}</div>
            <div class="renderProductEl">${this.productPrice}</div>
            <div class="renderProductEl"></div>
        </div>
        `;
    }
}

const arrProductsData = {
    1: new Cart(1, 'Product1', '10'),
    2: new Cart(2, 'Product2', '20'),
    // 3: new Cart(3, 'Product3', '30'),
};

// const arrProductsWithCount = {
//     // 1: 0,

// };

const allItems = document.querySelector('.items-cards-container');


allItems.addEventListener('click', (e) => {
    if (!e.target.classList.contains('items-add-button')) {
        return;
    }

    // console.log(e.target.dataset.id);

    if (arrProductsData[e.target.dataset.id].productCountNum === 0) {
        arrProductsData[e.target.dataset.id]
            .productCount();
        cartProductsBlock
            .insertAdjacentHTML('afterbegin', arrProductsData[e.target.dataset.id]
                .renderCart());

    } else {
        const renderProductId = cartProductsBlock
            .querySelector(`.renderProduct${e.target.dataset.id}`);

        arrProductsData[e.target.dataset.id]
            .productCount();

        renderProductId
            .innerHTML = arrProductsData[e.target.dataset.id].renderCart();
    }





    console.log(arrProductsData[e.target.dataset.id].productCountNum);





    // cartProductsBlock
    //     .innerHTML = arrProductsData[e.target.dataset.id].renderCart();



    // arrProductsData[e.target.dataset.id]
    //     .productCount();
    // cartProductsBlock
    //     .insertAdjacentHTML('afterbegin', arrProductsData[e.target.dataset.id]
    //         .renderCart());

    // console.log('1');
    // console.log(dataSearch);
})











/*itemsAdd.addEventListener('click', (e) => {

    dataSearch.forEach((el) => {
        if (el.dataset.itemname) {
            cartProductName.innerText = el.dataset.itemname;

            console.log(el.dataset.itemname);
        } else if (el.dataset.itemprice) {
            cartProductProductPrice.innerHTML = el.dataset.itemprice;

            console.log(el.dataset.itemprice);
        }


        // cartProductName.innerText = el.dataset.itemname;
        // console.log(el);
        // cartProductPriceResult.innerHTML = el.dataset.itemprice;
    })

    // cartProductAmount.innerHTML = dataSearch.dataset.itemname;
    // cartProductProductPrice.innerHTML = dataSearch.dataset.itemname;


    // console.log('1');
    // console.log(dataSearch);
})*/