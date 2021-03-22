const Engine = Matter.Engine;
const Constraint = Matter.Constraint;
const World = Matter.World;
const Bodies = Matter.Bodies
var bg = "light.jpg"
var backgroundImg
var score = 0
function preload() {
  getBackgroundImage()
polygonImage = loadImage("polygon.png");
}

function setup() {

  createCanvas(1000,400)
  engine = Engine.create()
  world = engine.world
    block8 = new block(330,235,30,40);
    block9 = new block(360,235,30,40);
    block10 = new block(390,235,30,40);
    block11 = new block(420,235,30,40);
    block12 = new block(450,235,30,40);
    block13 = new block(360,195,30,40);
    block14 = new block(390,195,30,40);
    block15 = new block(420,195,30,40);
    block16 = new block(390,155,30,40);

    block17 = new block(530,205,30,40);
    block18 = new block(560,205,30,40);
    block19 = new block(590,205,30,40);
    block20 = new block(620,205,30,40);
    block21 = new block(650,205,30,40);
    block22 = new block(560,165,30,40);
    block23 = new block(590,165,30,40);
    block24 = new block(620,165,30,40);
    block25 = new block(590,125,30,40);

    base1 = new Base(390,265,200,20)
    base2 = new Base(500,380,1000,20)
    base3 = new Base(610,235,200,20)

    polygon = Bodies.circle(50,200,20);
    World.add(world, polygon);

  sling2 = new SlingShot(this.polygon, {x:100, y:200})

}
 function draw() {
   if(backgroundImg) {
    background(backgroundImg)
   }
Engine.update(engine)
   imageMode(CENTER)
image(polygonImage, polygon.position.x, polygon.position.y, 40, 40)
textSize(20);
  fill("lightyellow");
  text("Drag the polygon to destroy the blocks",300,30);
  text("SCORE : "+score,750,40);
  textSize(10);
  text("Press Space to get a second Chance to Play!!",650 ,350);
  fill("green")
   block17.display();
   fill("green")
   block18.display();
   block19.display();
   block20.display();
   block21.display();
   fill("white")
   block22.display();
   block23.display();
   block24.display();
   fill("orange")
   block25.display();
fill("green")
   block8.display();
   fill("green")
   block9.display();
   block10.display();
   block11.display();
   block12.display();
   fill("white")
   block13.display();
   block14.display();
   block15.display();
   fill("orange")
   block16.display();

   

   base1.display();
   base2.display();
   base3.display();

   sling2.display();

   block8.score()
   block9.score()
   block10.score()
   block11.score()
   block12.score()
   block13.score()
   block14.score()
   block15.score()
   block16.score()
   block17.score()
   block18.score()
   block19.score()
   block20.score()
   block21.score()
   block22.score()
   block23.score()
   block24.score()
   block25.score()
 
 }
 function mouseDragged() {
   Matter.Body.setPosition(this.polygon, {x:mouseX, y:mouseY})
 }
 function mouseReleased() {
   sling2.fly()
   //console.log("FunctionCheck")
 }
 function keyPressed() {
   if(keyCode === 32) {
     sling2.attach(this.polygon)
   }
 }
 async function getBackgroundImage(){
  var response = await fetch("http://worldclockapi.com/api/json/est/now");
  var responseJSON = await response.json();

  var datetime = responseJSON.currentDateTime;
  var hour = datetime.slice(11, 13);
  //console.log(hour);

  if (hour >= 06 && hour <= 18) {
    bg = "light.jpg";
  } else {
    bg = "dark.jpg";
  }

  backgroundImg = loadImage(bg);
  console.log(backgroundImg);
}