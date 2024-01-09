console.log("Helloooo, testinggg")

// select arrows 
const prevArrow = document.querySelector('.prev');
const nextArrow = document.querySelector('.next'); 

// save number of images in container
const carouselContainer = document.querySelector('.carousel').children;
let totalSlides = carouselContainer.length;
let index = 0;


prevArrow.addEventListener('click', () => {
// add console log to test it workds 
moveSlides("prev");
});

nextArrow.addEventListener('click', () => {
moveSlides("next");
});

const moveSlides = (direction) => {

  if(direction === 'next') {
    index++;
    if(index === totalSlides) {
      index = 0;
    }
  } else {
    if(index === 0) {
      index = totalSlides - 1;
    } else {
      index--;
    }
  }

  for(let i = 0; i < totalSlides; i++) {
    carouselContainer[i].classList.remove('main');
  }

  carouselContainer[index].classList.add('main');
  console.log(index);

};

setInterval(() => {
console.log('setInterval is working every two seconds')
  moveSlides('next');
}, 2000);







    



