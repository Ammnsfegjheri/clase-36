
class Box{

constructor(x,y,w,h,newColor){

var options={

frictionAir:0.010,
restiution:0.1
};

this.x=x;
this.y=y;
this.w=w;
this.h=h;
this.color=newColor;

this.body=Bodies.rectangle(x,y,w,h,options);
World.add(world,this.body);

}

display(){
   fill(this.color);
   rect(this.body.position.x,this.body.position.y, this.w, this.h); 
}


}