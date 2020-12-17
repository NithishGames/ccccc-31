
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var particles = []
var divisions = []
var plinkos = []

var divisionHeight = 300;

function setup() {
	createCanvas(800, 800);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

  ground = new Ground (400,790,1000,20)
  
  



	Engine.run(engine);
}


function draw() {
	Engine.update(engine);
  rectMode(CENTER);
  background(0);


  for (var k = 0; k<=width; k = k + 80) {
    divisions.push(new Division(k, height-divisionHeight/2, 10, divisionHeight));
    }
  
    for (var j = 40; j <=width; j=j+50){
    plinkos.push(new Plinkos(j,75));
    }
    for (var j = 15; j <=width-10; j=j+50){
      plinkos.push(new Plinkos(j,175));
    }


    for (var j = 0; j< particles.length;k++)  {
      particles[j].display();
    }
    for(var k = 0; k < divisions.length; k++)  {
      divisions[k].display();
    }
   
   ground.display();


}



