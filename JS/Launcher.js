class IChain{

    constructor(bodyA, pointB){

        var options = {

            bodyA : bodyA,
            pointB : pointB,
            'stiffness' : 0.01,
            'length' : 2
        }

        this.pointB = pointB;
        this.chain = Constraint.create(options);

        World.add(world, this.chain);

    }

    
    fly(){

        this.chain.bodyA = null;

    }

    display(){

        if(this.chain.bodyA){

            var bA = this.chain.bodyA.position;
            var pB = this.pointB;
            
            push();
            stroke("black");
            strokeWeight(3);
            line(bA.x, bA.y, pB.x, pB.y);
            pop();

        }

    }

    attach(bodyA){

        this.chain.bodyA = bodyA;

    }

}