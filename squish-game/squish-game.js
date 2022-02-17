let bugs = [];
let walking, squish, score, time, gameState, start, groupBug;
let sy = 50;
let sx = 50;
let timeUp = false;
let facing = [0, 90, 180, 270];
let add = 2;
let speed;
let delayInMillis = 5000;

// function to genertae random integer between a max and min
function getRandInt(min, max) {
  return Math.random() * (max - min) + min;
}

//loads images
function preload() {

  for(let i = 0; i < 4; i++) {
    bugs[i] = loadImage("bugsprite_" + (i + 1) + ".png");
  }
}

// setup space
function setup() {
  createCanvas(1000, 1000);
  score = 0;
  gameState = 'begin';
  groupBug = new Group();
  start = 30;
  speed = 1.5;
}

// draw onto screen
function draw() {
  background(200);

  // sets up game intro
  if(gameState === 'begin') {
    push();
    textSize(50);
    text('Press Screen to Start', 250, 500);
    textSize(25);
    text('Squish All Bugs!', 400, 550);
    pop();
    // mouse press begins game
    if(mouseIsPressed) {
      genBugs(50);
      gameState = "play";
      for(let i = 1; i < 6; i++){
      setTimeout(function() { 
        speed = speed + (i / 5);
        genBugs(50); }, delayInMillis * i);
      }
    }    
  }

  // game is being played
  else if(gameState === 'play') {
    push();
    textSize(30);
    text('Timer ' + (start - timer()), 100, 50);
    textSize(30);
    text('Score ' + score, 400, 50);
    pop();
    timer();
    drawSprites();

    // time == 0, game ends
    if(timeUp === true) {
      gameState = 'end';
    }   
  }

  // game outro with game results
  else if(gameState === 'end') {
    push();
    textSize(30);
    text('Game Over!\nYou squished ' + score + ' bugs!\nRefresh Page to Restart', 250, 500);
    pop();
  }
} 

// makes a timer for game
function timer() {
  time = int((millis() - start) / 1000);
  if(time >= 30) {
    timeUp = true;
  }
  return time;
}

// generates 'number' of bugs
function genBugs(number) {
  for(let i = 0; i < number; i++) {
  let test = createSprite(getRandInt(200, 800), getRandInt(200, 800), sx, sy); 
  
  test.scale = 0.5;
  // bug rotation for random bug
  test.rotation = random(facing);
    if(test.rotation === 0){
      test.setSpeed(speed, 270);
    }
    else if(test.rotation === 90) {
      test.setSpeed(speed, 0);
    }
    else if(test.rotation === 180) {
      test.setSpeed(speed, 90);
    }
    else if(test.rotation === 270) {
      test.setSpeed(speed, 180); 
    }
  
  // makes bug walk
  walking = test.addAnimation("walk", bugs[0], bugs[1], bugs[0], bugs[2]);
  walking.frameDelay = 8;
  test.addAnimation("squish", bugs[3]);

  test.onMouseReleased = function() {
    test.changeAnimation("squish");
    test.setSpeed(0, 0);
    test.life = 50;
    score++;
    }
  groupBug.add(test);
  }
    
}

