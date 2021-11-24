class auto{
    constructor(){
        this.breedte = 70;
        this.hoogte = 70;
        this.y = 280;
        this.x =10;
        this.kleur = 'red';
        this.gewonnen = false;
        this.stapGrootte = 2;
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
    }

    teken(){
        push();
        noStroke();
        fill(this.kleur);
        rect(this.x,this.y,this.breedte,this.hoogte);
        pop();
      }

}