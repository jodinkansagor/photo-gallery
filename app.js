import renderImage from './home/render-image.js';
import htmlToDOM from './util/html-to-DOM.js';
import images from './data/images.js';

const hornList = document.querySelector('.horn-list');

images.forEach(image => {
    const htmlImage = renderImage(image);
    const imageDOM = htmlToDOM(htmlImage);
    hornList.appendChild(imageDOM);
});

