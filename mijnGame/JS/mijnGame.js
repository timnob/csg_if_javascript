function preload() {
    motorplaatje = loadImage("motor.png");
    achtergrond = loadImage("road.jpg");
    autoplaatje = loadImage("auto.png");
    spookrijderplaatje = loadImage("spookrijder.png");

  }
function setup(){

    canvas = createCanvas(windowWidth,windowHeight);  
    textAlign(CENTER,CENTER);  

    // spel = new spel();

    stoplicht= new stoplicht();
    auto = new auto();
    motor = new motor();
    camera = new camera();
    spookrijder = new spookrijder();
}
function draw() {
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
    

  }

  // function mousePressed() {
  //   if (!spel.actief) {
  //     spel.actief = true;
  //   }
  //   else {
  //     if (spel.afgelopen) {
  //       spel.nieuw();
  //     }
  //   }