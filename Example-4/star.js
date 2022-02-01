function setup(){
  createCanvas(500, 500);
}

function draw(){
  var blue = [30, 0, 150];
  var red = [255, 0, 30];
  var green = [15, 150, 15];
  var white = [255];

  background(blue);

  stroke(white);
  strokeWeight(6);
  fill(green);
  circle(250, 250, 300);

  fill(red);
  beginShape();
  vertex(100, 220);
  vertex(210, 215);
  vertex(250, 100);
  vertex(290, 215);
  vertex(400, 220);
  vertex(300, 270);
  vertex(335, 380);
  vertex(250, 310);
  vertex(170, 380);
  vertex(200, 270);
  endShape(CLOSE);
}