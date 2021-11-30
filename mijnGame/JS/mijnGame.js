function preload() {
    motorplaatje = loadImage("motor.png");
    achtergrond = loadImage("road.jpg");
    autoplaatje = loadImage("auto.png");

  }
function setup(){

    canvas = createCanvas(windowWidth,windowHeight);  
    textAlign(CENTER,CENTER);  

    stoplicht= new stoplicht();
    auto = new auto();
    motor = new motor();
    camera = new camera();
}
function draw() {
    background(achtergrond);
    stoplicht.teken();
    auto.teken();
    auto.beweeg();
    auto.wordJeGeraakt(motor);
    motor.teken();
    motor.beweeg();
    motor.wordJeGeraakt(auto);
    camera.teken();

  }