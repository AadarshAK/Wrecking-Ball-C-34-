class Ball{
    constructor(x,y,radius){
        var options={
            'isStatic':false,
            'restitution':0.8,
            'friction':1,
            'density':0.04
        }

        this.body=Bodies.circle(x,y,radius,options);
        World.add(world,this.body);
        this.radius=radius;
    }

    display(){
        var pos=this.body.position;
        var angle=this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        ellipseMode(RADIUS);
        fill("grey");
        strokeWeight(4);
        stroke("black");
        ellipse(0,0,this.radius,this.radius);
        pop();
    }
}