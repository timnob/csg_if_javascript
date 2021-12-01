class auto{
    constructor(){
        this.breedte = 200;
        this.hoogte = 100;
        this.y = 200;
        this.x =10;
        this.kleur = 'red';
        this.gewonnen = false;
        this.rijSnelheid = 2,5;
    }
    wordJeGeraakt(motor) {
      if (motor.x >= this.x - motor.breedte && motor.x <= this.x + this.breedte && motor.y > this.y - motor.hoogte && motor.y < this.y + this.hoogte) {
        this.geraakt=true;
      }
    }
    wordJeGeraakt(spookrijder) {
      if (spookrijder.x >= this.x - spookrijder.breedte && spookrijder.x <= this.x + this.breedte && spookrijder.y > this.y - spookrijder.hoogte && spookrijder.y < this.y + this.hoogte) {
        this.geraakt=true;
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
      this.x = constrain(this.x,0,canvas.width);
      this.y = constrain(this.y,62,910 - this.hoogte);
    }

    teken(){
        push();
        noStroke();
        fill(this.kleur);
        image(autoplaatje,this.x,this.y,this.breedte,this.hoogte );
        // rect(this.x,this.y,this.breedte,this.hoogte);
        pop();
        if (this.geraakt){
          this.x = 10;
          this.y = 280;
          this.geraakt = false;
        }
      }

}