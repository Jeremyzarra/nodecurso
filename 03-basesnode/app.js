const {CrearArchivo} = require('./helpers/multiplicar');
const argv = require('./config/yargs')

console.clear();



// console.log(process.argv);
// console.log(argv);

let tabla = argv.base;
let listar = argv.l;
let hasta = argv.h;

// const [,,valor]= process.argv;
// console.log(valor)


// // let tabla=5;
CrearArchivo(tabla, listar, hasta)
    .then( numeros => console.log(numeros))
    .catch( error => console.log(error))
