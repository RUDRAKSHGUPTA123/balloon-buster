var bow ,arrow, green_balloon, red_balloon,                           pink_balloon ,blue_balloon, background;
var bowImage, arrowImage, green_balloonImage,                         red_balloonImage, pink_balloonImage,                               blue_balloonImage, backgroundImage;
var score = 0;
var pointp = 1;
var pointr = 2;
var pointg = 3;
var pointb = 4;

function preload(){
  
  backgroundImage = loadImage("background0.png");
  arrowImage = loadImage("arrow0.png");
  bowImage = loadImage("bow0.png");
  red_balloonImage = loadImage("red_balloon0.png");
  green_balloonImage = loadImage("green_balloon0.png");
  pink_balloonImage = loadImage("pink_balloon0.png");
  blue_balloonImage = loadImage("blue_balloon0.png");
  }

function setup() {
  createCanvas(400, 400);

  //creating background
  background = createSprite(0,0,400,400);
  background.addImage(backgroundImage);
  background.scale = 2.5
  
// creating bow to shoot arrow
  bow = createSprite(350,220,20,50);
  bow.addImage(bowImage); 
  bow.scale = 1;
  
  RedballoonGroup = new Group();
  BlueballoonGroup = new Group();
  GreenballoonGroup = new Group();
  pinkballoonGroup = new Group();
  arrowGroup = new Group();
}

function draw() {
// To move the ground
    background.velocityX = -3 
 
if (background.x < 0){
  background.x = background.width/2;
}
  
//moving bow
  bow.y = World.mouseY
  
// release arrow when space key is pressed
if (keyDown("space")) {
  var temp_arrow = createArrow();
  temp_arrow.addImage(arrowImage);
  temp_arrow.y = bow.y;
}
  var balloon = Math.round(random (1,4));
if (World.frameCount % 100=== 0 ){
if(balloon === 1 ){
    redBalloon();
} else if (balloon ==2){
    greenBalloon();
} else if (balloon==3){
    blueBalloon();
}else {
    pinkBalloon();
}
}



drawSprites();
fill("black");
  text("Score: "+ score, 270,30);  
  score = score +Math.round(frameCount/30);
if(arrowGroup.isTouching(pinkballoonGroup)){
  pinkballoonGroup.destroyEach();
  arrowGroup.destroyEach();
  text("Point: "+ pointp, 200,30 );
}
if(arrowGroup.isTouching(RedballoonGroup)){
  RedballoonGroup.destroyEach();
  arrowGroup.destroyEach();
  text("Point: "+ pointr,200,30);
}
if(arrowGroup.isTouching(GreenballoonGroup)){
  GreenballoonGroup.destroyEach();
  arrowGroup.destroyEach();
  text("Point: "+ pointg,200,30);
}
if(arrowGroup.isTouching(BlueballoonGroup)){
  BlueballoonGroup.destroyEach();
  arrowGroup.destroyEach();
  text("Point: "+ pointb,200,30);
}
}
// Creating  arrows for bow
  
function createArrow() {
  arrow= createSprite(360, 100, 5, 10);
  arrow.velocityX = -6;
  arrow.scale = 0.3;
  arrowGroup.add(arrow);
  return arrow;
}

function redBalloon(){
var red = createSprite(0,Math.round (random(20,370)),10,10);
  red.addImage(red_balloonImage);
  red.velocityX =3;
  red.lifetime = 150;
  red.scale = 0.1;
  RedballoonGroup.add(red);
}

function greenBalloon(){
var green =createSprite(0,Math.round (random(20,370)),15,15);
  green.addImage(green_balloonImage);
  green.velocityX = 3;
  green.lifetime = 150;
  green.scale = 0.1;
  GreenballoonGroup.add(green);
}
function blueBalloon(){
var blue = createSprite(0,Math.round(random(20,370)),17,17);
  blue.addImage(blue_balloonImage);
  blue.velocityX=3;
  blue.lifetime=150;
  blue.scale = 0.1;
  BlueballoonGroup.add(blue);
}

function pinkBalloon(){
var pink = createSprite(0,Math.round(random(20,370)),19,19);
  pink.addImage(pink_balloonImage);
  pink.velocityX=3;
  pink.lifetime = 150;
  pink.scale = 1.2;
  pinkballoonGroup.add(pink);
}






