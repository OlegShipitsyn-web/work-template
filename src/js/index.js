// Main js file
// see more: https://github.com/vedees/webpack-template/blob/master/README.md#import-js-files

import { d, appendElems, toggleAppend, EnableExtraArrayMethods } from './utils/utils.js'
EnableExtraArrayMethods()

import { adapt } from './nonpm-libs/dynamic-adapt.js'
adapt()

import { modal } from './components/modals.js'
import './components/tooltips.js'
import './components/sliders.js'


const modalBtn = d.querySelector('.open-modal')

if (modalBtn) modalBtn.onclick = () => modal.open()

const $burger = d.querySelector('.burger')
const $navigation = d.querySelector('.navigation')


$burger.addEventListener('mousedown', () => {
    $burger.classList.toggle('burger--active')
    $navigation.classList.toggle('navigation--active')
    toggleAppend('navigation-1', 'navigation')
    toggleAppend('burger', 'navigation')
})


