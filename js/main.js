document.getElementById('search-button').addEventListener('click', function () {
    var searchTerm = document.getElementById('event-search').value;
    var selectedCategory = document.getElementById('category-filter').value;
    
    console.log('Recherche pour:', searchTerm);
    console.log('Lieu sélectionné:', selectedCategory);
});
window.addEventListener('load', () => {
    const images = document.querySelectorAll('.banner-image');
    images.forEach(image => {
        image.classList.add('fadeIn');
    });
});

