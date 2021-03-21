import {saludar} from './string'

describe('pruebas de string',()=>{
    it('debe regresar un saludo',()=>{
        const resp = saludar('Jimy')
        expect(typeof resp).toBe('string')
    })
    it('debe regresar un saludo con el nombre enviado',()=>{
        // verificamos la exactitud del string
        const resp = saludar('Jimy')
        expect(resp).toBe('holi Jimy, :v')
    })
    it('debe contener el nombre enviado en el saludo',()=>{
        // las pruebas con string son muy fragiles
        // no se deve verificar todo el string a menos que sea muy necesario
        const name = 'Jimy'
        const resp = saludar(name)
        expect(resp).toContain(name)
    })
})