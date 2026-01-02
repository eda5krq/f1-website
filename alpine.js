const images = ['a522.png', 'a523.png', 'a524.png', 'a525.png'];
const names = ['A522', 'A523', 'A524', 'A525'];
let current = 0;

const img = document.getElementById('car-image');
const section = document.querySelector('section[data-watermark]');

function changeImage(direction) {
  img.style.opacity = 0;
  setTimeout(() => {
    current = (current + direction + images.length) % images.length;
    img.src = images[current];
    section.setAttribute('data-watermark', names[current]);
    img.style.opacity = 1;
  }, 300);
}

document.getElementById('forward').addEventListener('click', () => {
  changeImage(1);
});

document.getElementById('backward').addEventListener('click', () => {
  changeImage(-1);
});
