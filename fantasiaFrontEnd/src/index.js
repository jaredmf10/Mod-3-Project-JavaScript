// var MagicBall= require("effect.js")
const magicWindow = document.getElementById("magicWindow")
const synth = new Tone.Synth().toMaster();

var growingInterval;
var mouseX;
var mouseY;
//magic window ideas change the color of the background breifly tothe color of the ball that hits 
//play the noise of the ball that hits 





magicWindow.addEventListener("mousedown", function(e){
    synth.triggerAttack("D4", "9n")
    let magicBall = new MagicBall(e)
    mouseX = e.pageX
    mouseY = e.pageY
    
     growingInterval = setInterval(() => magicBall.grow(), 60)
})

magicWindow.addEventListener("mouseup", function(e){ 
    
    synth.triggerRelease()
    clearInterval(growingInterval) 
    
    
    const recentMagicBall = MagicBall.all[MagicBall.all.length - 1]
    
    recentMagicBall.setDirection(e)

    setInterval(()=>recentMagicBall.move(),5)
})

