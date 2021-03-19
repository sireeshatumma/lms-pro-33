var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var particles = [];
var plinkos = [];
var divisions = [];
var count = 0;
var particle;
var divisionHeight=300;
var score = 0;
var gameState = "START"
function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);


   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }

    

    
}
 


function draw() {
  background("black");
 //text(mouseX+","+mouseY,mouseX,mouseY);
  textSize(20)
  text("Score : "+score,20,30);
  Engine.update(engine);
  text(500,30,540)
  text(500,110,540)
  text(200,190,540)
  text(200,270,540)
  text(100,350,540)
  text(100,430,540)
  text(200,510,540)
  text(200,590,540)
  text(500,670,540)
  text(500,750,540)
  
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }
  //  if(frameCount%60===0){
  //    particles.push(new Particle(random(width/2-30, width/2+30), 10,10));
  //    score++;
  //  }
 
  for (var j = 0; j < particles.length; j++) {
   
     particles[j].display();
   }
   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }
   if(particle!=null){
     particle.display();
        if(particle.body.position.y>760){
            if(particle.body.position.x<160 && particle.body.position.x>20){
                score=score+500
                particle=null;
                if(count>=5)gameState = "end"
            } else if(particle.body.position.x<320 && particle.body.position.x>160){
              score=score+200
              particle=null;
              if(count>=5)gameState = "end"
            } else if(particle.body.position.x<480 && particle.body.position.x>320){
              score=score+100
              particle=null;
              if(count>=5)gameState = "end"
            } else if(particle.body.position.x<800 && particle.body.position.x>640){
              score=score+500
              particle=null;
              if(count>=5)gameState = "end"
            } else if(particle.body.position.x<640 && particle.body.position.x>480){
              score=score+200
              particle=null;
              if(count>=5)gameState = "end"
            }
      }
        
   }
   if(gameState === "end"){
      textSize(100);
      fill("red");
      text("GAME OVER",100,400);
   }
   
}
function mousePressed(){
  if(gameState !=="end"){
    count++
    particle = new Particle(mouseX,10,10,10)
  }
}