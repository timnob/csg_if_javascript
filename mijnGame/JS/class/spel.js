class spel{
    constructor() {
    this.level = 0;
    this.maxLevel = 4;
    this.actief = false;
    this.levelGehaald = null;
    this.afgelopen = null;
    this.speler1 =  new motor();
    this.speler2 =  new auto();
    this.computer = new camera();
    this.speler2.gewonnen = null;
    this.speler1.gewonnen = null;
    this.computer.gewonnen = null;
    this.klok = null;
  }
  
  nieuwSpel() {
    this.level = 0;
    this.actief = false;
    this.speler1.gewonnen = false;
    this.speler2.gewonnen = false;
    this.computer.gewonnen = false;
    this.afgelopen = false;
    this.rijder = [];
    this.speler1.punt = 0;
    this.speler2.punt = 0;
    this.computer.punt = 0;
    this.nieuwLevel();
  }

  nieuwLevel() {
  this.klok = 20;
  this.klok  = this.klok + (this.level * 5);
  this.level ++;
  this.speler1.x = 10;
  this.speler1.y = 650;
  this.speler2.x = 10;
  this.speler2.y = 200;
  this.levelGehaald = false;
  for(var r = 0;r < this.level ;r++ ){
  this.rijder.push(new spookrijder());
  this.rijder[r].x = random(2000, 20000);
  this.rijder[r].y = random(0,windowHeight);

  }
}
 update(){
  if (this.actief && !this.levelGehaald) {
    if (frameCount % 60 == 0 && this.klok >= 0) {
      this.klok--
    }

    if (frameCount % 60 == 0 && this.klok == 0) {
      this.afgelopen = false;
      this.levelGehaald = true;
      this.computer.gewonnen = true;
      this.computer.punt += 1;

    }
    for(var r = 0;r < this.rijder.length ;r++ ){
    if(this.rijder[r].x <= -400){
      this.rijder[r].x = random(2000, 3000);
      this.rijder[r].y = random(0,windowHeight);
      this.rijder[r].snelheid = (this.rijder[r].basisSnelheid + round(random(5,10)));
    }
  }

    

    if (this.speler1.x >= canvas.width) {
      this.levelGehaald = true;
      this.speler1.punt += 1;
      if (this.level == this.maxLevel) {
        this.afgelopen = true;
        this.speler1.gewonnen = false;
        this.speler2.gewonnen = false;
        this.actief = false;
    }
    }
      if (this.speler2.x >= canvas.width) {
        this.levelGehaald = true;
        this.speler2.punt += 1;
        if (this.level == this.maxLevel) {
          this.afgelopen = true;
          this.speler2.gewonnen = false;
          this.speler1.gewonnen = false;
          this.actief = false;
      }
    }
        for (var r = 0;r < this.rijder.length;r++) {
          this.rijder[r].beweeg();
    }
  
  for (var r = 0;r < this.rijder.length;r++) {
    if(this.speler2.wordJeGeraakt(this.rijder[r]) || this.speler1.wordJeGeraakt(this.rijder[r])){
      this.rijder[r].x = 2000;
      this.rijder[r].y = random(0,windowHeight);
    }

}
if (this.speler2.x >= this.speler1.x - this.speler2.breedte && this.speler2.x <= this.speler1.x + this.speler1.breedte && this.speler2.y > this.speler1.y - this.speler2.hoogte && this.speler2.y < this.speler1.y + this.speler1.hoogte ) {
  this.speler1.x = 10;
  this.speler1.y = 650;
  this.speler2.x = 10;
  this.speler2.y = 200;
}

      	if(this.speler2.punt == 2){
          this.afgelopen = true;
          this.speler2.gewonnen = true;
          this.actief = false;
        }
        if(this.speler1.punt == 2){
          this.afgelopen = true;
          this.speler1.gewonnen = true;
          this.actief = false;
        }
        if(this.computer.punt == 2){
          this.afgelopen = true;
          this.computer.gewonnen = true;
          this.actief = false;
        }
        if(camera.draai == true && stoplicht.rood == true && (keyIsDown(65) || keyIsDown(68) || keyIsDown(87) || keyIsDown(83) )){
          this.speler1.x = 0;
          this.speler1.y = 650;
      
      }
      if(camera.draai == true && stoplicht.rood == true && (keyIsDown(LEFT_ARROW) || keyIsDown(RIGHT_ARROW) || keyIsDown(UP_ARROW) || keyIsDown(DOWN_ARROW))){
        this.speler2.x = 0;
        this.speler2.y = 200;
      
      }
  }
}
  tekenTimer(){
    push();
    noStroke();
    textSize(30);
    fill(255);
    text("Tijd: "+this.klok+"" ,600,0,canvas.width - 2* 100, canvas.height - 875);
    pop();
  }

  tekenScorebord() {
    push();
    noStroke();
    textSize(30);
    fill(255);
    text("Ronde "+this.level+"",100,0,canvas.width - 2 * 100, canvas.height + 910);   
    text("score van motor: "+this.speler1.punt+"",100,0,canvas.width - 2 * 600, canvas.height - 930);   
    text("score van auto: "+this.speler2.punt+"",100,0,canvas.width - 2 * 600, canvas.height - 870);  
    text("score van camera: "+this.computer.punt+"",600,0,canvas.width - 2 * 100, canvas.height - 930);  
    pop();
    
  }
  
  beginScherm() {
    push();
    noFill();
    stroke(150,200,255,.7);
    strokeWeight(5);
    textSize(140);
    fill('red');
    text('Red light,',0,0,canvas.width,canvas.height * 0.45);
    fill('green');
    text('Green light',0,0,canvas.width,canvas.height * 0.75);
    textSize(32);
    strokeWeight(2);
    fill(0,0,0,0.75);
    fill('black');
    text("Probeer aan de overkant te komen binnen de tijd! \n Maar de camera mag niet zien dat je door rood rijdt. \n Let dus goed op en rem op tijd! \n\nKies je vervoersmiddel en klik op ENTER!\n",0,canvas.height * 1 / 2,canvas.width,canvas.height * 1 / 3);
    image(autoplaatje,160,600,200,100 );
    image(pijltoetsen,160,700,200,120 );
    image(motorplaatje,1550,600,200,100 );
    image(lettertoetsen,1550,700,200,120 );
    pop();
  }

  levelScherm() {
 
    if (this.speler1.x >= canvas.width || this.speler2.x >= canvas.width) {
      var t = '\n Gefeliciteerd, je hebt de ronde '+this.level+' gehaald!';
  }
else {
      var t = '\n Helaas, je hebt de ronde '+this.level+' niet binnen de tijd gehaald.';
  }
  
+
    push();
    fill(0);
    stroke(100,200,255,.7);
    strokeWeight(3);
    text(t + '\n Motor score: ' +this.speler1.punt+' \n Auto score: ' +this.speler2.punt+ '\n Camera score: ' +this.computer.punt+'\n\nDruk op ENTER om naar ronde '+(this.level+1)+' te gaan.',0,0,canvas.width,canvas.height / 2);
    pop();
  }   


  eindScherm() {
    var tekst = 'tekst';
    if (this.speler2.gewonnen) {
      var tekst = 'Auto';
    image(autoplaatje,canvas.width/2 -100,120,200,100 );
    }

    if (this.speler1.gewonnen) {
      var tekst = 'Motor';
      image(motorplaatje,canvas.width/2 -100,120,200,100 );
    }

    if (this.computer.gewonnen) {
      var tekst = 'Camera';
      rect(1728,470,30,20);
      rect(1750,450,110,60);
    }
  
+  
    push();
    fill(0);
    stroke(100,75,50,.8);
    strokeWeight(3);
    text(tekst += ' heeft gewonnen!\n Motor score: ' +this.speler1.punt+' \n Auto score: ' +this.speler2.punt+ '\n Camera score: ' +this.computer.punt+ '\n\nDruk op ENTER voor nieuw spel.',0,0,canvas.width,canvas.height -400);
    pop();
  }    
  
  teken() {
    background(achtergrond);
    if (!this.actief) {
        if (this.afgelopen) {
            this.eindScherm();
        }
        else {
            this.beginScherm();
        }
    }
    else {
        if (this.levelGehaald) {
            this.levelScherm();

        }

        else {
          // this.speler1.wordJeGeraakt(this.speler2);
          //  this.speler2.wordJeGeraakt(this.speler1);
          this.speler2.teken();
          this.speler2.beweeg();
          this.speler1.teken();
          this.speler1.beweeg();
          stoplicht.teken();
          camera.teken();
          this.tekenScorebord();
          this.tekenTimer();
         
            for (var r = 0;r < this.rijder.length;r++) {
              this.rijder[r].teken();
        
      }
        }
    }
  }
}