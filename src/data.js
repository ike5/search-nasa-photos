import state from "./state"; // when get an update from doSearch() file will also get an update here. Prevents having to pass around the search term as a parameter from one file to another.

export default function fetchImages() {
    // get search term from state object
    const url = `https://images-api.nasa.gov/search?q=${state.searchTerm}&media_type=image`;
    
    return fetch(url)
        .then(res => res.json())
        .then(data => data.collection.items) // dont' need all the items of the api, only the collections
        .catch(error => console.error(error));
}