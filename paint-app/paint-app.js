function setup(){

    createCanvas(1100, 700);

}

// color variable, x-coordinate variable, length variable, line color
let l_grey = [245];
let grey = [150];
let reds = [255, 0, 0];
let yellow = [255, 200, 0];
let orange = [245, 140, 0];
let blues = [0, 100, 255];
let cyan = [0, 240, 200];
let white = [255];
let greens = [0, 215, 0];
let pink = [255, 80, 200];
let brown = [185, 55, 0];
let magenta = [210, 0, 255];
let black = [0];
let len = 35;
let x_sq = 2;
let lineColor = 0;

// color choice interaction
function mousePressed(){
  if(mouseX < len && mouseY < (len * 2.2))
  {
    lineColor = reds;
  }
  else if(mouseX < len && (mouseY > (len * 2.2) && mouseY < (len * 3.3)))
  {
    lineColor = orange;
  }
  else if(mouseX < len && (mouseY > (len * 3.3) && mouseY < (len * 4.4)))
    {
      lineColor = yellow;
    }
  else if(mouseX < len && (mouseY > (len * 4.4) && mouseY < (len * 5.5)))
    {
      lineColor = greens;
    }
  else if(mouseX < len && (mouseY > (len * 5.5) && mouseY < (len * 6.6)))
    {
      lineColor = cyan;
    }
  else if(mouseX < len && (mouseY > (len * 6.6) && mouseY < (len * 7.7)))
    {
      lineColor = blues;
    }
  else if(mouseX < len && (mouseY > (len * 7.7) && mouseY <  (len * 8.8)))
    {
      lineColor = magenta;
    }
  else if(mouseX < len && (mouseY > (len * 8.8) && mouseY < (len * 9.9)))
    {
      lineColor = brown;
    }
  else if(mouseX < len && (mouseY > (len * 9.9) && mouseY < (len * 11)))
    {
      lineColor = white;
    }
  else if(mouseX < len && (mouseY > (len * 11) && mouseY < 420))
    {
      lineColor = black;
    }

}

function draw(){

    // header
    fill(grey);
    noStroke();
    rect(0, 0, 1100, len);
  
    textSize(25);
    fill(black);
    text('Paint App :)', 495, 25);
  
    // color palette
    strokeWeight(5);
    stroke(l_grey);
    strokeJoin(ROUND);

    fill(reds);
    square(x_sq, len * 1.1 , len);
  
    fill(orange);
    square(x_sq, len * 2.2, len);
  
    fill(yellow);
    square(x_sq, len * 3.3, len);
  
    fill(greens);
    square(x_sq, len * 4.4, len);
  
    fill(cyan);
    square(x_sq, len * 5.5, len);
  
    fill(blues);
    square(x_sq, len * 6.6, len);
  
    fill(magenta);
    square(x_sq, len * 7.7, len);
  
    fill(brown);
    square(x_sq, len * 8.8, len);
  
    fill(white);
    square(x_sq, len * 9.9, len)
  
    fill(black);
    square(x_sq, len * 11, len); 


    // draw in paint app
   if(mouseIsPressed && mouseX > len + 3 && mouseY > 40)  
   {
      stroke(lineColor);
      strokeWeight(40);
      curve(mouseX, mouseY, mouseX, mouseY);
      line(mouseX, mouseY, pmouseX, pmouseY);

    }
  
  // boarder lining
  stroke(0);
  strokeWeight(10);
  line(0, 700, 1100, 700);
  
  stroke(0);
  strokeWeight(10);
  line(1100, 0, 1100, 700);
  
}

// clear canvas


function keyPressed()  {
  
  text('BACKSPACE', 500, 500);
  
  if(keyCode === BACKSPACE)  
    {
        background(white);
    } 
} 