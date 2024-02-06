console.log("Helloooo, testinggg")

// Select arrows
const prevArrow = document.querySelector('.prev');
const nextArrow = document.querySelector('.next');

// Reference to the carousel items
const carouselContainer = document.querySelector('.carousel').children;
let totalSlides = carouselContainer.length; // The number of children
let index = 0; // Initial index

// Function to update background images for carousel items
const updateBackgroundImage = () => {
  for (let i = 0; i < totalSlides; i++) {
    const imageUrl = carouselContainer[i].getAttribute('data-image');
    carouselContainer[i].style.backgroundImage = `url('${imageUrl}')`;
  }
};


updateBackgroundImage();


prevArrow.addEventListener('click', () => {
  moveSlides("prev");
});

nextArrow.addEventListener('click', () => {
  moveSlides("next");
});


const moveSlides = (direction) => {
  if (direction === 'next') {
    index++;
    if (index === totalSlides) {
      index = 0; 
    }
  } else {
    if (index === 0) {
      index = totalSlides; 
    }
    index--;
  }

  for (let i = 0; i < totalSlides; i++) {
    carouselContainer[i].classList.remove('main');
  }
  carouselContainer[index].classList.add('main');
};

// moves every 4 seconds
/*setInterval(() => {
  moveSlides('next');
}, 4000);*/
