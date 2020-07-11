'use strict'
const removeMyVowels = (text) =>{
    let vowles = /[aeiouáéíóúAEIOU]/g;
    console.log(text.replace(vowles,''))
}

let text = `En un lugar de la Mancha, de cuyo nombre no quiero acordarme, no ha mucho tiempo que vivía un hidalgo de los de lanza en astillero, adarga antigua, rocín flaco y galgo corredor.`

removeMyVowels(text)






