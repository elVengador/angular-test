import { empty, from, throwError } from 'rxjs';
import { MedicosComponent } from './medicos.component';
import { MedicosService } from './medicos.service';


describe('MedicosComponent', () => {

    // le ponemos nombres genericos, para poder copiarlos
    // a otra pruebas y no hacer muchos cambios
    let componente: MedicosComponent;
    let servicio = new MedicosService(null)

    beforeEach( () => {
        componente = new MedicosComponent(servicio)
    });

    // test para verificar los datos cargados
    it('Init deve de cargar los medicos', () => {

        const medicos = ['medico1', 'medico2', 'medico3']
        spyOn(servicio,'getMedicos').and.callFake(()=>{
            return from([medicos])
        })

        componente.ngOnInit()

        expect(componente.medicos.length).toBeGreaterThan(0)
   
    });

    // test para verificar que se llame una funcion
    it('Deve de llamar al servidor para agregar un medico',()=>{

        const spia = spyOn(servicio,'agregarMedico').and.callFake(()=>{
            return empty()
        })
        componente.agregarMedico()

        expect(spia).toHaveBeenCalled()
    })

    // test par averificar el funcionamiento de servicios
    it('deve verificar agregar un medico al arreglo de medicos',()=>{

        const medico = {id:1, nombre: 'Juan'}
        spyOn(servicio,'agregarMedico')
            .and.returnValue(from([medico]))
        
        componente.agregarMedico()

        expect(componente.medicos.indexOf(medico)).toBeGreaterThanOrEqual(0)
    })

    // test para error en los observables
    it('deve verificar el mensaje error cuando falle la adicion',()=>{

        const err = 'ups, no se pudo agregar'
        spyOn(servicio,'agregarMedico')
            .and.returnValue(throwError(err))

        componente.agregarMedico()

        expect(componente.mensajeError).toBe(err)
    })

    // test para error en los observables
    it('deve verificar el mensaje error cuando falle la adicion',()=>{

        const err = 'ups, no se pudo agregar'
        spyOn(servicio,'agregarMedico')
            .and.returnValue(throwError(err))

        componente.agregarMedico()

        expect(componente.mensajeError).toBe(err)
    })

    // test para confirmar sobre eventos del navegador (confirm del navegador)
    it('debe verificar que borrarMedico llamos el metodo borrarMedico del servicio',()=>{

        spyOn(window,'confirm').and.returnValue(true)
        
        const idMedico = '1'
        const spy = spyOn(servicio,'borrarMedico')
            .and.returnValue(empty())

        componente.borrarMedico(idMedico)

        expect(spy).toHaveBeenCalledWith(idMedico)
    })

    it('NO se llama el metodo borrarMedico del servicio',()=>{

        spyOn(window,'confirm').and.returnValue(false)
        
        const idMedico = '1'
        const spy = spyOn(servicio,'borrarMedico')
            .and.returnValue(empty())

        componente.borrarMedico(idMedico)

        expect(spy).not.toHaveBeenCalledWith(idMedico)
    })
});
