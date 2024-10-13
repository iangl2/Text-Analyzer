let mitexto = "Hola mundooooo, Panama es bonito. asdjfklasjldfjas asdkfasj;dlf"


const arreglo=mitexto.split(".");

console.log("El largo del texto es:" +arreglo.length);

for (let index = 0; index < arreglo.length; index++) {
    const element = arreglo[index];
    console.log(element);
    
}