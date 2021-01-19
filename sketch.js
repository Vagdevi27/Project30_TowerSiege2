
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint
var block1;
var band;
var gameState = "initial"
var polygon;
function preload()
{
	//boyImage = loadImage("boy.png")
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here
       ground = new Ground(400,620,800,40)
       stand = new Ground(400,420,800,40)
	polygon = new Polygon(100,300)

	block1 = new Block(400,300,30,40)
	block2 = new Block(430,300,30,40)
	block3 = new Block(460,300,30,40)
	block4 = new Block(490,300,30,40)
	block5 = new Block(520,300,30,40)
	block6 = new Block(420,220,30,40)
	block7 = new Block(450,220,30,40)
	block8 = new Block(480,220,30,40)
	block9 = new Block(510,220,30,40)
	block10 = new Block(440,140,30,40)
	block11= new Block(470,140,30,40)
	block12 = new Block(500,140,30,40)
       block13= new Block(450,100,30,40)
	block14 = new Block(480,100,30,40)
       block15= new Block(460,40,30,40)

       slingshot = new SlingShot(polygon.body ,{x: 100, y: 300 })
	//band = new Band(stone.body, {x:100, y: 480})

	Engine.run(engine);
	//console.log(block1.r)
  
}


function draw() {
  rectMode(CENTER);
  background("orange");

 // ground.display()
  stand.display()
  polygon.display()
  fill ("lightblue")
   block1.display()
   block2.display()
   block3.display()
   block4.display()
   block5.display()
   fill("blue")
   block6.display()
   block7.display()
   block8.display()
   block9.display()
   fill("green")
   block10.display()
   block11.display()
   block12.display()
   fill("pink")
   block13.display()
   block14.display()
fill("yellow")
   block15.display()
 //  band.display()
 
 slingshot.display()
}



function mouseDragged(){
  if (gameState!=="launched"){
        Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
    }
}


function mouseReleased(){
    slingshot.fly();
    gameState = "launched";
}

function keyPressed(){

	if(keyCode == 32){
		Matter.Body.setPosition(polygon.body, {x: 100 , y: 300})
		slingshot.attach(polygon.body)

	}
}
