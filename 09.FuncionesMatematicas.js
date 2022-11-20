//FUNCIONES MATEMÁTICAS 

//valor absoluto de un número (es el numero sin signo)
//abs(numero)
console.log(Math.abs(-45)) 

//potencias 
//pow(base,exponente)
console.log(Math.pow(2,3))

//raiz cuadrada de un numero
//sqrt(num)
console.log(Math.sqrt(36))

//Redondear una cifra al más cercano
//round(valor decimal)
console.log(Math.round(4.8987))

//Numero Aleatorio 
//desde 0 hasta numero que le digamos en este caso 100
console.log(Math.round(Math.random()*100))
//sin el ROUND busca numeros decimales
console.log(Math.random()*100)

//Entre una horquilla de numeros
//No va a pasar del 10 ni menos del 5
console.log(Math.round(Math.random()*(10-5)+5))

//Si el numero es positivo o negativo 
//si nos da 1 es positivo y si nos da -1 negativo
console.log(Math.sign(-45))

//Redondea hacia el entero superior 
console.log(Math.ceil(6.05))

//Redondea hacia el entero inferior 
console.log(Math.floor(8.9))