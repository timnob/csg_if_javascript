class auto{
    constructor(){
        this.breedte = 120;
        this.hoogte = 70;
        this.y = 280;
        this.x =10;
        this.kleur = 'red';
        this.gewonnen = false;
        this.stapGrootte = 20;
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
      }

}