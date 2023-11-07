import ('./modal.js');

window.addEventListener("DOMContentLoaded", () => {
    const formColorLabel  = document.getElementById('productColorValue');
    const inputColorGroup = document.querySelector('.input-group');

    inputColorGroup.addEventListener('change', event => {
        formColorLabel.innerText = event.target.dataset.nameDisplay;
    });

    const inputsQuantity = document.querySelectorAll('.input-quantity');
    inputsQuantity.forEach((input) => {
        const inputField = input.querySelector('.input-quantity__field');
        const inputBtnIncrease = input.querySelector('.input-quantity__btn[data-action=increase]');
        const inputBtnDecrease = input.querySelector('.input-quantity__btn[data-action=decrease]');
        inputBtnIncrease.addEventListener('click', () => {
            const initialValue = inputField.value * 1;
            inputField.value = initialValue + 1;
        });
        inputBtnDecrease.addEventListener('click', () => {
            const initialValue = inputField.value * 1;
            if (initialValue > 1) inputField.value = initialValue - 1;
        });
    });
})
