const LNG = 8; //longitud deseada de la clave
const MIN = true; // incluye minusculas - ASCII 97 - 122
const MAY = true; // incluye mayusculas - ASCII 65 - 90
const NUM = true; // incluye numeros - ASCII 48 - 57
const ESP = true; //incluye caracteres especiales - ASCII  32 - 47 incluye espacio
const DIST = LNG/(MIN + MAY + NUM + ESP) // asignamos un % participación para cada variable para obligar a mostrar caracteres según constantes activas. 
var c = "";
var clave = "";

//Generamos caracteres aleatorios segun constantes activas
if(MIN){
    clave += caracteres(122,97)
}
if(MAY){
    clave += caracteres(90,65)
}
if(NUM){
    clave += caracteres(57,48)
}
if(ESP){
    clave += caracteres(47,32)
}

//imprimimos en consola la clave final mezclada
console.log(mixpass(clave));

//funcion para generar los carcteres aleatorios
function caracteres(max, min){
    let c = "";
    for( let i = 0; i < Math.ceil(DIST); i++){
        let rdm = Math.round(Math.random() * (max - min)) + min
        c += String.fromCharCode(rdm)
    }
    return c;
}

//funcion para mezclar la caracteres finales y ajustar cantidad de caracteres por redondeo.
function mixpass(txt){
    let t = [];
    let t2 = [];
    if(txt.length > LNG){
        t = Array.from(txt)
        t = t.sort(function() {return (Math.random()-0.5)});//mezclamos
        t2 = t.slice(0, ((txt.length) - (txt.length - LNG)))//ajustamos cantidad
    }else{
         t = Array.from(txt)
         t2 = t.sort(function() {return (Math.random()-0.5)});
    }
return t2.join('');
}