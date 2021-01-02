class Particle{
    constructor(x,y,radius){
        var options = {
        isStatic:true
        }
    
  this.body = Bodies.cirlce(x,y,radius,options);
  this.radius = radius
  this.color = color(random(0,225))
 
  World.add(world,this.body)
 }
 display(){
     var pos = this.body.position
     ellipseMode(CENTER)
     
     ellipse(pos.x,pos.y,this.radius)
     if(frameCount%60 ===0){
         particle.push(new Particle(random(width/2-10,width/2 +10),-10,20))
     }
 }
}