class Paper
{
    constructor(x,y){
        var options ={
          isStatic: false,
          restitution:0.3,
          friction:0.5,
          density:1.2
        };
        this.body = Bodies.circle(x,y,10,options);
        this.image = loadImage("paper.png");
        World.add(world,this.body);
    }
    display(){
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(this.body.angle);
        fill('white');
        image(this.image,0,0,50,50);
        pop();
    }
}