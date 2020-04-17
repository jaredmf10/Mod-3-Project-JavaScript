

function synthMenu(){
//    console.log(synth.envelope.attack)
  const synthMenuDiv=document.createElement('div')
  synthMenuDiv.style.width="20%"
  synthMenuDiv.style.padding="10px"
  const envelopeButton=document.createElement('button')
  envelopeButton.id = "envelopeButton"
  
  synthMenuDiv.appendChild(envelopeButton)
  magicWindowMenu.appendChild(synthMenuDiv)
  
  
  const envelopeShowcard = document.createElement('div')

  synthMenuDiv.appendChild(envelopeShowcard)
  
  envelopeButton.innerText="envelope"

  envelopeButton.onclick =function(){
      ///display all the sliders for envelope
      if(!envelopeShowcard.lastElementChild){
      
      
      const aSlider= attackSlider("0.00","2.00",synth.envelope.attack)
      const dSlider= decaySlider("0.00","2.00",synth.envelope.decay)
      const sSlider = sustainSlider("0.00","1.00",synth.envelope.sustain)
      const rSlider = releaseSlider("0.00","4.00",synth.envelope.release)
      const aSelect = attackCurveSelectorMenu()
      const rSelect = releaseCurveSelectorMenu()
      const dSelect = decayCurveSelectorMenu()

       //append user settings 
      userSaveSettingsMenu= userSaveSettings()

      //append saved settings

      userSavedSettings= userSavedSettings()
    
      

      envelopeShowcard.append(aSlider,aSelect,dSlider,dSelect,sSlider,rSlider,rSelect,userSaveSettingsMenu,userSavedSettings)

      

      }else{
        while (envelopeShowcard.lastElementChild) {
            envelopeShowcard.removeChild(envelopeShowcard.lastElementChild);
        }
      }
  }

  

}



