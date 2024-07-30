let numAleatorio
comenzarJuego = () =>{
    numAleatorio = Math.floor(Math.random() * 10)

    return numAleatorio
    
    
}


enviarRespuesta = (e) =>{
    e.preventDefault()
    const obtenerInput = document.querySelector('#ingresarTexto')
    
    
    if(numAleatorio === parseInt(obtenerInput.value)){
        alert('ADIVINASTE EL NUMERO MAGICO')
    }
    else if(parseInt(obtenerInput.value)>numAleatorio){
        alert('NO ADIVINASTE, EL NUMERO QUE INGRESASTE ES MAYOR QUE EL NUMERO MAGICO')
    }
    else if(parseInt(obtenerInput.value)<numAleatorio){
        alert('NO ADIVINASTE, EL NUMERO QUE INGRESASTE ES MENOR QUE EL NUMERO MAGICO ')
    }
    obtenerInput.value = ""
    obtenerInput.focus()
}
const btnComenzar = document.querySelector('#btnComenzar')
btnComenzar.addEventListener('click', comenzarJuego)
const btnEnviar = document.querySelector('#btnEnviar')
btnEnviar.addEventListener('click',enviarRespuesta)
