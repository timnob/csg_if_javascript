function preload() {

    achtergrond = loadImage("road.jpg");

  }
function setup(){

    canvas = createCanvas(windowWidth,windowHeight);  
    textAlign(CENTER,CENTER);  

    //spel = new stoplicht();
    auto = new auto();
    motor = new motor();
    camera = new camera();
}
function draw() {
   background(achtergrond);
    //spel.teken();
    auto.teken();
    auto.beweeg();
    auto.wordJeGeraakt(motor);
    motor.teken();
    motor.beweeg();
    motor.wordJeGeraakt(auto);
    camera.teken();

  }