class chain{
 constructor(x,y,length,s){


 
 
 
   
 var link_options={
 bodyA :  x,
 bodyB : y,
 length :length,
 stiffness: s,


 }
 this.link = Matter.Constraint.create(link_options);
 World.add(world,this.link);
}
display(){
    line(this.link.bodyA.position.x,this.link.bodyA.position.y,this.link.bodyB.position.x,
        this.link.bodyB.position.y)
}
}