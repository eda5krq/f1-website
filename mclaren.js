// Array of McLaren cars
const cars = [
    { name: "MCL36", image: "mcl36.png" },
    { name: "MCL38", image: "mcl38.png" }
];

let currentIndex = 1; // Start with MCL38, which is index 1

const backButton = document.getElementById('back');
const forwardButton = document.getElementById('forward');
const carImg = document.querySelector('.car-img');
const bgText = document.querySelector('.bg-text');

// Function to update the display
function updateCar() {
    carImg.src = cars[currentIndex].image;
    carImg.alt = cars[currentIndex].name;
    bgText.textContent = cars[currentIndex].name;
}

// Event listeners
backButton.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + cars.length) % cars.length;
    updateCar();
});

forwardButton.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % cars.length;
    updateCar();
});

// Initialize
updateCar();
