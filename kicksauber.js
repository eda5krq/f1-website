document.addEventListener("DOMContentLoaded", () => {

  const cars = [
    { image: "c44.png", watermark: "C44" },
    { image: "c45.png", watermark: "C45" },
  ];

  let currentIndex = 0;

  const frame   = document.getElementById("carFrame");
  const section = document.querySelector(".all-cars");
  const nextBtn = document.getElementById("nextCar");
  const prevBtn = document.getElementById("prevCar");

  function updateCar() {
    frame.style.backgroundImage = `url('${cars[currentIndex].image}')`;
    if (section) {
      section.setAttribute("data-watermark", cars[currentIndex].watermark);
    }
  }

  nextBtn.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % cars.length;
    updateCar();
  });

  prevBtn.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + cars.length) % cars.length;
    updateCar();
  });

  updateCar();
});