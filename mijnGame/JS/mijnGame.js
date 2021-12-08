var settings = [40, 0, 4];
function preload() {
    motorplaatje = loadImage("motor.png");
    achtergrond = loadImage("road.jpg");
    autoplaatje = loadImage("auto.png");
   spookrijderplaatje = loadImage("spookrijder.png");

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

    spookrijder = new spookrijder();


}
function draw() {
  background(achtergrond);
    // stoplicht.teken();
  //   auto.teken();
  //   auto.beweeg();
  //   auto.wordJeGeraakt(motor);
  //   auto.wordJeGeraakt(spookrijder);
  //   motor.teken();
  //   motor.beweeg();
  //   motor.wordJeGeraakt(auto);
  //   motor.wordJeGeraakt(spookrijder);
  //  camera.teken();
  //   spookrijder.teken();
  //   spookrijder.beweeg();
    spel.teken();
    spel.update();

    

  }

  function mousePressed() {
    if (spel.actief) {
      spel.levelGehaald = true;
    }
    if (spel.level>=spel.maxLevel) {
      spel.afgelopen = true;
      spel.gewonnen = true;
      spel.actief = false;
    }  
  }
  

 function mousePressed() {
     if (!this.actief) {
    
    spel.actief = true;
  }

    else {
      if (spel.afgelopen) {
        spel.nieuw();
      }
    }
  }


//   function mousePressed() {
//     if (spel.actief) {
//       spel.levelGehaald = true;
//     }
//     if (spel.level>=spel.maxLevel) {
//       spel.afgelopen = true;
//       spel.gewonnen = true;
//       spel.actief = false;
//     }  
//   }
  
function keyPressed() {
  if (keyCode == 27) {
    if (!spel.actief && !spel.levelGehaald) {
      // begin spel
      spel.actief = true;
      spel.nieuwSpel();
    }
  }
    if ((spel.levelGehaald && !spel.afgelopen) && keyCode == ENTER) {
      // level gehaald tijdens het spel
      spel.nieuwLevel();
    }
    if ((spel.afgelopen) && keyCode == 32) {
      // einde spel
      spel.nieuwSpel();
    }  
  }
