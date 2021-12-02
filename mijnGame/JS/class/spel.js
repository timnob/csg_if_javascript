class spel{
    constructor(){
        this.speler1 = new motor();
        this.speler2 = new auto();
        this.level = null;
        this.afgelopen = null;
        this.gewonnen = null;  
        this.maxLevel = 4;      
        this.klok = round(random(1,2));
        this.actief = false;
        
        this.tijdloper = 60; 

        //this.tijdloper = new Tijdloper(settings[3]);
    }

    nieuwSpel() {
        this.gewonnen = false;
        this.afgelopen = false;
        this.level = 0;
        this.nieuwLevel();
        this.actief = false;
      }
      nieuwLevel() {
        this.timer.reset();  
        this.level++;
      }


update(){
  if (this.actief && !this.levelGehaald) {
    if (this.speler1.x > canvas.width - this.speler1.l) {
      this.levelGehaald = true;
      if (this.level == this.maxLevel) {
          this.afgelopen = true;
          this.gewonnen = true;
          this.actief = false;
      }
  }
  if (this.speler2.x > canvas.width - this.speler2.l) {
    this.levelGehaald = true;
    if (this.level == this.maxLevel) {
        this.afgelopen = true;
        this.gewonnen = true;
        this.actief = false;
    }
}
}
}


nieuwLevel() {
  this.level++;

  if (this.level>this.maxLevel) {
      this.afgelopen = true;
      this.gewonnen = true;
      this.actief = false;
  }
  else {
      this.levelGehaald = false;
  }
}

update() {
  if (this.actief && !this.levelGehaald) {
      if (this.speler1.x > canvas.width - this.speler1.l) {
          this.levelGehaald = true;
          if (this.level == this.maxLevel) {
              this.afgelopen = true;
              this.gewonnen = true;
              this.actief = false;
          }
      }
      if (this.speler2.x > canvas.width - this.speler2.l) {
        this.levelGehaald = true;
        if (this.level == this.maxLevel) {
            this.afgelopen = true;
            this.gewonnen = true;
            this.actief = false;
        }
    }
  }
}



tijdloper(){
  fill('black');
  text("tijd:" + this.tijdloper+ 100,240);
  if (frameCount % 60 == 0 && this.tijdloper >= 0) {
    this.tijdloper--
  }
  if (frameCount % 60 == 0 && this.tijdloper == 0) {
    this.eindScherm();
  }
}






    
// beginScherm() {
//     push();
//     fill(0,139, 139,.5);
//     rect(0,0,canvas.width,canvas.height);
//     textAlign(CENTER,TOP);
//     fill(0);
//     text("Welkom bij Redlight Greenlight.\n\nProbeer het leven van de wereld te redden door zoveel mogelijk druppels op te vangen voor ze de aarde bereiken.\nHoe beter je dat doet, hoe langer je de aarde en jezelf in leven houdt.\n\nGebruik de pijltjestoetsen voor de besturing. Klik om het spel te starten.",0,canvas.height / 4,canvas.width,canvas.height)
//     pop();
//   }

//   tekenScorebord() {
//     push();
//     noFill();
//     noStroke();
//     textSize(16);
//     var marge = 10;
//     var hoogte = 50;
//     rect(marge,canvas.height - marge - hoogte,100,hoogte);
//     fill(255);
//     text("Level "+this.level,marge,canvas.height - marge - hoogte,100,hoogte);   
//     pop();
//   }

//   eindScherm() {
//     fill(0, 139, 139,.5);
//     rect(0,0,canvas.width,canvas.height);      
//     var tekst="Dit was niet te voorkomen...\nJouw niveau: "+this.speler.niveau+"\n\nKlik voor een nieuw spel.";
//     push();
//     textAlign(CENTER,CENTER);
//     fill(0);
//     text(tekst,0,0,canvas.width,canvas.height);
//     pop();
//     this.tekenNiveauSpeler();
//   }

//   levelScherm() {
//     push();
//     fill(50,80,80);
//     stroke(150,200,255);
//     strokeWeight(3);
//     textSize(32);
//     text('Gefeliciteerd!\nJe hebt level '+this.level+' gehaald!\n\nDruk ENTER om naar level '+(this.level+1)+' te gaan.',0,0,canvas.width,canvas.height / 2);
//     pop();
//   }   
  teken() {
    if (!this.actief) {
      this.beginScherm();
    }
    else {
      if (this.afgelopen) {
        this.eindScherm();
      }
        if (this.levelGehaald) {
            this.levelScherm();
        }
      else {
        background(achtergrond);
      }
      
    }
    
  }
}