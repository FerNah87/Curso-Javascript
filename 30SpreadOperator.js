//UNIR una lsta array / una lista objeto
//En Arrays
const cities=['Madrid',
              'Londres',
              'Berlin']

const countries=['Spain',
                 'Belgium',
                 'Italy'
                ]
//de esta forma se unen los ARRAYS 
const mundo=[...cities,...countries]

console.log(mundo)

//En Objetos
const modelsWoman = {
    sara:"Spain",
    kelly:"England",
    Fionella:"Italia",
    Fionella2:{
       Fionella:"Francia" 
    }
}

const modelsMan={
    Pepe:"Spain",
    Jordan:"United States",
    Korea:"Kim Yom Ul"
}
//de la misma forma se unen los objetos
const models={...modelsWoman,...modelsMan}

console.log(models)