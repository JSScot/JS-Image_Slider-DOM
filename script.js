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

// Call the function to set background images on initial load
updateBackgroundImage();

// Add event listener to the arrows
prevArrow.addEventListener('click', () => {
  moveSlides("prev");
});

nextArrow.addEventListener('click', () => {
  moveSlides("next");
});

// Function to move slides
const moveSlides = (direction) => {
  if (direction === 'next') {
    index++;
    if (index === totalSlides) {
      index = 0; // Loop back to the first image
    }
  } else {
    if (index === 0) {
      index = totalSlides - 1; // Move to the last image
    } else {
      index--;
    }
  }

  // Update the 'main' class for the current slide
  for (let i = 0; i < totalSlides; i++) {
    carouselContainer[i].classList.remove('main');
  }
  carouselContainer[index].classList.add('main');
};

// Automatically move to the next slide every 2000ms (2 seconds)
setInterval(() => {
  moveSlides('next');
}, 2000);
