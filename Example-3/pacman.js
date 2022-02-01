function setup() {
  createCanvas(800, 400);
}

function draw() {
  background(0);
      
  var yellow = [225, 215, 45];
  var red = [225, 0, 0];
  var blue = [0, 50, 225];
  var white = [225];

  fill(yellow);
  arc(200, 200, 350, 350, 5 * QUARTER_PI, 3 * QUARTER_PI);

  fill(red);
  rect(425, 200, 350, 175);

  fill(red);
  arc(600, 200, 350, 350, PI, 0);

  noStroke();
  fill(white);
  circle(505, 200, 100);

  fill(white);
  circle(695, 200, 100);

  fill(blue);
  circle(505, 200, 65);

  fill(blue);
  circle(695, 200, 65);
       
}