import './style.css'

function setupCanvas(canvas) {
  // Get the device pixel ratio, falling back to 1.
  var dpr = window.devicePixelRatio || 1;
  // Get the size of the canvas in CSS pixels.
  var rect = canvas.getBoundingClientRect();
  // Give the canvas pixel dimensions of their CSS
  // size * the device pixel ratio.
  canvas.width = rect.width * dpr;
  canvas.height = rect.height * dpr;
  var ctx = canvas.getContext('2d');
  // Scale all drawing operations by the dpr, so you
  // don't have to worry about the difference.
  ctx.scale(dpr, dpr);
  return ctx;
}

// Now this line will be the same size on the page
// but will look sharper on high-DPI devices!
var canvas = document.getElementById("text-canvas");

var ctx = setupCanvas(canvas);
// var ctx = canvas.getContext("2d");

ctx.font = `700 100px Montserrat`;
ctx.textAlign = "center";

var gradient = ctx.createLinearGradient(0, 0, canvas.width, 0);
gradient.addColorStop("0"," white");
gradient.addColorStop("1.0", "transparent");

ctx.fillStyle = gradient;

ctx.fillText("RETAKE", canvas.width / 2, canvas.height / 2);
