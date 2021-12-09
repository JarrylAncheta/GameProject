var image;
var song;
var button;
var x, y;
var score = 0;
const radius = 20;
var r, g, b;

function setup(){
  createCanvas(windowWidth, windowHeight);
  song = loadSound('IntenseMusic.mp3');
  button = createButton("play");
  button.mousePressed(togglePlaying);
  background(51);
  button.style('font-size', '25px');
  button.position(1320,10);
}

function togglePlaying() {
  if (!song.isPlaying()) {
    song.play();
    button.html("pause");
} else {
  song.pause();
  button.html("play");
}
}

function loaded() {
  console.log("loaded");
}


function draw(){
  imageMode(CENTER);
  image(landscape, width/2, height/2, 1440, 730);
  // Draw a circle
   noStroke();
  fill(r, g, b);
  ellipse(x, y, radius*1.5, radius*1.5);
  text("Score: " + score, 5, 50);

  textSize(22);
  textSize(70);
  stroke(82, 82, 82);
  strokeWeight(2.5);
  text("Catch the Snowball", 545, 150);
  textFont(pressStart);

}

function preload(){
  pressStart = loadFont('Reindeer Christmas - Personal Use.otf');
  landscape = loadImage('Snow.jpg')

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

//Circle colors
function newCircle() {
  x = random(windowWidth);
  y = random(windowHeight);
  r = random(255);
  g = random(255);
  b = random(255);
}

//Determines how fast a new circle appears
setInterval(newCircle, 900);
