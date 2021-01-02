class Plinko{
    constructor(x,y,radius){
        var options = {
        isStatic:true
        }
    
  this.body = Bodies.cirlce(x,y,radius,options);
  this.radius = radius
 
  World.add(world,this.body)
 }
 display(){
     var pos = this.body.position
     ellipseMode(CENTER)
     fill("white")
     ellipse(pos.x,pos.y,this.radius)
     for( var k = 40; k<=width ; k = k+50){
        plinko.push(new Plinko(k,75,20))
    }
    for( var k = 15; k<=width-10 ; k = k+50){
        plinko.push(new Plinko(k,175,20))
    }
    for( var k = 40; k<=width ; k = k+50){
        plinko.push(new Plinko(k,275,20))
    }
    for( var k = 15; k<=width-10 ; k = k+50){
        plinko.push(new Plinko(k,375,20))
    }
 }
}