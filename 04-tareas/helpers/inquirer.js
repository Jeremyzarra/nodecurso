require('colors');
// import {inquirer} from 'inquirer';
const inquirer = require('inquirer');


const preguntas =[
    {
        type: 'list',
        name: 'opcion',
        message: '¿Qué desea hacer?',
        choices: ['opt1','opt2','opt3']
    }
]

const inquirerMenu = async()=>{

        console.clear();
        console.log("========================".green);
        console.log(" Seleccione una Opción".green);
        console.log("========================\n".green);
        
        const prompt = inquirer.createPromptModule();
        const opt = await prompt(preguntas)

        return opt;
}

module.exports ={
    inquirerMenu
}