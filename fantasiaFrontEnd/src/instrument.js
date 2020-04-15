

function synthMenu(){
//    console.log(synth.envelope.attack)
   const synthMenuDiv=document.createElement('div')

  const envelopeButton=document.createElement('button')
  
  synthMenuDiv.appendChild(envelopeButton)
  body.appendChild(synthMenuDiv)
  
  
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
      envelopeShowcard.append(aSlider,aSelect,dSlider,dSelect,sSlider,rSlider,rSelect)

      

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
         
         synth.envelope.attackCurve.setValueAtTime(e.target.value, "1") 
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

    decaySelector.onselect=function(){
         synth.envelope._decayCurve= decaySelector.selectedIndex.value
    }
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

    releaseSelector.onselect=function(){
         synth.envelope._releaseCurve = releaseSelector.selectedIndex.value
    }

    return releaseSelector

  }