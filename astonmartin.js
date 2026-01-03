document.addEventListener("DOMContentLoaded", () => {
    const cars = [
        { image: "images/amr25.png", watermark: "AMR-2025", x: 0, y: 0, s: 1.0 },
        { image: "images/amr24.png", watermark: "AMR-2024", x: 0, y: 0, s: 1.0 },
        { image: "images/amr23.png", watermark: "AMR-2023", x: 0, y: 0, s: 1.25 },
        { image: "images/amr22.png", watermark: "AMR-2022", x: 0, y: 0, s: 1.0 }
    ];

    let currentIndex = 0;

    const frame = document.getElementById("carFrame");
    const section = document.querySelector(".all-cars");
    const nextBtn = document.getElementById("nextCar");
    const prevBtn = document.getElementById("prevCar");

    if (!frame || !section || !nextBtn || !prevBtn) {
        console.error("Missing elements:", { frame, section, nextBtn, prevBtn });
        return;
    }

    function updateCar() {
        const c = cars[currentIndex];

        frame.style.backgroundImage = `url("${c.image}")`;

        frame.style.transform = `
      translateX(-50%)
      translate(${c.x}px, ${c.y}px)
      scale(${c.s})
    `;

        section.setAttribute("data-watermark", c.watermark);
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
