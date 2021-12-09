class spel{
    constructor() {
    this.level = 0;
    this.maxLevel = 4;
    this.actief = false;
    this.levelGehaald = null;
    this.afgelopen = null;
    this.speler1 = new motor();
    this.speler2 = new auto();
    this.computer = new camera();
    this.speler2.gewonnen = null;
    this.speler1.gewonnen = null;
    this.computer.gewonnen = null;
    this.klok = null;
    this.rijder = null;
  }
  
  nieuwSpel() {
    this.klok = 200;
    this.level = 0;
    this.actief = false;
    this.speler1.gewonnen = false;
    this.speler2.gewonnen = false;
    this.computer.gewonnen = false;
    this.afgelopen = false;
    this.nieuwLevel();
    motor.punt = 0;
    auto.punt = 0;
    camera.punt = 0;
 
  
  }

  nieuwLevel() {
  this.klok = 10;
  this.klok  = this.klok - (this.level * 4);
  this.level ++;
  this.rijder = [];
  this.speler1.x = 10;
  this.speler1.y = 650;
  this.speler2.x = 10;
  this.speler2.y = 200;
  this.levelGehaald = false;
  //this.rijder.push(new spookrijder());
  if (frameCount % 149 == 0 || frameCount % 197 == 0 || frameCount % 229 == 0 || frameCount % 239 == 0 || frameCount % 269 == 0) {
  // for (var r = 0; r < this.rijder.length;r++) {
    this.rijder.push(new spookrijder());
  // }
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
      camera.punt += 1;

    }
    if (this.speler1.x >= canvas.width) {
      this.levelGehaald = true;
      motor.punt += 1;
      if (this.level == this.maxLevel) {
        this.afgelopen = true;
        this.speler1.gewonnen = false;
        this.actief = false;
    }
    }
      if (this.speler2.x >= canvas.width) {
        this.levelGehaald = true;
        auto.punt += 1;
        if (this.level == this.maxLevel) {
          this.afgelopen = true;
          this.speler1.gewonnen = false;
          this.speler2.gewonnen = false;
          this.actief = false;
      }
      }
      if(this.actief && this.level >= 2 && this.level < 5) {
        for (var r = 0;r < this.rijder.length;r++) {
          this.rijder[r].beweeg();
    }
  }

      	if(auto.punt == 2){
          this.afgelopen = true;
          this.speler2.gewonnen = true;
          this.actief = false;
        }
        if(motor.punt == 2){
          this.afgelopen = true;
          this.speler1.gewonnen = true;
          this.actief = false;
        }
        if(camera.punt == 2){
          this.afgelopen = true;
          this.speler2.gewonnen = true;
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
    text("score van motor: "+motor.punt+"",100,0,canvas.width - 2 * 600, canvas.height - 930);   
    text("score van auto: "+auto.punt+"",100,0,canvas.width - 2 * 600, canvas.height - 870);  
    text("score van camera: "+camera.punt+"",600,0,canvas.width - 2 * 100, canvas.height - 930);  
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
    text("Probeer aan de overkant de komen binnen de tijd! \n Maar de camera mag niet zien dat je door rood rijd. \n\nKlik op enter\n",0,canvas.height * 1 / 2,canvas.width,canvas.height * 1 / 3);
    image(autoplaatje, 30, 30, 40, 40);
    // image();
    // image();
    // image();
    pop();
  }

  levelScherm() {
 
     var t = '\n Gefeliciteerd, je hebt de ronde '+this.level+' gehaald!';
+
    push();
    fill(0);
    stroke(100,200,255,.7);
    strokeWeight(3);
    text(t + '\n Motor score: ' +motor.punt+' \n Auto score: ' +auto.punt+ '\n Camera score: ' +camera.punt+'\n\nDruk op ENTER om naar ronde '+(this.level+1)+' te gaan.',0,0,canvas.width,canvas.height / 2);
    pop();
  }   


  eindScherm() {
    var tekst = 'Auto';
    if (this.speler1.gewonnen) {
      tekst = 'Motor';
      image(motorplaatje,canvas.width/2 -100,100,200,100 );
    }
    if (this.computer.gewonnen) {
      tekst = 'Camera';
    }
      tekst += ' heeft gewonnen!\n Motor score: ' +motor.punt+' \n Auto score: ' +auto.punt+ '\n Camera score: ' +camera.punt;
+  
    push();
    fill(0);
    stroke(100,75,50,.8);
    strokeWeight(3);
    text(tekst + '\n\nDruk op spatie voor nieuw spel.',0,0,canvas.width,canvas.height -400);
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
          this.speler1.wordJeGeraakt(this.speler2);
          this.speler2.wordJeGeraakt(this.speler1);
          this.speler2.wordJeGeraakt(spookrijder);
          this.speler1.wordJeGeraakt(spookrijder);
          this.speler2.teken();
          this.speler2.beweeg();
          this.speler1.teken();
          this.speler1.beweeg();
          spookrijder.teken();
          spookrijder.beweeg();
          stoplicht.teken();
          camera.teken();
          this.tekenScorebord();
          this.tekenTimer();
          if(this.actief && this.level >= 2 && this.level < 5) {
            for (var r = 0;r < this.rijder.length;r++) {
              this.rijder[r].teken();
        }
      }
        }
    }
  }
}














































































