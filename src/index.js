import search, { init as initSearch } from "./components/search";
import "./index.css";

async function init() {
    // import form and title and set to markup
    const markup = search();

    // add all markup to page
    document.querySelector('#app').insertAdjacentHTML('beforeend', markup);
    initSearch(); // initializes the search form 
}
init();
