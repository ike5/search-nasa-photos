import "./index.css";

// default export
export default function search() {
    return `
    <h1>Search NASA Photos</h1>
    <form name="search" id="search">
        <p><label for="search-field">Enter Search Term Below:</label></p>
        <input id="search-field" name="search" type="search"/>
        <input type="submit" id="submit" value="Search"/>
    </form>
    `;
}

// named export
export function init() {
    const search = document.querySelector('#search');
    search.addEventListener('submit', doSearch);
}

// get the value from teh search field then log to the console
function doSearch(event) {
    // prevent default of search to happen
    event.preventDefault();

    const term = document.querySelector('#search-field').nodeValue.toLowerCase();
    console.log(term);
}

