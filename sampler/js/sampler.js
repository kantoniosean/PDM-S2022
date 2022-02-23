const sounds = new Tone.Players({
    3435: 'sounds/3435.mp3',
    nasty: 'sounds/nasty.mp3',
    positionsBridge: 'sounds/positionsB.mp3',
    positionsOutro: 'sounds/positionsO.mp3',
    pov: 'sounds/pov.mp3',
    shutUp: 'sounds/shutUp.mp3'
})

let soundOrder = ['3435', 'nasty', 'positionsBridge', 'positionsOutro', 'pov', 'shutUp'];
let button;
let buttons = [];
let sage = [148, 180, 159];
let ariana;

const feedbackDelay = new Tone.FeedbackDelay(0, 0.5);
let slider;

function preload() {
    ariana = loadImage('sounds/ariana.jpg');
}

function setup() {
    createCanvas(850, 850);
    sounds.connect(feedbackDelay);
    feedbackDelay.toDestination();

    for(let i = 0; i < 6; i++) {
        buttons[i] = createButton(soundOrder[i]);
        buttons[i].position(i * 150, 700);
        buttons[i].mousePressed( () => playSound(soundOrder[i]) );
    }

    slider = createSlider(0.0, 1.0, 0, 0.01);
    slider.position(350, 800);
    slider.style('width', '150px');
    slider.mouseReleased( () => {
        feedbackDelay.delayTime.value = slider.value()
    })
}

function draw() {
    background(sage);
    imageMode(CENTER);
    image(ariana, width / 2, height / 2);

    textSize(30);
    fill(229, 227, 201);
    text('Press button to make Ariana sing!', 200, 100);

    textSize(26);
    fill(229, 227, 201);
    text("Use slider to control Ariana's voice delay", 190, 775);
}

function keyPressed() {
    if(key === "1") {
        sounds.player('nasty').start();
    }
}

function playSound(soundName) {
    sounds.player(soundName).start();
}