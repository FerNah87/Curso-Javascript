//llamamos los campos input
const nombre=document.querySelector('#nombre')
const apellido=document.querySelector('#apellido')
const email=document.querySelector('#email')
const contrasena=document.querySelector('#password')
const formulario=document.querySelector('#formulario')

//Expresiones Regulares REGEX = serie de normas para validar campos de texto
const emailRegex=/^[a-zA-Z0-9\._-]+@[a-zA-Z0-9-]{2,}[.][a-zA-Z]{2,4}$/
const apellidoRegex=/^[a-zA-Z]{3,16}$/
const passwordRegex=/^[a-z0-9_-]{6,18}$/
const nombreRegex=/^[a-zA-Z]{3,16}$/

//array de validacion
const arrayValidation=[]
const BD=[]

//funcion para validar el campo de texto
//esta funcion es llamada por addEventListener
//.trim de que no mande informacion vacia
//valida con la expresion REGES (test)
  const valorNombre=(nombreValue)=>{
    if(nombreValue.trim()){
      if(nombreRegex.test(nombreValue)){
           arrayValidation.push('nombre')
           BD.push(nombreValue)
      }
    }
  }
   
  const valorApellido=(apellidoValue)=>{
    if(apellidoValue.trim()){
      if(apellidoRegex.test(apellidoValue)){
           arrayValidation.push('apellido')
           BD.push(apellidoValue)
      }
    }
  }

  const valorEmail=(emailValue)=>{
    if(emailValue.trim()){
      if(emailRegex.test(emailValue)){
           arrayValidation.push('email')
           BD.push(emailValue)
      }
    }
  }
  
  const valorPassword=(passwordValue)=>{
    if(passwordValue.trim()){
      if(passwordRegex.test(passwordValue)){
           arrayValidation.push('password')
           BD.push(passwordValue)
      }
    }                          
  }

  //Cuando el formulario sea enviado (submit)
  //e.prevent para que cuando se haga click se envie el evento cuando queremos (efecto burbuja)
  //
  formulario.addEventListener('submit',(e)=>{
     e.preventDefault()
      if(arrayValidation.length==4){
        //base de datos guarda el 2 parametro (email) y la info
          localStorage.setItem(`${BD[2]}`,JSON.stringify(BD))
          window.location.reload()
          alert('Datos guardados correctamente')
      }
  })

//Recoge el evento cuando tenga un cambio
//si el elemento coincide change matches con nombre ingresa el valor nombre
document.addEventListener('change',(e)=>{
    e.target.matches('#nombre') ? valorNombre(e.target.value) : null
    e.target.matches('#apellido') ? valorApellido(e.target.value) : null
    e.target.matches('#email') ? valorEmail(e.target.value) : null
    e.target.matches('#password') ? valorPassword(e.target.value) : null
    
})