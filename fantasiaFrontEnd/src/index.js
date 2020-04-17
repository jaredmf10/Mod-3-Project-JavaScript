// all the vars

const magicWindow = document.getElementById("magicWindow")

const magicWindowMenu =document.createElement('div')

magicWindowMenu.style.display="flex"
magicWindowMenu.style.flexFlow="row wrap"
magicWindowMenu.style.justifyContent="center"

body.appendChild(magicWindowMenu)



//var selectedSound = the id of the display note to get color 
var synth = new Tone.Synth().toMaster();
var growingInterval;
var mouseX;
var mouseY;
var selectedNote;
var noteDisplay=false
var noteColor="red"


var intervalArray=[]
var disco = false
//magic window ideas change the color of the background breifly tothe color of the ball that hits 
//play the noise of the ball that hits 

console.log(synth.envelope)
//clears all the balls on screen 
function clearMagicBalls(){
    const ballKiller = document.createElement('button')
    ballKiller.id ="ballKiller"
    
    ballKiller.textContent="Remove Disco Balls"
    ballKiller.onclick=function(){
        MagicBall.all =[]

     while (magicWindow.lastElementChild) {
            magicWindow.removeChild(magicWindow.lastElementChild);
        }
     intervalArray.forEach(interval => clearInterval(interval) )
    }
    magicWindowMenu.appendChild(ballKiller)

}
function discoButton(){
    const discoButton = document.createElement('button')
    discoButton.id="discoButton"
    discoButton.innerText="LETS DISCO"
    discoButton.onclick=function(){
        if(disco ===false){
            discoButton.innerText="LAME"
            disco = true

            noteDivs[0].id="discoC"
            noteDivs[1].id="discoD"
            noteDivs[2].id="discoE"
            noteDivs[3].id="discoF"
            noteDivs[4].id="discoG"
            noteDivs[5].id="discoA"
            noteDivs[6].id="discoB"
            



        }else{
            noteDivs[0].id="C"
            noteDivs[1].id="D"
            noteDivs[2].id="E"
            noteDivs[3].id="F"
            noteDivs[4].id="G"
            noteDivs[5].id="A"
            noteDivs[6].id="B"
            
            body.style.background="white"
            discoButton.style.color="rgb(255, 101, 119)"
            discoButton.innerText="LETS DISCO"
            disco = false

        }
    }
    magicWindowMenu.appendChild(discoButton)
}

//creates the ball, creates the tone ,grows the ball
magicWindow.addEventListener("mousedown", function(e){
    synth.triggerAttack(selectedNote)
    let magicBall = new MagicBall(e)
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


function pianoButton(){
   const pianoButton= document.createElement('button')
   pianoButton.id = "pianoButton"
   pianoButton.innerText="Synth"
   body.appendChild(pianoButton)
}











//menu logic
discoButton() 
synthMenu()
clearMagicBalls()
pianoButton()
// slider()