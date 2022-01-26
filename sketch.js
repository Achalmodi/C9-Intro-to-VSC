var box;

function setup() {
  createCanvas(400,400);
  box = createSprite(200,200,20,20);
}

function draw() 
{
  background(30);
  if(keyIsDown(UP_ARROW))
  {
    box.y = box.y - 3;
    background("yellow");
  }
  if(keyIsDown(DOWN_ARROW))
  {
    box.y = box.y  + 3;
    background("red");
  }
  if(keyIsDown(RIGHT_ARROW))
  {
    box.x = box.x  + 3;
    background("green");
  }
  if(keyIsDown(LEFT_ARROW))
  {
    box.x = box.x  - 3;
    background("blue");
  }
  

  drawSprites();
}




