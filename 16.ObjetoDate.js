let time=new Date()

//dia del mes en numero 
console.log('dia del mes: ' + time.getDate())
//dia de la semana en numero 
console.log('dia de la semana: ' + time.getDay())
//numero del mes 
console.log('mes: ' + time.getMonth())
//año en numero 
console.log('año: ' + time.getFullYear())
//hora actual en primer parametro de la hora 
console.log('la hora: ' + time.getHours())
//minutos actuales 
console.log('los minutos: ' + time.getMinutes())
//segundos actuales 
console.log('los segundos: ' + time.getSeconds())
//coge los milisegundos 
console.log('las milesimas: ' + time.getMilliseconds())
//fecha en formato string //10:07:19 GMT+0200(hora de verano de Europa Central)
console.log(time.toString())
//fecha en string wed Jun 02 2021
console.log('dia mes fecha año: ' + time.toDateString())                                                                                                                                                                
//time to local string 2/6/2021 11:33:10
console.log('fecha y hora local: ' + time.toLocaleString())
//hora local 11:33:53
console.log('hora local: ' + time.toLocaleTimeString())
// fecha local 2/6/2021
console.log('fecha local: ' + time.toLocaleDateString())
//La diferencia en minutos entre el tiempo local y universales(UTC)
console.log('diferencia entre hora local y UTC: ' + time.getTimezoneOffset());
//la diferencia dia del mes usando las coordenadas universales(UTC)
console.log('diferencia entre dia local y UTC: ' + time.getUTCDate());
// Coge las horas valor in un objeto time usando las coordenadas de tiempo
console.log(time.getUTCHours());

const hora=document.createElement('h1')
document.body.appendChild(hora)

hora.textContent ='La fecha de hoy es ' + time.getDate() +'/'+(time.getMonth()+1)+'/'+time.getFullYear()