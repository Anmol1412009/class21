var fixedRect, movingRect;
var a1,a2

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  a1 = createSprite(400, 400, 50, 80);
  a1.shapeColor = "green";
a1.debug = true;
  a2 = createSprite(300,200,80,30);
  a2.shapeColor = "green";
  a2.debug = true;

}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;
 touching(movingRect,a1)
touching(movingRect,a2)
touching(movingRect,fixedRect)

  drawSprites();
}

