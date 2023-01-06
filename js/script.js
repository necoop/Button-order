let order = document.querySelectorAll('.order');
let button = document.querySelector('.button');

button.addEventListener('click', makeOrder);

function makeOrder(){
    order.forEach(element => {
        element.classList.toggle('visability');
    });
    button.classList.toggle('active');
    button.setAttribute('disabled', true);
}