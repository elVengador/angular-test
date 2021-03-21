import { HttpClientModule } from '@angular/common/http'
import { TestBed, ComponentFixture } from '@angular/core/testing'
import { MedicoComponent } from "./medico.component"
import { MedicoService } from './medico.service'

describe('Medico component', () => {
    let component: MedicoComponent
    let fixture:ComponentFixture<MedicoComponent>

    beforeEach(()=>{
        TestBed.configureTestingModule({
            declarations:[MedicoComponent],
            providers:[MedicoService],
            imports:[HttpClientModule]
        })

        fixture = TestBed.createComponent(MedicoComponent)
        component = fixture.componentInstance
    })

    it('Debe crearse el componente ', () => {
        expect(component).toBeTruthy()
    })

    it('Debe retornar un saludo al medico ', () => {

        const nombre = 'Jimy'
        
        const resp = component.saludar(nombre)

        expect(resp).toBe(`hola ${nombre}`)
    })
    
})
