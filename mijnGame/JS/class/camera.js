class camera {
    constructor(x,y,h,b){
    this.x = x;
    this.y = y;
    this.hoogte = h;
    this.breedte = b;
    this.kleur = 'black';
    this.draai = false;
    this.tijd = round(random(2,5));
}


teken() {
  fill('white')
  rect(1800,63,10,845);
    push();


    if (frameCount % 60 == 0 && this.tijd >= 0) {
        this.tijd--
      }

      if (frameCount % 60 == 0 && this.tijd == 0) {
        this.tijd = round(random(2,5));
        this.draai = !this.draai;
      }
      if (!this.draai) {

        fill(this.kleur);
        rect(1750,450,110,60);
        rect(1855,470,30,20);
        // this.timer = roudrandom(2,5);
        this.draai = false;

    } 
    else {
        fill(this.kleur);
        rect(1750,450,110,60);
        rect(1728,470,30,20);
        // this.timer = round(random(200,500));
        this.draai= true;
    }
    if(motor.x < 1800 && this.draai == true && stoplicht.rood == true && (keyIsDown(65) || keyIsDown(68) || keyIsDown(87) || keyIsDown(83) )){
        motor.x = 0;
        motor.y = 650;

    }
    if(auto.x < 1800 &&this.draai == true && stoplicht.rood == true && (keyIsDown(LEFT_ARROW) || keyIsDown(RIGHT_ARROW) || keyIsDown(UP_ARROW) || keyIsDown(DOWN_ARROW))){
        auto.x = 0;
        auto.y = 280;

    }
  }
}
