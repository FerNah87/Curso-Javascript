//funcion agarrar usuario
const getUsers=async()=>{
 
//Lo que queremos que pase cuando todo va bien
try{
const res= await fetch('https://jsonplaceholder.typicode.com/users')

//queremos que la respuesta sea un json
const users=await  res.json()
console.log(users)

for(user of users){
    document.body.innerHTML+=`    
    <ul>
      <li>
          ${user.id}<br> 
          ${user.name}<br> 
          ${user.website}<br> 
          ${user.username}
      </li>
    </ul>  
    `
}

//Msj si da Error
}catch(error){

console.log(error)

//Resultado esperado (todo ok)
}finally{console.log('Se puede!!! seeeeeee')}

}
getUsers()