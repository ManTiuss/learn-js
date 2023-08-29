const images = document.querySelectorAll('.slide');
const nextButton = document.querySelector('.next');
const prevButton = document.querySelector('.prev');
let currentImageIndex = 0;

function showImage(index) {
  images.forEach(image => image.classList.remove('active'));
  images[index].classList.add('active');
}

function updateButtons() {
  if (currentImageIndex === 0) {
    prevButton.style.display = 'none';
  } else {
    prevButton.style.display = 'block';
  }
  
  if (currentImageIndex === images.length - 1) {
    nextButton.style.display = 'none';
  } else {
    nextButton.style.display = 'block';
  }
}

nextButton.addEventListener('click', () => {
  if (currentImageIndex < images.length - 1) {
    currentImageIndex++;
    showImage(currentImageIndex);
    updateButtons();
  }
});

prevButton.addEventListener('click', () => {
  if (currentImageIndex > 0) {
    currentImageIndex--;
    showImage(currentImageIndex);
    updateButtons();
  }
});

showImage(currentImageIndex);
updateButtons();