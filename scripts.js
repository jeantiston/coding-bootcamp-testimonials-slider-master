let slideIndex = 1;
showSlides(slideIndex);

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