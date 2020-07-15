import { Request } from './request.js'
import { log } from './tools.js'

(async function(){

    const request = new Request()
    
    // const resultPost = await request.fetch_POST('https://localhost:44338/Services/service.asmx/Prueba', {idPost: 1, idUsuario: 11, idCategoria: 1})
    
    // const resultGet = await request.fetch_GET('https://jsonplaceholder.typicode.com/photos')
    
    const collection = [
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
        {
            url: 'https://jsonplaceholder.typicode.com/photos',
        },
        {
            url: 'https://raw.githubusercontent.com/json-iterator/test-data/master/large-file.json',
        },
        {
            url: 'https://raw.githubusercontent.com/json-iterator/test-data/master/large-file.json',
        },
        {
            url: 'https://raw.githubusercontent.com/json-iterator/test-data/master/large-file.json',
        },
        {
            url: 'https://raw.githubusercontent.com/json-iterator/test-data/master/large-file.json',
        }
    ]

    const start = performance.now()
    const results = await request.fetchAll(collection)
    const end = performance.now()

    console.log("Time elapsed: ", (end - start))
     
    // log(resultPost, 'POST: ')
    // log(resultGet, 'GET: ')
    log(results, 'Colection: ')
})()