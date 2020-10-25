class PrimeNumbers {
  constructor(limit) {
    this.limit = limit;
  }

  calculator() {
    let result = [2, 3];
    let entryNumber = this.limit;
    for (let i = 4; i <= entryNumber; i++) {
      if (i % 2 != 0 && i % 3 != 0 && i % 5 != 0 && i % 7 != 0) {
        result.push(i);
      } else if (i == 5 || i == 7) {
        result.push(i);
      }
    }
    console.log(result);
  }
}

let limit = parseInt(prompt("Ingresa un número como limite: "));

let newNumero = new PrimeNumbers(limit);
newNumero.calculator();
