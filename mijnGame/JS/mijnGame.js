function preload() {

    achtergrond = loadImage("infspel2.png");

  }
function setup(){

    canvas = createCanvas(1500,800);  
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