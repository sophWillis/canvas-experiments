import "./style.css";

const dpr = window.devicePixelRatio || 1;

function setupCanvas(canvas) {
  // Get the device pixel ratio, falling back to 1.
  // Get the size of the canvas in CSS pixels.
  var rect = canvas.getBoundingClientRect();
  // Give the canvas pixel dimensions of their CSS
  // size * the device pixel ratio.
  canvas.width = rect.width * dpr;
  canvas.height = rect.height * dpr;
  var ctx = canvas.getContext("2d");
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

let offset = 0;
let speed = 0.01;

function updateGrad() {
  if (offset <= 0.9) {
    offset = offset + speed;
  }

  const grad = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);

  grad.addColorStop(0, "white");
  grad.addColorStop(offset, "rgba(255,255,255,0)");

  ctx.fillStyle = grad;

  console.log(grad);
}

ctx.font = `700 50px Montserrat`;
ctx.textBaseline = "middle";
ctx.textAlign = "center";

function draw() {
  updateGrad();
  ctx.fillText("RETAKE", canvas.width / (2 + dpr), canvas.height / (2 + dpr));
  requestAnimationFrame(draw);
}

draw();
