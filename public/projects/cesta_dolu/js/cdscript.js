var game = document.getElementById("game");
if (window.innerWidth < 400) {
  var width = window.innerWidth - 40;
} else {
  var width = 400;
}
document.documentElement.style.setProperty("--width", width + "px");
var character = document.getElementById("character");
var currentBlocks = [];
var counter = 0;
let gameStart = false;
var counterSpan = document.getElementById("score");
var highscoreTxt = document.getElementById("highscore");
var welcomeBoard = document.getElementById("welcome-board");
var deathBoard = document.getElementById("death-board");
highscore = localStorage.getItem("highscore");
welcomeBoard.classList.add("active");

function removeClass() {
  welcomeBoard.classList.remove("active");
  welcomeBoard.classList.add("start");
}

if (highscore > 0) {
  highscoreTxt.textContent = "Nejlepší skóre: " + highscore;
} else {
  localStorage.setItem("highscore", 0);
  highscore = 0;
  highscoreTxt.textContent = "Nejlepší skóre: " + highscore;
}

var updateBlocks = setInterval(function () {
  createBlocks();
}, 1);

function createBlocks() {
  var holeLast = document.getElementById("hole".concat(counter - 1));
  var blockLast = document.getElementById("block".concat(counter - 1));
  if (counter > 0) {
    var blockLastTop = parseInt(
      window.getComputedStyle(blockLast).getPropertyValue("top")
    );
    var holeLastTop = parseInt(
      window.getComputedStyle(holeLast).getPropertyValue("top")
    );
  }
  if (blockLastTop < 400 || counter == 0) {
    var block = document.createElement("div");
    var hole = document.createElement("div");
    block.setAttribute("class", "block");
    block.setAttribute("id", "block".concat(counter));
    hole.setAttribute("class", "hole");
    hole.setAttribute("id", "hole".concat(counter));
    block.style.top = blockLastTop + 100 + "px";
    hole.style.top = holeLastTop + 100 + "px";
    if (window.innerWidth < 400) {
      var random = Math.floor(Math.random() * (window.innerWidth - 78));
    } else {
      var random = Math.floor(Math.random() * 320);
    }
    hole.style.left = random + "px";
    game.appendChild(hole);
    game.appendChild(block);
    currentBlocks.push(counter);
    counter++;
  }
  var characterTop = parseFloat(
    window.getComputedStyle(character).getPropertyValue("top")
  );
  var characterLeft = parseInt(
    window.getComputedStyle(character).getPropertyValue("left")
  );
  if (characterTop < -20) {
    var num = counter - 5;
    score.textContent = "Skóre: " + num;
    if (highscore !== null) {
      if (num > highscore) {
        highscore = num;
        highscoreTxt.textContent = "Nejlepší skóre: " + highscore;
        localStorage.setItem("highscore", num);
      }
    } else {
      highscore = 0;
      highscoreTxt.textContent = "Nejlepší skóre: " + highscore;
      localStorage.setItem("highscore", num);
    }
    gameStart = false;
    enable = false;
    deathBoard.classList.add("active");
  }
  var drop = 0;
  for (var i = 0; i < currentBlocks.length; i++) {
    let current = currentBlocks[i];
    let iblock = document.getElementById("block" + current);
    let ihole = document.getElementById("hole" + current);
    let iblockTop = parseFloat(
      window.getComputedStyle(iblock).getPropertyValue("top")
    );
    let iholeLeft = parseFloat(
      window.getComputedStyle(ihole).getPropertyValue("left")
    );
    var speed = counter / 200;
    if (window.innerWidth < 400) {
      var newtop = iblockTop - 1.5 - speed;
    } else {
      var newtop = iblockTop - 0.5 - speed;
    }
    if (gameStart) {
      iblock.style.top = newtop + "px";
      ihole.style.top = newtop + "px";
    }
    if (iblockTop < -20) {
      currentBlocks.shift();
      counterSpan.innerHTML = "Skóre: ".concat(counter - 5);
      iblock.remove();
      ihole.remove();
    }
    if (iblockTop - 20 < characterTop && iblockTop > characterTop) {
      drop++;
      if (iholeLeft <= characterLeft && iholeLeft + 20 >= characterLeft) {
        drop = 0;
      }
    }
  }
  if (welcomeBoard.classList.contains("start")) {
    if (drop == 0) {
      if (characterTop < 480) {
        if (window.innerWidth < 400) {
          character.style.top = characterTop + 10 + "px";
        } else {
          character.style.top = characterTop + 2 + "px";
        }
      }
    } else {
    if (gameStart){
      if (window.innerWidth < 400) {
        character.style.top = characterTop - 1.5 - speed + "px";
      } else {
        character.style.top = characterTop - 0.5 - speed + "px";
      }
    }}
  }
}
