var car,wall;
var speed,weight;

function setup() {
  createCanvas(800,400);
  car = createSprite(120, 200, 20, 20);
  wall = createSprite(500,200,25,70);
  speed=random(0,240);
  weight=random(400,1500);
  //wall.shapeColor="grey";

}


function draw() {
  background("black");  

  //car.x=World.mouseX;
  //car.y=World.mouseY;

  car.velocityX=speed;
  
  //Math.round(random(10,240));
  console.log(car.x-wall.x);
  if(car.x-wall.x < wall.width/2+car.width/2 &&
    wall.x-car.x < wall.width/2+car.width/2 && 
    car.y-wall.y < wall.height/2+car.height/2 &&
    wall.y-car.y < wall.height/2+car.height/2){
      car.shapeColor="green";
     // wall.shapeColor="green";
  }
  else {
 if(wall.x-car.x < (car.width+wall.width)/2){
   car.velocityX=0;
   var deformation=0.5 * weight * speed* speed/22509;

   if(deformation>180 ){
    car.shapeColor=color(255,0,0);
  }

  if(deformation<180 && deformation>100){
    car.shapeColor=color(230,230,0);
  }

if(deformation<100 ){
  car.shapeColor=color(0,255,0);
}





}
    
  //movingrect.shapeColor="green";
  }
 

 // if(car.isTouching(wall)){
   // car.velocityX=0;
  //}

  drawSprites();
}