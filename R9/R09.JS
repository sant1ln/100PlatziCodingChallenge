(function(){
    maxNumber = parseInt(prompt("Ingrese un número maximo para jugar"))
    const magicNumber = parseInt(Math.random()*maxNumber)+1;
    let numberSelect = 0;
    let counter = 0;
    while(numberSelect != magicNumber){
        numberSelect = parseInt(prompt(`Intentos: ${counter}
        ¿Cual es el número mágico?`));
        counter++;
    }
    console.log(`Correcto!, lo lograste despues de ${counter} intentos `)


})();