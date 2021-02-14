import { state, setState } from "../../state";
import fetchImages from "../../data"; // functions don't need braces
import lightbox, {init as initLightbox} from "../lightbox";
import test from "../../../testing";

import "./index.css";

/**
 * This method supports the search button function.
 * @param {*} event On click of search or enter button
 */
async function doSearch(event) {
    event.preventDefault();
    // clearLightbox();


    const term = document.querySelector(`#search-field`).value.toLowerCase();
    setState(`searchTerm`, term);

    const images = await fetchImages();
    setState('images', images);

    test(`Length of state.images ${state.images.length}`)

    if(state.images.length === 0){
        alert(`There are no results for "${state.searchTerm}"`); // pauses here while alert box is up
        setState(`searchTerm`, null);

        test(`Value of serchTerm: ${state.searchTerm}`);
        document.querySelector(`#search-field`).value = state.searchTerm;
    } else {
        const markup = lightbox();
        document.querySelector(`#app`).insertAdjacentHTML(`beforeend`, markup);
        initLightbox();
        test("hello test");
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


