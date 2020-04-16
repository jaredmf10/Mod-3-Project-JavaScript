
const magicWindow = document.getElementById("magicWindow")
let body = document.getElementById('body')
var synth= new Tone.Synth().toMaster();
var synth;
let effectsBoard = document.createElement('div')
effectsBoard.id = "effects"

body.insertAdjacentElement('beforeend', effectsBoard)
body.insertBefore(soundBoard, effectsBoard)
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

// effectsDiv.addEventListener("click", function(e){
//     if (document.getElementById('phaser').checked) {
//         synth = new Tone.FMSynth().connect(phaser);
//         } else if(document.getElementById('freeverb').checked){
//             synth = new Tone.FMSynth().connect(freeverb);
//         } else if(document.getElementById('vibrato').checked){
//             synth = new Tone.FMSynth().connect(vibrato);
//         }else if(document.getElementById('pitchShift').checked){
//             synth = new Tone.FMSynth().connect(pitchShift);
//         }else if(document.getElementById('crusher').checked){
//             synth = new Tone.FMSynth().connect(crusher);
//         }else if(document.getElementById('pingPong').checked){
//             synth = new Tone.FMSynth().connect(pingPong);
//         }else if(document.getElementById('none')) {
//             synth = new Tone.Synth().toMaster()
//         }
// })

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
    synth.triggerAttack(selectedTone)
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

let createSetting = document.createElement('button')
createSetting.id = "new-setting"
createSetting.textContent = "Name New Setting"
body.insertAdjacentElement('beforeend', createSetting)
let createSettingButton = document.getElementById("new-setting")
createSettingButton.addEventListener("click", function(e){
    e.preventDefault()
    createSetting.style.visibility= 'hidden'
    let userForm = document.createElement('form')
    let form = document.getElementById('input')
    userForm.innerHTML = `
    <input type='text' name="user-form" id="input" placeholder="Enter Name">
    <button type="submit" value="Submit">Submit</button>
    `
    body.insertAdjacentElement('beforeend', userForm)
})


document.addEventListener('submit', function(event){
    event.preventDefault()
    let form = document.getElementById('input')
    createSetting.style.visibility= "visible"
    body.childNodes[8].remove()
    let user = 1
    let name = form.value
    let attack = synth.envelope.attack
    let decay = synth.envelope.decay
    let sustain = synth.envelope.sustain
    let release = synth.envelope.release
    let _attackCurve = synth.envelope._attackCurve
    let _releaseCurve = synth.envelope._releaseCurve

    let newSetting = {user, name, attack, decay, sustain, release, _attackCurve, _releaseCurve}
    fetch('http://localhost:3000/settings/', {
      method: "POST",
      headers: {
        "content-type": "application/json",
        "accept": "application/json"
      },
      body: JSON.stringify(newSetting)
    })
    .then((response) => {
        return response.json()
    })
    .then(response => {
        // console.log(response)
    }) 
  })

    const settingSelector= document.createElement('select')
    body.insertAdjacentElement('beforeend', settingSelector)
    function getSettings() { 
    fetch('http://localhost:3000/settings/')
    .then((response) => {
        return response.json()
    })
    .then((settings) => {
            settings.forEach(setting => {
                const choice = document.createElement('option')
                choice.textContent= setting.name
                choice.value = `${setting.attack} ${setting.decay} ${setting.sustain} ${setting.release} ${setting._attackCurve} ${setting._releaseCurve}`
                choice.id = setting.id
                settingSelector.append(choice)
                //console.dir(choice.id)
        })
    })
}
getSettings()

settingSelector.addEventListener("change",function(e){
    let array = e.target.value
    let newValue = array.split(` `)
    synth.envelope.attack = parseFloat(newValue[0])
    synth.envelope.decay = parseFloat(newValue[1])
    synth.envelope.sustain = parseFloat(newValue[2])
    synth.envelope.release = parseFloat(newValue[3])
    synth.envelope._attackCurve = newValue[4]
    synth.envelope._releaseCurve = newValue[5]
})