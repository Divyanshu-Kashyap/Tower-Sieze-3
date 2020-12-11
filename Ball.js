class Ball{
    constructor(x,y,radius){
        var options={
            'restitution':0.1,
            'friction':1.0,
            'density':1.0,

        }
        this.body=Bodies.circle(x,y,radius,options);
        this.image=loadImage("polygon.png");
        this.radius=radius;
        World.add(world,this.body);

    }

 



    display(){
        push();
         imageMode(CENTER);
        image(this.image,this.body.position.x,this.body.position.y,60,60);
        pop();
       
    }
}