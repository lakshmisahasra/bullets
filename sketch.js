var thickness,wall;
var bullet,speed,weight;
var damage;


function setup() {
  createCanvas(800,400);
  bullet=createSprite(50,200,50,5);
  wall=createSprite(1200,200,thickness,height/2);
  wall.shapeColor="white";
  speed=random(233,321);
  weight=random(30,52);
  thickness=random(22,83);
  bullet.velocityX=speed;
}

function draw() {
  background(0);
 damage=0.5*speed*speed*weight/3*thickness;
if (bullet.x>=wall.x) {
  if (damage>10){
    wall.shapeColor="red"; 
  }
if (damage<10){
  wall.shapeColor="green";
}
}
  drawSprites();
}