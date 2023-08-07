
// setTimeout( ()=>{
//     console.log("Hola Mundo");
// },1000);


const getUsuarioById = (id,permisos)=>{

    const user ={
        id,
        nombre: 'jose'
    }

    setTimeout( ()=>{
        permisos(user);
    },1500) 
}

getUsuarioById(10, ({id,nombre})=>{
    console.log(`Usuario: ${id}`);
    console.log(`Nombre: ${nombre}`);
});