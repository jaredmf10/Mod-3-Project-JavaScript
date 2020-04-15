
const magicWindow = document.getElementById("magicWindow")
let body = document.getElementById('body')
body.insertBefore(soundBoard, magicWindow)

var synth;
let effectsBoard = document.createElement('div')
effectsBoard.id = "effects"
body.insertBefore(effectsBoard, magicWindow)
effectsBoard.innerHTML = `
<div>
    <input type="radio" id="none" name="effect" value="None">
    <label for="None">None</label>
  </div>
<div>
    <input type="radio" id="phaser" name="effect" value="phaser">
    <label for="phaser">Phaser</label>
</div>
<div>
    <input type="radio" id="freeverb" name="effect" value="freeverb">
    <label for="freeverb">Freeverb</label>
</div>
<div>
    <input type="radio" id="vibrato" name="effect" value="vibrato">
    <label for="vibrato">Vibrato</label>
</div>
<div>
    <input type="radio" id="pitchShift" name="effect" value="pitchShift">
    <label for="pitchShift">PitchShift</label>
</div>

<div>
    <input type="radio" id="crusher" name="effect" value="crusher">
    <label for="crusher">Crusher</label>
</div>

<div>
    <input type="radio" id="pingPong" name="effect" value="pingPong">
    <label for="pingPong">PingPong</label>
</div>
`
let effectsDiv = document.getElementById("effects")

effectsDiv.addEventListener("click", function(e){
    if (document.getElementById('phaser').checked) {
        synth = new Tone.FMSynth().connect(phaser);
        } else if(document.getElementById('freeverb').checked){
            synth = new Tone.FMSynth().connect(freeverb);
        } else if(document.getElementById('vibrato').checked){
            synth = new Tone.FMSynth().connect(vibrato);
        }else if(document.getElementById('pitchShift').checked){
            synth = new Tone.FMSynth().connect(pitchShift);
        }else if(document.getElementById('crusher').checked){
            synth = new Tone.FMSynth().connect(crusher);
        }else if(document.getElementById('pingPong').checked){
            synth = new Tone.FMSynth().connect(pingPong);
        }else if(document.getElementById('none')) {
            synth = new Tone.Synth().toMaster()
        }
})

var growingInterval;
var mouseX;
var mouseY;
var selectedNote;
var intervalArray=[]
//magic window ideas change the color of the background breifly tothe color of the ball that hits 
//play the noise of the ball that hits 
//clears all the balls on screen 
function clearMagicBalls(){
    const ballKiller = document.createElement('button')
    ballKiller.textContent="Remove Balls"
    ballKiller.onclick=function(){
        MagicBall.all =[]
     while (magicWindow.lastElementChild) {
            magicWindow.removeChild(magicWindow.lastElementChild);
        }
     intervalArray.forEach(interval => clearInterval(interval) )
    }
    body.appendChild(ballKiller)
}
//creates the ball, creates the tone ,grows the ball
magicWindow.addEventListener("mousedown", function(e){
    synth.triggerAttack(selectedNote)
    let magicBall = new MagicBall(e,)
    mouseX = e.pageX
    mouseY = e.pageY
     growingInterval = setInterval(() => magicBall.grow(), 60)
})
//sets momentum direction
magicWindow.addEventListener("mouseup", function(e){ 
    synth.triggerRelease()
    clearInterval(growingInterval) 
    const recentMagicBall = MagicBall.all[MagicBall.all.length - 1]
    recentMagicBall.setDirection(e)
  intervalArray.push( setInterval(()=>recentMagicBall.move(),5))
})
//menu logic 
clearMagicBalls()


// document.addEventListener("click", function(e){
//     console.dir(e.target)
// })
