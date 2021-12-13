class spookrijder{
    constructor(){
        this.breedte = 200;
        this.hoogte = 100;
        this.x = 2000;
        this.start = 0;
        this.snelheid = 10;
        this.y = random(this.start,windowHeight);
        this.basisSnelheid = 5;
        this.snelheid = (this.basisSnelheid + round(random(5,10)));
        //this.klok = round(random(1,2));


    }

    teken(){
        push();
        noStroke();
        image(spookrijderplaatje,this.x,this.y,this.breedte,this.hoogte);
        pop();
    }
//     maakrijder(){
//         if (frameCount % 60 == 0 && this.klok >= 0) {
//             this.klok--
//           }
    
    
//           if (frameCount % 60 == 0 && this.klok == 0) {

//             //       this.rijder[s].beweeg();
//             //       this.rijder[s].teken();
//             //       this.klok = round(random(2,5));
    
//             //   }
             
    
//     }
// }


   
            
        
    
beweeg() {
    this.x += -this.snelheid;
    this.y = constrain(this.y,62,910 - this.hoogte);

    

// update(){

//         for(var s = 0;s < this.rijder.length;s++){
//             this.rijder[s].beweeg();
//             this.klok = round(random(2,5));
    
//              }
// }

}
}