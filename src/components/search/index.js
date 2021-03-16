import { state, setState } from "../../state";
import fetchImages from "../../data"; // functions don't need braces
import lightbox, {init as initLightbox} from "../lightbox";

import "./index.css";

/**
 * This method supports the search button function.
 * @param {*} event On click of search or enter button
 */
async function doSearch(event) {
    // prevent the default submit behavior
    event.preventDefault();

    // get the value in the search field and make lower case
    const searchTerm = document.querySelector(`#search-field`).value.toLowerCase();
    setState(`searchTerm`, searchTerm); // update state object with new search term

    console.log(`The state object search term is: ${state.searchTerm}`);

    const images = await fetchImages();
    setState('images', images);

    if(state.images.length === 0){
        alert(`There are no results for "${state.searchTerm}"`); // pauses here while alert box is up
        setState(`searchTerm`, null);

        document.querySelector(`#search-field`).value = state.searchTerm;
    } else {
        const markup = lightbox();
        document.querySelector(`#app`).insertAdjacentHTML(`beforeend`, markup);
        initLightbox();
    }

    console.log(state.images);
}

// default export
export default function search() {
    return `
    <h1>Search NASA Photos</h1>
    <form name="search" id="search">
        <p><label for="search-field">Enter Search Term Below:</label></p>
        <input id="search-field" name="search" type="search">
        <input type="submit" id="submit" value="Search">
    </form>
    `;
}

// named export
export function init() {
    const search = document.querySelector('#search');
    search.addEventListener('submit', doSearch);
}


