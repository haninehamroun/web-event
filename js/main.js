// Optional: You can add JavaScript to handle events like autocompletion or filtering

// This is an example of how you might handle the search button click event
document.getElementById('search-button').addEventListener('click', function () {
    var searchTerm = document.getElementById('event-search').value;
    var selectedCategory = document.getElementById('category-filter').value;
    
    // You can perform a search here or filter based on the inputs
    console.log('Recherche pour:', searchTerm);
    console.log('Lieu sélectionné:', selectedCategory);
});
// JavaScript to trigger animations when images are fully loaded
window.addEventListener('load', () => {
    const images = document.querySelectorAll('.banner-image');
    images.forEach(image => {
        image.classList.add('fadeIn');
    });
});


