var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.4, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);

	
	//create the bodies to create a box 
	base = Bodies.rectangle(400,630,200,20,{isStatic:true})
	
	left = Bodies.rectangle(310,610,20,100,{isStatic:true})
	right = Bodies.rectangle(490,610,20,100,{isStatic:true})

	//add them to the world 
	World.add(world, base)
	World.add(world, left)
	World.add(world, right)

	//A sprite is created to make the package visible on the box rather than making it display behind the box
	baseSprite = createSprite(400,650,200,20)
	baseSprite.shapeColor = "purple"

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 

	strokeWeight(0)//this statement helps to remove the outline of the box
	fill("purple")
	
	//display the bodies for the box
	rect(left.position.x,left.position.y, 20,100)
	rect(right.position.x,right.position.y, 20,100)
	

  drawSprites();

  

 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    // Look at the hints in the document and understand how to make the package body fall only on press of the Down arrow key.
	//Already given in the hints
	Matter.Body.setStatic(packageBody, false)
    
  }

  
}



