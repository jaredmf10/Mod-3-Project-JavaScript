const body = document.getElementById('body')
const soundBoard = document.createElement('div')
soundBoard.textContent = "Sounds Menu - Press a Sound Key to begin"
const notes = ["A", "B", "C", "D", "E", "F", "G"]
notes.forEach(note => {
    const newLi = document.createElement("li")
    newLi.textContent = `${note}:  Play middle '${note}'`
    soundBoard.appendChild(newLi)
});
var currentSound = document.createElement('h3')
body.appendChild(soundBoard)

document.addEventListener("keydown", function(event){
    event.preventDefault()
    if (event.which === 65){
      const selectedSound = "A"
      currentSound.textContent = `Current Sound is ${selectedSound}`
      soundBoard.appendChild(currentSound)
      selectedNote = 'A5'
    }
    else if (event.which === 66){
        const selectedSound = "B"
        currentSound.textContent = `Current Sound is ${selectedSound}`
        soundBoard.appendChild(currentSound)
        selectedNote = 'B5'
    }
    else if (event.which === 67){
        const selectedSound = "C"
        currentSound.textContent = `Current Sound is ${selectedSound}`
        soundBoard.appendChild(currentSound)
        selectedNote = 'C5'
    }
    else if (event.which === 68){
        const selectedSound = "D"
        currentSound.textContent = `Current Sound is ${selectedSound}`
        soundBoard.appendChild(currentSound)
        selectedNote = 'D5'
    }
    else if (event.which === 69){
        const selectedSound = "E"
        currentSound.textContent = `Current Sound is ${selectedSound}`
        soundBoard.appendChild(currentSound)
        selectedNote = 'E5'
    }
    else if (event.which ===70){
        const selectedSound = "F"
        currentSound.textContent = `Current Sound is ${selectedSound}`
        soundBoard.appendChild(currentSound)
        selectedNote = 'F5'
    }
    else if (event.which === 71){
        const selectedSound = "G"
        currentSound.textContent = `Current Sound is ${selectedSound}`
        soundBoard.appendChild(currentSound)
        selectedNote = 'G5'
    }
  })