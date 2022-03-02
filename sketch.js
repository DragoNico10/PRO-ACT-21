var ball, ground, wall1, wall2;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload(){}

function setup() {
	createCanvas(windowWidth, windowHeight);

	engine = Engine.create();
	world = engine.world;
	ground = new Block(width/2, height, width, 20)
	wall1 = new Block(width-(width/3)+100, height-50, 10, 100)
	wall2 = new Block(width-(width/3)-100, height-50, 10, 100)
	ball = new Ball(width/3, height-30, 20)
	createEdgeBodies()
	//crear los cuerpos aquí.


	Engine.run(engine);
  
}


function draw() {
	Engine.update(engine)
	clear()
	rectMode(CENTER);
    ground.drawClass()
    wall1.drawClass()
    wall2.drawClass()
    ball.drawClass(wall1.body.position, wall2.body.position)
    drawSprites();
  
}
function keyPressed(){
	ball.checkForKeyPressed()
}
function createEdgeBodies(){
	var edgeSprites = ["up", "right", "down", "left"]
	edgeSprites[3] = new Block(-100, height/2, 200, height)
	edgeSprites[1] = new Block(width+100, height/2, 200, height)
	edgeSprites[0] = new Block(width/2, -10, width, 20)
	edgeSprites[2] = new Block(width/2, height+10, width, 20)
}


