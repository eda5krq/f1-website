// Set your next race date here (local time)
const targetDate = new Date("2026-05-26T14:00:00");

function pad2(n) {
  return String(n).padStart(2, "0");
}

function updateCountdown() {
  const now = new Date();
  const diff = targetDate - now;

  if (diff <= 0) {
    document.getElementById("days").textContent = "00";
    document.getElementById("hours").textContent = "00";
    document.getElementById("minutes").textContent = "00";
    return;
  }

  const totalMinutes = Math.floor(diff / 1000 / 60);
  const days = Math.floor(totalMinutes / (60 * 24));
  const hours = Math.floor((totalMinutes % (60 * 24)) / 60);
  const minutes = totalMinutes % 60;

  document.getElementById("days").textContent = pad2(days);
  document.getElementById("hours").textContent = pad2(hours);
  document.getElementById("minutes").textContent = pad2(minutes);
}

updateCountdown();
setInterval(updateCountdown, 1000 * 10);

function pad2(n) {
  return String(n).padStart(2, "0");
}

function updateCountdown() {
  const now = new Date();
  const diff = targetDate - now;

  if (diff <= 0) {
    document.getElementById("days").textContent = "00";
    document.getElementById("hours").textContent = "00";
    document.getElementById("minutes").textContent = "00";
    return;
  }

  const totalMinutes = Math.floor(diff / 1000 / 60);
  const days = Math.floor(totalMinutes / (60 * 24));
  const hours = Math.floor((totalMinutes % (60 * 24)) / 60);
  const minutes = totalMinutes % 60;

  //document.getElementById("days").textContent = pad2(days);
  //document.getElementById("hours").textContent = pad2(hours);
  //document.getElementById("minutes").textContent = pad2(minutes);
}

updateCountdown();
setInterval(updateCountdown, 1000 * 10); 
$(document).ready(function () {
  console.log('Document is ready');
  const $logo = $('#logo');
  const $img = $logo.find('img');
  console.log('Imazhi' + $img);
  const $text = $('.paragraph');
  const $intro = $('#intro');
  const $main = $('#main');
  const $audio = $('#radio');
  const $modelViewer = $('#model-viewer');

  // Initial fade-in animations
  $logo.addClass('animate-fade-in');
  $img.addClass('animate-fade-in');
  $text.addClass('animate-text-fade-in');

  // When logo image is clicked
  $logo.on('click', function () {
    console.log('Logo clicked');
    if ($audio.length) {
      console.log('Playing audio');
      const playPromise = $audio[0].play();
      if (playPromise !== undefined) {
        playPromise.catch(err => console.warn('Audio play failed:', err));
      }
      $audio[0].onended = function () {
      console.log('Audio finished, redirecting...');
      window.location.href = 'homepage.html';
    };
    }

    $('body').addClass('gradient-active');

    $intro.find('.logo, .paragraph').fadeTo(500, 0);
    $intro.delay(400).fadeTo(1000, 0, function () {
      $intro.hide();

      $main.css('display', 'block').hide().fadeTo(1000, 1, function () {
        revealNavbarSequentially();
      });
    });
  });

  // Sequential navbar reveal
  function revealNavbarSequentially() {
    const $navbarImgs = $('.navbar img');
    $navbarImgs.each(function (index) {
      $(this)
        .delay(index * 150)
        .queue(function (next) {
          $(this).addClass('reveal');
          next();
        });
    });
  }
  });
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
