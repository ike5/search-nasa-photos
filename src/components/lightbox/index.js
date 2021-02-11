import { state } from "../../state";
import "./index.css";

export default function lightbox() {
    let markup = `<div class="lightbox">`;
    state.images.forEach(image => {
        const url = image.links[0].href;
        const title = image.data[0].title;
        markup +=  `<div class="thumbnail"><img src="${url}" alt="${title}"></div>`;
    });

    markup += `</div>`;
    return markup;
}