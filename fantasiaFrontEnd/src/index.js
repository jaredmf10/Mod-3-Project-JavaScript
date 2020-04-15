// all the vars

const magicWindow = document.getElementById("magicWindow")
var synth = new Tone.Synth().toMaster();

var growingInterval;
var mouseX;
var mouseY;
var selectedNote;
var intervalArray=[]
//magic window ideas change the color of the background breifly tothe color of the ball that hits 
//play the noise of the ball that hits 

console.log(synth.envelope)
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








// function slider(){
//   const sliderDiv =  document.createElement('div')
//   const slider = document.createElement('input')
//   const sliderValue = document.createElement('span')
  
//   sliderDiv.appendChild(sliderValue)
//   sliderDiv.appendChild(slider)

//   slider.type="range"
//   slider.min ="1"
//   slider.max= "100"
//   slider.value="1"
//   slider.className="slider"

//   slider.style.slidecontainer = "100%"
  
//   sliderValue.innerText = slider.value

//   slider.oninput = function(){
//       sliderValue.innerText = slider.value
//   }
   
//   body.appendChild(sliderDiv)

// }






//menu logic 
synthMenu()
clearMagicBalls()
// slider()