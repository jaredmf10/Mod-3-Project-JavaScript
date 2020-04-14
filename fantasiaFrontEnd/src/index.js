const magicWindow = document.getElementById("magicWindow")
const synth = new Tone.Synth().toMaster();
var growingInterval;
function magicBallCreator(e){
    const magicBall = document.createElement('div')
    const left = e.pageX +"px";
    const top = e.pageY +"px";
    magicBall.id = "circle"
    magicBall.style.backgroundColor = "red"
    magicBall.style.width = "5px"
    magicBall.style.height = "5px"
    magicBall.style.borderRadius = "5px"
    magicBall.style.position = "inherit";
    magicWindow.appendChild(magicBall)
    magicBall.style.left = left;
    magicBall.style.top = top;
    return magicBall
}
function magicBallGrowth(magicBall){
    console.dir(magicBall)
    magicBall.style.width = (parseInt(magicBall.style.width, 10) + 5) + 'px';
    magicBall.style.height = (parseInt(magicBall.style.height, 10) + 5) + 'px';
    magicBall.style.borderRadius = (parseInt(magicBall.style.borderRadius, 10) + 5) + 'px';
}
magicWindow.addEventListener("mousedown", function(e){
    synth.triggerAttack("D4", "9n")
    const magicBall = magicBallCreator(e)
    growingInterval = setInterval(() => magicBallGrowth(magicBall), 60)
})
magicWindow.addEventListener("mouseup", function(e){ 
    synth.triggerRelease()
    clearInterval(growingInterval)   
})


// document.addEventListener("click", function(e){
//     console.dir(e.target)
    
// })