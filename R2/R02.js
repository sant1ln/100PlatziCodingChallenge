/* ¿Recuerdas tus clases de Geometría?
Es momento de poner ese conocimiento a la práctica. El área de un triángulo 
se describe de la siguiente manera: A = (b * h) / 2 .
El reto del día de hoy es escribir un programa que tome la base y 
la altura como parámetros y calcule el área del triángulo.
Bonus: El programa debe determinar si el triángulo es isósceles, 
equilátero o escaleno. */

const base = parseInt(prompt("Ingrese la base del triangulo"));
const height = parseInt(prompt("Ingrese la altura del triangulo")); 

let defaultTipeOfTriangle = 'Escaleno'

if(height >= base){
    defaultTipeOfTriangle = 'Isósceles'
}else if(base === height){
    defaultTipeOfTriangle = 'Equilatero'
}
let area = (base*height)/2;
console.log(`El area del triangulo ${defaultTipeOfTriangle} es: ${area}`)