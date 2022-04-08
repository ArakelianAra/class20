const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var ball
var engine, world;
var ground;

function setup() {
  createCanvas(800,400);

  //Creating variable engine & world that we can change/manipulate
  engine = Engine.create();
  world = engine.world;

  var ground_options = { isStatic: true }
  var ball_options={restitution:2}
  
  ground = Bodies.rectangle(400, 350, 800, 20, ground_options);
  World.add(world, ground);

  console.log(ground);
  ball=Bodies.circle(200,200,30,ball_options)
  World.add(world,ball)
}

function draw() {
  Engine.update(engine);

  background(0);  

  rectMode(CENTER); //Asks the code to take the x & y as the centre of the rectangle
  rect(ground.position.x, ground.position.y, 800, 20);
   
  //ellipse - oval
  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,20,20)
  
}

/*
PHYSICS ENGINE - matter.js

1. ENGINE - Universe - COntains multiple worlds inside 
      - Matter.Engine
2. WORLD - COntains objects
      - Matter.World
3. BODY - objects 
      - Matter.Bodies

Name Spacing - Giving nicknames to bigger functions/properties

*/