class stoplicht {
    constructor(){
    this.timer = round(random(3,7));
    this.aan = false;
    this.rood = false;
    }
                    
    
    teken() {
        push();
        fill('black');
        rect(canvas.width/2 - 75,0,150,62);
     

        if (!this.rood) {
          
            fill('green');
            ellipse(canvas.width /2+ 30,30,45);
            this.rood = false;
        } else {
            fill('red');
            ellipse(canvas.width /2 -30 ,30,45);
            this.rood = true;
        }
        
        if (frameCount % 60 == 0 && this.timer >= 0) {
          this.timer--
        }

        if (frameCount % 60 == 0 &&this.timer == 0) {
          this.timer = round(random(4,7));
          this.rood = !this.rood;
        }

}
}

