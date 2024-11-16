let slideIndex = 0;
let slides = document.getElementsByClassName("slide");
showSlides(slideIndex);

function showSlides(slideIndex) {
  let container = document.getElementsByClassName("slides")[0];

  console.log(`SHOW: length: ${slides.length}, slideIndex: ${slideIndex}`);
  container.style.transform = `translateX(-${slideIndex * 100}%)`;
}

function changeSlide(change) {
  slideIndex += change;
  if (slideIndex >= slides.length) {
    slideIndex = 0;
  } else if (slideIndex < 0) {
    slideIndex = slides.length - 1;
  }
  console.log(`CHANGE: change: ${change}, slideIndex: ${slideIndex}`);
  showSlides(slideIndex);
}

setInterval(() => {
  changeSlide(1);
}, 5000);
