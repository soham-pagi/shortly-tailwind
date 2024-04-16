const burger = document.getElementById('burger-btn')
const burgerMenu = document.getElementById('burger-menu')

burger.addEventListener('click', () => {
    burger.classList.toggle('open')
    burgerMenu.classList.toggle('hidden')
    burgerMenu.classList.toggle('flex')
})