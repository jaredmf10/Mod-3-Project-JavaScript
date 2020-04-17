const body = document.getElementById('body')
const soundBoard = document.createElement('div')
soundBoard.style.display="flex"
soundBoard.style.flexFlow="row wrap"
soundBoard.style.justifyContent="center"
var noteDivs=[]
const notes = ["C", "D", "E", "F", "G", "A", "B"]

notes.forEach(note => {
    const noteDiv= document.createElement("div")
    noteDiv.className ="noteDisplays"
    noteDiv.id=note
    noteDiv.textContent = note
    noteDiv.style.padding="10 px"
    noteDiv.style.width="25%"
    noteDiv.style.fontWeight="bold"
    soundBoard.appendChild(noteDiv)
    noteDivs.push(noteDiv)
});
body.appendChild(soundBoard)

document.addEventListener("keydown", function(event){
    event.preventDefault()
  if(disco===false){
    if (event.which === 65){
      if(!noteDisplay===false){
    
      noteDisplay.style.opacity=".5"
      noteDisplay.style.fontSize= "large"
      
      noteDisplay = document.getElementById("A")
     
      noteDisplay.style.opacity="1"
      noteDisplay.style.fontSize= "50px"
      noteColor = "#09FBD3"
      selectedNote = 'A5'
      }else{
        console.log("no note")
        noteDisplay = document.getElementById("A")
        
        noteDisplay.style.opacity="1"
        noteDisplay.style.fontSize= "50px"
        noteColor = "#09FBD3"
        selectedNote = 'A5'
        console.log(noteDisplay.style.fontSize)
      }
    }
    else if (event.which === 66){
        if(!noteDisplay===false){
        console.log("yes note")
        console.log(noteDisplay.style.fontSize)
        noteDisplay.style.opacity=".5"
        noteDisplay.style.fontSize= "large"

        noteDisplay = document.getElementById("B")
        
        noteDisplay.style.opacity="1"
        console.log(noteDisplay)
        noteDisplay.style.fontSize= "50px"
        noteColor = "#08F7fe"
        selectedNote = 'B5'
        }else{
       
        noteDisplay = document.getElementById("B")
        
        noteDisplay.style.opacity="1"
        noteDisplay.style.fontSize= "50px"
        noteColor = "#08F7fe"
        selectedNote = 'B5'
        console.log(noteDisplay.style.fontSize)
        }
    }
    else if (event.which === 67){
        if(!noteDisplay===false){
        
        noteDisplay.style.fontSize= "large"
        noteDisplay.style.opacity=".5"
        
        noteDisplay = document.getElementById("C")
        
        noteDisplay.style.opacity="1"
        noteDisplay.style.fontSize= "50px"
        noteColor="#7122fa"
        selectedNote = 'C5'
        }else{
        
        noteDisplay = document.getElementById("C")
        noteDisplay.style.opacity="1"
        noteDisplay.style.fontSize= "50px"
        noteColor="#7122fa"
        selectedNote = 'C5'
        }
    }
    else if (event.which === 68){
        if(!noteDisplay===false){
        noteDisplay.style.fontSize= "large"
        noteDisplay.style.opacity=".5"

        noteDisplay = document.getElementById("D")
        
        noteDisplay.style.opacity="1"
        noteDisplay.style.fontSize= "50px"
        
        noteColor ="#E92efb"
        selectedNote = 'D5'
        }else{
            noteDisplay = document.getElementById("D")
            noteDisplay.style.opacity="1"
            noteDisplay.style.fontSize= "50px"
            
            noteColor ="#E92efb"
            selectedNote = 'D5'
        }
    }
    else if (event.which === 69){
        if(!noteDisplay===false){

        noteDisplay.style.fontSize= "large"
        noteDisplay.style.opacity=".5"

        noteDisplay = document.getElementById("E")

        noteDisplay.style.opacity="1"
        noteDisplay.style.fontSize= "50px"
        const selectedSound = "E"
        noteColor="#ff2079"
        selectedNote = 'E5'
        }else{
            noteDisplay = document.getElementById("E")
            noteDisplay.style.opacity="1"
            noteDisplay.style.fontSize= "50px"
            const selectedSound = "E"
            noteColor="#ff2079"
            selectedNote = 'E5'
        }
    }
    else if (event.which ===70){
        if(!noteDisplay===false){
        noteDisplay.style.fontSize= "large"
        noteDisplay.style.opacity=".5"
        
        noteDisplay = document.getElementById("F")

        noteDisplay.style.opacity="1"
        noteDisplay.style.fontSize= "50px"
        const selectedSound = "F"
        noteColor="#ff6ec7"
        selectedNote = 'F5'
        }else{
        noteDisplay = document.getElementById("F")
        noteDisplay.style.opacity="1"
        noteDisplay.style.fontSize= "50px"
        const selectedSound = "F"
        noteColor="#ff6ec7"
        selectedNote = 'F5'
        }
    }
    else if (event.which === 71){
        if(!noteDisplay===false){  
        noteDisplay.style.fontSize= "large"
        noteDisplay.style.opacity=".5"

        noteDisplay = document.getElementById("G")

        noteDisplay.style.opacity="1"
        noteDisplay.style.fontSize= "50px"
        const selectedSound = "G"
        noteColor="#F5D300"
        selectedNote = 'G5'
        }else{
            noteDisplay = document.getElementById("F")
            noteDisplay.style.opacity="1"
            noteDisplay.style.fontSize= "50px"
            const selectedSound = "F"
            noteColor="#ff6ec7"
            selectedNote = 'F5'
        }
    }
  }else{
    if (event.which === 65){
        if(!noteDisplay===false){
      
        noteDisplay.style.opacity=".5"
        noteDisplay.style.fontSize= "50px"
        
        noteDisplay = document.getElementById("discoA")
       
        noteDisplay.style.opacity="1"
        noteDisplay.style.fontSize= "75px"
        noteColor = "#09FBD3"
        selectedNote = 'A5'
        }else{
          console.log("no note")
          noteDisplay = document.getElementById("discoA")
          
          noteDisplay.style.opacity="1"
          noteDisplay.style.fontSize= "75px"
          noteColor = "#09FBD3"
          selectedNote = 'A5'
          console.log(noteDisplay.style.fontSize)
        }
      }
      else if (event.which === 66){
          if(!noteDisplay===false){
          console.log("yes note")
          console.log(noteDisplay.style.fontSize)
          noteDisplay.style.opacity=".5"
          noteDisplay.style.fontSize= "50px"
  
          noteDisplay = document.getElementById("discoB")
          
          noteDisplay.style.opacity="1"
          console.log(noteDisplay)
          noteDisplay.style.fontSize= "75px"
          noteColor = "#08F7fe"
          selectedNote = 'B5'
          }else{
         
          noteDisplay = document.getElementById("discoB")
          
          noteDisplay.style.opacity="1"
          noteDisplay.style.fontSize= "75px"
          noteColor = "#08F7fe"
          selectedNote = 'B5'
          console.log(noteDisplay.style.fontSize)
          }
      }
      else if (event.which === 67){
          if(!noteDisplay===false){
          
          noteDisplay.style.fontSize= "50px"
          noteDisplay.style.opacity=".5"
          
          noteDisplay = document.getElementById("discoC")
          
          noteDisplay.style.opacity="1"
          noteDisplay.style.fontSize= "75px"
          noteColor="#7122fa"
          selectedNote = 'C5'
          }else{
          
          noteDisplay = document.getElementById("discoC")
          noteDisplay.style.opacity="1"
          noteDisplay.style.fontSize= "75px"
          noteColor="#7122fa"
          selectedNote = 'C5'
          }
      }
      else if (event.which === 68){
          if(!noteDisplay===false){
          noteDisplay.style.fontSize= "50px"
          noteDisplay.style.opacity=".5"
  
          noteDisplay = document.getElementById("discoD")
          
          noteDisplay.style.opacity="1"
          noteDisplay.style.fontSize= "75px"
          
          noteColor ="#E92efb"
          selectedNote = 'D5'
          }else{
              noteDisplay = document.getElementById("discoD")
              noteDisplay.style.opacity="1"
              noteDisplay.style.fontSize= "75px"
              
              noteColor ="#E92efb"
              selectedNote = 'D5'
          }
      }
      else if (event.which === 69){
          if(!noteDisplay===false){
  
          noteDisplay.style.fontSize= "50px"
          noteDisplay.style.opacity=".5"
  
          noteDisplay = document.getElementById("discoE")
  
          noteDisplay.style.opacity="1"
          noteDisplay.style.fontSize= "75px"
          const selectedSound = "E"
          noteColor="#ff2079"
          selectedNote = 'E5'
          }else{
              noteDisplay = document.getElementById("dicsoE")
              noteDisplay.style.opacity="1"
              noteDisplay.style.fontSize= "75px"
              const selectedSound = "E"
              noteColor="#ff2079"
              selectedNote = 'E5'
          }
      }
      else if (event.which ===70){
          if(!noteDisplay===false){
          noteDisplay.style.fontSize= "50px"
          noteDisplay.style.opacity=".5"
          
          noteDisplay = document.getElementById("discoF")
  
          noteDisplay.style.opacity="1"
          noteDisplay.style.fontSize= "75px"
          const selectedSound = "F"
          noteColor="#ff6ec7"
          selectedNote = 'F5'
          }else{
          noteDisplay = document.getElementById("discoF")
          noteDisplay.style.opacity="1"
          noteDisplay.style.fontSize= "75px"
          const selectedSound = "F"
          noteColor="#ff6ec7"
          selectedNote = 'F5'
          }
      }
      else if (event.which === 71){
          if(!noteDisplay===false){  
          noteDisplay.style.fontSize= "50px"
          noteDisplay.style.opacity=".5"
  
          noteDisplay = document.getElementById("discoG")
  
          noteDisplay.style.opacity="1"
          noteDisplay.style.fontSize= "75px"
          const selectedSound = "G"
          noteColor="#F5D300"
          selectedNote = 'G5'
          }else{
              noteDisplay = document.getElementById("discoG")
              noteDisplay.style.opacity="1"
              noteDisplay.style.fontSize= "75px"
              const selectedSound = "G"
              noteColor="#ff6ec7"
              selectedNote = 'G5'
          }
      }

  }
  })