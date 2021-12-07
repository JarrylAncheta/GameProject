var x, y;
var score = 0;
const radius = 20;
var r, g, b;

function setup() {
  createCanvas(windowWidth, windowHeight);
  img= loadImage('Snow.jpg')
  x = random(windowWidth);
  y = random(windowHeight);
  r = random(255);
  g = random(255);
  b = random(255);
}

function draw() {
  background(220);
  // Draw a circle
  noStroke();
  fill(r, g, b);
  ellipse(x, y, radius*3, radius*3);
  textSize(32);
  text("Score: " + score, 10, 30);
}

// When the user clicks the mouse
function mousePressed() {
  // Check if mouse is inside the circle
  var d = dist(mouseX, mouseY, x, y);
  if (d < radius) {
    newCircle();
    score++;
  }
}

function newCircle() {
  x = random(windowWidth);
  y = random(windowHeight);
  r = random(255);
  g = random(255);
  b = random(255);
}

setInterval(newCircle, 850);
