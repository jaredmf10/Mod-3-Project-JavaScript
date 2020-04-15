
const magicWindow = document.getElementById("magicWindow")
let body = document.getElementById('body')
body.insertBefore(soundBoard, magicWindow)

var synth;
let effectsBoard = document.createElement('div')
effectsBoard.id = "effects"
effectsBoard.innerText = "Please select a Sound Effect"
body.insertBefore(effectsBoard, magicWindow)
let br = document.createElement('br')
body.insertBefore(br, effectsBoard)
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