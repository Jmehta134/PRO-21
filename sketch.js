var bullet,wall;
var speed,weight,thickness;
function setup() {
  createCanvas(1600,400);
  speed=random(30,52);
  weight=random(223,312);
  thickness=random(22,83);
  wall=createSprite(1200,200,thickness,height/2);
  wall.shapeColor=(80,80,80);
  bullet=createSprite(50, 200, 50, 50);
  bullet.velocityX=speed;
  bullet.shapeColor=(255);
}

function draw() {
  background(0,0,0);
  var b=thickness*thickness*thickness;
  var damage=0.5*weight*speed*speed/b; 
  console.log("damage"+damage);
  if (wall.x-bullet.x<wall.width/2+bullet.width/2) {
    bullet.velocityX=0;
    if (damage<10) {
        console.log("green")
        bullet.shapeColor=rgb(0,255,0);
    }  else if (damage>10) {
        console.log("red"+damage);
        bullet.shapeColor=rgb(255,0,0);
    }
  }
  drawSprites();
}