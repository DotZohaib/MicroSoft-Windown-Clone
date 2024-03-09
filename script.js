// const slides = document.querySelectorAll(".carousel-slide");
// let currentSlide = 0;

// function showSlide(index) {
//     slides[currentSlide].style.display = "none";
//     slides[index].style.display = "block";
//     currentSlide = index;
// }

// function nextSlide() {
//     const nextIndex = (currentSlide + 1) % slides.length;
//     showSlide(nextIndex);
// }

// function prevSlide() {
//     const prevIndex = (currentSlide - 1 + slides.length) % slides.length;
//     showSlide(prevIndex);
// }

// showSlide(currentSlide);
// setInterval(nextSlide, 3000);



// =================================================================

document.addEventListener('DOMContentLoaded', function () {
    var searchIcon = document.querySelector('.search-icon');
    var searchBar = document.querySelector('.search-bar');

    searchIcon.addEventListener('click', function () {
        searchBar.classList.toggle('active');
    });
});