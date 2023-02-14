class autoJump{
    constructor(el, config) {
       const container = document.querySelector(el);

       document.addEventListener('keypress', event => {
        if (event.target.tagName === 'INPUT') {
            const value = event.target.value;
            if ( value.length >= config.inputLength) {
                event.preventDefault();
            }
        }
       })

       document.addEventListener('keyup', event => {
        if (event.target.tagName === 'INPUT') {
            const value = event.target.value;
            if ( value.length >= config.inputLength) {
                const currentOrderId = +event.target.getAttribute('data-order');
                const nextElement = container.querySelector(`input[data-order='${currentOrderId + 1}']`);
                if (nextElement !== null) {
                    nextElement.focus();
                }
            }
        }
       })
    }
}
new autoJump('.container', {inputLength: 4});
