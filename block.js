class Block{
    constructor(x, y, width, height) {
        var options = {
                     
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.image = loadImage("block.png");
        this.Visiblity = 255;
        World.add(world, this.body);
      }
      display(){
       
        if (this.body.speed < 3) {
          var angle = this.body.angle;
          var pos= this.body.position;
          push();
          translate(pos.x, pos.y);
          rotate(angle);
          rectMode(CENTER);
          rect(0,0,this.width, this.height);
          imageMode(CENTER);
          image(this.image,0,0,30,40);
          pop();
        } else {
            push();
            this.Visiblity = this.Visiblity-2
            tint(255,this.Visiblity)
            pop();
            World.remove(world,this.body);
        }
        
        
      }
}
