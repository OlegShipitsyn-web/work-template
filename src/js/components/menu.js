import { d, appendElems, toggleAppend, EnableExtraArrayMethods } from '../utils/utils.js'

const $burger = d.querySelector('.burger')
const $navigation = d.querySelector('.navigation')


$burger.addEventListener('mousedown', () => {
    $burger.classList.toggle('burger--active')
    $navigation.classList.toggle('navigation--active')
    toggleAppend('navigation-1', 'navigation')
    toggleAppend('burger', 'navigation')
})