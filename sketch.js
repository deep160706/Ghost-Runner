var towerImage;
var tower;
var doorImage;
var door,doorGroup;
var climber,climberImage,climbersGroup;
var ghost,ghostImage;
var invisibleBlock, invisibleBlocksGroup;
var gameState="play";


 


function preload(){
   towerImage= loadImage("tower.png");
  doorImage=loadImage("door.png");  
  doorsGroup=new Group();
  climberImage=loadImage("climber.png");
climbersGroup=new Group();
  invisibleBlocksGroup= new Group();
  ghostImage=loadImage("ghost-standing.png");
  //spookySound=loadSound("spooky.wav");
  
}

function setup() {
 
  
  createCanvas(600, 600);
  
  spookySound.loop();
 tower= createSprite(300,300); 
  tower.addImage("tower",towerImage);
  tower.velocityY=1;
ghost=createSprite(200,200,50,50);
  ghost.addImage("ghost", ghostImage);
  ghost.scale=0.4;
  
  
}

function draw() {
  
  
  
  
  background(220);
  if(gameState==="play"){
    
  
  
  if(tower.y>400){
    tower.y=300;
    
    
  }
  
  if(keyDown("space")){
    ghost.velocityY= -5;
  }
 if(keyDown("left_arrow")){
   ghost.x=ghost.x-3;
 } 
  if(keyDown("right_arrow")){
    ghost.x= ghost.x+3;
  }
  
  ghost.velocityY= ghost.velocityY+0.8;
      spawnDoors();
  
  if(climbersGroup.isTouching(ghost)){
    ghost.velocityY=0;
  }
  if(invisibleBlocksGroup.isTouching(ghost)||ghost.y>600){
    ghost.destroy(); 
    gameState="end";
    
  
    
  }
  
  

  
  drawSprites();
  }
  
  if(gameState==="end"){
    stroke("yellow");
    fill("yellow");
    textSize(30);
    text("Game Over",230,250);
  }
}
function spawnDoors(){
  if(frameCount%240===0){
    var door= createSprite(200,-50);
    door.addImage("door",doorImage);
    var climber=createSprite(200,10);
    climber.addImage("climber", climberImage);
    var invisibleBlock=createSprite(200,15);
    invisibleBlock.width= climber.width;
    invisibleBlock.height=2;
  
    door.x=Math.round(random(120,400));
    door.velocityY=1;
    climber.x= door.x;
    invisibleBlock.x= door.x;
    invisibleBlock.velocityY=1;
    climber.velocityY= 1;
    
    climber.lifetime=800;
    door.lifetime=800;
    ghost.depth=door.depth;
    ghost.depth +=1;
    climbersGroup.add(climber);
    doorsGroup.add(door);
    invisibleBlock.debug= true; 
  invisibleBlocksGroup.add(invisibleBlock);
    
    
    
    
    
  }
  

  
  
  
}
