const ativar = document.querySelector('.ativar')
const modal = document.querySelector('#modal')

const entrar = document.querySelector('.entrar')
const loading = document.querySelector('.loading')

entrar.addEventListener('click', () => {
    loading.classList.toggle('loading-animar')
})


window.addEventListener ('load', () => {
    modal.classList.toggle('animar')
})