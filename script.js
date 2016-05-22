var input, analyzer;

function setup() {
    createCanvas(window.innerWidth, 450);
    
    /*mic = new p5.AudioIn();
    mic.start();
    var vol = mic.getLevel();
    var h = map(vol, 0, 1, height-50, 25);*/
    frameRate(5);
}

function draw() {
    background("white");
    
    var circle = {
        x: 60,
        y: 430,
        size: 60
    };
    
    var lines = {
        x: 200,
        y: 440,
        x1: 320,
        y1: 440
    };
    /*var vol = mic.getLevel();*/
    
    
    var randomColors = random(0, 100);
    var randomColors1 = random(101, 199);
    var randomColors2 = random(200, 255);
    var r = randomColors;
    var g = randomColors1;
    var b = randomColors2;
    var increment = random(0,15);
    
    for (var i= 0; i <= 50; i++) {
        strokeWeight(1);
        fill(randomColors, randomColors1, randomColors2);
        ellipse(circle.x, circle.y, circle.size, circle.size);
        circle.y -= increment;
    
        strokeWeight(3);
        fill(randomColors, randomColors1, randomColors2);
        line(lines.x, lines.y, lines.x1, lines.y1);
        lines.y -= increment;
        lines.y1 -= increment;
     
        strokeWeight(3);
        fill(randomColors, randomColors1, randomColors2);
        line(lines.x +150, lines.y + 350, lines.x1 + 150, lines.y1 + 350);
        lines.y -= increment;
        lines.y1 -= increment;
    }  
}