let currentIndex = 0;

function updateCarousel() {
  const carouselItems = document.querySelectorAll('.carousel-item');
  const totalItems = carouselItems.length;

  // Hide all items
  carouselItems.forEach((item) => {
    item.style.display = 'none';
  });

  // Show only the current item
  carouselItems[currentIndex].style.display = 'block';
}

function moveSlide(direction) {
  const carouselItems = document.querySelectorAll('.carousel-item');
  const totalItems = carouselItems.length;

  // Update current index
  currentIndex += direction;

  // Wrap around if index goes out of bounds
  if (currentIndex < 0) {
    currentIndex = totalItems - 1;
  } else if (currentIndex >= totalItems) {
    currentIndex = 0;
  }

  // Update the carousel
  updateCarousel();
}

// Initialize the carousel
document.addEventListener('DOMContentLoaded', () => {
  updateCarousel();
});
