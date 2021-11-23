function preload() {

    achtergrond = loadImage("infspel2.png");

  }
function setup(){

    canvas = createCanvas(900,800);  
    textAlign(CENTER,CENTER);  


    spel = new stoplicht();
    //spelers = new spelers();

}
function draw() {

   background(achtergrond);
    spel.teken();
    //spelers.teken();
  }