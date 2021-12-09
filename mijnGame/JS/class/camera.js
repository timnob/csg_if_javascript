class camera {
    constructor(x,y,h,b){
    this.x = x;
    this.y = y;
    this.hoogte = h;
    this.breedte = b;
    this.kleur = 'black';
    this.draai = false;
    this.tijd = round(random(2,5));
    this.punt = 0;
}


teken() {
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
  }
}
