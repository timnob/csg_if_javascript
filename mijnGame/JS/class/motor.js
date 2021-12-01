class motor{
    constructor(){
        this.breedte = 200 ;
        this.hoogte = 100;
        this.y = 650;
        this.x = 10;
        this.kleur = 'blue';
        this.gewonnen = false;
        this.rijSnelheid = 2,5;
        this.geraakt = false ;
    }
    wordJeGeraakt(auto) {
      if (auto.x >= this.x - auto.breedte && auto.x <= this.x + this.breedte && auto.y > this.y - auto.hoogte && auto.y < this.y + this.hoogte) {
        this.geraakt=true;
      }
    }
    wordJeGeraakt(spookrijder) {
      if (spookrijder.x >= this.x - spookrijder.breedte && spookrijder.x <= this.x + this.breedte && spookrijder.y > this.y - spookrijder.hoogte && spookrijder.y < this.y + this.hoogte) {
        this.geraakt=true;
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
      this.x = constrain(this.x,0,canvas.width);
      this.y = constrain(this.y,62,910 - this.hoogte, 0 + this.hoogte);
      
    }

    teken(){
        push();
        noStroke();
        fill(this.kleur);
        image(motorplaatje,this.x,this.y,this.breedte,this.hoogte);
        // rect(this.x,this.y,this.breedte,this.hoogte);
        pop();
        if (this.geraakt){
          this.x = 10;
          this.y = 650;
          this.geraakt = false;
        }

      }

    
}  
