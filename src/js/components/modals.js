import * as tingle from 'tingle.js/src/tingle.js'
import { d, appendElems, toggleAppend, EnableExtraArrayMethods } from '../utils/utils.js'


const modalOptions_default = {
    footer: true,
    stickyFooter: false,
    closeMethods: ['overlay', 'button', 'escape'],
    closeLabel: "Close",
    cssClass: ['custom-class-1', 'custom-class-2'],
    onOpen: function() {
        console.log('modal open');
    },
    onClose: function() {
        console.log('modal closed');
    },
    beforeClose: function() {
        // here's goes some logic
        // e.g. save content before closing the modal
        return true; // close the modal
        return false; // nothing happens
    }
}

// instanciate new modal
export const modal = new tingle.modal(modalOptions_default);

// set content
modal.setContent('<h1>here\'s some content</h1>');

// add a button
modal.addFooterBtn('Button label', 'tingle-btn tingle-btn--primary', function() {
    // here goes some logic
    modal.close();
});

// add another button
modal.addFooterBtn('Dangerous action !', 'tingle-btn tingle-btn--danger', function() {
    // here goes some logic
    modal.close();
});

const modalBtn = d.querySelector('.open-modal')

if (modalBtn) modalBtn.onclick = () => modal.open()
