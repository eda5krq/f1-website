const cars = [
  { name: "RB21", img: "rb21.png" },
  { name: "RB20", img: "rb20.png" },
  { name: "RB19", img: "rb19.png" },
  { name: "RB18", img: "rb18.png" }
];

let currentIndex = 0;

const carImg = document.querySelector(".car-img");
const bgText = document.querySelector(".bg-text");
const backBtn = document.getElementById("back");
const forwardBtn = document.getElementById("forward");

function updateCar() {
  carImg.style.opacity = 0;
  bgText.style.opacity = 0;

  setTimeout(() => {
    carImg.src = cars[currentIndex].img;
    bgText.textContent = cars[currentIndex].name;

    carImg.style.opacity = 1;
    bgText.style.opacity = 1;
  }, 300);
}

backBtn.onclick = () => {
  currentIndex = (currentIndex - 1 + cars.length) % cars.length;
  updateCar();
};

forwardBtn.onclick = () => {
  currentIndex = (currentIndex + 1) % cars.length;
  updateCar();
};

function resizeRB21() {
  bgText.style.fontSize = (window.innerWidth / 5) + "px";
}
resizeRB21();
window.addEventListener("resize", resizeRB21);
