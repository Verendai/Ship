var ship, ship1;
var sea, seaImage;



function preload(){
 ship1 = loadAnimation("ship1.png","ship2.png");
 seaImage = loadImage("sea.png");

}

function setup(){
  createCanvas(400,400);
  ship = createSprite(140,200,50,50);  
  ship.addAnimation("ship1",ship1);
  ship.scale = 0.3;
  

  sea = createSprite(200,180,400,20);
  sea.addImage("sea",seaImage);
  sea.scale = 0.3
  



  sea.depth = ship.depth;
    ship.depth = ship.depth + 1;
 

 
}

function draw() {
  background("blue");
 
if (sea.x < 0){
sea.x = sea.width /2;
}   




 drawSprites();
}


