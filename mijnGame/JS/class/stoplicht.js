class stoplicht {
    constructor(){
    this.timer = 2;
    this.aan = false;
    }
                    
    
    teken() {
        push();
        fill('black');
        rect(470,0,60,140);
        fill('green');
        ellipse(500,105,40);
        /*if (frameCount % 60 == 0 && this.timer > 0) {
          this.timer--;
        }
        if (this.timer == 0) {
          fill('red');
          ellipse(500,45,40);
          this.tijd = random(2,5);
        }
        else{
          fill('green');
          ellipse(500,105,40);
        }*/
        
       
          
        
       
}
stoplichtTel() {
  if (frameCount % 60 == 0 && this.timer > 0) {
    this.timer--;
  }
  if(this.aan == true && this.timer == 0){
 
  fill('red');
  ellipse(500,45,40);
  this.timer = random(2, 4);
  return false;  
 
  }
  else {
    fill('green');
          ellipse(500,105,40);
          return true;
  }
}
}

