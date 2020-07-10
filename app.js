import { Request } from './request.js'
import { log } from './tools.js'

(async function(){

    const request = new Request()
    
    // const result = await request.fetch('https://localhost:44338/Services/service.asmx/Prueba', {idUsuario : 1})
    
    const result = await request.fetchService('https://localhost:44338/Services/service.asmx/Prueba', {idPost: 1, idUsuario: 11, idCategoria: 1})

    // const varios = await request.fetchAll(
    //     [{
    //         url : 'https://jsonplaceholder.typicode.com/users',
    //         data: ''
    //     }]
    // )
    log(result, 'Usuarios: ')


})()


// const error = new ex.FetchError()

// error.consoleError()