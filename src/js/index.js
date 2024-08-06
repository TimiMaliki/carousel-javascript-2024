const slideContainer = document.querySelector(".slide-container");
const slide = document.querySelector(".slide");
const prevSlide = document.querySelector(".left");
const nextSlide = document.querySelector(".right");


nextSlide.addEventListener("click" , ()=>{
    const slideWidth = slide.clientWidth;
    slideContainer.scrollLeft += slideWidth
})

prevSlide.addEventListener("click" , ()=>{
    const slideWidth = slide.clientWidth;
    slideContainer.scrollLeft -= slideWidth
})