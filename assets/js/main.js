const btnMenu = document.querySelector('.btn-menu-header');
const nav = document.querySelector('#ul-menu');

btnMenu.addEventListener('click', ()=> {
    nav.classList.toggle('ativar-menu');
    console.log('chupa meu pinto')
});