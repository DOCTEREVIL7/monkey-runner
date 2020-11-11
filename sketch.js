
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score=0;
var ground
var survivaltime=0;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(600, 600)
  
monkey=createSprite(80, 315, 20, 20);
  monkey.addAnimation("running", monkey_running);
  monkey.scale=0.1;
  
 ground=createSprite(400, 350, 900, 10);
  ground.velocityX=-4;
  console.log(ground.x);
  
  
}


function draw() {
background("lightblue");
  
  if(ground.x<0){
  ground.x=ground.width/2;
  }
  
  stroke("white")
  textSize(20)
  fill("white")
  text("score"+ score ,500, 50)
  
  stroke("black")
  textSize(20);
  fill("black")
  survivaltime=Math.ceil(frameCount/frameRate())
  text("survivalTime :"+ survivaltime, 100, 50)
  
  if(keyDown("space") && monkey.y>=300){
    monkey.velocityY=-12
  }
  monkey.velocityY=monkey.velocityY+0.8;
  
  monkey.collide(ground);
     
  
  
  
  spawnObstacle();
  spawnbanana();
  drawSprites();

}

function spawnObstacle(){
  
  if(frameCount%100===0){
  obstacle = createSprite(150, 320, 10, 40 );
  obstacle.addImage(obstacleImage);
  obstacle.scale=0.1;
  }
}

function spawnbanana(){
  
  if(frameCount%100===0){
  banana = createSprite(500, 100, 20, 20);
  banana.addImage(bananaImage);
  banana.scale=0.1;
  banana.velocityX=-8;
  banana.lifetime=300;
  }

}


