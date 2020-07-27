
let attempts = 3;
let CloudPoints = 0;
let UserPoints = 0;

while (attempts != 0) {
    var user = prompt(`1 = Piedra, 2= Papel, 3= Tijera
    Intentos: ${attempts} `);
    user = parseInt(user);
    var cloud = parseInt(Math.random() * 3) + 1;
    console.log("La nube saca = " + cloud);
  switch (user) {
    case 1 /* Si saco piedra */:
      if (user == cloud) {
        console.log("Empate!");
        CloudPoints++;
        UserPoints++;
      } else if (cloud == 2) {
        console.log("Uy!, la nube saco papel. ¡Perdiste!");
        CloudPoints++;
      } else if (cloud == 3) {
        console.log("¡Ganaste!, la nube saco tijera");
        UserPoints++;
      }
      attempts--;
      break;
    case 2 /* Si saco papel */:
      if (user == cloud) {
        console.log("Empate!");
        CloudPoints++;
        UserPoints++;
      } else if (cloud == 3) {
        console.log("Uy!, la nube saco tijera. ¡Perdiste!");
        CloudPoints++;
      } else if (cloud == 1) {
        console.log("¡Ganaste!, la nube saco piedra");
        UserPoints++;
      }
      attempts--;
      break;
    case 3 /* Si saco tijera */:
      if (user == cloud) {
        console.log("Empate!");
        CloudPoints++;
        UserPoints++;
      } else if (cloud == 2) {
        console.log("Uy!, la nube saco piedra. ¡Perdiste!");
        CloudPoints++;
      } else if (cloud == 1) {
        console.log("¡Ganaste!, la nube saco papel");
        UserPoints++;
      }
      attempts--;
      break;
  }
  
}
console.log(`Puntos User: ${UserPoints}`)
  console.log(`Puntos Cloud: ${CloudPoints}`)
  if(CloudPoints === UserPoints){
    console.log(`Empate!`)
  }else if(CloudPoints > UserPoints){
    console.log(`Gana la nube!`)
  }else if(UserPoints > CloudPoints){
    console.log(`Gana el usuario!`)
  }
//**//
// dwdd
