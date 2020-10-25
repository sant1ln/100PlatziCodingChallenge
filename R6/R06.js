let number = document.getElementsByClassName("num");
let operator = document.getElementsByClassName("operator");
const display = document.querySelector("#display");
let numberSelect = document.getElementsByClassName("numberSelected");

document.querySelector("#reset").addEventListener("click", function () {
  display.innerHTML = "";
});


let numbersDisplay = [];
let numbersSelected = [];

for (let i = 0; i < number.length; i++) {
  let num = i + 1;
  if (num === 10) {
    num = 0;
  }
  number[i].addEventListener("click", function () {
    showNumber(num);
  });
}

for (let i = 0; i < operator.length; i++) {
  let operatorSelected = i;
  operator[i].addEventListener("click", function () {
    showNumber(null, operatorSelected);
  });
}

for(let i = 0; i < numberSelect.length ;i++){
    numberSelect[i].addEventListener("click",function(){
        numbersSelected.push(numberSelect[i].value)
        console.log(numbersSelected)
    })
}


function showNumber(num, operatorSelected) {
  switch (operatorSelected) {
    case 0:
      operatorSelected = "+";
      break;
    case 1:
      operatorSelected = "-";
      break;
    case 2:
      operatorSelected = "*";
      break;
    case 3:
      operatorSelected = "/";
      break;
  }
  numbersDisplay.push(num, operatorSelected);

  display.innerHTML = numbersDisplay.join(" ");

  document.querySelector("#equal").addEventListener("click", function () {
    let resultado = 0;

    if(operatorSelected == '+'){
        for (let i = 0; i < numbers.length; i++) {
            resultado   = i;
            console.log(resultado)
        }
        console.log(resultado)
    }
   
  });
}
