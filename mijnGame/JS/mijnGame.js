function preload() {

    achtergrond = loadImage("road.jpg");

  }
function setup(){

    canvas = createCanvas(windowWidth,windowHeight);  
    textAlign(CENTER,CENTER);  

    spel = new stoplicht();
    auto = new auto();
    motor = new motor();
}
function draw() {
   background(achtergrond);
    spel.teken();
    auto.teken();
    auto.beweeg();
    motor.teken();
    motor.beweeg();
  }