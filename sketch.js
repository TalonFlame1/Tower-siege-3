const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint
var engine, world;
var box1, pig1;
var score = 0

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    
    ground = new Ground(600,height,1200,20)
    ground1 = new Ground (900,350,400,10)
   box1 = new Box(900,300,40,40);
    box2 = new Box(860,300,40,40);
    box3 = new Box(820,300,40,40);
    box4 = new Box(940,300,40,40);
    box5 = new Box(980,300,40,40);
    box6 = new Box (860,280,40,40);
   box7 = new Box (900,280,40,40)
box8 = new Box (940,280,40,40)
box9 = new Box (900,260,40,40)
    bird = new Bird(400,700);
    slingshot = new SlingShot (bird.body,{x: 400, y:50})

}

function draw(){
    background ("white");
    textSize(20)
    text("score"+ score, 900,100)
    Engine.update(engine);
   box1.display();
   box1.score();
    box2.display();
    box2.score();
    box3.display();
    box3.score();
   box4.display();
   box4.score();
    box5.display();
    box5.score();
box6.display();
box6.score();
box7.display();
box7.score();
box8.display();
box8.score();
box9.display();
box9.score();
ground.display();
ground1.display();
    bird.display();
    slingshot.display();
}
function mouseDragged() {
Matter.Body.setPosition (bird.body,{x: mouseX, y:mouseY})



}
function mouseReleased (){
slingshot.fly()




}