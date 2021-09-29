class cirkel  {
  constructor(x, y, st, kl){
  this.x = x;
  this.y = y;
  this.straal = st;
  this.kleur = kl;
}
  teken() {
    noStroke();
    fill(this.kleur);
    ellipse(this.x,this.y,this.straal);
 
  }
  beweeg() {
    if (keyIsDown(LEFT_ARROW)) {
      this.x -= 5;
    }
    if (keyIsDown(RIGHT_ARROW)) {
      this.x += 5;
    }
    if (keyIsDown(UP_ARROW)) {
      this.y -= 5;
    }
    if (keyIsDown(DOWN_ARROW)) {
      this.y += 5;
    }
  }
}

function setup() {
  canvas = createCanvas(450,450);
  canvas.parent('processing');
  cirkel1 = new cirkel(200, 175, 75, 'red');
  cirkel2 = new cirkel(230, 200, 75, 'blue');
  cirkel3 = new cirkel(260, 225, 75, 'green');
  //noLoop();
}

function draw() {
  background('silver');
    cirkel1.teken();
    cirkel1.beweeg();
    cirkel2.teken();
    cirkel2.beweeg();
    cirkel3.teken();
    cirkel3.beweeg();
    
}

