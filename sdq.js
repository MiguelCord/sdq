console.log("Animation page loaded!");

function setup() {
    var myCanvas = createCanvas(window.innerWidth, $(document).height());
    myCanvas.parent("myP5Container");
    frameRate(1.6);
}

function windowResized() {
    resizeCanvas(window.innerWidth, $(document).height());
}
    
function draw() {
     clear();
    
        var size = 40;
        var space = size * 2;
                
        for (var x = 0; x <= width; x += size) {
            for (var y = 0; y <= height; y += size) {
                var r = random(170,255);
                var g = random(210,255);
                var b = random(245,255);
                stroke(r, g, b);
                strokeWeight(4);
                fill(0, 50 , 255);

                var winter = random(1, 7);

                if (winter < 2) {
                    triangle(x, y, x + size, y + size);
                }
                else if (winter < 3) {
                    line(x, y + size, x + size, y);
                }
                else if (winter < 4) {
                    triangle(x, y, x + size, y);
                }
                else if (winter < 5) {
                    line(x + size, y, x + size, y + size);
                }
                else if (winter < 6) {
                    triangle(x + size, y + size, x + size, y + size);
                }
                else {
                    triangle(x + size, y + size, x + size, y);
                }
            }
        }  
}