class cirkel  {
  constructor(k){
  this.x = k;
  this.y = random(20, 730);
  this.straal = 10;
  //this.kleur = 'red';
  this.R = random(0,200);
  this.G = random(0, 200);
  this.B = random(0,200);
}
  teken() {
    noStroke();
    fill(this.R, this.G, this.B);
    ellipse(this.x,this.y,this.straal);
 
  }
  beweeg() {
    if (keyIsDown(LEFT_ARROW)) {
      this.x -= 15;
    }
    if (keyIsDown(RIGHT_ARROW)) {
      this.x += 15;
    }
    if (keyIsDown(UP_ARROW)) {
      this.y -= 15;
    }
    if (keyIsDown(DOWN_ARROW)) {
      this.y += 15;
    }
  }
}
var cirkels = [];

function setup() {
  canvas = createCanvas(1000,750);
  canvas.parent('processing');
  frameRate(60);
  for (var n = 0;n < 3;n++) {
  cirkels.push(new cirkel(20));  
  //noLoop();
  }
}

function draw() {
  background('silver');

  for (var n = 0;n < cirkels.length;n++) {
    cirkels[n].teken();
    cirkels[n].beweeg();


  }
}