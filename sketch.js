var helicopterIMG, helicopterSprite;
var ground;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var pa, paI, paB;
var b;
var state = 1;

function preload()
{
	helicopterIMG=loadImage("helicopter.png");
	packageIMG=loadImage("package.png");
    paI = loadImage ("package.png")
}


function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	pa=createSprite(width/2, 80, 10,10);
	pa.addImage(paI)
	pa.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;

	paB = Bodies.circle(width/2 , 200 , 5 , {restitution:0.4, isStatic:true});
	World.add(world, paB);
	

	//Crea el Suelo
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);

 	boxPosition=width/2-100
 	boxY=610;


 	boxleftSprite=createSprite(boxPosition, boxY, 20,100);
 	boxleftSprite.shapeColor=color(255,0,0);

 	boxLeftBody = Bodies.rectangle(boxPosition+20, boxY, 20,100 , {isStatic:true} );
 	World.add(world, boxLeftBody);

 	boxBase=createSprite(boxPosition+100, boxY+40, 200,20);
 	boxBase.shapeColor=color(255,0,0);

 	boxBottomBody = Bodies.rectangle(boxPosition+100, boxY+45-20, 200,20 , {isStatic:true} );
 	World.add(world, boxBottomBody);

 	boxleftSprite=createSprite(boxPosition+200 , boxY, 20,100);
 	boxleftSprite.shapeColor=color(255,0,0);

 	boxRightBody = Bodies.rectangle(boxPosition+200-20 , boxY, 20,100 , {isStatic:true} );
 	World.add(world, boxRightBody);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  b = createEdgeSprites ();
  helicopterSprite.bounce(b);
 
  pa.x= paB.position.x 
  pa.y= paB.position.y 



  if  (state === 1){
  pa.x = helicopterSprite.x;


	if (keyDown ("LEFT_ARROW")){
		helicopterSprite.x = helicopterSprite.x -20;
	}
	if (keyDown ("RIGHT_ARROW")){
		helicopterSprite.x = helicopterSprite.x +20;
	}

	if (keyDown ("DOWN_ARROW")){
    Matter.Body.setStatic(paB, false);
    state = 0;
	}
  }
	if (state === 0){
    pa.x = pa.x;

	if (keyDown ("LEFT_ARROW")){
		helicopterSprite.x = helicopterSprite.x -20;
	}
	if (keyDown ("RIGHT_ARROW")){
		helicopterSprite.x = helicopterSprite.x +20;
	}
	
	}
	

	

  drawSprites();
  
  
 
}
