
 /* === CAR DATA === */
const cars = [
  { name: "W14", img: "images/w14.png", x: 6,   y: 20,   s: 1.00 },
  { name: "W13", img: "images/w13.png", x: 5, y: 6,   s: 1.00 },
  { name: "W12", img: "images/w12.png", x: 5,  y: 10,  s: 1.00 },
  { name: "W11", img: "images/w11.png", x: 10,  y: 30,  s: 1.00 }
];



let currentIndex = 0;

/* === ELEMENTS === */
const carFrame = document.getElementById("carFrame");   
const section  = document.querySelector(".all-cars");   
const backBtn  = document.getElementById("prevCar");
const nextBtn  = document.getElementById("nextCar");


if (!carFrame || !section || !backBtn || !nextBtn) {
  console.error("Missing elements:", { carFrame, section, backBtn, nextBtn });
}


function updateCar() {
  if (!carFrame || !section) return;

  // Fade out //
  carFrame.style.opacity = 0;

  setTimeout(() => {
    const c = cars[currentIndex];

    // image
    carFrame.style.backgroundImage = `url("${c.img}")`;

    // offsets (fixed positioning)
    carFrame.style.setProperty("--x", (c.x ?? 0) + "px");
    carFrame.style.setProperty("--y", (c.y ?? 0) + "px");
    carFrame.style.setProperty("--s", String(c.s ?? 1));

    // watermark
    section.setAttribute("data-watermark", c.name);

    // Fade in
    carFrame.style.opacity = 1;
  }, 250);
}


backBtn.onclick = () => {
  currentIndex = (currentIndex - 1 + cars.length) % cars.length;
  updateCar();
};

nextBtn.onclick = () => {
  currentIndex = (currentIndex + 1) % cars.length;
  updateCar();
};


window.addEventListener("keydown", (e) => {
  const c = cars[currentIndex];

  if (e.key === "ArrowLeft")  c.x -= 5;
  if (e.key === "ArrowRight") c.x += 5;
  if (e.key === "ArrowUp")    c.y -= 5;
  if (e.key === "ArrowDown")  c.y += 5;

  if (e.key === "+") c.s = Math.round((c.s + 0.01) * 100) / 100;
  if (e.key === "-") c.s = Math.round((c.s - 0.01) * 100) / 100;

  updateCar();
  console.log("TUNED:", c.name, "x:", c.x, "y:", c.y, "s:", c.s);
});

updateCar();

const homeBtn = document.getElementById("home");
const firstSection = document.querySelector(".hero"); // ose emri i section-it të parë

window.addEventListener("scroll", () => {
  const end = firstSection.offsetTop + firstSection.offsetHeight;
  homeBtn.style.display = (window.scrollY > end - 50) ? "none" : "block";
});
