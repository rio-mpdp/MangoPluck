
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
var treeObj, stoneObj,groundObject, launcherObject;
var mango1;
var world,boy,tree;

function preload(){
	boy=loadImage("b.png");
	tree=loadImage("t.png")
  }

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;

	mango1=new mango(1100,100,30);
	mango2=new mango(900,150,40);
	mango6=new mango(800,200,30);
	mango3=new mango(1200,250,40);
	mango4=new mango(1000,270,30);
	mango5=new mango(1150,350,40);
	mango7=new mango(980,220,40);
	mango9=new mango(850,280,30);
	mango8=new mango(950,320,40);

	
	groundObject=new ground(width/2,600,width,20);
	s=new Stone(170,390,20)
	thread=new Thread(s.body,{x:170,y:390})
	Engine.run(engine);

}

function draw() {

  background("#34d1ed");
  //Add code for displaying text here!
  image(boy,150,310,200,300);
  textSize(30)
  fill("green")
 text("press the space bar for second chance",50,50)

  image(tree,720,-20,600,650); 

  
  mango1.display();
s.display()
thread.display()
  groundObject.display();
  mango1.display()
	mango2.display()
	mango6.display()
	mango3.display()
	mango4.display()
	mango5.display()
	mango7.display()
	mango8.display()
	mango9.display()
	
	
	detect(s,mango1);
	detect(s,mango2)
	detect(s,mango3)
	detect(s,mango4)
	detect(s,mango5)
	detect(s,mango6)
	detect(s,mango7)
	detect(s,mango8)
	detect(s,mango9)

}
function mouseDragged() {
	Matter.Body.setPosition(s.body,{x:mouseX,y:mouseY})
	}
	function mouseReleased(){
		thread.fly()
	}
	function keyPressed(){
	 if(keyCode==32) {
	  thread.attach(s.body)   
	 }  
	}
	function detect(lstone1,lmango1){
		lmango=lmango1.body.position
		lstone=lstone1.body.position
		var distance=dist(lstone.x,lstone.y,lmango.x,lmango.y)
	if(distance<=lmango1.r+lstone1.r){
	Matter.Body.setStatic(lmango1.body,false)	
	}
		}

