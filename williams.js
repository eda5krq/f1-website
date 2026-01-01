document.addEventListener("DOMContentLoaded", () => {

  const cars = [
    { image: "w14.png", watermark: "W14" },
    { image: "w13.png", watermark: "W13" },
    { image: "w12.png", watermark: "W12" },
    { image: "w11.png", watermark: "W11" }
  ];

  let currentIndex = 0;

  const frame = document.getElementById("carFrame");
  const section = document.querySelector(".all-cars");
  const nextBtn = document.getElementById("nextCar");
  const prevBtn = document.getElementById("prevCar");

  function updateCar() {
    frame.style.backgroundImage = `url('${cars[currentIndex].image}')`;
    section.setAttribute("data-watermark", cars[currentIndex].watermark);
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