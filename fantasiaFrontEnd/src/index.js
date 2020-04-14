
const magicWindow = document.getElementById("magicWindow")
let body = document.getElementById('body')
body.insertBefore(soundBoard, magicWindow)

var synth = new Tone.FMSynth().connect(pingPong);

var selectedTone;

var growingInterval;


magicWindow.addEventListener("mousedown", function(e){
    synth.triggerAttack(selectedTone)
    let magicBall = new MagicBall(e)

    growingInterval = setInterval(() => magicBall.grow(), 60)
})

magicWindow.addEventListener("mouseup", function(e){ 
    synth.triggerRelease()
    clearInterval(growingInterval) 
    console.log(e)  
})


// document.addEventListener("click", function(e){
//     console.dir(e.target)
// })