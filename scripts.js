const carouselSlide = document.querySelector('.carousel-slide');
const carouselImages = document.querySelectorAll('.carousel-slide img');

const prevBtn = document.querySelector('#prevBtn');
const nextBtn = document.querySelector('#nextBtn');

const citrus = document.querySelector('#Curtis');

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
        console.log("This is returning to the end");
        carouselSlide.style.transition = "none";
        counter = carouselImages.length - 2;
        carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    }
    if(carouselImages[counter].id === 'firstClone'){
        console.log("This is returning to the beginning")
        carouselSlide.style.transition = "none";
        counter = carouselImages.length - counter;
        carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    }
});

citrus.addEventListener('click',()=>{
    console.log(citrus.innerHTML)
})