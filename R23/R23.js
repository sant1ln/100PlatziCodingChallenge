
const calculator = (saving,interest,time) =>{
    let total = saving * (1+interest/100)**time
    return total.toFixed(2)
}

const compound_interest = () =>{
    const saving = 100;
    const interest = int(prompt('¿Cuanto será el interes?'));
    let total_interest = {
        '6 meses' : calculator(saving,interest,0.5),
        '1 año' : calculator(saving,interest,1),
        '2 años' : calculator(saving,interest,2)
    }
    console.log(total_interest)

}

compound_interest()