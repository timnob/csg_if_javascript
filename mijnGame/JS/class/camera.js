class camera {
    constructor(x,y,h,b,k){
    this.x = x;
    this.y = y;
    this.hoogte = h;
    this.breedte = b;
    this.color = k;
    //this.draai = false;
    //this.kijken = false;
    //this.tijd = roundrandom(2,5);
}


teken() {
    push();
    rect(1750,450,110,60, 'red');
    rect(1728,470,30,20);
}

draaien(){
    

}
}