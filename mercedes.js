
 document.addEventListener("DOMContentLoaded", () => {
  const cars = [
    // ndreqi vlerat x/y/s sipas qejfit
    { name: "W14", img: "w14.png", x: 0,   y: 0,   s: 1.00 },
    { name: "W13", img: "w13.png", x: -20, y: 6,   s: 1.00 },
    { name: "W12", img: "w12.png", x: 12,  y: -8,  s: 0.98 },
    { name: "W11", img: "w11.png", x: 25,  y: -5,  s: 1.03 }
  ];

  let currentIndex = 0;

  const carFrame = document.getElementById("carFrame");
  const section  = document.querySelector(".all-cars");
  const nextBtn  = document.getElementById("nextCar");
  const prevBtn  = document.getElementById("prevCar");

  function updateCar() {
    const c = cars[currentIndex];

    // image
    carFrame.style.backgroundImage = `url("${c.img}")`;

    // per-car offsets (këto e bëjnë “fixed” vizualisht)
    carFrame.style.setProperty("--x", c.x + "px");
    carFrame.style.setProperty("--y", c.y + "px");
    carFrame.style.setProperty("--s", String(c.s));

    // watermark
    section.setAttribute("data-watermark", c.name);

    console.log("SHOW:", c.name, "x=", c.x, "y=", c.y, "s=", c.s);
  }

  nextBtn.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % cars.length;
    updateCar();
  });

  prevBtn.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + cars.length) % cars.length;
    updateCar();
  });

  // OPTIONAL: tuning me tastierë (super për me i gjet vlerat perfekte)
  window.addEventListener("keydown", (e) => {
    const c = cars[currentIndex];

    if (e.key === "ArrowLeft")  c.x -= 5;
    if (e.key === "ArrowRight") c.x += 5;
    if (e.key === "ArrowUp")    c.y -= 5;
    if (e.key === "ArrowDown")  c.y += 5;

    if (e.key === "+") c.s = Math.round((c.s + 0.01) * 100) / 100;
    if (e.key === "-") c.s = Math.round((c.s - 0.01) * 100) / 100;

    updateCar();
  });

  updateCar();
});
