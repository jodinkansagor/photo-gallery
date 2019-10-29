import renderImage from './home/render-image.js';
import htmlToDOM from './util/html-to-DOM.js';
import images from './data/images.js';

const hornList = document.querySelector('.horn-list');
const hornFilter = document.querySelector('.horn-filter');

hornFilter.addEventListener('change', () => {
    const filter = hornFilter.value;
    let filterImages = null;

    if(!filter) {
        filterImages = images;
    } else {
        filterImages = images.filter(image => {
            return image.keyword === filter;
        });
    }
    render(filterImages);
});

render(images);


function render(imagesToRender) {

    while (hornList.lastChild) {
        hornList.lastElementChild.remove();
    }

    imagesToRender.forEach(image => {
        const htmlImage = renderImage(image);
        const imageDOM = htmlToDOM(htmlImage);
        hornList.appendChild(imageDOM);
    });
}
