let backColor = [200];
let character;
let character2;
let character3;
let character4;
let character5;
let character6;
let character7;
let character8;
let character9;

//loads image
function preload(){
  spriteSheet = loadImage("Green.png");
  spriteSheet2 = loadImage("polarGuy.png");
  spriteSheet3 = loadImage("purplePirateLady.png");
}

//setups up screen (length, width, etc.)
function setup(){
  createCanvas(1503, 883);
  imageMode(CENTER);

  character = new Character(spriteSheet, 75, 100);
  character2 = new Character(spriteSheet, 75, 300);
  character3 = new Character(spriteSheet, 75, 500);
  character4 = new Character(spriteSheet2, 200, 100);
  character5 = new Character(spriteSheet2, 200, 300);
  character6 = new Character(spriteSheet2, 200, 500);
  character7 = new Character(spriteSheet3, 325, 100);
  character8 = new Character(spriteSheet3, 325, 300);
  character9 = new Character(spriteSheet3, 325, 500);
}

//moves character left and right
function keyPressed() {
  if (keyCode == RIGHT_ARROW) {
    character.go(1);
    character2.go(1);
    character3.go(1);
    character4.go(1);
    character5.go(1);
    character6.go(1);
    character7.go(1);
    character8.go(1);
    character9.go(1);
  }
  else if (keyCode == LEFT_ARROW) {
   character.go(-1);
   character2.go(-1);
   character3.go(-1);
   character4.go(-1);
   character5.go(-1);
   character6.go(-1);
   character7.go(-1);
   character8.go(-1);
   character9.go(-1);
  }
}

//character stops
function keyReleased(){
  character.stop();
  character2.stop();
  character3.stop();
  character4.stop();
  character5.stop();
  character6.stop();
  character7.stop();
  character8.stop();
  character9.stop();
}

function draw() {
  background(backColor);
  character.draw();
  character2.draw();
  character3.draw();
  character4.draw();
  character5.draw();
  character6.draw();
  character7.draw();
  character8.draw();
  character9.draw();
}

//the class of the character with x and y movements
class Character {
  constructor(spriteSheet, x, y){
    this.spriteSheet = spriteSheet;
    this.move = 0;
    this.sx = 0;
    this.x = x; 
    this.y = y;
    this.facing = 1;
  }

//draws character onto screen
draw() {
  push();
  translate(this.x, this.y);
  scale(this.facing, 1);

  if (this.move == 0) {
    image(this.spriteSheet, 0, 80, 100, 100, 0, 0, 80, 80); 
  }
  else {
    image(this.spriteSheet, 0, 80, 100, 100, 80 * (this.sx + 1), 0, 80, 80);
  }
 
  if (frameCount % 5 == 0) {
    this.sx = (this.sx + 1) % 8;
  }
  this.x += 3 * this.move;
  pop();
}
//go function intialization
  go(direction) {
    this.move = direction;
    this.facing = direction;
    this.sx = 3;
  }

//stop funtion intialization
  stop() {
    this.move = 0;
  }
}
  
