function setup() {
  createCanvas(500, 500);
  }
  
  function draw() {
    background(300);

    var red = [255, 0, 0, 75];
    var green = [0, 255, 0, 75];
    var blue = [0, 0, 255, 75];

    noStroke();

    fill(red);
    circle(250, 150, 250);

    fill(blue);
    circle(150, 300, 250);

    fill(green);
    circle(350, 300, 250);
 
   }