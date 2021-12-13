class motor{
    constructor(){
        this.breedte = 200 ;
        this.hoogte = 100;
        this.gewonnen = false;
        this.kleur= 'blue';
        this.rijSnelheid = 5;
        this.geraakt = false ;

    }
    wordJeGeraakt(spookrijder) {
      if (spookrijder.x >= this.x - spookrijder.breedte && spookrijder.x <= this.x + this.breedte && spookrijder.y > this.y - spookrijder.hoogte && spookrijder.y < this.y + this.hoogte) {
        this.geraakt = true;
        spookrijder.x = 2000;
        spookrijder.y = random(0,windowHeight);
        spookrijder.snelheid = (spookrijder.basisSnelheid + round(random(5,10)));
      }
    }


    beweeg() {
        if (keyIsDown(65)) {
          this.x -= this.rijSnelheid;
        }
        if (keyIsDown(68)) {
          this.x += this.rijSnelheid;
        }
        if (keyIsDown(87)) {
          this.y -= this.rijSnelheid;
        }
        if (keyIsDown(83)) {
          this.y += this.rijSnelheid;
      }
      if (keyIsDown(85)){
        this.rijSnelheid = 30;
      }
      this.x = constrain(this.x,0,canvas.width);
      this.y = constrain(this.y,62,910 - this.hoogte, 0 + this.hoogte);
      
    }

    teken(){
        push();
        noStroke();
        fill(this.kleur);
        image(motorplaatje,this.x,this.y,this.breedte,this.hoogte);
        pop();
        if (this.geraakt){
          this.x = 10;
          this.y = 650;
          this.geraakt = false;
        }
      }
}  
