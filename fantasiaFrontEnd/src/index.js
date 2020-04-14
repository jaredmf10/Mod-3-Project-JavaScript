// var MagicBall= require("effect.js")
const magicWindow = document.getElementById("magicWindow")
const synth = new Tone.Synth().toMaster();

var growingInterval;

//magic window ideas change the color of the background breifly tothe color of the ball that hits 
//play the noise of the ball that hits 





magicWindow.addEventListener("mousedown", function(e){
    synth.triggerAttack("D4", "9n")
    let magicBall = new MagicBall(e)
   
    console.log(magicBall)
     growingInterval = setInterval(() => magicBall.grow(), 60)
})

magicWindow.addEventListener("mouseup", function(e){ 
    synth.triggerRelease()
    clearInterval(growingInterval) 
    console.log(e)  
    // find the last magic ball item in the array MagicBall[-1].move()
    // run move()
})