/**
 * This simple state management tool keeps data from being stored 
 * in our HTML and makes for much simpler application. 
 */
const state = {
    searchTerm: null,
    images: null,
    currentImage: null // will be saving the image index from lightbox modal
}


// update the state object with
const setState = (toSet, newValue) => {
    state[toSet] = newValue;
}

export { state, setState };