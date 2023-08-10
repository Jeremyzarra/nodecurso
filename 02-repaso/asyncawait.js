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

const getEmpleado= (id)=>{
    const empleado= empleados.find( e=>e.id=== id)?.nombre;

   return new Promise( (resolve, reject)=>{

        (empleado)
            ? resolve(empleado)
            : reject(`No existe Empleado con el id ${id}`);
    });
}

const getSalario = (id) =>{
    const salario = salarios.find( s=>s.id===id)?.salario

    return new Promise( (resolve, reject)=>{

        (salario)
            ? resolve(salario)
            : reject(`El id ${id} del salario no existe`);
    } )
}

const id=2;
const getInforUsuario= async( id)=>{

    try {
        const empleado = await getEmpleado(id)
        const salario = await getSalario(id)
        return `El salario del empelado ${empleado} es de ${salario}`;
        
    } catch (error) {
        throw error
    }
}

getInforUsuario(id)
    .then( msg=> {
        console.log("TODO BIEN!!")
        console.log(msg)
    })
    .catch( error=> {
        console.log("TODO MAL!!")
        console.log(error)
    })
    