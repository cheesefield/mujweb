var character = document.getElementById("character");
var interval;
var both = 0;
var enable = true;

function moveLeft() {
  if (welcomeBoard.classList.contains("start")) {
    if (enable) {
      var left = parseInt(
        window.getComputedStyle(character).getPropertyValue("left")
      );
    }
  }
  if (left > 0) {
    if (window.innerWidth < 400) {
      var newleft = left - 5;
    } else {
      var newleft = left - 2;
    }
    character.style.left = newleft + "px";
  }
}
function moveRight() {
  if (welcomeBoard.classList.contains("start")) {
    if (enable) {
      var left = parseInt(
        window.getComputedStyle(character).getPropertyValue("left")
      );
    }
  }
  if (window.innerWidth < 400) {
    var num = window.innerWidth - 58;
  } else {
    var num = 380;
  }
  if (left < num) {
    if (window.innerWidth < 400) {
      var newleft = left + 5;
    } else {
      var newleft = left + 2;
    }
    character.style.left = newleft + "px";
  }
}
document.addEventListener("keydown", function () {
  if (both == 0) {
    both++;
    if (event.key === "ArrowLeft") {
      interval = setInterval(moveLeft, 1);
      gameStart = true;
    }
    if (event.key === "ArrowRight") {
      interval = setInterval(moveRight, 1);
      gameStart = true;
    }
  }
});
document.addEventListener("keyup", function () {
  clearInterval(interval);
  both = 0;
});

document.getElementById("left").addEventListener("mousedown", function () {
  interval = setInterval(moveLeft, 1);
  if (welcomeBoard.classList.contains("start")) {
    gameStart = true;
  }
  both++;
});
document.getElementById("left").addEventListener("mouseup", function () {
  clearInterval(interval);
  both = 0;
});
document.getElementById("left").addEventListener("touchstart", function () {
  interval = setInterval(moveLeft, 1);
  if (welcomeBoard.classList.contains("start")) {
    gameStart = true;
  }
  both++;
});
document.getElementById("left").addEventListener("touchend", function () {
  clearInterval(interval);
  both = 0;
});
document.getElementById("right").addEventListener("mousedown", function () {
  interval = setInterval(moveRight, 1);
  if (welcomeBoard.classList.contains("start")) {
    gameStart = true;
  }
  both++;
});
document.getElementById("right").addEventListener("mouseup", function () {
  clearInterval(interval);
  both = 0;
});
document.getElementById("right").addEventListener("touchstart", function () {
  interval = setInterval(moveRight, 1);
  if (welcomeBoard.classList.contains("start")) {
    gameStart = true;
  }
  both++;
});
document.getElementById("right").addEventListener("touchend", function () {
  clearInterval(interval);
  both = 0;
});
