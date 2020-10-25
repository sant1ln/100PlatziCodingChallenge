//Formula: volumen = pi x r**2 x h
const radium = prompt("Ingrese el radio del clindro"); 
const height = prompt("Ingrese la altura del cilindro")

(function(radium,hei){
    volume = Math.PI *(radium**2)*hei
    return volume
})();

console.log(`Volumen: ${v.toFixed(1)} Cms³`)