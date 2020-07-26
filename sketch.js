
var Engine = Matter.Engine,
  //Render = Matter.Render,
  World = Matter.World,
  Bodies = Matter.Bodies;

var engine;
var world;
var boxes = [];
var canvasWidth;
var canvasHeight;
var o;
var man;
var maxDrops = 10;
var m;
var bgIMG;

function preload(){
  bgIMG = loadImage("bg1.jpg")
man = loadImage("man.png");

}

function setup() {
  canvasWidth = windowWidth;
  canvasHeight = windowHeight;
  createCanvas(canvasWidth, canvasHeight);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);
  // boxes = new Box(100,100,100,100);
  //rectMode(CENTER);
   o =   Bodies.circle(canvasWidth/1.95, canvasHeight/2.6, 116.5,{isStatic : true});
   // m =   Bodies.rectangle(canvasWidth/2, canvasHeight/2, 150, 150,{isStatic : true});
   World.add(world, o);

}

function draw() {
  background(bgIMG);
push();
imageMode(CENTER);
image(man,canvasWidth/2,canvasHeight/1.6,300,550);
pop();


  for (var i = 0 ; i < maxDrops ; i++){
    if (frameCount %10 ===0){
      noStroke();
      fill(0,0,255)
    boxes.push(new Box(random(canvasWidth),10,5,5,{restitution : 1.41, friction :0})); 
    }
  }
// 
  //boxes.push(new Box(random(canvasWidth),10,5,5));   
 // console.log( boxes); 
  //}
  
 for (var box in boxes){
  boxes[box].show();
 }




}