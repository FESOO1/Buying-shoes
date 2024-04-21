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