window.addEventListener("DOMContentLoaded", () => {
  const inputsColor = document.querySelectorAll('input[name=product_color]');
  const formColorLabel = document.getElementById('productColorValue');
  inputsColor.forEach((input) => {
    input.addEventListener('change', (e) => {
      formColorLabel.innerText = e.target.dataset.nameDisplay;
    });
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


  const sizeGuideShowBtn  = document.querySelector('.size-guide-button');
  const sizeGuideModal    = document.querySelector('#sizeGuideModal');

  sizeGuideShowBtn.addEventListener('click', () => {
    sizeGuideModal.addEventListener('click', handleDialogClick);
    handleLockBody(true)
    sizeGuideModal.showModal();
  });

  const handleDialogClick = (e) => {
    if (e.target === e.currentTarget || e.target.classList.contains('modal-close-button')) {
      sizeGuideModal.removeEventListener('click', handleDialogClick);
      handleLockBody(false);
      sizeGuideModal.close();
    }
  };

  const handleLockBody = (locked) => {
    document.body.style.paddingRight = locked ? `${window.innerWidth - document.documentElement.clientWidth}px` : 0;

    document.body.classList.toggle('locked', locked);
  };
})