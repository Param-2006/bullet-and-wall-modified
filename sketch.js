var bullet,wall;
var speed,weight;
var thickness;



function setup() {
  createCanvas(1600,400);
  speed=random(223,321);
  weight=random(30,52);
   thickness=random(22,83);


  bullet=createSprite(50,200,50,20);
  bullet.velocityX = speed;
  bullet.shapeColor="white";
  
   wall=createSprite(1200,200,thickness,height/2);
  wall.shapeColor="white";
  
  

}

function draw() 
{
  background(0); 

  var damage=0.5 *weight*speed*speed/(thickness*thickness*thickness);
  
  

    if(hasCollided(wall,bullet))
    {
      bullet.velocityX=0;
      bullet.visible=false;
      
  
  
      if(damage>10)
      {
        wall.shapeColor=color(255,0,0);
      }
  
  
      if(damage<10)
      {
        wall.shapeColor=color(0,225,0);
      }
  
    }
     
    

    

  drawSprites();

  }



  function hasCollided(lbullet,lwall)
  {
    bulletRightEdge=lbullet.x +lbullet.width/2;
    wallLeftEdge=lwall.x-lwall.width/2;
    if(bulletRightEdge>=wallLeftEdge)
    {
      return true
    }
    return false;
  }

 


    

  
