document.addEventListener("DOMContentLoaded", () => {

    const cars = [
        { image: "images/rb2024.png", watermark: "RB-2024", x: 0, y: 0, s: 1.0 },
        { image: "images/rb2023.png", watermark: "RB-2023", x: 0, y: 0, s: 1.0 },
        { image: "images/at03.png", watermark: "AT03", x: 0, y: 0, s: 1.0 },
        { image: "images/tr2008.png", watermark: "TR-2008", x: 0, y: 0, s: 1.0 }
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

    window.addEventListener("keydown", (e) => {
        const c = cars[currentIndex];

        if (e.key === "ArrowLeft") c.x -= 5;
        if (e.key === "ArrowRight") c.x += 5;
        if (e.key === "ArrowUp") c.y -= 5;
        if (e.key === "ArrowDown") c.y += 5;

        if (e.key === "+") c.s = Math.round((c.s + 0.01) * 100) / 100;
        if (e.key === "-") c.s = Math.round((c.s - 0.01) * 100) / 100;

        updateCar();
        console.log(c);
    });


    updateCar();
});
