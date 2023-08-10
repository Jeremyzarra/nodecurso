const argv = require('yargs')
            .option('b',{
                alias:'base',
                type:'number',
                demandOption:true,
                describe:'Es la base de multiplicar '
            })
            .check((argv, options)=>{
                if(isNaN(argv.b)){
                    throw 'La base tiene que ser un número'
                }
                return true;
            })
            .option('l',{
                alias:'listar',
                type: 'boolean',
                demandOption:false,
                default:false,
                describe:'Muestra la tabla en consola'
            })
            .option('h',{
                alias:'hasta',
                type: 'number',
                demandOption:false,
                describe:'Muestra el número que se va a multiplicar'
            })
            .argv;

module.exports = argv;