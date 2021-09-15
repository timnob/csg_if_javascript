var cirkel = {
  x: 225,
  y: 225,
  straal: 75, 
  
  teken() {
    noStroke();
    fill('red');
    ellipse(this.x,this.y,this.straal);
 
  },
  beweeg() {
    if (keyIsDown(LEFT_ARROW)) {
      this.x -= 2;
    }
    if (keyIsDown(RIGHT_ARROW)) {
      this.x += 2;
    }
    if (keyIsDown(UP_ARROW)) {
      this.y -= 2;
    }
    if (keyIsDown(DOWN_ARROW)) {
      this.y += 2;
    }
  }
}

function setup() {
  canvas = createCanvas(450,450);

  canvas.parent('processing');
  //noLoop();
}

function draw() {
  background('silver');
    cirkel.teken();
    cirkel.beweeg();
    
}

