class Speler{
    constructor(){
        this.breedte = 150;
        this.hoogte = 150;
        this.y = 50;
        this.x = 200;
        this.kleur = 'red';
        this.gewonnen = false;
    }

    teken(){
        push();
        noStroke();
        fill(this.kleur);
        rect(this.x,this.y,this.breedte,this.hoogte);
        pop();
      }

}