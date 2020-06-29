let slideIndex = 1;
showSlides(slideIndex);

//swipe touch
const photo = document.querySelector('.photo-wrap');
let isDown = false;
let startX;
let scrollLeft;
let walk;
console.log(photo);

photo.addEventListener('touchstart', (e) => {
    isDown = true;
    startX = e.touches[0].screenX;
    console.log('start', e.touches[0].screenX);
  });

  photo.addEventListener('touchend', () => {
    isDown = false;
    console.log('walk', walk);
    if (walk && walk > 0) {
        plusSlides(-1);
    }
    else if(walk && walk < 0) {
        plusSlides(1);
    }
  });

  photo.addEventListener('touchmove', (e) => {
    if (!isDown) return;  // stop the fn from running
    e.preventDefault();
    const x = e.touches[0].screenX;
    walk = (x - startX);
    console.log('move', e.touches[0].screenX);
    

});


//click nav
const next = document.querySelector('.next');
console.log(next);
next.addEventListener('click', () => {
  plusSlides(1);
});

const prev = document.querySelector('.prev');
console.log(prev);
prev.addEventListener('click', function() {
  plusSlides(-1);
});


function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("photo");
    let testimonials = document.getElementsByClassName("testimonial");
    
    if (n > slides.length) {slideIndex = 1;}
    if (n < 1) {slideIndex = slides.length;}

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
        testimonials[i].style.display = "none";  
    }

    slides[slideIndex-1].style.display = "block";  
    testimonials[slideIndex-1].style.display = "block";  
}