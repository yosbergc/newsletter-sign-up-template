const img = document.querySelector('.img');
const button = document.querySelector('.subscribe-button');
const card = document.querySelector('.card');
const inputEmail = document.querySelector('#email');
const successContainer = document.querySelector('.success');

button.addEventListener('click', changeForm);
window.addEventListener('resize', changeImage);
window.addEventListener('load', changeImage);

function changeImage() {
    if (window.innerWidth >= 1280) {
        img.setAttribute('src', 'assets/images/illustration-sign-up-desktop.svg');
        console.log('mayor a 1280')
    } else {
        img.setAttribute('src', 'assets/images/illustration-sign-up-mobile.svg')
        console.log('menos a 1280')
    }
}
function changeForm() {
    if (inputEmail.value != '' && inputEmail.value.split('').includes('@')) {
        card.classList.add('hide')
        successContainer.classList.remove('hide')
    } else {
        alert('Ingresa un correo correcto.')
    }
    
}