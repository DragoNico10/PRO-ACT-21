class Ball
{
    constructor(x,y,r){
        let options={
            restitution:0.3,
            density:1.3,
            friction:0
        }
        this.body = Bodies.circle(x, y, r, options)
        World.add(world, this.body)
        this.r = r
    }
    drawClass(pos1, pos2){
        var pos = this.body.position
        push()
        ellipseMode(RADIUS)
        stroke(121, 105, 214)
        fill(134, 123, 199)
        ellipse(pos.x, pos.y, this.r)
        if((pos.x>pos1.x&&pos.x<pos2.x)){
            console.log("true")
        }
        else{
            console.log("false")
        }
        pop()
    }
    checkForKeyPressed(){
        var pos = this.body.position
        if(keyCode == RIGHT_ARROW){
            Body.applyForce(this.body, pos, {x:40, y:0})
        }
        else if (keyCode == LEFT_ARROW){
            Body.applyForce(this.body, pos, {x:-40, y:0})
        }
        else if (keyCode == UP_ARROW){
            Body.applyForce(this.body, pos, {x:0, y:-80})
        }
        else if (keyCode == DOWN_ARROW){
            Body.applyForce(this.body, pos, {x:0, y:40})
        }
    }
}