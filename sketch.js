
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var helicopterIMG, helicopterSprite, packageSprite,packageIMG,packageOption,box,stand1Sprite,standBody1,stand2Sprite,standBody2;
var packageBody,ground

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(1550, 850);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 0, 0,0);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.1
	

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	box=createSprite(width/2, height-225, 200,20);
	box.shapeColor=color("red")

	stand1Sprite=createSprite(665, height-265, 20,100);
	stand1Sprite.shapeColor=color("red")

	stand2Sprite=createSprite(865, height-265, 20,100);
	stand2Sprite.shapeColor=color("red")

	ground=createSprite(width/2, height-210, width,10);
	ground.shapeColor=color(255)
	



	engine = Engine.create();
	world = engine.world;

	
	packageOption = {
		restitution:0,
	  isStatic:true
	}
	packageBody = Bodies.rectangle(width/2 , 200 , 5 ,100,packageOption);
	World.add(world, packageBody);

	
	
	box = Bodies.rectangle(width/2, height-230, 200, 20 , {isStatic:true} );
	World.add(world, box);

	standBody1 = Bodies.rectangle(665, height-270, 20, 100 , {isStatic:true} );
	World.add(world, standBody1);

	standBody2 = Bodies.rectangle(865, height-270, 20, 100 , {isStatic:true} );
	World.add(world, standBody2);

	ground = Bodies.rectangle(width/2,height-210 , width, 10 , {isStatic:true} );
	World.add(world, ground);





	//Create a Ground
	 
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 



  keyPressed();
  drawSprites();
 
}
function keyPressed(){
	if (keyCode === DOWN_ARROW) {
		// Look at the hints in the document and understand how to make the package body fall only on
	Matter.Body.setStatic(packageBody,false)
	  }
}


