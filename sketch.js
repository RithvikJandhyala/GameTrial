var back;
var back2;
var shirt1;
var wall1;
var wall2;
var rand;
var shirt1
function preload(){
  back = loadImage("back.jpg");
}

function setup() {
  createCanvas(displayWidth, displayHeight-111);
  back2 = createSprite(683,377,300,646);
  back2.shapeColor = "black";

  createSprite(683,516,300,15);
  createSprite(683,362,300,15);
  createSprite(683,208,300,15);

  wall1 = createSprite(533,373,15,646);
  wall2 = createSprite(833,373,15,646);
  createSprite(683,54,300,15);
  /*shirt1 = createSprite(random(80,500),190,70,70);
  shirt2 = createSprite(random(80,500),190,70,70);
  shirt3 = createSprite(300,340,70,70);
  shirt4 = createSprite(100,490,70,70);

  shirt5 = createSprite(1000,190,70,70);
  shirt6 = createSprite(1400,190,70,70);
  shirt7 = createSprite(1300,340,70,70);
  shirt7 = createSprite(1500,340,70,70);
  shirt7 = createSprite(1300,340,70,70);
  shirt7 = createSprite(1300,340,70,70);*/
   rand = Math.round(random(1,6));
    shirt1 = createSprite();

}

function draw() {
  background(back);
  text(mouseX+","+mouseY,mouseX,mouseY);
  //shirt1.collide(wall1);
  

  line(50,displayHeight-162,533,displayHeight-162);
  line(50,462,533,462);
  line(50,308,533,308);
  line(50,158,533,158);

  line(833,displayHeight-162,displayWidth-50,displayHeight-162);
  line(833,462,displayWidth-50,462);
  line(833,308,displayWidth-50,308);
  line(833,158,displayWidth-50,158);

  line(533,516,833,516);
  line(533,362,833,362);
  line(533,208,833,208);
  
  strokeWeight(15);
  line(533,54,833,54);

  line(533,54,533,700);
  line(833,54,833,700);
  
  shirtspawner();
  
  
  drawSprites();
  
}
/*function mouseDragged(){
  shirt1.x=mouseX;
}*/
function shirtspawner(){
  if(frameCount%140){
   
    
    switch(rand){
    case 1:shirt1.x = random(100,400); shirt1.y=190
    
    break;
    case 2:shirt1.x = random(100,400); shirt1.y=340
    
    break;
    case 3:shirt1.x = random(100,400); shirt1.y=490
   
    break;
    case 4:shirt1.x = random(1000,1400); shirt1.y=190
   
    break;
    case 5:shirt1.x = random(1000,1400); shirt1.y=390
    
    break;
    case 6:shirt1.x = random(1000,1400); shirt1.y=490
    break;
    default:break;
    }
  }
}