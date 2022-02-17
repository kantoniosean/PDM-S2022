let playGame = false;

let bug1;
let deadBug;
let count = 50;
let score = 0;
let timeStart = 30;

let bugs = [];
let deaths = [];


function preload(){
  bug1 = loadImage("bugs.png");
  deadBug = loadImage("death.png");
}

function setup() {
  createCanvas(800, 800);
  background(200);
  imageMode(CENTER);

  for(i = 0; i < count; i++){
    bugs[i] = new Bug(bug1, 50, random(50, 750), 1);
  }
}

function mousePressed() {

  if(mouseX <= 800 && mouseY <= 800){
    playGame = true;
    bugs[i].go(1);
  }

  if((mouseX > Bug.x - 25 && mouseX < Bug.x + 25)){
    Bug.replaceImage(deadBug);
    Bug.dead();
  }
  

}

function draw() {
  
  for(i = 0; i < count; i++){
    bugs[i].draw();
  }

  textSize(20);
  text('Click On Screen To Begin', 550, 790);
  textSize(30);
  text('Timer: ', 100, 25);
  textSize(30);
  text('Score: ', 500, 25);
  textSize(30);
  text(score, 600, 25);
  textSize(30);
  text(timeStart, 200, 25);

  if (timeStart > 0 && playGame){
    timeStart--;
  }

  if(bugs.length >= 5 && bugs.length <= 20) {
    bugs[i].speedB(3);
  }
  else if(bugs.length > 20 && bugs.length <= 30) {
    bugs[i].speedB(5);
  }
  else if(bugs.length > 30 && bugs.length <= 45) {
    bugs[i].speedB(7);
  }

}

class Bug {
  constructor(bug, x, y, speed) {
    this.bug = bug;
    this.x = x; 
    this.y = y;
    this.speed = speed; 
    this.facing = 1;
    this.move = 0;
    this.dead = false;
    this.sx = 0;
   }
      
   speedB(moreSpeed) {
     this.speed = moreSpeed;
   }
   replaceBug(deadImage){
    this.move = 0;
    this.bug = deadImage;
   }
  mortality(bug){
    this.dead = bug;
  }
  draw() {
    push();
    image(this.bug, this.x, this.y, 50, 50);
    scale(this.facing, 1);
    if(this.facing == 1){
      this.x += this.speed * this.move;
    }
    if(this.facing == -1){
      this.x -= this.speed * this.move;
    }

    if(this.x > 600){
      this.move = -1;
      this.facing = -1;
    }
    if (frameCount % 5 == 0) {
      this.sx = (this.sx + 1) % 8;
    }
    pop();
  }
    go(direction){
      this.move = direction;
      this.facing = direction;
    }

    dead() {
      this.move = 0;
      this.mortality(true);
      deaths.push();
      score = deaths.length;
    }

}