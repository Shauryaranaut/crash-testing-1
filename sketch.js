var wall;
var car;
var speed,weight;



function setup() {
  createCanvas(1600,400);
  speed=random(55,90);
  weight=random(400,1500);
  car=createSprite(50, 200, 80, 50);
  wall=createSprite(1500, 200, 60, height/2);

}

function draw() {
  background(0);
  text("speed =",950,45);
 text(speed,1000,45);
  text("weight =",950,60);
  text(weight,1000,60);
 


  carSpeed = car.velocityX;

   

    car.velocityX = speed;

    if (wall.x-car.x < (car.width+wall.width)/2 ) 
    {
     car.velocityX=0;
     var deformation=0.5 * weight * speed * speed/22500;
     if (deformation>180)
     {
       car.shapeColor=color(255,0,0);
       text ("RED=dangerious for passenger.", 1000,30);
      
       
     }
     if (deformation<180 && deformation>100)
     {
       car.shapeColor=color(230,230,0);
       text ("YELLOW=modrately dangerious for passenger.", 1000,30);
       
       
     }
     if (deformation<100)
     {
       car.shapeColor=color(0,255,0);
       text ("GREEN=safe for passenger. ", 1000,30);
       
       
     }
    }
    
  drawSprites();
}