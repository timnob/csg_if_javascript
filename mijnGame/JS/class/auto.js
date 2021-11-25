class auto{
    constructor(){
        this.breedte = 120;
        this.hoogte = 70;
        this.y = 280;
        this.x =10;
        this.kleur = 'red';
        this.gewonnen = false;
        this.stapGrootte = 10;
    }
    wordJeGeraakt(motor) {
      if (motor.x >= this.x - motor.breedte && motor.x <= this.x + this.breedte && motor.y > this.y - motor.hoogte && motor.y < this.y + this.hoogte) {
        this.geraakt=true;
      }
    }

    beweeg() {
        if (keyIsDown(LEFT_ARROW)) {
          this.x -= this.stapGrootte;
        }
        if (keyIsDown(RIGHT_ARROW)) {
          this.x += this.stapGrootte;
        }
        if (keyIsDown(UP_ARROW)) {
          this.y -= this.stapGrootte;
        }
        if (keyIsDown(DOWN_ARROW)) {
          this.y += this.stapGrootte;
      }
      this.x = constrain(this.x,0,canvas.width);
      this.y = constrain(this.y,62,910 - this.hoogte);
    }

    teken(){
        push();
        noStroke();
        fill(this.kleur);
        rect(this.x,this.y,this.breedte,this.hoogte);
        pop();
        if (this.geraakt){
          this.x = 10;
          this.y = 280;
          this.geraakt = false;
        }
      }

}