//Axios es una libreria que pasa al formato json la informacion que trae
//se tiene que instalar AXIOS o utilizar la libreria (https://axios-http.com/docs/intro)
const getUsers=async()=>{
    try{
    const res= await axios('https://jsonplaceholder.typicode.com/users')
    //se cambia RES JSON por RES DATA
    const users=await  res.data
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
    
    }catch(error){
    
    console.log(error)
    
    }finally{console.log('Se puede ahora con Axios')}
    
}
getUsers()