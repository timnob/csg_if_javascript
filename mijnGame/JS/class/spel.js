class spel{
    constructor(){
        this.speler1 = new motor();
        this.speler2 = new auto();
        this.level = null;
        this.afgelopen = null;
        this.gewonnen = null;
        this.afgelopen = null;
        //this.tijdloper = new Tijdloper(settings[3]);
    }

    nieuwSpel() {
        this.gewonnen = false;
        this.afgelopen = false;
        this.level = 0;
        this.nieuwLevel();
      }
      nieuwLevel() {
        this.timer.reset();  
        this.level++;
      }


update(){
    if (frameCount % 60 == 0 && this.klok >= 0) {
        this.klok--
      }

      if (frameCount % 60 == 0 && this.klok == 0) {
          for(var s = 0;s < 3 ;s++){
              this.rijder.push(new spookrijder);
              this.klok = round(random(1,2));
              this.rijder[s].teken();
              this.rijder[s].beweeg();

          }
}
}
    
beginScherm() {
    push();
    fill(0,139, 139,.5);
    rect(0,0,canvas.width,canvas.height);
    textAlign(CENTER,TOP);
    fill(0);
    text("Welkom bij Redlight Greenlight.\n\nProbeer het leven van de wereld te redden door zoveel mogelijk druppels op te vangen voor ze de aarde bereiken.\nHoe beter je dat doet, hoe langer je de aarde en jezelf in leven houdt.\n\nGebruik de pijltjestoetsen voor de besturing. Klik om het spel te starten.",0,canvas.height / 4,canvas.width,canvas.height)
    pop();
  }

  eindScherm() {
    fill(0, 139, 139,.5);
    rect(0,0,canvas.width,canvas.height);      
    var tekst="Dit was niet te voorkomen...\nJouw niveau: "+this.speler.niveau+"\n\nKlik voor een nieuw spel.";
    push();
    textAlign(CENTER,CENTER);
    fill(0);
    text(tekst,0,0,canvas.width,canvas.height);
    pop();
    this.tekenNiveauSpeler();
  }
}