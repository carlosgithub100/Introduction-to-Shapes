let xPos;
let yPos;
let size;
let changeOverTime;
let r, g, b;

function setup() {
  createCanvas(400, 400);
  
  // Initial positions
  xPos = random(width);
  yPos = random(height);
  
  // Initial size
  size = random(10, 50);
  
  // Track change over time (can be speed or movement)
  changeOverTime = random(1, 5);
  
  // Initial colors (r, g, b)
  r = random(255);
  g = random(255);
  b = random(255);
  
  background(220);
}

function draw() {
  // Intermediate value: the position changes over time
  xPos += changeOverTime;
  yPos += changeOverTime;

  // Reset the position if it goes off canvas
  if (xPos > width || yPos > height) {
    xPos = 0;
    yPos = 0;
    changeOverTime = random(1, 5);
  }

  // Draw a circle that changes position and color over time
  fill(r, g, b);
  ellipse(xPos, yPos, size);

  // Store new random colors periodically
  if (frameCount % 60 == 0) {
    r = random(255);
    g = random(255);
    b = random(255);
  }
}