class Box{
    constructor(x,y,width,height){
         var options={
             'restitution':0.5,
             'friction':6.0,
             'density':10.0,
         }
        this.Visiblity=255;
          this.body=Bodies.rectangle(x,y,width,height,options);
          this.width=width;
          this.height=height;
          World.add(world,this.body);
    }

    score(){
        if(this.Visiblity<0&&this.Visiblity>-105){
            score++;
        }
    }

    display(){

        var pos=this.body.position;
        rectMode(CENTER);
        rect(pos.x,pos.y,this.width,this.height);
       
    }

}