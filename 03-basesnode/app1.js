const fs = require('fs');


let tabla=3;
console.clear();
console.log("###################");
console.log(`### Tabla del ${tabla} ###`);
console.log("###################");

let salida = "";

for (let index = 1; index <= 10; index++) {
    salida+=`${tabla} x ${index} = ${tabla * index}\n`;
    
}

console.log(salida);
fs.writeFile(`tabla-${tabla}.txt`, salida, err=>{
    if(err) throw err;

    console.log(`tabla-${tabla}.txt Ha sido creado`)
})