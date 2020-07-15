import { Request } from './request.js'
import { log } from './tools.js'

(async function(){

    const request = new Request()
    
    // const result = await request.fetchService('https://localhost:44338/Services/service.asmx/Prueba', {idPost: 1, idUsuario: 11, idCategoria: 1})

    const colection = [
        {
            url: 'https://localhost:44338/Services/service.asmx/Prueba',
            data: { idPost: 1, idUsuario: 11, idCategoria: 1 }        
        },
        {
            url: 'https://localhost:44338/Services/service2.asmx/GetService2',
            data: { param1: 1 }
        },
        {
            url: 'https://localhost:44338/Services/service3.asmx/AnotherMethod3',
            data: { param1: 1, param2: 2 }        
        },
    ]

    const results = await request.fetchServiceAll(colection)
     
    // log(result, 'Usuarios: ')
    log(results, 'Colection: ')


})()


// const error = new ex.FetchError()

// error.consoleError()