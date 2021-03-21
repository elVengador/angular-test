import { verdad } from "./boolean"

describe('verificar booleao',()=>{
    it('verificar verdadero',()=>{
        const resp = verdad()
        //expect(resp).toBe(true)
        expect(resp).toBeTruthy()
    })
})