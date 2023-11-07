const modalOpenBtns = document.querySelectorAll('.modal-target');

const handleModalClick = event => {
    const modal = event.currentTarget;

    if (event.target === modal || event.target.classList.contains('modal-close-button')) {
        modal.removeEventListener('click', handleModalClick);
        handleLockBody(false);
        modal.close();
    }
};

const handleLockBody = locked => {
    document.body.style.paddingRight = locked ? `${window.innerWidth - document.documentElement.clientWidth}px` : 0;

    document.body.classList.toggle('locked', locked);
};

modalOpenBtns.forEach(btn => {
    btn.addEventListener('click', event => {
        const { modalId } = event.currentTarget.dataset;
        if (!modalId) {
            console.warn('Modal window id not specified');
            return;
        }


        const modal = document.querySelector(`#${modalId}`);
        if (!modal) {
            console.warn(`Modal window with ${modalId} id not found`);
            return;
        }


        modal.addEventListener('click', handleModalClick);
        handleLockBody(true)
        modal.showModal();
    });
})