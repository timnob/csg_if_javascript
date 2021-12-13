var settings = [40, 0, 4];
function preload() {
    motorplaatje = loadImage("motor.png");
    achtergrond = loadImage("road.jpg");
    autoplaatje = loadImage("auto.png");
   spookrijderplaatje = loadImage("spookrijder.png");
   lettertoetsen = loadImage("lettertoetsen.png");
   pijltoetsen = loadImage("pijltoetsen.png");
  }

function setup(){
  colorMode(RGB,0,0,0,0);
  textFont("Monospace");
  textSize(44); 
  // canvas.parent('processing');
    canvas = createCanvas(windowWidth,windowHeight);  
    textAlign(CENTER,CENTER); 

     spel = new spel(); 
        spel.nieuwSpel();
    // auto = new auto();
    // motor = new motor();
    stoplicht = new stoplicht();
    camera = new camera();



}
function draw() {
  background(achtergrond);

    spel.teken();
    spel.update();
  }
  
function keyTyped() {
  if(keyCode == ENTER){
    if (!spel.actief && !spel.levelGehaald) {
      // begin spel
      spel.actief = true;
    }
  }
    if ((spel.levelGehaald && !spel.afgelopen) && keyCode == ENTER) {
      // level gehaald tijdens het spel
      spel.nieuwLevel();
    }  
    if (spel.afgelopen) {
      // einde spel
      spel.nieuwSpel();
    } 

    
}
  