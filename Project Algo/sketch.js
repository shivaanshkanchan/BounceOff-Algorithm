var fixedrect,moveingrect;

function setup() {
  createCanvas(800,400);
  
  fixedrect = createSprite(200,100,40,80);
  fixedrect.shapeColor = "green";

  moveingrect = createSprite(200,400,80,40);
  moveingrect.shapeColor = "green";

  fixedrect.velocityY = 5;
  moveingrect.velocityY = -5;

}

function draw() {
  background(255,255,255);  

  bounceoff(fixedrect,moveingrect);

  drawSprites();
}
