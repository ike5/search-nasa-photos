import search, {init as initSearch} from "./components/search/"
import "./index.css";

async function init() {
    // import form and title and set to markup
    const markup = search();

    // add all markup to main page through 'app' div id
    document.querySelector('#app').insertAdjacentHTML('beforeend', markup);

    // initialize the search form 
    initSearch(); 
}

// call the function above
init();
