//Objetos (objetos y arrays)

//objeto
const persona = { 
    nombre:'Maria',
    apellidos:'Gonzalez Perez',
    edad:32
}

console.log(persona)

//arrays o listas 

const frutas=['pera','limon', 'manzana']

console.log(frutas)

//Primitivos(numbers,floats,strings,boolean,undefined,null)

const edad=23 //tipo de dato number 
const grados=4.7 //tipo de dato float 
const nombre="Maria" //tipo de dato string  
const isBlue=false  //tipo de dato booleano puede ser true(verdadero) o false(falso)
const isRed=true

let perro; //llamamos a perro y nos dará undefined porque no tiene valor  
let enfermo=null //Null es un dato nulo que tiene valor que es nulo 

//La diferencia entre undefined y null es que la primera no tiene valor asignado 
// y la segunda si tiene valor asignado que es un  valor nulo.

// TYPEOF 
//con typeof vamos a comprobar el tipo de dato con el que estamos trabajando  

console.log('la edad es ' + edad)
console.log('la temperatura es ' + grados + 'grados')
console.log('el nombre es ' + nombre)
console.log('es azul? ' + isBlue)
console.log('es rojo? ' + isRed)
console.log(perro)
console.log(enfermo)
 
console.log(typeof edad)
console.log(typeof grados)
console.log(typeof nombre)
console.log(typeof isBlue)