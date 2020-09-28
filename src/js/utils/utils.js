export const d = document;
export const translatingItemsStore = new Object()

export const appendElems = (elems, parent) => d.querySelectorAll(elems).forEach(node => d.querySelector(parent).appendChild(node))

export const toggleAppend = (elems, parentId) => {
    const $elems = d.getElementsByClassName(elems)
    const $parent = d.getElementById(parentId)

    const changeState = ( postfix, initial ) => {
       
        if ( !translatingItemsStore.hasOwnProperty(elems + postfix)) {
            translatingItemsStore[elems + postfix] = new Object()
            translatingItemsStore[elems + postfix]['elem'] = $elems[0].parentElement.id
            translatingItemsStore[elems + postfix]['state'] = initial
        } else {
            translatingItemsStore[elems + postfix]['state'] = !translatingItemsStore[elems + postfix]['state']
        }
    }

    changeState( '_old', false )
    changeState( '_new', true )

    if ( translatingItemsStore[elems + '_new']['state'] ) {
        
        return Array.from($elems).forEach( el => $parent.appendChild(el) )
    } else {
        const oldParent = document.getElementById(translatingItemsStore[elems + '_old']['elem'])

        return Array.from($elems).forEach( el => oldParent.appendChild(el) )
    }
}

export const EnableExtraArrayMethods = (() => Array.prototype.reject = function(fn){ return this.filter(x => !fn(x)) })()


