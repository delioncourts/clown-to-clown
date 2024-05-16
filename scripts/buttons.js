const buttonZHMAV = document.querySelector('.zhmav');
const buttonSend = document.querySelector('.send'); 
const sendSection = document.querySelector('.reg__send'); 

buttonZHMAV.addEventListener('click', () => {
    buttonZHMAV.classList.toggle('button_alert');

})

buttonSend.addEventListener('click', () => {
    sendSection.classList.toggle('reg__visible');

})