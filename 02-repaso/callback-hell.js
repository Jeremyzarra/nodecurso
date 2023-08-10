const empleados = [
    {
        id: 1,
        nombre: 'Fernando'
    },
    {
        id: 2,
        nombre: 'Linda'
    },
    {
        id: 3,
        nombre: 'Karen'
    }
];

const salarios = [
    {
        id: 1,
        salario: 1000
    },
    {
        id: 2,
        salario: 1500
    }
];

const getEmpleado= (id, callback)=>{
    const empleado= empleados.find( e=>e.id=== id);

    if(empleado){
        callback(null,empleado.nombre)
    }else{
        callback(`empleado de id ${id} no existe`)
    }
}


const getSalario = (id, callback)=>{

    const salario= salarios.find( s=> s.id=== id)?.salario;

    if(salario){
        callback(null,salario)
    }else{
        callback(`El salario de id ${id} no existe`);
    }
}


getEmpleado(2, (err, empleado)=>{
    if(err){
        console.log("ERROR!!")
        return console.log(err)
    }
    console.log("Empleado Existe")
    console.log(empleado);
})


getSalario(2, (err, salarios)=>{

    if (err){
        console.log(err)
    }

    console.log(salarios)
})