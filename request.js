import { FetchError } from './error.js'

export class Request {

    constructor(){
        this.config =  {
            method: 'POST',
            body: '',
            headers: {
                'Content-type': 'application/json; charset=UTF-8'
            }
        }
    }

    async fetch(url, data = null){
        
        try {
            return await fetch(url)
                .then((response) => {
                    this.config.body = ''
                    return response.json()
                })
                .catch( ex => { 
                    throw new FetchError(ex, 'Is this correct? ' + url)
                })
        } catch (error) {
            error.consoleError()
            return null
        }

    }

    async fetchService(url, data = null){
        
        try {
            if(data != null)
                this.config.body = JSON.stringify(data)

            return await fetch(url, this.config)
                .then(response => response.json())
                .then(res => {
                   
                    this.config.body = ''
                    
                    if(res.Message){
                        if(res.Message.includes('Falta un valor')){
                            const param = res.Message.split("'")[1]
                            throw new Error(`Missing value '${param}'`)
                        }
                        else if(res.Message.includes(`No se puede convertir`)){
                            throw new Error(`The sent object has not json format`)
                        }
                    } 
                    else
                        return res.d
                })
                .catch( ex => { 
                
                    if(ex.message.includes('Request with GET/HEAD'))
                        throw new FetchError(ex, 'Remove body from the request or change the request to post')
                    else if(ex.message.includes('Missing value'))
                        throw new FetchError(ex, `Add the property '${ex.message.split("'")[1]}' to your data`)
                    else if(ex.message.includes('json format'))
                        throw new FetchError(ex, `Verify that you are sending a json object`)
                    else
                        throw new FetchError({message: 'Service not found'}, 'Is this correct? ' + url)
                })
        } catch (error) {
            error.consoleError()
            return null
        }

    }
}