const carouselSlide = document.querySelector('.carousel-slide');
const carouselImages = document.querySelectorAll('.carousel-slide img');

const prevBtn = document.querySelector('#prevBtn');
const nextBtn = document.querySelector('#nextBtn');


let counter = 1;
const size = carouselImages[0].clientWidth;

carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';

function nextImage(){
    if(counter >= carouselImages.length - 1) return;
    carouselSlide.style.transition = "0.2s ease-in-out";
    counter++;
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
}

function lastImage(){  
    if(counter <= 0) return;
    carouselSlide.style.transition = "0.2s ease-in-out";
    counter--;
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
}

window.addEventListener('keydown',(keypress)=>{
    if(keypress.key == "ArrowLeft"){lastImage();}
    if(keypress.key == "ArrowRight"){nextImage()}
});

nextBtn.addEventListener('click',()=>{
    nextImage();
});

prevBtn.addEventListener('click',()=>{
    lastImage()
});


carouselSlide.addEventListener('transitionend',()=>{
    
    if(carouselImages[counter].id === 'lastClone'){
        carouselSlide.style.transition = "none";
        counter = carouselImages.length - 2;
        carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    }
    if(carouselImages[counter].id === 'firstClone'){
        carouselSlide.style.transition = "none";
        counter = carouselImages.length - counter;
        carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    }
});

const citrus = document.querySelector('#Citrus h1 a');
let CitrusCurtis = 'Citrus'
function anagram(){
    if(CitrusCurtis == 'Citrus'){
        citrus.innerHTML = CitrusCurtis
        CitrusCurtis = 'Curtis'
    }else if(CitrusCurtis == 'Curtis'){
        citrus.innerHTML = CitrusCurtis
        CitrusCurtis = 'Citrus'
    }
    
}