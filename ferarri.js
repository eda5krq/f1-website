$(document).ready(function () {
  const cars = [
    { image: "images/sf24.png", watermark: "SF-24" },
    { image: "images/sf23.png", watermark: "SF-23" },
    { image: "images/f175.png", watermark: "F1-75" },
    { image: "images/sf90.png", watermark: "SF90" }
  ];

  let currentIndex = 0;

  const $frame = $("#carFrame");
  const $section = $(".all-cars");

  function updateCar() {
    $frame.css("background-image", `url(${cars[currentIndex].image})`);
    $section.attr("data-watermark", cars[currentIndex].watermark);
  }

  $("#nextCar").on("click", function () {
    currentIndex = (currentIndex + 1) % cars.length;
    updateCar();
  });

  $("#prevCar").on("click", function () {
    currentIndex = (currentIndex - 1 + cars.length) % cars.length;
    updateCar();
  });

  updateCar();
});
