let contenido="";
 document.getElementById('input').value='';
document.getElementById('palabra').value='';


function leerArchivo(e) {
    var archivo =  e.target.files[0];
    if (!archivo) {
      return;
    }
    var lector = new FileReader();

    lector.onload = function(e) {
       const cont = e.target.result;
       document.getElementById("cuadro").innerText=cont;
       convertir(cont)
    };
    lector.readAsText(archivo);

}

function contarPalabras() {
    const separarString = (value) => value.split(/\s\n|\n|\s/);

    const arreglo = separarString(contenido);
    console.log(contenido);

    console.log(arreglo.length)
    console.log(arreglo)

    alert("Hay una cantidad de "+(arreglo.length-1)+" palabras");

}

function contarOraciones() {
    const arreglo = contenido.split(/[.;]/)
    let cantidadO =arreglo.length;

    console.log(contenido.charAt(contenido.length-2))
    if (contenido[contenido.length-2]==".") {
        cantidadO-=1;
    }

    alert("Hay una cantidad de "+(cantidadO)+" oraciones");

    
}

function palabraPromedio() {
    const separarString = (value) => value.split(/\s\n|\n|\s/);
    const arreglo = separarString(contenido);
    let acum=0;

    for (let index = 0; index < arreglo.length-1; index++) {
        const element = arreglo[index];
        acum+= element.length;
    }
    alert("El promedio de longitud de palabra es "+(acum/(arreglo.length-1)));

}

function buscarPalabra() {
    const valor = document.getElementById('palabra').value;
    const separarString = (value) => value.split(/\s\n|\n|\s/);
    const arreglo = separarString(contenido);
    const regex = new RegExp(valor, "i");
    const div = document.getElementById('results');
    div.innerHTML='';

    let contador=0;
if (valor.length>0) {
    
    for (let index = 0; index < arreglo.length-1; index++) {
        let element = arreglo[index];
        
        if (element.search(regex)>=0) {
            
            let i=true;

            
            while(i){
                
                if (element.search(regex)>=0) {
                    console.log('nuevo');
                    if ((element.search(regex)-1)==0) {
                        div.append(element.charAt(0));
                    }
                    else if ((element.search(regex)-1)<0) {
                        
                    }
                    else{
                    div.append(element.slice(0,element.search(regex)));
                    }
                        

                    const newDiv = document.createElement("span");
                    newDiv.classList.add("highlight");

                    if (valor.length>1) {
                newDiv.innerText=element.slice(element.search(regex), element.search(regex)+valor.length);
                        
                    }
                    else{
                        newDiv.innerText=element.charAt(element.search(regex))
                    }
                div.append(newDiv);
                

                element=element.slice(element.search(regex)+valor.length)
                contador++;
            }
            else{
                div.append(element);
                i=false;
            }
        }
        // const newDiv = document.createElement("span");
        // newDiv.classList.add("highlight");
        // newDiv.innerText=element;
        // div.append(newDiv);
    }
    
    else{
        div.append(element)
        
    }
    div.append(" ")
}
}
 document.getElementById('contador').innerText="Coincidencias: "+contador;
}
function convertir(cont) {
    contenido=cont;
    
}

  
  document.getElementById('input').addEventListener('change', leerArchivo, false);
  document.getElementById('palabras').addEventListener('click', contarPalabras, false);
  document.getElementById('oraciones').addEventListener('click', contarOraciones, false);
  document.getElementById('promedio').addEventListener('click', palabraPromedio, false);
  document.getElementById('palabra').addEventListener('input',buscarPalabra, false);

  

function encontrarPalabra() {
    let i=true;
    while(i){

        if (element.search(regex)>=0) {
        div.append(0,element.search(regex)-1);
        const newDiv = document.createElement("span");
        newDiv.classList.add("highlight");
        newDiv.innerText=element.slice(element.search(regex), value.length);
        div.append(newDiv);
        element=element.slice(element.search(regex)+1)
        }
        else{
            i=false;
        }
    }
}