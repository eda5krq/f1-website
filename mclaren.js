// Array of McLaren cars
const cars = [
    { name: "MCL34", image: "mcl34.png" },
    { name: "MCL35", image: "mcl35.png" },
    { name: "MCL36", image: "mcl36.png" },
    { name: "MCL38", image: "mcl38.png" },

];

let currentIndex = 0;

const backButton = document.getElementById("back");
const forwardButton = document.getElementById("forward");
const carImg = document.querySelector(".car-img");
const bgText = document.querySelector(".bg-text");

function updateCar() {
    carImg.classList.add("fade");

    setTimeout(() => {
        carImg.src = cars[currentIndex].image;
        carImg.alt = cars[currentIndex].name;
        bgText.textContent = cars[currentIndex].name;

        carImg.offsetHeight;

        carImg.classList.remove("fade");
    }, 400);
}

backButton.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + cars.length) % cars.length;
    updateCar();
});

forwardButton.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % cars.length;
    updateCar();
});


updateCar();
