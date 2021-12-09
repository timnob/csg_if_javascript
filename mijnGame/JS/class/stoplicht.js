class stoplicht {
    constructor(){
    this.timer = round(random(2,7));
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
            // this.timer = roudrandom(2,5);
            this.rood = false;
        } else {
            fill('red');
            ellipse(canvas.width /2 -30 ,30,45);
            // this.timer = round(random(200,500));
            this.rood = true;

        }
        
        if (frameCount % 60 == 0 && this.timer >= 0) {
          this.timer--
        }

        if (frameCount % 60 == 0 &&this.timer == 0) {
          this.timer = round(random(4,7));
          this.rood = !this.rood;
        }

        /*if (this.timer == 0) {
          fill('red');
          ellipse(500,45,40);
          this.tijd = random(2,5);
        }
        else{
          fill('green');
          ellipse(500,105,40);
        }
        if (this.tijd == 0){
          fill('green');
          ellipse(500,45,40);
          this.timer = random(2,5);
        }*/
       
          
        
       
}
}
/*stoplichtTel() {
  if (frameCount % 60 == 0 && this.timer > 0) {
    this.timer--;
  }
  if(this.aan == false && this.timer == 0){
 
  fill('red');
  ellipse(500,45,40);
  this.timer = random(2, 4);
  return true;  
 
  }
  else {
    fill('green');
          ellipse(500,105,40);
          return true;
  }
}
}*/
