let dotIndex = 0;
let slideIndex = 1;
const sliderClass = "blog-body"
const sliderItemClass = "blog-body__item";
const dotsClass = "fa fa-circle"
const dotActiveClass = "blog-load__item--loading"
const dotInactiveClass = "blog-load__item--unload"
showSlides();

function showSlides() {
    //dots change
    let dots = document.getElementsByClassName(dotsClass);
    dotIndex++;
    if (dotIndex > dots.length) dotIndex = 1;
    for (let i = 0; i < dots.length; i++) {
        dots[i].className = `${dotsClass} ${dotInactiveClass}`;
    }
    
    dots[dotIndex - 1].className = `${dotsClass} ${dotActiveClass}`;
    //slide change
    let slides = document.getElementsByClassName(sliderItemClass);
    let maxSlideIndex = slides.length;
    let index = 0;
    for (let i = slideIndex; i <=maxSlideIndex; i++) {
            slides[index].style.order = i;
            index++;
    }
    if(index != maxSlideIndex){
        for(let i=1;i<slideIndex;i++){
            slides[index].style.order = i;
            index++;
        }
    }
   slideIndex = slideIndex == maxSlideIndex ? 1 : slideIndex+1;
    setTimeout(() => {
        showSlides();
    }, 2000);
}