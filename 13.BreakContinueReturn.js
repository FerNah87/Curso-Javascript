//BREAK , CONTINUE , RETURN 
//El break rompe el bucle (ej en 4) y el continue lo hace hasta el final PERO rompe la ejecucion con el 4 (lo suprime)
// const animales=['perro',
//                 'ardilla',
//                 'buho',
//                 'cobra',
//                 'murcielago',
//                 'pato',
//                 'oso',
//                 'vaca'
// ]

// for(let i=0;i<animales.length;i++){
//     console.log(i)
//     if(i===4){
//         //break;
//         continue;
//     }else{
//        console.log(animales[i])
//     }
// }

//Return permite hacer uso AFUERA
function saludo(nombre){
    return `Hola que tal ${nombre}`
    //console.log('Esto es otro saludo')
}

console.log( saludo('Antonio').length)