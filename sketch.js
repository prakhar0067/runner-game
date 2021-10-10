var Runner,Runner_running,Runner_collided
var path,pathImage

var Runner1,RunnerImage,Runner2
var Runner1Img,Runner2Img



function preload(){
  Runner_running = loadAnimation("Runner1.png","Runner2.png")
  Runner_collided = loadAnimation("Runner_collided.png")

  pathImage = loadImage("path.png");
  RunnerImage = loadImage("Runner.png");

  Runner1 = loadImage("Runner1.png");
  Runner2 = loadImage("Runner2.png");

}

function setup(){
  createCanvas(400,400);
 Runner = createSprite() 
}

function draw() {
  background(0);

}
