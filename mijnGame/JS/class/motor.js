class motor{
    constructor(){
        this.breedte = 70;
        this.hoogte = 70;
        this.y = 500;
        this.x =10;
        this.kleur = 'red';
        this.gewonnen = false;
        this.stapGrootte = 2;
    }

    beweeg() {
        if (keyIsDown(65)) {
          this.x -= this.stapGrootte;
        }
        if (keyIsDown(68)) {
          this.x += this.stapGrootte;
        }
        if (keyIsDown(87)) {
          this.y -= this.stapGrootte;
        }
        if (keyIsDown(83)) {
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