import ('./modal.js');


const prices = {
    White         : 40,
    Black         : 45,
    Gray          : 55,
    'Purple latte': 65,
}

const updateTotalPrice = node => {
    const productCard = node.closest('.product-card');
    const inputsColor = productCard.querySelectorAll('.input-radio__input[name="product_color"]');
    const priceText   = productCard.querySelector('.product-card__price');
    const inputField  = productCard.querySelector('.input-quantity__field');

    const price        = prices[Array.from(inputsColor).find(input => input.checked).dataset.nameDisplay];
    const [ currency ] = priceText.innerText.split(' ');

    priceText.innerText = `${currency} ${+price * inputField.value}`
}

window.addEventListener("DOMContentLoaded", () => {
    const formColorLabel  = document.getElementById('productColorValue');
    const inputColorGroup = document.querySelector('.input-group');

    inputColorGroup.addEventListener('change', event => {
        const { nameDisplay } = event.target.dataset

        formColorLabel.innerText = nameDisplay;

        updateTotalPrice(inputColorGroup);
    });

    const inputsQuantity = document.querySelectorAll('.input-quantity');
    inputsQuantity.forEach(input => {
        const inputField       = input.querySelector('.input-quantity__field');
        const quantityText     = input.querySelector('.s-r-quantity');
        const inputBtnIncrease = input.querySelector('.input-quantity__btn[data-action=increase]');
        const inputBtnDecrease = input.querySelector('.input-quantity__btn[data-action=decrease]');

        inputBtnIncrease.addEventListener('click', () => {
            const initialValue = inputField.value * 1;

            inputField.value       = initialValue + 1;
            quantityText.innerText = inputField.value;

            updateTotalPrice(input);
        });

        inputBtnDecrease.addEventListener('click', () => {
            const initialValue = inputField.value * 1;
            if (initialValue > 1) {
                inputField.value       = initialValue - 1;
                quantityText.innerText = inputField.value;

                updateTotalPrice(input);
            }
        });

        inputField.addEventListener('input', ({ target }) => {
            quantityText.innerText = target.value;
            updateTotalPrice(input);
        });

        inputField.addEventListener('focus', () => {
            quantityText.setAttribute('aria-hidden', 'true');
        });

        inputField.addEventListener('blur', () => {
            quantityText.removeAttribute('aria-hidden');
        });
    });
})
