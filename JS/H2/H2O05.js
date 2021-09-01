var aantalRijenRaster = 6;
var aantalKolommenRaster = 9;
var celGrootte;

var spriteJos;
var xJos = 400;
var yJos = 300;

function preload() {
  brug = loadImage("images/backgrounds/dame_op_brug_1800.jpg");
  spriteJos = loadImage("images/sprites/Jos100px/Jos_0.png");
}

function setup() {
  canvas = createCanvas(901,601);
  canvas.parent('processing');
  celGrootte = width / aantalKolommenRaster;
  background(brug);
}

function draw() {
      tekenRaster();
      image(spriteJos, xJos, yJos);
}

function tekenRaster() {
  push();
  noFill();
  stroke('grey');
  /*
  Maak hieronder een dubbele herhaling om een raster te maken.
  HINT: je kunt terugkijken naar het raster dat je in H1 hebt gemaakt.
  Maak gebruik van de variabelen die bovenaan zijn gedeclareerd.
  */
  for(var rij = 0; rij < aantalRijenRaster; rij++ ){ 
    for (var kolom = 0;kolom < aantalKolommenRaster;kolom++){
      rect(kolom*celGrootte,rij*celGrootte,celGrootte,celGrootte);

    }
  }
  pop();
}