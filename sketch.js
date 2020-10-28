
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;
var gr;
var box1,box2,box3;
var dust;

function preload()
{
	dust = loadImage("sprites/dustbingreen.png");
}

function setup() {
	createCanvas(1000, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	//ball =Matter.Bodies.circle(10,10,10);
//ball = new Ball(10,10,10);
//ball =Bodies.circle(width/2,200,10,{isStatic:false,restitution:0.3,density:1.2,friction:0.5});
//World.add(world, ball);


gr = new Ground(500,600,1000,20);

ball = new Ball(100,90,30);

box1 = new Box(800,580,60,20);
box2  = new Box(820,540,20,100);
box3 =new Box(730,540,20,100);
	Engine.run(engine);
  
}


function draw() {
  
  background(255);
  Engine.update(engine);
  rectMode(CENTER);
gr.display();
  ball.display();

   box1.display();
  box2.display();
  box3.display();
  image(dust,773,540,100,100);
  drawSprites();
 
}



function keyPressed() {
	if (keyCode === UP_ARROW) {
	   
	   Matter.Body.applyForce(ball.body,ball.body.position,{x:180,y:-150});
	   
   
   
	 }
   }
