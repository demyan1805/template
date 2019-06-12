window.addEventListener('DOMContentLoaded', function() {

    //slider
    let sliderItems = document.querySelectorAll('.slider__item'),
        slideIndex = [0, 1],
        prev = document.querySelectorAll('.slider__btn')[0],
        next = document.querySelectorAll('.slider__btn')[1];
    showSlides(slideIndex);
    function showSlides(n) {
        
        console.log('before'+slideIndex);
        if (slideIndex[1] > sliderItems.length -1) {
            slideIndex[1] = 0;
            sliderItems[sliderItems.length -1].style.order = -1;
        }
        else {
            sliderItems[sliderItems.length -1].style.order = 'unset';
        }
        if (slideIndex[0] < 0) {
            slideIndex[0] = sliderItems.length -1;
            sliderItems[0].style.order = 500;
        }
        else {
            sliderItems[0].style.order = 'unset';
        }
        if (slideIndex[0] > sliderItems.length -1) {
            slideIndex[0] = 0;
        }
        if (slideIndex[1] < 0) {
            slideIndex[1] = sliderItems.length -1;
        }
        // else {
        //     slideIndex = n;
        // }
        console.log('after'+slideIndex);
        sliderItems.forEach((item) => item.classList.remove('active'));
        sliderItems[slideIndex[0]].classList.add('active');
        sliderItems[slideIndex[1]].classList.add('active');

        
    }
    prev.addEventListener('click', function() {
        showSlides([--slideIndex[0], --slideIndex[1]]);
    });
    next.addEventListener('click', function() {
        showSlides([++slideIndex[0], ++slideIndex[1]]);
    });


});