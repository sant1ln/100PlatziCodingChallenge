def calculator_int(saving,interest,time):
    total = saving * (1+interest/100)**time
    return round(total,2)



def compound_interest():
    saving = 100
    interest = int(input('¿Cual será el interes compuesto?'))

    interest_time = {
        '6 months': calculator_int(saving,interest,0.5),
        '1 year': calculator_int(saving,interest,1),
        '2 year': calculator_int(saving,interest,2),
    }

    for i,j in interest_time.items():
        print(f'{i} => {j}')

compound_interest()