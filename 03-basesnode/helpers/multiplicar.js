const fs = require('fs');
const colors = require('colors');

const  CrearArchivo = async( tabla, l=false, h=10)=>{

    try {
        
        let salida,consola = "";
        
        for (let index = 1; index <= h; index++) {
            salida+=`${tabla} x ${index} = ${tabla * index} \n`;
            consola+=`${tabla} ${ 'x'.blue } ${index} ${ '='.yellow } ${tabla * index} \n`;
            
        }
        if(l){

            console.log("###################");
            console.log(`### Tabla del ${tabla} ###`);
            console.log("###################");
            console.log(consola);
        }
         fs.writeFileSync(`./salida/tabla-${tabla}.txt`, salida);

             return `tabla-${tabla}.txt Ha sido creado`;
        
    } catch (error) {
        throw error
    }


}

module.exports={
    CrearArchivo
}