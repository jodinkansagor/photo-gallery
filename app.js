import renderImage from './home/render-image.js';
import htmlToDOM from './util/html-to-DOM.js';
import images from './data/images.js';

const hornList = document.querySelector('.horn-list');

render(images);

const userInput = document.getElementById('user-input');

userInput.addEventListener('submit', function(event) {
    event.preventDefault();

    const formData = new FormData(userInput);
    const newSelection = selection(formData);

    let filterImages = null;
    const filter = newSelection;
    if (!filter) {
        filterImages = images;
    } else if (filter.keyword.length === 0) {
        filterImages = images;
    } else {
        filterImages = images.filter(image => {
            return image.keyword === filter.keyword && image.horns >= filter.hornNumber;
        });
    }
    render(filterImages);
});

function selection(formData) {
    const userSelection = {
        keyword: formData.get('horn-filter'),
        hornNumber: formData.get('horn-number-filter')
    };
    return userSelection;
}

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
