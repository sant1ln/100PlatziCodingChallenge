
base = 10;
height = 30;


if height >= base :
    type_of_triangule = "Isoceles";
elif height == base : 
    type_of_triangule = 'Equilatero';
else:
    type_of_triangule = 'Escaleno';


area = str(base * height /2);
print("El area del triangulo es: "+type_of_triangule+" y su area es: "+area)