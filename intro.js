const button = document.getElementById("introBtn");
const audio = document.getElementById("radio");

button.addEventListener("click", () => {
  button.disabled = true; // prevent double click
  audio.currentTime = 0;

  audio.play().catch(() => {
    // If audio fails, still continue
    window.location.href = "homepage.html";
  });

  audio.onended = () => {
    window.location.href = "homepage.html";
  };
});
