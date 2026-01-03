const carImages = [
    'Kicksauber2025 (1).png',
    'C44.png',
];

const carTitles = [
    'C45',
    'C44',
];

let currentIndex = 0;

const carImg = document.querySelector('.car-img');
const carTitle = document.querySelector('.car-title');
const nextBtn = document.querySelector('.next');
const backBtn = document.querySelector('.back');

function showImage(index) {
    carImg.style.opacity = 0;
    carTitle.style.opacity = 0;

    setTimeout(() => {
        carImg.src = carImages[index];
        carTitle.textContent = carTitles[index];
        carImg.style.opacity = 1;
        carTitle.style.opacity = 1;
    }, 300);
}

nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % carImages.length;
    showImage(currentIndex);
});

backBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + carImages.length) % carImages.length;
    showImage(currentIndex);
});
