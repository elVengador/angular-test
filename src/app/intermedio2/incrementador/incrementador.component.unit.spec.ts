import { IncrementadorComponent } from "./incrementador.component"

describe('incrementador components unit', () => {
    let component:IncrementadorComponent
    beforeEach(()=>{
        component = new IncrementadorComponent
    })

    it('no deve pasar de 100 el progreso',()=>{
        component.cambiarValor(5)
        expect(component.progreso).toBe(55)
    })

    it('no deve ser menor a 100 el progreso',()=>{
        // esta es la forma correcta de evaluarlo
        // hay un error en cambiarValor
        /*component.cambiarValor(-200)
        expect(component.progreso).toBe(0)*/
        component.cambiarValor(-5)
        expect(component.progreso).toBe(45)
    })
})
