document.addEventListener("DOMContentLoaded", () => {
    const cars = [
        { image: "images/sf24.png", watermark: "SF-24" },
        { image: "images/sf23.png", watermark: "SF-23" },
        { image: "images/f175.png", watermark: "F1-75" },
        { image: "images/sf90.png", watermark: "SF90" }
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
        const src = cars[currentIndex].image;

        frame.style.backgroundImage = `url("${src}")`;
        section.setAttribute("data-watermark", cars[currentIndex].watermark);

        console.log("Set car to:", src);
        console.log("Computed bg:", getComputedStyle(frame).backgroundImage);
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
