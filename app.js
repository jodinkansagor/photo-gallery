import renderImage from './home/render-image.js';
import htmlToDOM from './util/html-to-DOM.js';
import images from './data/images.js';

const hornList = document.querySelector('.horn-list');
const hornFilter = document.querySelector('.horn-filter');
const hornNumberFilter = document.querySelector('.horn-number-filter');

render(images);

hornFilter.addEventListener('change', () => {
    const filter = hornFilter.value;
    let filterImages = null;

    if (!filter) {
        filterImages = images;
    } else {
        filterImages = images.filter(image => {
            return image.keyword === filter;
        });
    }
    render(filterImages);
});

hornNumberFilter.addEventListener('change', () => {
    const numberFilter = hornNumberFilter.value;
    let numberFilterImages = null;

    if (!numberFilter) {
        numberFilterImages = images;
    } else {
        numberFilterImages = images.filter(image => {
            return image.horns >= numberFilter;
        });
    }
    render(numberFilterImages);
});

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
