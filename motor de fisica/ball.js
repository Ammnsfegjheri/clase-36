
class Ball{

    constructor(x,y,r,newColor){
    this.x=x;
    this.y=y;
    this.radius=r;
   
    this.color=newColor;
    }
    
    display(){
       fill(this.color);
       ellipse(this.x, this.y, this.radius,this.radius); 
    }
    
    
    }