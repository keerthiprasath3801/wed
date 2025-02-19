const countdownDate = new Date("March 9, 2025 09:00:00 GMT+0530").getTime();

function updateCountdown() {
  const now = new Date().getTime();
  const timeLeft = countdownDate - now;

  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

  updateTime("days", days);
  updateTime("hours", hours);
  updateTime("minutes", minutes);
  updateTime("seconds", seconds);

  if (timeLeft < 0) {
    clearInterval(countdownInterval);
    document.querySelector(".countdown").innerHTML = "<h2>Happy Journey !</h2>";
  }
}

function updateTime(id, newValue) {
  const element = document.getElementById(id);
  const currentValue = element.textContent;

  if (currentValue !== String(newValue).padStart(2, "0")) {
    element.classList.add("flip");
    setTimeout(() => {
      element.textContent = String(newValue).padStart(2, "0");
      element.classList.remove("flip");
    }, 500);
  }
}

const countdownInterval = setInterval(updateCountdown, 1000);
updateCountdown();
document.addEventListener("DOMContentLoaded", function () {
    function createFloatingHearts(containerSelector) {
        const section = document.querySelector(containerSelector);
        if (!section) return;

        const heartContainer = document.createElement("div");
        heartContainer.classList.add("heart-container");
        section.appendChild(heartContainer);

        for (let i = 0; i < 20; i++) { 
            let heart = document.createElement("div");
            heart.classList.add("heart");
            heart.innerHTML = "💜"; 
            
            let size = Math.random() * 2 + 1; 
            let leftPosition = Math.random() * 100; 
            let duration = Math.random() * 5 + 3; 
            
            heart.style.left = `${leftPosition}%`;
            heart.style.fontSize = `${size}vw`;
            heart.style.animationDuration = `${duration}s`;
            heartContainer.appendChild(heart);
        }
    }
    createFloatingHearts("#venue");
    createFloatingHearts(".picture");
});

