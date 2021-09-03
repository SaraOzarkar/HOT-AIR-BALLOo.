class Parachute{
constructor(){
this.body=createSprite(50,height/2-200,50,50,{isStatic:false})

this.image=loadImage("Parachute.png")
this.body.addImage(this.image)
this.body.scale=0.5
}

   display(){
image (this.image,this.body.position.x,this.body.position.y,100,100)
   }
moveUp(){
   this.body.velocityY=-12
}

}