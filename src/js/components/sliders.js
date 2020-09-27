import Glide from '@glidejs/glide'

const sliderOptions_DEFAULT = {
    type: 'carousel',
    focusAt: 'center'
}

const isExist = ( elem ) => document.querySelector(elem)

 if ( isExist('.glide') ){

    new Glide('.glide', sliderOptions_DEFAULT).mount()
    
 }