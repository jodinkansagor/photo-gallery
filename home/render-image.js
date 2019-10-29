export default function renderImage(image) {
    const html = /*html*/`
        <li>
            <div class = "image-container">
                <img src = "${image.url}" title = "${image.description}" />
            </div>

            <div class="title-and-horns">
                <p class="title">${image.title}</p>
                <p>Horns: ${image.horns}</p>
            </div>
        </li>`;
    return html;
}