class spookrijder{
    constructor(){
        this.breedte = 200;
        this.hoogte = 100;
        this.x = 2000;
        this.start = 0;
        this.y = random(this.start,windowHeight);
        this.basisSnelheid = 5;
        this.snelheid = (this.basisSnelheid + round(random(5,10)));
        this.geraakt= false;
    }
    teken(){
        push();
        noStroke();
        image(spookrijderplaatje,this.x,this.y,this.breedte,this.hoogte);
        pop();
  
    }

    
beweeg() {
    this.x += -this.snelheid;
    this.y = constrain(this.y,62,910 - this.hoogte);

    
}
}