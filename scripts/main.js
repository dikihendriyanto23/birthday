const musicPlayer = document.getElementById("music");

document.addEventListener("DOMContentLoaded", function (event) {
  // Music Player
  const btnPlay = document.getElementById("btnPlay");
  const btnPause = document.getElementById("btnPause");
  const btnStop = document.getElementById("btnStop");
  btnPlay.addEventListener("click", function (e) {
    musicPlayer.play();
  });

  btnPause.addEventListener("click", function (e) {
    musicPlayer.pause();
  });

  btnStop.addEventListener("click", function (e) {
    musicPlayer.pause();
    musicPlayer.currentTime = 0;
  });
});

let elementThree = document.getElementById("four");
let textThree =
  "Happy 23rd birthday love. Aku bangga punya kamu, selalu senang bisa berada disamping kamu dan melihat kamu bertumbuh menjadi lebih baik setiap harinya. Semoga harimu selalu menyenangkan. Semoga yang terbaik selalu menyertaimu.";
let delayThree = 100;

function typedText(element, text, delay) {
  let i = 0;
  function type() {
    if (i < text.length) {
      element.innerHTML += text[i];
      i++;
      setTimeout(type, delay);
    }
  }
  type();
}

const el = document.querySelectorAll(".element");
let index = 0;

function showNextElement() {
  let delay = 2000;
  if (index < el.length) {
    if (index == 2) {
      el[index - 1].style.animation = "hideanim 1s linear";
      setTimeout(function () {
        el[index - 1].style.display = "none";
        el[index - 2].style.animation = "hideanim 1s linear";
      }, 1000);
      setTimeout(function () {
        el[index - 2].style.display = "none";
      }, 2000);
      setTimeout(function () {
        el[index].style.display = "block";
        index++;
      }, 3200);
      delay = 5000;
    } else {
      if (index == 3) {
        index > 2 ? (el[index - 1].style.display = "none") : "";
        el[index].style.display = "block";
        el[index + 1].style.display = "block";
        typedText(elementThree, textThree, delayThree);
        delay = 25000;
      } else if (index == 4) {
        setTimeout(function () {
          document.querySelector(".send-btn").click();
        }, 1000);
      } else if (index == 5) {
        el[index - 1].style.display = "none";
        el[index - 2].style.display = "none";
        el[index].style.display = "block";
        document.querySelector(".hat").style.display = "block";
      } else if (index == 6) {
        el[index].style.display = "block";
        flipText();
      } else {
        index > 2 ? (el[index - 1].style.display = "none") : "";
        el[index].style.display = "block";
      }
      index++;
    }

    setTimeout(showNextElement, delay);
  }
}

function playMusic(isPlay) {
  let elWelcome = document.getElementsByClassName("welcome")[0];
  if (isPlay) {
    musicPlayer.play();
    elWelcome.style.display = "none";
    setTimeout(showNextElement, 1000);
  } else {
    elWelcome.style.display = "none";
    setTimeout(showNextElement, 1000);
  }
}

const balloonContainer = document.getElementById("balloon-container");

function random(num) {
  return Math.floor(Math.random() * num);
}

function getRandomStyles() {
  var r = random(255);
  var g = random(255);
  var b = random(255);
  var mt = random(200);
  var ml = random(50);
  var dur = random(5) + 5;
  return `
  background-color: rgba(${r},${g},${b},0.7);
  color: rgba(${r},${g},${b},0.7); 
  box-shadow: inset -7px -3px 10px rgba(${r - 10},${g - 10},${b - 10},0.7);
  margin: ${mt}px 0 0 ${ml}px;
  animation: float ${dur}s ease-in infinite
  `;
}

function createBalloons(num) {
  for (var i = num; i > 0; i--) {
    var balloon = document.createElement("div");
    balloon.className = "balloon";
    balloon.style.cssText = getRandomStyles();
    balloonContainer.append(balloon);
  }
}

function removeBalloons() {
  balloonContainer.style.opacity = 0;
  setTimeout(() => {
    balloonContainer.remove();
  }, 500);
}

function flipText() {
  createBalloons(40);
  let elText = document.querySelectorAll(".flip");
  j = 0;
  function flip() {
    if (j < elText.length) {
      elText[j].classList.remove("flip");
      elText[j].style.color = "#ff69b4";
      j++;
      setTimeout(flip, 100);
    }
  }
  flip();
}
