class MagicBall{
   //create a scale so when balls hit the notes are harmonous 
    constructor(e){
       this.note = selectedNote
       this.directionX = 0
       this.directionY = 0
       this.left = e.pageX +"px";
       this.top = e.pageY +"px";
       this.id = Math.floor(Math.random() * 100);
       this.width = "5px";
       this.height = "5px";
       this.borderRadius = "5px";
       this.position ="absolute";
       this.boxShadow = "inset -5px -5px 5px rgba(0,0,0,.6), 15px 15px 2px rgba(0,0,0,.04)";
       this.backgroundColor = "red"
       this.node= this.build()
       MagicBall.all.push(this)
    }
    //grows the damn ball
    grow(){
        this.width = (parseInt(this.width, 10) + 5) + 'px';
        this.height = (parseInt(this.height, 10) + 5) + 'px';
        this.borderRadius = (parseInt(this.borderRadius, 10) + 5) + 'px';
        return this.build()
    }
    //builds the damn ball 
    build(){
        const magicBall = document.createElement('div')
        const magicWindow = document.getElementById("magicWindow")
        magicBall.style.backgroundColor=this.backgroundColor
        magicBall.style.width = this.width
        magicBall.style.height= this.height
        magicBall.style.borderRadius= this.borderRadius
        magicBall.style.position=this.position
        magicWindow.appendChild(magicBall)
        magicBall.style.left=this.left
        magicBall.style.top= this.top 
        magicBall.style.boxShadow = this.boxShadow
        magicBall.id=this.id 
        
       
        return magicBall
    }
     //sets direction and speed 
     setDirection(e){
        const newMouseX = e.pageX
        const newMouseY= e.pageY
        const deltaX = (newMouseX - mouseX)/100;
        const deltaY = (newMouseY - mouseY)/100;
        
        this.directionY = deltaY
        this.directionX = deltaX
        
     }
     //collision detection
    changeDirection(){
        const magicWindow = document.getElementById("magicWindow")
        
        if (parseInt(this.left,10) < 0 || parseInt(this.left,10) > (parseInt(magicWindow.style.width,10) - parseInt(this.borderRadius,10))) {
            synth.triggerAttackRelease(this.note,"8n")
            this.directionX = -this.directionX ;
        }
        else if (parseInt(this.top,10) < 0 || parseInt(this.top,10) > (parseInt(magicWindow.style.height,10) - parseInt(this.borderRadius,10))) {
            synth.triggerAttackRelease(this.note,"8n")
            this.directionY  = -this.directionY ;
        }
    }
    //speed of movement 
    momentum(){
       
        const magicBall = document.getElementById(this.id)
        const magicWindow = document.getElementById("magicWindow")
        magicWindow.removeChild(magicBall)
        // console.log(magicBall)
        
        this.left = (parseInt(this.left, 10) + this.directionX) + 'px';
        this.top =(parseInt(this.top, 10) + this.directionY) + 'px';
        
        return this.build()
    }

    move(){
     this.changeDirection();
     this.momentum();
    }


}
//all the balls
MagicBall.all = [] 

