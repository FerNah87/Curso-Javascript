class Automovil{
    constructor(marca,modelo,fechaLanzamiento,combustible,color){
        this.marca=marca
        this.modelo=modelo 
        this.fechaLanzamiento=fechaLanzamiento
        this.combustible=combustible 
        this.color=color
    }

    //metodo para agarrar (getter)las propiedades desde fuera y cambiar (setter) las propiedades
    //getter (acceder)
     get getColor(){
         return this.color
     }

    //setter (poner / cambiar)
    set setColor(color){
        this.color=color
    }

    //métodos
    velocidad(velocidad){
        if(velocidad>200){
            return "Ya no debes acelerar más esto es el máximo ¡¡¡PELIGRO!!"
        }else{
            return `Para alcanzar tu velocidad máxima faltan ${200-velocidad}Km/h`
        }
    }
    //métodos estáticos que nunca va a cambiar
    static ruedas(){
        return "Tengo las ruedas de serie"
    }
}

//instancias de clase 

const coche=new Automovil('seat','ibiza',2015,'gasolina','rojo')

console.log(coche)

coche.setColor='verde'
console.log(coche.getColor)
console.log(coche.velocidad(100))
console.log(Automovil.ruedas())

//Herencia  
//constructor de clase heredada primero ponemos las caracteristicas propias y luego lo que heredo 

//En el super solo lo que heredamos

class Nautica extends Automovil {
     constructor(marca,modelo,materialCasco,tipoMotor){
          super(marca,modelo)
         
          this.materialCasco=materialCasco
          this.tipoMotor=tipoMotor
    }
}

//Instancia de aeronave 

const titanic=new Nautica('metal','carbón','titanic','titanicModel')

console.log(titanic.color='verde')

//POO con clases SOLUCIONADO EL ERROR
class Animal {
    constructor(nombre, edad, raza){
        this.nombre = nombre
        this.edad = edad
        this.raza = raza
    }
}

class Domestico extends Animal {
    constructor(nombre, edad, raza, colorPelaje){
        super(nombre, edad, raza)

        this.colorPelaje = colorPelaje
    }
}
