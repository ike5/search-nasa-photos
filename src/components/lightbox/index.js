import { state, setState } from "../../state";
import "./index.css";

export default function lightbox() {
    let markup = `<div class="lightbox">`;
    state.images.forEach(image => {
        const url = image.links[0].href;
        const title = image.data[0].title;
        markup += `<div class="thumbnail"><img src="${url}" alt="${title}"></div>`;
    });

    markup += `</div>`;
    return markup;
}

export function init() {
    // select an image and attach an event listener to it
    const images = Array.from(document.querySelectorAll(`.lighbox img`));
    images.forEach(image => {
        image.addEventListener(`click`, openLightBox);
    });
}

/**
 * 
 * @param {} event On user clicking the photo
 */
function openLightBox(event) {
    event.preventDefault();

    // save the value in state
    const currentImageIndex = getCurrentImageIndex(event.target);
    setState(`currentImage`, currentImageIndex);

    console.log(state.currentImage);
}

/**
 * This method will take the image the user clicked on and find the index
 * of the image from the grid of images.
 * @param {} image 
 */
function getCurrentImageIndex(image) {
    const images = Array.from(document.querySelectorAll(`.lightbox img`));

    let currentImageIndex = images
        .map(img => img.outerHTML)
        .findIndex(img => img === image.outerHTML);

    return currentImageIndex;
}