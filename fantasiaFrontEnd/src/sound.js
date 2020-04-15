// create sounds menu

let soundBoard = document.createElement('div')
soundBoard.textContent = "Sounds Menu - Press a Sound Key to begin"

let notes = ["A", "B", "C", "D", "E", "F", "G"]
notes.forEach(note => {
    let newLi = document.createElement("li")
    newLi.textContent = `${note}:  Play middle '${note}'`
    soundBoard.appendChild(newLi)
});

let currentSound = document.createElement('h3')

//select note with key presses
document.addEventListener("keydown", function(event){
    event.preventDefault()
    if (event.which === 65){
      let selectedSound = "A"
      currentSound.textContent = `Current Sound is ${selectedSound}`
      soundBoard.appendChild(currentSound)
      selectedTone = 'A5'
    }
    else if (event.which === 66){
        let selectedSound = "B"
        currentSound.textContent = `Current Sound is ${selectedSound}`
        soundBoard.appendChild(currentSound)
        selectedTone = 'B5'
    }
    else if (event.which === 67){
        let selectedSound = "C"
        currentSound.textContent = `Current Sound is ${selectedSound}`
        soundBoard.appendChild(currentSound)
        selectedTone = 'C5'
    }
    else if (event.which === 68){
        let selectedSound = "D"
        currentSound.textContent = `Current Sound is ${selectedSound}`
        soundBoard.appendChild(currentSound)
        selectedTone = 'D5'
    }
    else if (event.which === 69){
        let selectedSound = "E"
        currentSound.textContent = `Current Sound is ${selectedSound}`
        soundBoard.appendChild(currentSound)
        selectedTone = 'E5'
    }
    else if (event.which ===70){
        let selectedSound = "F"
        currentSound.textContent = `Current Sound is ${selectedSound}`
        soundBoard.appendChild(currentSound)
        selectedTone = 'F5'
    }
    else if (event.which === 71){
        let selectedSound = "G"
        currentSound.textContent = `Current Sound is ${selectedSound}`
        soundBoard.appendChild(currentSound)
        selectedTone = 'G5'
    }
  })

  //sound effects
var phaser = new Tone.Phaser({
    "frequency" : 15,
    "octaves" : 5,
    "baseFrequency" : 1000
}).toMaster();


var freeverb = new Tone.Freeverb().toMaster();
freeverb.dampening.value = 1000;


var vibrato = new Tone.Vibrato().toMaster();
vibrato.defaults = {
	"maxDelay" : 0.005,
	"frequency" : 5,
	"depth" : 0.1,
	"type" : "sine"
};


var pitchShift = new Tone.PitchShift().toMaster();
pitchShift.pitch = -12; //down one octave


var crusher = new Tone.BitCrusher(4).toMaster();
//The bit depth of the effect. Nominal range of 1-8.
crusher.defaults = {
	"bits" : 4
};


var pingPong = new Tone.PingPongDelay("4n", 0.2).toMaster();
pingPong.defaults = {
	"delayTime" : 0.25,
    "maxDelayTime" : 1,
    "feedback" : 0.6
};

// let effectsBoard = document.createElement('div')
// effectsBoard.innerText = "Please select a Sound Effect"
// body.insertBefore(effectsBoard, magicWindow)
// let br = document.createElement('br')
// body.insertBefore(br, effectsBoard)
// effectsBoard.innerHTML = `
// <div>
//     <input type="radio" id="none" name="effect" value="None">
//     <label for="None">None</label>
//   </div>
// <div>
//     <input type="radio" id="phaser" name="effect" value="phaser">
//     <label for="phaser">Phaser</label>
// </div>
// <div>
//     <input type="radio" id="freeverb" name="effect" value="freeverb">
//     <label for="freeverb">Freeverb</label>
// </div>
// <div>
//     <input type="radio" id="vibrato" name="effect" value="vibrato">
//     <label for="vibrato">Vibrato</label>
// </div>
// <div>
//     <input type="radio" id="pitchShift" name="effect" value="pitchShift">
//     <label for="pitchShift">PitchShift</label>
// </div>

// <div>
//     <input type="radio" id="crusher" name="effect" value="crusher">
//     <label for="crusher">Crusher</label>
// </div>

// <div>
//     <input type="radio" id="pingPong" name="effect" value="pingPong">
//     <label for="pingPong">PingPong</label>
// </div>
// `

// if (document.getElementById('phaser').checked) {
//     var synth = new Tone.FMSynth().connect(phaser);
//     } else if(document.getElementById('freeverb').checked){
//         var synth = new Tone.FMSynth().connect(freeverb);
//     } else if(document.getElementById('vibrato').checked){
//         var synth = new Tone.FMSynth().connect(vibrato);
//     }else if(document.getElementById('pitchShift').checked){
//         var synth = new Tone.FMSynth().connect(pitchShift);
//     }else if(document.getElementById('crusher').checked){
//         var synth = new Tone.FMSynth().connect(crusher);
//     }else if(document.getElementById('pingPong').checked){
//         var synth = new Tone.FMSynth().connect(pingPong);
//     }else if(document.getElementById('none')) {
//         synth = new Tone.Synth().toMaster()
//     }