document.addEventListener("DOMContentLoaded", () => {

  const cars = [
    { image: "vf24.png", watermark: "VF-24" },
    { image: "vf23.png", watermark: "VF-23" },
    { image: "vf22.png", watermark: "VF-22" },
    { image: "vf21.png", watermark: "VF-21" }
  ];

  let currentIndex = 0;

  const frame   = document.getElementById("carFrame");
  const section = document.querySelector(".all-cars");
  const nextBtn = document.getElementById("nextCar");
  const prevBtn = document.getElementById("prevCar");

  function updateCar() {
    frame.classList.add("fade-out");

    setTimeout(() => {
      frame.style.backgroundImage = `url('${cars[currentIndex].image}')`;
      section.setAttribute("data-watermark", cars[currentIndex].watermark);

      frame.classList.remove("fade-out");
    }, 180);
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
