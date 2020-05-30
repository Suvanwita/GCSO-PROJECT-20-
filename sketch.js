
var car,wall;
var speed,weight;


function setup() {
  createCanvas(800,400);
 wall=createSprite(750, 200, 20, 100);
 car=createSprite(40,200,30,30);
 wall.shapeColor="white";
 car.shapeColor="blue";
speed=random(55,90);
weight=random(400,1500);

}

function draw() {
  background(0); 
  car.velocityX=speed;

  if(wall.x-car.x<wall.width/2+car.width/2){
    car.velocityX=0;
    var deformation=0.5*speed*weight/22500;
    if(deformation>180){
   car.shapeColor="red";
    }else if(deformation<180 && deformation>100){
   car.shapeColor="yellow";
    }else
    car.shapeColor="green";

  }
  
  drawSprites();
}