const carouselSlide = document.querySelector('.carousel-slide');
const carouselImages = document.querySelectorAll('.carousel-slide img');

const prevBtn = document.querySelector('#prevBtn');
const nextBtn = document.querySelector('#nextBtn');

let counter = 1;
const size = carouselImages[0].clientWidth;

carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';

function nextImage(){
    if(counter >= carouselImages.length - 1) return;
    //carouselSlide.style.transtion;
    counter++;
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
}

function lastImage(){
    if(counter <= 0) return;
    //carouselSlide.style.transtion;
    counter--;
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
}

window.addEventListener('keydown',()=>{
    if(keypress.key == "ArrowLeft"){nextImage();}
    if(keypress.key == "ArrowRight"){lastImage()}
});

nextBtn.addEventListener('click',()=>{
    nextImage();
});

prevBtn.addEventListener('click',()=>{
    lastImage()
});


carouselSlide.addEventListener('transitionend',()=>{
    
    if(carouselImages[counter].id === 'lastClone'){
        carouselSlide.style.transtion = "none";
        counter = carouselImages.length - 2;
        carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    }
    if(carouselImages[counter].id === 'firstClone'){
        carouselSlide.style.transtion = "none";
        counter = carouselImages.length - counter;
        carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    }
});
