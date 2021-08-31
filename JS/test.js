function setup() {
  canvas = createCanvas(450,450);
  background('silver');
  canvas.parent('processing');
  //noLoop();
}

function draw() {
  noStroke();
  for (var n = 0;n < 5;n++) {
    tekenvierkant();
    translate(95,0);
}
}

function tekenvierkant() {
  fill('red');
  rect(0,200,75,75);

}