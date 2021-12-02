function preload() {
    motorplaatje = loadImage("motor.png");
    achtergrond = loadImage("road.jpg");
    autoplaatje = loadImage("auto.png");
    spookrijderplaatje = loadImage("spookrijder.png");

  }

function setup(){

    canvas = createCanvas(windowWidth,windowHeight);  
    textAlign(CENTER,CENTER); 
 

    spel = new spel();

    stoplicht= new stoplicht();
    auto = new auto();
    motor = new motor();
    camera = new camera();
    spookrijder = new spookrijder();
}
function draw() {
  fill('red');
  rect(1800,63,20,845); 
    background(achtergrond);
    stoplicht.teken();
    auto.teken();
    auto.beweeg();
    auto.wordJeGeraakt(motor);
    auto.wordJeGeraakt(spookrijder);
    motor.teken();
    motor.beweeg();
    motor.wordJeGeraakt(auto);
    motor.wordJeGeraakt(spookrijder);
    camera.teken();
    spookrijder.teken();
    spookrijder.beweeg();
    // spel.teken();

    

  }

  function mousePressed() {
    if (!spel.actief) {
      spel.actief = true;
    }
    else {
      if (spel.afgelopen) {
        spel.nieuw();
      }
    }
  }

  function keyTyped() {
    if (!spel.actief && !spel.levelGehaald) {
      // begin spel
      spel.nieuwSpel();
      spel.actief = true;
    }
    if ((spel.levelGehaald && !spel.afgelopen) && keyCode == ENTER) {
      // level gehaald tijdens het spel
      spel.nieuwLevel();
    }
    if ((spel.afgelopen)) {
      // einde spel
      spel.nieuwSpel();
    }  
  }
  