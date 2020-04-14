class MagicBall{
   //create a scale so when balls hit the notes are harmonous 
    constructor(e){
       this.directionX = 0
       this.directionY = 0
       this.left = e.pageX +"px";
       this.top = e.pageY +"px";
       this.id = Math.floor(Math.random() * 100);
       this.width = "5px";
       this.height = "5px";
       this.borderRadius = "5px";
       this.position ="absolute";
       this.backgroundColor = "red"
       this.node= this.build()
       
       MagicBall.all.push(this)
    }
    grow(){
        this.width = (parseInt(this.width, 10) + 5) + 'px';
        this.height = (parseInt(this.height, 10) + 5) + 'px';
        this.borderRadius = (parseInt(this.borderRadius, 10) + 5) + 'px';
        return this.build()
    }
    
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
        magicBall.id=this.id 
        
       
        return magicBall
    }
     setDirection(e){
        const newMouseX = e.pageX
        const newMouseY= e.pageY
        const deltaX = (newMouseX - mouseX)/100;
        const deltaY = (newMouseY - mouseY)/100;
        
        this.directionY = deltaY
        this.directionX = deltaX
        
     }

    changeDirection(){
        const magicWindow = document.getElementById("magicWindow")
        // console.log(parseInt(magicWindow.style.width,10))
        // console.log(parseInt(this.width,10))
        // console.log(this.top)
        if (parseInt(this.left,10) < 0 || parseInt(this.left,10) > (parseInt(magicWindow.style.width,10) - parseInt(this.width,10))) {
            
            this.directionX = -this.directionX ;
        }
        else if (parseInt(this.top,10) < 0 || parseInt(this.top,10) > (parseInt(magicWindow.style.height,10) - parseInt(this.height,10))) {
            
            this.directionY  = -this.directionY ;
        }
    }
    momentum(){
        //moving on the xy  access 
        // +1x -1y
        //increment speed 
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

MagicBall.all = [] 

