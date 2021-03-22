class SlingShot {
    constructor(bodyA, pointB) {
        var options = {
            bodyA : bodyA,
            pointB:pointB,
            stiffness:0.04,
            length:1
        }
        this.pointB = pointB
        this.sling1 = Constraint.create(options)
        World.add(world, this.sling1)
    }
    fly(){
        this.sling1.bodyA = null
        console.log("check")
    }
    attach(body){
        this.sling1.bodyA = body
    }
    display() {
        if(this.sling1.bodyA) {
            var pointA = this.sling1.bodyA.position
            var pointB = this.pointB
            push()
            stroke("white")
            strokeWeight(2)
            line(pointB.x, pointB.y, pointA.x, pointA.y)
            pop()
        }
    }
}