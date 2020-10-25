// let numbers = [];
// const sumar = (entry) => {
//   numbers.push(entry);
//   numbers.forEach((i) => {
//     numbers[i] *= numbers[i];
//   });
//   console.log(numbers);
// };

// const menu = 0;
// do {
//   let entry = parseInt(prompt("Ingrese un número: "));
//   const menu = parseInt(
//     prompt("1.Sumar/2.Restar/3.Multipicar/4.Dividir/5.Terminar")
//   );

//   switch (menu) {
//     case 1:
//       sumar(entry);
//       break;
//     case 2:
//       restar(entry);
//       break;
//     case 3:
//       multiplicar(entry);
//       break;
//     case 4:
//       dividir(entry);
//       break;
//     default:
//       "Escoje una opción valida";
//   }
// } while (menu != 5);
const expresion = prompt('Introduce una suma o multiplicacion con "n" valores:')

alert(eval(expresion))