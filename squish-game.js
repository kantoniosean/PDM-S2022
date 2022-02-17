let bugs = [];

function preload() {
    for(i = 0; i < 4; i++) {
        bugs[i] = loadImage("bugsprite_" + (i + 1) + ".png");
    }
}

function setup() {
    createCanvas(800, 800);
    background(200);
}

function draw() {
    
}