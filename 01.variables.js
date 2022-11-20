//Tipo de variable: var, let y const  

//variable:Valor que me permite guardar un espacio en 
//memoria  

//declaración de la variable
let mascota;

//inicialización de la varible (valor)
mascota="perro"

//declaración e inicialización (valor)
//de una variable  

let mascota1="perro"

console.log(mascota1)

//REGLAS DE LAS VARIABLES  
/* 1.let no me permite declarar la variable 
     con el mismo nombre
   
   2.let permite declarar la variable y no inicializarla 
     y más tarde en cualquier lugar del código 
     inicializarla

     Porque no es conveniente VAR
    1.var me permite declarar otra variable con el mismo 
      nombre

    2.Tambien me permite declarar sin inicializar.
  
    3.const no nos deja declarar una variable sin inicializarla

    4.const no nos deja declarar una variable con el mismo nombre
    */

var nombre="Pedro"

console.log(nombre)

var nombre="Carlos"

console.log(nombre)

var pajaro; 


pajaro="Loro"

console.log(pajaro)

//variable undefined (no tiene valor) o variable null (tiene valor NULL)  

let pez ; 

console.log(pez)

//En funcion (no tiene acceso a la variable)
function saltar(){
    let tiburon="blanco"
}
//Cuando se la llama dice que no esta definida
//console.log(tiburon)

//Estado inicial (variable NULL)

let encendido=null 

console.log(encendido)

//const  

const perro="perro de lucas";

const perro1="perro de perez"

console.log(perro)
console.log(perro1)

//No usaremos nunca var  
//Usaremos let cuando nuestra variable vaya a cambiar 
//Usaremos const cuando nuestra variable sea fija y no cambie 

let fuerzaEnemigo=20;

fuerzaEnemigo=30

console.log(fuerzaEnemigo)