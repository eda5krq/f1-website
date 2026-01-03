document.addEventListener("DOMContentLoaded", () => {

  const cars = [
    { image: "w47.png", watermark: "FW47" },
    { image: "w46.png", watermark: "FW46" },
    { image: "w45.png", watermark: "FW45" },
    { image: "w19.png", watermark: "FW19" }
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
