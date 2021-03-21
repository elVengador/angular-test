import { escalon } from "./numeros"

describe('Verificar la funcion escalon',()=>{
    it('verificar un alto',()=>{
        const nro = 70
        const resp =escalon(nro)
        expect(resp).toBe(1)
    })
    it('verificar un bajo',()=>{
        const nro = 30
        const resp =escalon(nro)
        expect(resp).toBe(0)
    })
})