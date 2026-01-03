// Set your next race date here (local time)
const targetDate = new Date("2026-03-08T14:00:00");

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

  document.getElementById("days").textContent = pad2(days);
  document.getElementById("hours").textContent = pad2(hours);
  document.getElementById("minutes").textContent = pad2(minutes);
}

updateCountdown();
setInterval(updateCountdown, 1000 * 10); 
$(document).ready(function () {
  const $logo = $('#logo');
  const $img = $logo.find('img');
  const $text = $('.paragraph');
  const $intro = $('#intro');
  const $main = $('#main');
  const $audio = $('#radio');
  const $modelViewer = $('#model-viewer');

  // Initial fade-in animations
  $logo.addClass('animate-fade-in');
  $img.addClass('animate-fade-in');
  $text.addClass('animate-text-fade-in');
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



const buttons = document.querySelectorAll(".btn--ghost");

// BUTONI: NEXT RACE (8 MARS / AUSTRALIAN GP)
document.querySelector(".btn").addEventListener("click", () => {
  window.open(
    "https://www.formula1.com/en/racing/2026/Australia.html",
    "_blank"
  );
});

// BUTONI: TRENDING / TOP DRIVERS
document.querySelector(".btn--ghost").addEventListener("click", () => {
  window.open(
    "https://en.wikipedia.org/wiki/List_of_Formula_One_World_Drivers%27_Champions",
    "_blank"
  );
});



