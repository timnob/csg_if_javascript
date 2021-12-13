class auto{
    constructor(){
        this.breedte = 200;
        this.hoogte = 100;
        this.kleur = 'red';
        this.gewonnen = false;
        this.rijSnelheid = 5;
        this.geraakt=false;
    }

    wordJeGeraakt(spookrijder) {
      if (spookrijder.x >= this.x - spookrijder.breedte && spookrijder.x <= this.x + this.breedte && spookrijder.y > this.y - spookrijder.hoogte && spookrijder.y < this.y + this.hoogte) {
        spookrijder.x = 2000;
        spookrijder.y = random(0,windowHeight);
        spookrijder.snelheid = (spookrijder.basisSnelheid + round(random(5,10)));
        this.geraakt = true;
    }
  }

    beweeg() {
        if (keyIsDown(LEFT_ARROW)) {
          this.x -= this.rijSnelheid;
        }
        if (keyIsDown(RIGHT_ARROW)) {
          this.x += this.rijSnelheid;
        }
        if (keyIsDown(UP_ARROW)) {
          this.y -= this.rijSnelheid;
        }
        if (keyIsDown(DOWN_ARROW)) {
          this.y += this.rijSnelheid;
      }
      if (keyIsDown(73)){
        this.rijSnelheid = 30;
      }
      this.x = constrain(this.x,0,canvas.width);
      this.y = constrain(this.y,62,910 - this.hoogte);
    }

    teken(){
        push();
        noStroke();
        fill(this.kleur);
        image(autoplaatje,this.x,this.y,this.breedte,this.hoogte );
        pop();
        if (this.geraakt){
          this.x = 10;
          this.y = 200;
          this.geraakt = false;
        }
      }

}