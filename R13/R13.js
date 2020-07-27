const AddOrder = options =>{
    let countOrder = 0;
    let plateCost = 25;
    let percentageTip = 15
    while(options != '2'){
        switch(options){
            case '1':{
                countOrder++;
                break;
            }
            default: "Escoja una opción correcta";
        }
    options = prompt(`¿Añadir Otro plato? \n1.Si\n2.No\n Platos ordenados:${countOrder}`)
       
 }
 let totalPlates = countOrder;
 let bill = (countOrder * plateCost);
 let tip = (percentageTip * bill)/100;
 let total = bill + tip;
 console.log(`Total de platos: ${totalPlates}`)
 console.log(`Valor Plato: $${bill}`)
 console.log(`Valor Propina: $${tip}`)
 console.log(`Total a pagar: $${total}`)
}

function getOption(){
    let options = prompt('Valor Plato:$25.\nPropina: 15%\nQue desa hacer \n1.Añadir Plato/2.Terminar pedido')
    AddOrder(options);
}

getOption()