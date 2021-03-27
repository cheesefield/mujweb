var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");

// Red
ctx.fillStyle = "#FF0000";
ctx.fillRect(30, 30, 150, 80);

// Create gradient
var grd = ctx.createLinearGradient(0, 0, 400, 150);
grd.addColorStop(0, "black");
grd.addColorStop(1, "white");
// Fill with gradient
ctx.fillStyle = grd;
ctx.fillRect(210, 30, 150, 80);

// Create gradient 2
var gradient = ctx.createLinearGradient(2, 2, 200, 0);
gradient.addColorStop(0.1, "black");
gradient.addColorStop(0.2, "purple");
gradient.addColorStop(0.3, "pink");
gradient.addColorStop(0.4, "lightblue");
gradient.addColorStop(0.5, "blue");
gradient.addColorStop(0.6, "green");
gradient.addColorStop(0.75, "lightgreen");
gradient.addColorStop(0.85, "orange");
gradient.addColorStop(1, "red");
// Fill with gradient
ctx.fillStyle = gradient;
ctx.fillRect(30, 140, 150, 80);

// Font
ctx.font = "50px Verdana";
// Create gradient

var gradient = ctx.createLinearGradient(0, 0, c.width, 0);
gradient.addColorStop("0", "magenta");
gradient.addColorStop("0.5", "blue");
gradient.addColorStop("1.0", "red");

// Fill with gradient
ctx.strokeStyle = gradient;
ctx.strokeText("Smile!", 210, 195);
