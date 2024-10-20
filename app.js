const totalPrice = document.querySelector ('.total-price');
const priceJacket = document.querySelector('#priceJacket')
const priceSneakers = document.querySelector('#priceSneakers');
const priceJeans = document.querySelector('#priceJeans');
const priceBent = document.querySelector('#priceBent');
const send = document.querySelector('.btn');

function calculateTotalPrice (){
    return `${
        +priceJacket.textContent +
        +priceSneakers.textContent +
        +priceJeans.textContent +
        +priceBent.textContent
    }`
}
totalPrice.innerText =calculateTotalPrice ();

send.addEventListener('click', () => {
    priceJacket.innerHTML = (+priceJacket.innerText * 0.8).toFixed(2);
    priceSneakers.innerHTML = (+priceSneakers.innerText * 0.8).toFixed(2);
    priceJeans.innerHTML = (+priceJeans.innerText * 0.8).toFixed(2);
    priceBent.innerHTML = (+priceBent.innerText * 0.8).toFixed(2);
    totalPrice.innerText = (+calculateTotalPrice() * 0.8).toFixed(2);
});



