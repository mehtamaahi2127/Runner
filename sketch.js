
function preload(){
  path = loadImage("path.png")
  runner = loadAnimation("Runner-1.png","Runner-2.png")
}

function setup(){
  createCanvas(400,400);
  paths = createSprite(200,200)
  paths.addImage(path)
paths.velocityY = 2
runners = createSprite(130,200)
runners.addAnimation("run",runner)
runners.scale = 0.1



}

function draw() {
  background(0);
drawSprites()
runners.x = World.mouseX
if(paths.y>400){
paths.y = 200
}
}
