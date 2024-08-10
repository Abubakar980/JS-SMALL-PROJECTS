const slides = document.querySelectorAll(".slide")

var counter = 0;
const totalSlides=slides.length;

slides.forEach((slide, index) => {
    slide.style.left = `${index * 100}%`
})

const goNext = () => {
    counter++;
    if(counter>=totalSlides){
        counter=0;
    }
    slideImage();
}

const goPrev = () => {
    counter--;
    if(counter<0){
        counter=totalSlides-1;
    }
    slideImage();
}

const slideImage = () => {
    slides.forEach(
        (slide) => {
            slide.style.transform = `translateX(-${counter * 100}%)`;
        }
    )
}