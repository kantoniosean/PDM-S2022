let slider;
const synth = new Tone.Synth();
const drum = new Tone.MembraneSynth();
const reverb = new Tone.JCReverb(0.4).toDestination();
synth.connect(reverb);
drum.connect(reverb);

let notes = {
    "q" : "C4",
    "w" : "D4",
    "e" : "E4",
    "r" : "F4",
    "t" : "G4",
    "y" : "A4",
    "u" : "B4",
    "i" : "C5"
}

function setup() {
    createCanvas(800, 800);

    synth.release = 2;
    synth.resonance = 0.98;
    slider = new Nexus.Slider('#slider', {
        'size' : [200, 40],
        'mode' : 'relative',
        'min' : 0,
        'max' : 1,
        'step' : 0.01,
        'value' : 0
    });
    slider.on('change', (v) => {
        reverb.roomSize.value = v;
    })
}

function draw() {
    let y = 25;
    background(240);
    textSize(25);
    text('Use slider to control reverb of sound!', 0, y);
    textSize(20);
    text('Click the following keys to correspond to the following notes', 0, y * 2);
    text("'q' : 'C4'", 0, y * 3);
    text("'w' : 'D4'", 0, y * 4);
    text("'e' : 'E4'", 0, y * 5);
    text("'r' : 'F4'", 0, y * 6);
    text("'t' : 'G4'", 0, y * 7);
    text("'y' : 'A4'", 0, y * 8);
    text("'u' : 'B4'", 0, y * 9);
    text("'i' : 'C5'", 0, y * 10);
}

function keyPressed() {
    let toPlay = notes[key];
    synth.triggerAttackRelease(toPlay, 0.5);
    drum.triggerAttackRelease(toPlay, "8n", '+2');
}