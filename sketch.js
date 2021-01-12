const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

// VARIABLES

// Boy
var boy, boyImage;

// Mangoes
var mango1, mango2, mango3, mango4, mango5, mango6, mango7, mango8, mango9, mango10, mango11, mango12, mango13, mango14, mango15, mango16;

// Tree
var tree, treeImage;

// Stone
var stone;

// Ground
var ground;

// Invisible Chain
var ic;

function preload()
{
	
	boyImage = loadImage("Images/boy.png");

	treeImage = loadImage("Images/tree.png");

}

function setup() {
	
	createCanvas(1200, 500);

	engine = Engine.create();
	world = engine.world;

	// HERE BODIES ARE CREATED
	ground = new Ground(300, 500, 10000, 30);

	boy = createSprite(200, 410, 200, 300);
	boy.addImage(boyImage);
	boy.scale = 0.13;

	tree = createSprite(950, 250, 400, 500);
	tree.addImage(treeImage);
	tree.scale = 0.4

	stone = new Stone(200, 300, 50);

	ic = new IChain(stone.body, {x : 130, y : 330});

	mango1 = new Mango(900, 200, 40);
	mango2 = new Mango(850, 180, 50);
	mango3 = new Mango(800, 230, 35);
	mango4 = new Mango(790, 160, 45);
	mango5 = new Mango(880, 80, 40);
	mango6 = new Mango(1020, 220, 45);
	mango7 = new Mango(1100, 120, 45);
	mango8 = new Mango(900, 140, 50);
	mango9 = new Mango(1000, 50, 40);
	mango10 = new Mango(960, 160, 45);
	mango11 = new Mango(1150, 190, 45);
	mango12 = new Mango(960, 100, 40);
	mango13 = new Mango(1030, 130, 45);
	mango14 = new Mango(1070, 180, 35);
	mango15 = new Mango(930, 60, 40);
	mango16 = new Mango(1150, 190, 45);

	Engine.run(engine);

}


function draw() {

	rectMode(CENTER);

	background("lightblue");
	
	tree.display();
	ic.display();
	ground.display();
	boy.display();
	

	drawSprites();

	stone.display();
	
	mango1.display();
	mango2.display();
	mango3.display();
	mango4.display();
	mango5.display();
	mango6.display();
	mango7.display();
	mango8.display();
	mango9.display();
	mango10.display();
	mango11.display();
	mango12.display();
	mango13.display();
	mango14.display();
	mango15.display();
	mango16.display();

	isTouching(stone, mango1);
	isTouching(stone, mango2);
	isTouching(stone, mango3);
	isTouching(stone, mango4);
	isTouching(stone, mango5);
	isTouching(stone, mango6);
	isTouching(stone, mango7);
	isTouching(stone, mango8);
	isTouching(stone, mango9);
	isTouching(stone, mango10);
	isTouching(stone, mango11);
	isTouching(stone, mango12);
	isTouching(stone, mango13);
	isTouching(stone, mango14);
	isTouching(stone, mango15);
	isTouching(stone, mango16);

}

function mouseDragged(){

	Matter.Body.setPosition(stone.body, {x : mouseX, y : mouseY});

}

function mouseReleased(){

	ic.fly();

}

function keyPressed(){

	if(keyCode === 32){

		Matter.Body.setPosition(stone.body, {x : 235, y : 420});
		ic.attach(stone.body);

	}

}

function isTouching(object1, object2){
	
	if (dist(object1.body.position.x , object1.body.position.y , object2.body.position.x , object2.body.position.y ) < object1.radius + object2.radius){ 
		
		Matter.Body.setStatic(object2.body,false);

	}

  }