(function() {
    document.addEventListener("DOMContentLoaded", function() {
        //just in case i want to change something
        slidesWrapperClass = "contenedor-carrusel";
        let carrousels = document.getElementsByClassName(slidesWrapperClass)
        
        for (var i = 0; i < carrousels.length; i++) {
            var carrousel = carrousels[i];    
            var liElements = carrousel.querySelectorAll("ul.contenedor-imagenes li.imagen-carrusel");
            var activeSlideIndex = 0;
            
            enableNavigationControls(carrousel);       
            updateSlides(liElements,activeSlideIndex);    
            };
    });
})();

function updateSlides(slides,activeIndex){
    slides.forEach(function(li, index) {
        if (index === activeIndex) {
            li.style.display = 'block';
        } else {
            li.style.display = 'none';
        }
    });
}

function enableNavigationControls(carrousel){
    // Arrow buttons handling
    var prevButton = carrousel.querySelector("#flecha-carrusel-previa");
    var nextButton = carrousel.querySelector("#flecha-carrusel-siguiente");
    // Images are inside this
    var liElements = carrousel.querySelectorAll("ul.contenedor-imagenes li.imagen-carrusel");
    //We store the active slide index of each carrousel here
    var activeSlideIndex = 0;

    prevButton.addEventListener('click', function() {
        activeSlideIndex = (activeSlideIndex > 0) ? activeSlideIndex - 1 : liElements.length - 1;
        updateSlides(liElements,activeSlideIndex);
    });

    nextButton.addEventListener('click', function() {
        activeSlideIndex = (activeSlideIndex < liElements.length - 1) ? activeSlideIndex + 1 : 0;
        updateSlides(liElements,activeSlideIndex);
    });
}