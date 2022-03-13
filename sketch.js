//global variables
var trex, trex_running

var trex, trex_running, edges;
var groundImage;

function preload(){
  trex_running = loadAnimation("trex1.png","trex3.png","trex4.png");
  groundImage = loadImage("ground2.png")
}

function setup(){
  createCanvas(600,400);
  
  // creating trex
  trex = createSprite(200,200,30,30);
  trex.addAnimation("running", trex_running)
  trex.scale = 0.7
  trex.x=100

  //ground
  ground = createSprite(width/2,height-50,width,10)
  ground.addImage("image", groundImage)
}

function draw(){
  background(200);
  
  if(keyDown("space")){
    trex.velocityY = -10
  }
  //gravity for trex so it comes down
  trex.velocityY += 1
  ground.velocityX = -10
  if (ground.x < 0){
   ground.x = ground.width/2 
  }
  trex.collide(ground)
  drawSprites();
}


