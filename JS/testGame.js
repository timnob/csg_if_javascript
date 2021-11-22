
class stoplicht {
    constructor(){
    this.timer = 2;
    this.tijd = null;
    }
                    
    
    teken() {
        push();
        fill('black');
        rect(470,0,60,140);
        if (frameCount % 60 == 0 && this.tijd > 0) {
          this.tijd--;
        }
        if (frameCount % 60 == 0 && this.timer > 0) {
          this.timer--;
        }
        if (this.timer == 0) {
          fill('red');
          ellipse(500,45,40);
          this.tijd = 1;
        }
        else{
          fill('green');
          ellipse(500,105,40);
        }
          if(this.tijd == 0){
          fill('green');
          ellipse(500,105,40);
          this.timer = 20;
        }
        
       
}
}
function setup(){

    canvas = createCanvas(900,800);  
    textAlign(CENTER,CENTER);  

    spel = new stoplicht();


}

function preload() {

    achtergrond = loadImage("images/backgrounds/infspel2.png");

  }



  function draw() {

   background(achtergrond);
    spel.teken();
  }

  function keyTyped() {
    if (spel.actief && key == 'z') {
      spel.speler1.y += spel.snelheidSpeler;
    }
    if (spel.actief && key == 'q') {
      spel.speler1.y -= spel.snelheidSpeler;
    }
    if (spel.actief && key == 'm') {
      spel.speler2.y += spel.snelheidSpeler;
    }
    if (spel.actief && key == 'i') {
      spel.speler2.y -= spel.snelheidSpeler;
    }
  }