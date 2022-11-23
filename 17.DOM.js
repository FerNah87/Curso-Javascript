//Vemos el HTML en la consola
console.log(document)
//Vemos solo el Body del HTML en consola
console.log(document.body)

//Crea etiquetas desde JS 

let caja=document.createElement('div')
let caja2=document.createElement('div')
let caja3=document.createElement('div')

//Da estilos al DIV 

caja.style.width='100px'
caja.style.height='100px'
caja.style.backgroundColor='green'
caja.style.borderRadius='50%'

caja2.style.width='100px'
caja2.style.height='100px'
caja2.style.backgroundColor='blue'
caja2.style.borderRadius='9px'

caja3.style.width='100px'
caja3.style.height='100px'
caja3.style.backgroundColor='grey'
caja3.style.borderRadius='50%'

//Renderizando los elementos (por eso no se ven) 

document.body.appendChild(caja)
document.body.appendChild(caja2)
document.body.appendChild(caja3)
//document.body.append(caja,caja2,caja3)

//Diferencia entre APPEND y APPENDCHILD 
//1.appendchild no permite renderizar más de un elemento 
//2.append si permite renderizar dos o más
//3.appendchild no permite renderizar string o cadenas 
//4.append si permite  meter varios elementos 

//Nos dice la codificacion de los caracteres

console.log(document.characterSet)

//Cuantos hijos tiene el documento  

console.log(document.childElementCount)

//Nodos hijos del documento  

console.log(document.childNodes)

//Devuelve los hijos que tiene

console.log(document.children)

//Clona el documento  
//se le pase un boolean true o false en función de si queremos que nos clone también el contenido 

let clonadoBody=document.body.cloneNode(true)
console.log(clonadoBody)

//Como saber el tipo de contenido

console.log(document.contentType)

//Creando Atributos

let subtitulo=document.querySelector('#sub1')
//crea la clase y le da el titulo
subtitulo.setAttribute('class','tituloClase')

let subti=document.querySelector('#sub2')
subti.setAttribute('class', 'laconchuda')

// Selecciona Elementos  
let subtitulo2=document.querySelector('#sub2')
let subtitulo3=document.querySelector('#sub3')

subtitulo2.style.color='red'
subtitulo3.style.color='green'
subtitulo3.textContent='AHORA CAMBIO'

//Crea un comentario 

let comentario=document.createComment('soy un comentario')
console.log(comentario)

//Fragment  

let container=document.createDocumentFragment()
document.appendChild(container)

//Creando un NODO de texto desde JS 

const textNode=document.createTextNode('Soy un nodo de texto')
document.body.appendChild(textNode)

//Acceder a la Etiqueta HTML/DOCTYPE 

console.log(document.doctype)

//Nos da el elemento HTML  
console.log(document.documentElement)

//URI 
console.log(document.documentURI)

//Saber el dominio
console.log(document.domain)
//Primer Hijo 
console.log(document.firstChild)

//Primer elemento Hijo

console.log(document.firstElementChild)

//QUERYSELECTORALL 

const enlaces=[...document.querySelectorAll('a')]

enlaces.map(enlace=>{
    enlace.style.color='red'
    enlace.style.fontFamily='arial black'
    enlace.style.backgroundColor='pink'
})