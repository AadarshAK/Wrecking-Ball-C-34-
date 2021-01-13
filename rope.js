class Rope{
    constructor(bodyA,pointB){
        var options={
           bodyA:bodyA,
           pointB:pointB,
           lenght:350,
           stiffnes:1.2
        }
        
        this.pointB=pointB;

        this.rope=Constraint.create(options);
        World.add(world,this.rope);
    }

    display(){
    //    var pos=this.body.position;
     //   var angle=this.body.angle;
        var pointA=this.rope.bodyA.position;
        var pointB=this.pointB;
        push();
        strokeWeight(5);
        stroke("black");
        line(pointA.x,pointA.y,pointB.x,pointB.y);
        pop();
    }
}