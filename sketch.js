var paper
var dustbin1
var dustbin2
var dustbin3

var ground

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
paper = new Paper(100,200,10);
dustbin1= new Dustbin(400,590,200,30)
dustbin2=new Dustbin(500,550,30,100)
dustbin3=new Dustbin(300,550,30,100)
ground=new Ground(400,600,800,10)

	Engine.run(engine);
  
}

function draw() {
  rectMode(CENTER);
  background(0);

  paper.display();
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();
  ground.display();
  
  drawSprites();
 
}

function keyPressed(){
   if(keyCode===UP_ARROW){

    Matter.Body.applyForce(paper.body,paper.body.position,{x:10,y:-15})

}
}