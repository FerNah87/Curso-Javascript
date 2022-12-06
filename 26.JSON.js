//Se crea la funcion
function cargarArchivo(){
    //fetch sirve para llamar archivos 
    fetch('./26.JSON.json')
    //entonces RESpuesta (RESpuest en JSON)
    .then(res=>res.json())
    //Entonces dame en consola el RES
    .then(res=>console.log(res))

}
cargarArchivo()