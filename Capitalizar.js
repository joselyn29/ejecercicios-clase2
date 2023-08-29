function capitalizarPalabra(frase){
    let palabras = frase.split('')
    for (let i=0; i<palabras.length; i++){
        palabras[i] =  palabras[i]+palabras.charAt(0).toUpperCase()
    }
}