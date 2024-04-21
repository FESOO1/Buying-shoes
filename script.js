// cart

const cartButton = document.getElementById('cartButton');
const cartContainer = document.querySelector('.cart');
const cartSvg = document.getElementById('cartSvg');
let cart = false;


cartButton.addEventListener('click', function() {

    if (cart === false) {
        cart = true;
        cartContainer.style.display = 'unset'
        cartSvg.style.fill = 'black'
    } else {
        cart = false;
        cartContainer.style.display = 'none'
        cartSvg.style.fill = 'rgb(122, 122, 122)';
    }

    
});

// ADD TO CART BUTTON AND PRICES

const addToCartBtn = document.querySelector('.add-cart-button');
const productsContainer = document.querySelector('.products');
const numberOfShoes = document.getElementById('numberOfShoes');
const overallPrice = document.getElementById('overall-price');
const shoeContainer = document.querySelector('.shoe');
const deleteBtn = document.getElementById('deleteBtn');
let price = 125.00;

addToCartBtn.addEventListener('click', function() {

    if (number > 0) {
        shoeContainer.style.display = 'flex'
        numberOfShoes.innerText = number;
        price = price * number;
        overallPrice.innerText = price;
    } else {
        alert('Please choose how many you want!')
    }
})

deleteBtn.addEventListener('click', function() {
    shoeContainer.style.display = 'none';
})

/* PRICES */

const minusNumber = document.getElementById('minusNumber');
const plusNumber = document.getElementById('plusNumber');
const numberOutput = document.getElementById('numberOutput');
let number = 0;

minusNumber.addEventListener('click', function() {

    if (number > 0) {
        number --;
        numberOutput.innerText = number;
    } else {
        let minusNumberAlert = "Add a product please!"
        alert(minusNumberAlert);
    }

})

plusNumber.addEventListener('click', function() {

    if (number < 10) {
        number ++;
        numberOutput.innerText = number;
    } else {
        alert("You have reached the maximum amount of shoes you can buy in once.")
    }

})