//     constructor(settings){
//       this.settings = settings;
//         this.speler1 = new motor();
//         this.speler2 = new auto();
//         this.level = 0;
//         this.afgelopen = null;
//         this.gewonnen = null;  
//         //this.maxLevel = this.settings[2];      
//         this.actief = false;
//         // this.tijdloper = this.settings[1]; 
//         this.rijder = null;

//         //this.tijdloper = new Tijdloper(settings[3]);
//     }
//     nieuwSpel() {
//       this.speler1.gewonnen = false;
//       this.speler2.gewonnen = false;
//       this.afgelopen = false;
//       if (this.afgelopen) {
//         this.level = 0 ;
//         this.afgelopen = false;
        
//     }
//       if (this.gewonnen) {
//           this.level =  -1;
//           this.gewonnen = false;        
//       }
//       this.actief = false;
//       this.nieuwLevel();
//     }

// nieuwLevel() {
//   this.level ++;
//   this.rijder = [];
//   this.Nrijder = this.rijder - 2 *(this.level - 1);
//   this.rijder.push(new spookrijder);
//   for(var s = 0;s < this.Nrijder ;s++){
//     this.rijder.push(new spookrijder);
//   }
//     if (this.level> this.maxLevel) {
//       this.afgelopen = true;
//       this.gewonnen = true;
//       this.actief = false;
//   }
//   else {
//       this.levelGehaald = false;
//   }
// }
  
// update(){
//   if (this.actief && !this.levelGehaald) {
//     if (this.speler1.x > canvas.width - 300) {
//       this.levelGehaald = true;
//       if (this.speler2.x > canvas.width - 300) {
//         this.levelGehaald = true;
//       if (this.level == this.maxLevel) {
//           this.afgelopen = true;
//           this.gewonnen = true;
//           this.actief = false;
//       }
//   }
// }
//   if (this.speler2.x > canvas.width - 300) {
//     this.levelGehaald = true;
//     if (this.level == this.maxLevel) {
//         this.afgelopen = true;
//         this.gewonnen = true;
//         this.actief = false;
//     }
// }

// }
// }
// fun



// tijdloper(){
//   fill('black');
//   text("tijd:" + this.tijdloper+ 100,240);
//   if (frameCount % 60 == 0 && this.tijdloper >= 0) {
//     this.tijdloper--
//   }
//   if (frameCount % 60 == 0 && this.tijdloper == 0) {
//     this.eindScherm();
//   }
// }






    
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

//   // teken() {
//   //   background(achtergrond);d
//   //   if (!this.actief) {
//   //       if (this.afgelopen) {
//   //           this.eindScherm();
//   //       }
//   //       else {
//   //           this.beginScherm();
//   //       }
//   //   }
//   //   else {
//   //       if (this.levelGehaald) {
//   //           this.levelScherm();
//   //       }
//   //       else {
//   //         this.speler1.teken;
//   //         this.speler2.teken;
//   //       }
//   //           this.tekenScorebord();
//   //       }
//   //     }
//   //   }
//   // }
//   teken() {
//     background(achtergrond);
//     if (!this.actief) {
//       this.beginScherm();
//       spel.actief = true;
//     }
//     else {
//       if (this.afgelopen) {
//         this.eindScherm();
//       }
//         if (this.levelGehaald) {
//             this.levelScherm();
//         }
//       else {
//         this.speler1.teken;
//         this.speler2.teken;
//       }
//     }
//     }
//   }
