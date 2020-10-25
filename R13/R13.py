def run():
    orden = int(input('Menu: 1.Añadir Orden, 2.Fianlizar compra, 3.salir: '))
    total_ordenes = 0;

    while orden != 2:
        total_ordenes += 1
        orden = int(input('Cantidad de ordenes: '+ str(total_ordenes) +' Añadir Orden: 1 /Terminar Pedido: '))
    costo_total(total_ordenes)
    
def costo_total(total_ordenes):
    COSTOPLATO = 100;
    PROPINA = 10;
    valor_platos = total_ordenes * COSTOPLATO
    valor_propina = PROPINA * valor_platos / 100
    valor_total = valor_propina + valor_platos
    print('El total a pagar es: $'+ str(valor_total))



if __name__ == "__main__":
    run()