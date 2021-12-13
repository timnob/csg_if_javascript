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
    canvas = createCanvas(windowWidth,windowHeight);  
    textAlign(CENTER,CENTER); 

     spel = new spel(); 
        spel.nieuwSpel();

    stoplicht = new stoplicht();
    camera = new camera();



}
function draw() {
  background(achtergrond);
   spel.update();
    spel.teken();
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
  