function attackSlider(min,max,value){
    
    // console.log(value)
    const sliderDiv =  document.createElement('div')
    const slider = document.createElement('input')
    const sliderValue = document.createElement('span')
    const titleShow = document.createElement('h3')
    
    titleShow.innerText= "Attack"


    sliderDiv.appendChild(titleShow)
   
    sliderDiv.appendChild(sliderValue)
    sliderDiv.appendChild(slider)
  


    slider.type="range"
    slider.step="0.01"
    slider.min =min
    slider.max= max
    slider.value= value.toString()
    slider.className="envelope"
  
    slider.style.slidecontainer = "100%"
    
    sliderValue.innerText = slider.value
  
    slider.oninput = function(){
        sliderValue.innerText = slider.value
        synth.envelope.attack= parseFloat(slider.value)
       
        
    }

    return sliderDiv
     
  
  }

  function decaySlider(min,max,value){
    // console.log(value)
    const sliderDiv =  document.createElement('div')
    const slider = document.createElement('input')
    const sliderValue = document.createElement('span')
    const titleShow = document.createElement('h3')
    
    titleShow.innerText= "Decay"


    sliderDiv.appendChild(titleShow)
   
    sliderDiv.appendChild(sliderValue)
    sliderDiv.appendChild(slider)
  


    slider.type="range"
    slider.step="0.01"
    slider.min =min
    slider.max= max
    slider.value= value.toString()
    slider.className="envelope"
  
    slider.style.slidecontainer = "100%"
    
    sliderValue.innerText = slider.value
  
    slider.oninput = function(){
        sliderValue.innerText = slider.value
        synth.envelope.decay= parseFloat(slider.value)
        console.log(synth.envelope.decay)
        
    }

    return sliderDiv
     
  }
  
  function sustainSlider(min,max,value){
    
    // console.log(value)
    const sliderDiv =  document.createElement('div')
    const slider = document.createElement('input')
    const sliderValue = document.createElement('span')
    const titleShow = document.createElement('h3')
    
    titleShow.innerText= "Sustain"


    sliderDiv.appendChild(titleShow)
   
    sliderDiv.appendChild(sliderValue)
    sliderDiv.appendChild(slider)
  


    slider.type="range"
    slider.step="0.01"
    slider.min =min
    slider.max= max
    slider.value= value.toString()
    slider.className="envelope"
  
    slider.style.slidecontainer = "100%"
    
    sliderValue.innerText = slider.value
  
    slider.oninput = function(){
        sliderValue.innerText = slider.value
        synth.envelope.sustain= parseFloat(slider.value)
        console.log(synth.envelope.attack)
        
    }

    return sliderDiv
     
  
  }
  function releaseSlider(min,max,value){
    
    // console.log(value)
    const sliderDiv =  document.createElement('div')
    const slider = document.createElement('input')
    const sliderValue = document.createElement('span')
    const titleShow = document.createElement('h3')
    
    titleShow.innerText= "Release"


    sliderDiv.appendChild(titleShow)
   
    sliderDiv.appendChild(sliderValue)
    sliderDiv.appendChild(slider)

   
  


    slider.type="range"
    slider.step="0.01"
    slider.min =min
    slider.max= max
    slider.value= value.toString()
    slider.className="envelope"
  
    slider.style.slidecontainer = "100%"
    
    sliderValue.innerText = slider.value
  
    slider.oninput = function(){
        sliderValue.innerText = slider.value
        synth.envelope.release= parseFloat(slider.value)
        
        
    }

    return sliderDiv
     
  
  }

  function attackCurveSelectorMenu(){
    const attackSelector= document.createElement('select')
    
    const exponential =document.createElement('option')
    exponential.textContent="exponential"
    exponential.value="exponential"

    const linear =document.createElement('option')
    linear.value="linear"
    linear.textContent="linear"

    const bounce =document.createElement('option')
    bounce.value="bounce"
    bounce.textContent="bounce"

    const ripple =document.createElement('option')
    ripple.value="ripple"
    ripple.textContent="ripple"

    const step =document.createElement('option')
    step.value="step"
    step.textContent="step"

    const cosine =document.createElement('option')
    cosine.value="cosine"
    cosine.textContent="cosine"
   
    const sine =document.createElement('option')
    sine.value="sine"
    sine.textContent="sine"
     
    attackSelector.append(exponential,linear,bounce,ripple,step,cosine,sine)

    attackSelector.addEventListener("change",function(e){
        console.log(e.target.value)
        //  synth.envelope.attackcurve=e.target.value
         console.log(synth.envelope.attackCurve)
         synth.envelope.attackCurve=e.target.value 
         console.log(synth.envelope.attackCurve)
    })

    return attackSelector

  }
  
  
  function decayCurveSelectorMenu(){
    const decaySelector= document.createElement('select')
    
    const exponential =document.createElement('option')
    exponential.textContent="exponential"
    exponential.value="exponential"

    const linear =document.createElement('option')
    linear.value="linear"
    linear.textContent="linear"

     
    decaySelector.append(exponential,linear)

    decaySelector.addEventListener("change",function(e){
         synth.envelope._decayCurve= e.target.value
    })
    return decaySelector

  }


  function releaseCurveSelectorMenu(){
    const releaseSelector= document.createElement('select')
    
    const exponential =document.createElement('option')
    exponential.textContent="exponential"
    exponential.value="exponential"

    const linear =document.createElement('option')
    linear.value="linear"
    linear.textContent="linear"

    const bounce =document.createElement('option')
    bounce.value="bounce"
    bounce.textContent="bounce"

    const ripple =document.createElement('option')
    ripple.value="ripple"
    ripple.textContent="ripple"

    const step =document.createElement('option')
    step.value="step"
    step.textContent="step"

    const cosine =document.createElement('option')
    cosine.value="cosine"
    cosine.textContent="cosine"
   
    const sine =document.createElement('option')
    sine.value="sine"
    sine.textContent="sine"
     
    releaseSelector.append(exponential,linear,bounce,ripple,step,cosine,sine)

    releaseSelector.addEventListener("change",function(e){
         synth.envelope._releaseCurve = e.target.value
    })

    return releaseSelector

  }

//jared's stuff 
  function userSaveSettings(){
  const userSettingsMenu =document.createElement('div')
   userSettingsMenu.id="userSettingsMenu"
    //save settings button 
 const createSetting = document.createElement('button')

 userSettingsMenu.appendChild(createSetting)

createSetting.id = "new-setting"
createSetting.textContent = "Name New Setting"

createSetting.addEventListener("click", function(e){
    e.preventDefault()
    createSetting.style.visibility= 'hidden'
    const userForm = document.createElement('form')
    const form = document.getElementById('input')
    userForm.innerHTML = `
    <input type='text' name="user-form" id="Input" placeholder="Enter Name">
    <button type="submit" value="Submit">Submit</button>
    `
    body.insertAdjacentElement('beforeend', userForm)
})
document.addEventListener('submit', function(event){
    event.preventDefault()
    const form = document.getElementById('input')
    createSetting.style.visibility= "visible"
    //remove the form 
    // body.childNodes[8].remove()
    const user = 1
    const name = form.value
    const attack = synth.envelope.attack
    const decay = synth.envelope.decay
    const sustain = synth.envelope.sustain
    const release = synth.envelope.release
    const _attackCurve = synth.envelope._attackCurve
    const _releaseCurve = synth.envelope._releaseCurve
    const newSetting = {user, name, attack, decay, sustain, release, _attackCurve, _releaseCurve}
    userForm.innerHTML=""
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
        getSettings()
    }) 
  })
  return userSettingsMenu
 }


 //saved settings 
 function userSavedSettings(){
 const settingSelector= document.createElement('select')
 
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
             settingSelector.append(choice)
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

return settingSelector
 }