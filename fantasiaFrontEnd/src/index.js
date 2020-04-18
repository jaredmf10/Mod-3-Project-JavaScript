// all the vars

// const magicWindow = document.getElementById("magicWindow")
var magicWindow = document.getElementById("magicWindow")
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
var pianoDown = false
var pianoUp = false


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
            discoButton.style.color="rgb(255, 74, 2)"
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
   pianoButton.onclick=(function(){
       console.log("test")
       if(pianoDown===false){
           pianoDown = document.addEventListener("keydown",function(e){
            if(e.which===32){
            synth.triggerAttack(selectedNote)
            }
           })
           pianoUp =document.addEventListener("keyup",function(e){
               console.log("key up")
            if(e.which===32){
            synth.triggerRelease()
            }
           })
       }else{
           pianoDown=false
           pianoUp=false
       }
   })

}




async function loadingIntro(){
//so look up time out 
 //recursively  
//    HIRE 
//    ME 
//    BOB 
//    IGER 
 const introText = document.getElementById("introText")
 const introTextFlash = document.getElementById("introTextFlash")
 const introScreen=document.getElementById("introScreen")

 const words = [{text:"MATTHEW PEAK"},{text:"PRESENTS TO YOU:"},{text:"HIRE",color:"blue",},{text:"ME",color:"red"},{text:"BOB",color:"blue"},{text:"IGER",color:"blue"}]
 const outroWords = [{text:"HIRE",id:"neonOrange",},{text:"ME",id:"neonOrange"},{text:"BOB",id:"neonOrange"},{text:"IGER",id:"neonOrange"},{text:"HIRE",id:"neonPurple",},{text:"ME",id:"neonPurple"},{text:"BOB",id:"neonPurple"},{text:"IGER",id:"neonPurple"},{text:"HIRE",id:"neonViolet",},{text:"ME",id:"neonViolet"},{text:"BOB",id:"neonViolet"},{text:"IGER",id:"neonViolet"},{text:"HIRE",id:"neonPink",},{text:"ME",id:"neonPink"},{text:"BOB",id:"neonPink"},{text:"IGER",id:"neonPink"},{text:"HIRE",id:"neonYellow",},{text:"ME",id:"neonYellow"},{text:"BOB",id:"neonYellow"},{text:"IGER",id:"neonYellow"},{text:"HIRE",id:"neonT",},{text:"ME",id:"neonT"},{text:"BOB",id:"neonT"},{text:"IGER",id:"neonT"}]
 
 //  {text:"THE CREATOR OF CORN TRADER PRO"},{ text:"AND JARED 'SWEET FINESSE' FLEMING"}
 //{text:"HIRE ME BOB IGER"}


 const waitFor = (ms) => new Promise(r => setTimeout(r, ms));
 
 async function asyncForEach(array, callback) {
    for (let index = 0; index < array.length; index++) {
      await callback(array[index], index, array);
    }
  }

       
       introScreen.addEventListener("click", async function(){ 
        await asyncForEach(words,async(word)=>{ 
         introText.style.textShadow="none"
         introText.style.color="rgb(255, 74, 2)"
         introText.innerText = word.text;
         introTextFlash.innerText = word.text;
          await waitFor(1000);
         } )
         await asyncForEach(outroWords,async(word)=>{ 

            introTextFlash.style="" 
            introTextFlash.innerText =""
            introTextFlash.innerHTML=""
            introText.style=""
            introText.id=word.id
            introText.innerText = word.text;
           
            
         await waitFor(275);
            } ),introScreen.style.display="none"})
       
       
       
       
      
      
    


}






//menu logic
loadingIntro()
discoButton() 
synthMenu()
clearMagicBalls()
pianoButton()
// slider()