import { FormBuilder } from "@angular/forms";
import { FormularioRegistro } from "./formulario";

describe('formularios', () => {
    let formulario:FormularioRegistro

    beforeEach(() => formulario = new FormularioRegistro(new FormBuilder()))

    it('debe crear un formulario con 2 campos, email y passwoed', () => {
        expect(formulario.form.contains('email')).toBeTruthy()
        expect(formulario.form.contains('password')).toBeTruthy()
    });
    it('el campo email deve ser obligatorio', () => {
        const control = formulario.form.get('email')
        control.setValue('')

        expect(control.valid).toBeFalsy()
    });
    
    it('el campo email deve recubir emails validos', () => {
        const control = formulario.form.get('email')
        control.setValue('jimy@gmail.com')

        expect(control.valid).toBeTruthy()
    });
});