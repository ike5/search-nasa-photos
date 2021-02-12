import { state } from "../../state";
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

function openLightBox(event) {
    event.preventDefault();
    console.log(`Current image: ${event.target}`);
}