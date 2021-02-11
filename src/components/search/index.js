import { state, setState } from "../../state";
import fetchImages from "../../data";
import lightbox from "../lightbox";

import "./index.css";

// get the value from teh search field then log to the console
async function doSearch(event) {

    // prevent default of search to happen
    // event is just the event handler object
    event.preventDefault();

    const term = document.getElementById(`search-field`).value.toLowerCase();
    setState(`searchTerm`, term);

    const images = await fetchImages();
    setState('images', images);

    if(state.images.length === 0){
        alert(`There are no results for "${state.searchTerm}"`);
        setState(`searchTerm`, null);
        document.querySelector(`#search-field`).value = state.searchTerm;
    } else {
        const markup = lightbox();
        document.querySelector(`#app`).insertAdjacentHTML(`beforeend`, markup);
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


