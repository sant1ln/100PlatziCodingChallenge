const findCubeVolume = () =>{
    const leenght = parseFloat(prompt('Ingresa el largo: '));
    const widht = parseFloat(prompt('Ingresa el ancho: '));
    const height = parseFloat(prompt('Ingresa la altura'));

    const volume = leenght * widht * height;
    console.log(`El volumen del cubo es: ${volume.toFixed(2)}`)
}

const findCylinderVolume = () =>{
    const baseArea = parseFloat(prompt('Ingresa el area de la base: '));
    const height = parseFloat(prompt('Ingresa la altura: '))

    const volume = baseArea * height;
    console.log(`El volumen del cilindro es: ${volume.toFixed(2)}`)
}

const findSphereVolume = () =>{
    const ratio = parseFloat(prompt('Ingresa el radio de la esfera'))
    const pi = 3.1416
    const cubeRatio = ratio**3;

    const volume = (4 * pi * cubeRatio)/3
    console.log(`El volumen de la esfera es: ${volume.toFixed(2)}`)
}


let devChoose = parseInt(prompt('Escoje: 1.Cubo/2.Cilindro/3.Esfera'));

switch(devChoose){
    case 1:
        findCubeVolume();
        break;
    case 2:
        findCylinderVolume();
        break;
    case 3:
        findSphereVolume();
        break;
}