/*class Stone{
    constructor(x,y){
        this.w=50
        this.h=50
        this.r=25
    this.body=Matter.Bodies.circle(x,y,this.w,this.h,{
    isStatic:false,
     density:1.2,
     friction:1,
     restitution:0 
     
    })
    Matter.World.add(world,this.body)
    this.img=loadImage("rock.png")
    }
    display(){

    push()
    
    imageMode(CENTER) 
    translate(this.body.position.x,this.body.position.y)
    rotate(this.body.angle)
    image(this.img,0,0,this.w,this.h) 
    pop()
    }
    }*/
    class Stone{
        constructor(x,y,r)
        {
            var options={
                isStatic:false,
                restitution :0,
                friction :1,
                }
            this.x=x;
            this.y=y;
            this.r=r
            this.image=loadImage("rock.png")
            this.body=Bodies.circle(this.x, this.y, this.r, options)
            World.add(world, this.body);
        }
    
        display()
        {
            var sPos=this.body.position;	
            push()
            translate(sPos.x, sPos.y);
            // rectMode(CENTER);
            rotate(this.body.angle)
            //fill(255,0,255)
            imageMode(CENTER);
            ellipseMode(CENTER);
            image(this.image, 0,0,this.r*2, this.r*2)
            pop()
     }
    }