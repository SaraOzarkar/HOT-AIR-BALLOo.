
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var newX=100
var gameState="PLAY"
var flag
function preload()
{
	flagImage=loadImage("Flag.png")
	
}

function setup() {
	createCanvas(displayWidth, displayHeight);

treeGroup=new Group()
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

player1=new Parachute()
for(var i =0;i<25;i=i+1){
	tree1=new Tree(newX)
	treeGroup.add(tree1.body)
	newX+=300
}
flag=createSprite(newX,height/2)
flag.addImage(flagImage)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  if(gameState==="PLAY"){
	player1.body.velocityY+=0.8
	player1.body.velocityX=5


  player1.body.collide(treeGroup,kill)
  if(keyDown("space")){
 player1.moveUp()
  }
  camera.position.x=player1.body.position.x
  }
  drawSprites();
 
if(player1.body.isTouching(flag)){
	gameState="WIN"
}
if(gameState==="WIN"){
	textSize(20)
	fill("Yellow")
	text("YOU WON",player1.body.x,height/2)
	player1.body.velocityX=0
}
if(gameState==="END"){
	textSize(20)
	fill("Yellow")
	text("GAME OVER",player1.body.x,height/2)
	player1.body.velocityX=0
}
}

function kill(){
	gameState="END"
}


