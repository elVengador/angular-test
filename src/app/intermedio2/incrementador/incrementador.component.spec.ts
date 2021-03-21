import { TestBed, ComponentFixture } from '@angular/core/testing';
import { IncrementadorComponent } from './incrementador.component';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';


describe('Incremendator Component', () => {

    let component: IncrementadorComponent;
    let fixture: ComponentFixture<IncrementadorComponent>;

    beforeEach( () => {
        TestBed.configureTestingModule({
            declarations: [ IncrementadorComponent ],
            imports: [ FormsModule ]
        });

        fixture = TestBed.createComponent(IncrementadorComponent);
        component = fixture.componentInstance;

    });

    // verificamos si existe el valor de la leyenda en el html
    // tras asignarle un valor
    it('debe mostrar la leyenda', () => {

        const leyenda = 'Progreso de carga'
        component.leyenda = leyenda
        fixture.detectChanges()
        
        const elem: HTMLElement = fixture.debugElement.query(By.css('h3')).nativeElement
        
        expect(elem.innerHTML).toContain(leyenda)
        
    });
    
    // verificar que 
    it('debe mostrar cambiar el valor del input tras ejecutar cambiar valor', () => {
        component.cambiarValor(5)
        fixture.detectChanges()

        fixture.whenStable().then(() => {
            // whenStable sirve para evaluar cuando se a ejecutado
            // por completo el detector de cambios
            const elem:HTMLInputElement = fixture.debugElement.query(By.css('input')).nativeElement
    
            expect(elem.value).toBe('55')
        })
    })

    //
    it('deve incrementar/decrementar en 5 al hace click en los botones', () => {
        const buttons = fixture.debugElement.queryAll(By.css('button'))

        // decrementamos
        buttons[0].triggerEventHandler('click',null)
        expect(component.progreso).toBe(45)
        
        // incrementamos
        buttons[1].triggerEventHandler('click',null)
        expect(component.progreso).toBe(50)
    })

    //
    it('deve cambiar el progreso al presionar los botones', () => {
        const buttons = fixture.debugElement.queryAll(By.css('button'))
        const elem:HTMLElement = fixture.debugElement.query(By.css('h3')).nativeElement
        
        // decrementamos
        buttons[0].triggerEventHandler('click',null)
        fixture.detectChanges()
        expect(component.progreso).toBe(45)
        expect(elem.innerHTML).toContain('45')
        
        // incrementamos
        buttons[1].triggerEventHandler('click',null)
        fixture.detectChanges()
        expect(component.progreso).toBe(50)
        expect(elem.innerHTML).toContain('50')
    })
    
    

});
