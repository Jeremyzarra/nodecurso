const dealpool = {
    nombre:'José',
    apellido:'Yzarra',
    poder:'Kame kame',
    // edad:50,
    getNombre(){
        return `${this.nombre} ${this.apellido} ${this.poder}`;
    }


}

// console.log(dealpool.getNombre())


// const nombre    = dealpool.nombre;
// const apellido  = dealpool.apellido;
// const poder = dealpool.poder;

// const {nombre, apellido, poder, edad=0} =dealpool;
// console.log(nombre, apellido, poder, edad)

 
function imprimeHeroe({nombre, apellido, poder, edad=0}){
    // const {nombre, apellido, poder, edad=0} =heroe;
    console.log(nombre, apellido, poder, edad)
    
}

imprimeHeroe(dealpool)


const heroes =['Deadpool', 'Superman', 'Batman'];

// const h1= heroes[0];
// const h2= heroes[1];
// const h3= heroes[2];

const [, ,h3]=heroes;

console.log(h3);