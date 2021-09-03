class Tree{
    constructor(x){
        this.body=createSprite(x,height-100,50,50)
        
       
        this.image=loadImage("mountain.png")
        this.body.addImage(this.image)
        this.body.scale=1.5
        this.body.debug=true
        this.body.setCollider("circle",0,0,100)
        }
        
           display(){
        image (this.image,this.body.position.x,this.body.position.y,300,500)
           }

}