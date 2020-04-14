class MagicBall{
   //create a scale so when balls hit the notes are harmonous 
    constructor(e){
       this.left = e.pageX +"px";
       this.top = e.pageY +"px";
       this.id = Math.floor(Math.random() * 100);
       this.width = "5px";
       this.height = "5px";
       this.borderRadius = "5px";
       this.position ="inherit";
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
    move(){
        //moving on the xy  access 
        // +1x -1y
        //increment speed 

    }
}

MagicBall.all = [] 

