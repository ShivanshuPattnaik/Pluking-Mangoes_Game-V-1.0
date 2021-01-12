class Mango{

    constructor(x, y, radius){

        var options = {

            isStatic : true,
            'restitution' : 0,
            'density' : 0.8,
            'friction' : 0.1

        }
        
        this.body = Bodies.circle(x, y, radius / 3, options);
        this.radius = radius;
        this.image = loadImage("Images/mango.png");

        World.add(world, this.body);

    }

    display(){

        var pos = this.body.position;
        
        push();
        translate(pos.x, pos.y);
        imageMode(CENTER);
        image(this.image, 0, 0, this.radius, this.radius);
        pop();

    }

}