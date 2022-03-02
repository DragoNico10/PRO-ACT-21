class Block
{
  constructor(x, y, w, h) 
  {
    let options = {
      isStatic:true
    };
    
    this.body = Bodies.rectangle(x, y, w, h, options);
    this.w = w;
    this.h = h;
    World.add(world, this.body);
  }

  drawClass() {
    var pos = this.body.position;
    push();
    rectMode(CENTER);
    stroke(253,255,10);
    fill(253,255,10);
    rect(pos.x, pos.y, this.w, this.h);
    pop();
  }
  
}


